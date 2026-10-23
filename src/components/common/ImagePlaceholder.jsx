import { useEffect, useState } from "react";
import styles from "./ImagePlaceholder.module.css";

/**
 * Renders an image when available, or a styled fallback panel when the file
 * is missing. Never shows a broken-image icon.
 *
 * @param {object} props
 * @param {string}  props.src      - Path to the image file.
 * @param {string}  props.alt      - Alt text (accessibility).
 * @param {string}  props.fallback - Short label shown in the fallback panel.
 * @param {string}  [props.aspect] - CSS aspect-ratio value, e.g. "16 / 9", "4 / 5".
 * @param {string}  [props.className]
 * @param {boolean} [props.priority] - Eager-load above-the-fold images.
 */
export default function ImagePlaceholder({
  src,
  alt,
  fallback,
  aspect = "16 / 9",
  className = "",
  priority = false,
}) {
  const [errored, setErrored] = useState(false);
  const ratioStyle = { aspectRatio: aspect };

  // A new source deserves a fresh attempt.
  useEffect(() => {
    setErrored(false);
  }, [src]);

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
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
