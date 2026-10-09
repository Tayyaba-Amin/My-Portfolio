import { useState } from "react";
import styles from "./ImagePlaceholder.module.css";

/**
 * Renders an image when available, or a deliberately styled placeholder
 * when the file is missing. Never shows a broken-image icon.
 *
 * @param {object} props
 * @param {string}  props.src      - Path to the image file.
 * @param {string}  props.alt      - Alt text (accessibility).
 * @param {string}  props.fallback - Text shown in the placeholder.
 * @param {string}  [props.aspect] - CSS aspect-ratio value, e.g. "16 / 9", "3 / 4".
 * @param {string}  [props.className]
 */
export default function ImagePlaceholder({
  src,
  alt,
  fallback,
  aspect = "16 / 9",
  className = "",
}) {
  const [errored, setErrored] = useState(false);
  const ratioStyle = { aspectRatio: aspect };

  if (errored || !src) {
    return (
      <div
        className={`${styles.placeholder} ${className}`}
        style={ratioStyle}
        role="img"
        aria-label={alt || fallback}
      >
        <span className={styles.placeholderText}>{fallback}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.image} ${className}`}
      style={ratioStyle}
      onError={() => setErrored(true)}
      loading="lazy"
      decoding="async"
    />
  );
}
