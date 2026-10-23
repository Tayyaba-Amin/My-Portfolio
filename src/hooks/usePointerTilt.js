import { useEffect, useRef } from "react";

/**
 * Writes a very small pointer offset onto the returned element as
 * `--tilt-x` / `--tilt-y` custom properties.
 *
 * Only active for fine pointers without reduced-motion, so touch devices and
 * motion-sensitive visitors get a completely static layout.
 *
 * @param {number} strength - maximum offset in pixels.
 */
export default function usePointerTilt(strength = 7) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty("--tilt-x", `${nextX.toFixed(2)}px`);
      el.style.setProperty("--tilt-y", `${nextY.toFixed(2)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      nextX = Math.max(-1, Math.min(1, x)) * strength;
      nextY = Math.max(-1, Math.min(1, y)) * strength * 0.7;
      schedule();
    };

    const reset = () => {
      nextX = 0;
      nextY = 0;
      schedule();
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      el.style.removeProperty("--tilt-x");
      el.style.removeProperty("--tilt-y");
    };
  }, [strength]);

  return ref;
}
