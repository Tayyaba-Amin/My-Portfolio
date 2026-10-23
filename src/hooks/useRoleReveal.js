import { useEffect, useState } from "react";
import { motionsOff } from "../lib/motion";

/**
 * Steps through the roles once, then hands control back to the static tagline.
 *
 * The hero already types its heading, so the roles use a different language:
 * a masked vertical roll. Each index becomes a transform on the track; the
 * viewport clips the lines that are leaving and arriving. Nothing loops, and
 * reduced-motion visitors never see the track at all.
 *
 * @param {number} count - number of roles.
 * @param {object} options
 * @param {boolean} options.active    - start once the name has finished.
 * @param {number}  options.startDelay- pause before the first transition.
 * @param {number}  options.hold      - time each full role stays still.
 * @param {number}  options.step      - duration of one roll (must match CSS).
 */
export default function useRoleReveal(
  count,
  { active = true, startDelay = 140, hold = 380, step = 480 } = {}
) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(() => motionsOff());

  useEffect(() => {
    if (!active) {
      setIndex(0);
      setDone(false);
      return;
    }

    if (motionsOff()) {
      setDone(true);
      return;
    }

    /* Guard against a caller passing a list instead of a length: without
       this the track would keep rolling past the last line forever. */
    const total = Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
    if (total < 2) {
      setIndex(0);
      setDone(true);
      return;
    }

    let alive = true;
    let role = 0;
    let timer = 0;

    setIndex(0);
    setDone(false);

    const advance = () => {
      if (!alive) return;

      if (role >= total - 1) {
        setDone(true);
        return;
      }

      role += 1;
      setIndex(role);
      timer = window.setTimeout(advance, step + hold);
    };

    timer = window.setTimeout(advance, startDelay + hold);

    return () => {
      alive = false;
      window.clearTimeout(timer);
    };
  }, [active, count, startDelay, hold, step]);

  return { index, done };
}
