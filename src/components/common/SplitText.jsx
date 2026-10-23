import styles from "./SplitText.module.css";

/**
 * Splits a phrase into masked words so each one can rise into view.
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
  auto = false,
  ...rest
}) {
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag className={`${styles.root} ${className}`.trim()} {...rest}>
      {words.map((word, i) => (
        <span className="split-word" key={`${word}-${i}`}>
          <span
            className={`split-word-inner${auto ? " split-word-inner--auto" : ""}`}
            style={{ animationDelay: `${delay + i * stagger}ms` }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
