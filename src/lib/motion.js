/*
 * Motion preference.
 *
 * The opening animation is part of the design, so it runs for every visitor
 * by default — including machines that report `prefers-reduced-motion:
 * reduce`. Windows with "animation effects" switched off reports exactly
 * that, and previously left the whole page looking static.
 *
 * A visitor who wants stillness can turn motion off from the hero. The choice
 * is remembered in localStorage and applied before React mounts, so the page
 * renders in its final, fully readable state with nothing moving.
 */

const KEY = "portfolio:motion";

/** Motion is on unless this visitor explicitly turned it off. */
export function motionEnabled() {
  try {
    return window.localStorage.getItem(KEY) !== "off";
  } catch {
    return true;
  }
}

/** True when motion must be skipped. */
export function motionsOff() {
  return !motionEnabled();
}

/** Persist the choice and reload so every hook starts from the same state. */
export function setMotionEnabled(on) {
  try {
    window.localStorage.setItem(KEY, on ? "on" : "off");
  } catch {
    /* Storage can be unavailable in private modes; the reload still applies. */
  }
  window.location.reload();
}
