import { useEffect, useRef } from "react";
import { motionsOff } from "../lib/motion";

/**
 * Writes pointer intent onto the returned element as CSS custom properties:
 *
 *   --tilt-x / --tilt-y   pixel offset, scaled by `strength`
 *   --tilt-nx / --tilt-ny normalized -1…1 position inside the element
 *   --spot-x / --spot-y   pointer position in %, eased over time
 *
 * The light position is interpolated on a requestAnimationFrame loop so it
 * glides after the pointer instead of snapping to it. Fine pointers only:
 * touch devices and visitors who prefer reduced motion get a static layout.
 *
 * @param {number} strength - maximum pixel offset for --tilt-x / --tilt-y.
 */
export default function usePointerTilt(strength = 7) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches || motionsOff()) return;

    /* Resting position of the hero light, matching the CSS fallback. */
    const HOME_X = 68;
    const HOME_Y = 32;

    let frame = 0;
    let tiltX = 0;
    let tiltY = 0;
    let normX = 0;
    let normY = 0;
    let targetX = HOME_X;
    let targetY = HOME_Y;
    let spotX = HOME_X;
    let spotY = HOME_Y;

    const paint = () => {
      el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}px`);
      el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}px`);
      el.style.setProperty("--tilt-nx", normX.toFixed(3));
      el.style.setProperty("--tilt-ny", normY.toFixed(3));
      el.style.setProperty("--spot-x", `${spotX.toFixed(2)}%`);
      el.style.setProperty("--spot-y", `${spotY.toFixed(2)}%`);
    };

    const tick = () => {
      frame = 0;
      const dx = targetX - spotX;
      const dy = targetY - spotY;

      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
        spotX = targetX;
        spotY = targetY;
      } else {
        spotX += dx * 0.12;
        spotY += dy * 0.12;
        frame = requestAnimationFrame(tick);
      }

      paint();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      normX = Math.max(-1, Math.min(1, x * 2 - 1));
      normY = Math.max(-1, Math.min(1, y * 2 - 1));
      tiltX = normX * strength;
      tiltY = normY * strength * 0.7;
      targetX = Math.max(0, Math.min(100, x * 100));
      targetY = Math.max(0, Math.min(100, y * 100));
      schedule();
    };

    const onLeave = () => {
      normX = 0;
      normY = 0;
      tiltX = 0;
      tiltY = 0;
      targetX = HOME_X;
      targetY = HOME_Y;
      schedule();
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.removeProperty("--tilt-x");
      el.style.removeProperty("--tilt-y");
      el.style.removeProperty("--tilt-nx");
      el.style.removeProperty("--tilt-ny");
      el.style.removeProperty("--spot-x");
      el.style.removeProperty("--spot-y");
    };
  }, [strength]);

  return ref;
}
