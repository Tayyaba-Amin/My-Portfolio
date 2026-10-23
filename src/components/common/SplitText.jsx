import { useLayoutEffect, useRef, useState } from "react";
import styles from "./SplitText.module.css";

/**
 * Splits a phrase into masked words so each one can rise into view.
 *
 * `mode="words"` staggers every word. `mode="lines"` measures the rendered
 * words and gives all words on the same visual line one shared delay, so the
 * heading reveals row by row through the masks even when the text rewraps.
 *
 * The outer element receives `data-reveal="words"` from the caller; the shared
 * `[data-reveal].is-visible` class then drives every word with its own delay.
 * With `auto`, the words animate on load instead of waiting for the observer.
 */
export default function SplitText({
  as: Tag = "span",
  text,
  className = "",
  delay = 0,
  stagger = 55,
  mode = "words",
  lineStagger = 110,
  auto = false,
  ...rest
}) {
  const rootRef = useRef(null);
  const [lines, setLines] = useState(null);
  const words = text.split(/\s+/).filter(Boolean);

  useLayoutEffect(() => {
    if (mode !== "lines") return;
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    let dropped = false;

    const measure = () => {
      raf = 0;
      const nodes = root.querySelectorAll("[data-split-word]");
      const rows = [];
      let row = -1;
      let top = null;

      nodes.forEach((node, i) => {
        const next = Math.round(node.offsetTop);
        if (top === null || Math.abs(next - top) > 4) {
          row += 1;
          top = next;
        }
        rows[i] = row;
      });

      setLines((prev) =>
        prev && prev.length === rows.length && prev.every((value, i) => value === rows[i])
          ? prev
          : rows
      );
    };

    const schedule = () => {
      if (!dropped && !raf) raf = requestAnimationFrame(measure);
    };

    measure();

    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    // Late webfonts can change where the lines break.
    document.fonts?.ready.then(schedule);

    return () => {
      dropped = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [mode, text]);

  return (
    <Tag ref={rootRef} className={`${styles.root} ${className}`.trim()} {...rest}>
      {words.map((word, i) => {
        const line = mode === "lines" && lines ? lines[i] : i;
        const step = mode === "lines" ? lineStagger : stagger;

        return (
          <span className="split-word" key={`${word}-${i}`} data-split-word>
            <span
              className={`split-word-inner${auto ? " split-word-inner--auto" : ""}`}
              style={{ animationDelay: `${delay + line * step}ms` }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
