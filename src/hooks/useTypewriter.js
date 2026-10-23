import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Types a sequence of text segments into `[data-type-chunk]` nodes.
 *
 * Characters are written with `textContent`, so the typing itself never
 * triggers a React render — only the three state changes (ready → typing →
 * done) do. The full text ships in the markup, which means:
 *   - screen readers read the complete name immediately,
 *   - reduced-motion visitors see it without any animation,
 *   - nothing is ever blank if the effect cannot run.
 *
 * @param {string[]} texts   - segments typed in order.
 * @param {object}   options
 * @param {number}   options.speed       - ms per character.
 * @param {number}   options.startDelay  - ms before the first character.
 * @param {number}   options.segmentGap  - pause between segments.
 * @param {number}   options.hold        - pause after the final character.
 * @param {Function} options.onDone      - fired once the hold has elapsed.
 */
export default function useTypewriter(
  texts,
  { speed = 70, startDelay = 250, segmentGap = 140, hold = 450, onDone } = {}
) {
  const rootRef = useRef(null);
  const [state, setState] = useState(() =>
    prefersReduced() ? "done" : "ready"
  );
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll("[data-type-chunk]"));
    if (!nodes.length) return;

    if (prefersReduced()) {
      setState("done");
      return;
    }

    // Blank the visible copy only once typing is certain to run.
    nodes.forEach((node) => {
      node.textContent = "";
    });
    setState("typing");

    let segment = 0;
    let char = 0;
    let timer = 0;
    let alive = true;

    const finish = () => {
      if (!alive) return;
      setState("done");
      doneRef.current?.();
    };

    const markTyping = (index) => {
      nodes.forEach((node, i) => {
        const el = node.parentElement;
        if (!el) return;
        if (i === index) el.dataset.typing = "true";
        else delete el.dataset.typing;
      });
    };

    const step = () => {
      if (!alive) return;

      const text = texts[segment];
      const node = nodes[segment];
      char += 1;
      node.textContent = text.slice(0, char);

      if (char >= text.length) {
        const el = node.parentElement;
        if (el) delete el.dataset.typing;

        segment += 1;
        char = 0;

        if (segment >= texts.length) {
          timer = window.setTimeout(finish, hold);
          return;
        }

        markTyping(segment);
        timer = window.setTimeout(step, segmentGap);
        return;
      }

      // A touch more air around spaces keeps the rhythm from feeling robotic.
      const next = text[char];
      const delay = speed + (next === " " ? 42 : 0);
      timer = window.setTimeout(step, delay);
    };

    markTyping(0);
    timer = window.setTimeout(step, startDelay);

    return () => {
      alive = false;
      window.clearTimeout(timer);
      nodes.forEach((node, i) => {
        const el = node.parentElement;
        if (el) delete el.dataset.typing;
        // Restore the full copy so a remount can never leave a half-typed name.
        node.textContent = texts[i] ?? "";
      });
    };
  }, [texts, speed, startDelay, segmentGap, hold]);

  return { rootRef, state };
}
