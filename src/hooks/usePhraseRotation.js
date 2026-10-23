import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * One finite cycle through a list of short phrases: type, hold, delete, next.
 * The last phrase is held, then `done` flips so the caller can settle on the
 * static final line. Nothing loops forever and nothing re-renders per
 * character — the phrase text is written straight to a DOM node.
 *
 * @param {string[]} phrases - stable array of phrases.
 * @param {object}   options
 * @param {boolean}  options.active     - start when true.
 * @param {number}   options.typeSpeed  - ms per character while typing.
 * @param {number}   options.deleteSpeed- ms per character while deleting.
 * @param {number}   options.hold       - pause with a full phrase on screen.
 * @param {number}   options.gap        - pause on the empty line between phrases.
 */
export default function usePhraseRotation(
  phrases,
  {
    active = true,
    typeSpeed = 42,
    deleteSpeed = 22,
    hold = 950,
    gap = 220,
    startDelay = 120,
  } = {}
) {
  const nodeRef = useRef(null);
  const [done, setDone] = useState(() => prefersReduced());

  useEffect(() => {
    if (!active) return;

    const node = nodeRef.current;
    if (!node) return;

    if (prefersReduced()) {
      setDone(true);
      return;
    }

    let timer = 0;
    let alive = true;
    let index = 0;
    let char = 0;
    let deleting = false;

    node.textContent = "";

    const tick = () => {
      if (!alive) return;

      const phrase = phrases[index];

      if (!deleting) {
        char += 1;
        node.textContent = phrase.slice(0, char);

        if (char >= phrase.length) {
          // The final phrase resolves into the static tagline instead of
          // deleting itself again.
          if (index === phrases.length - 1) {
            timer = window.setTimeout(() => {
              if (alive) setDone(true);
            }, hold);
            return;
          }
          deleting = true;
          timer = window.setTimeout(tick, hold);
          return;
        }

        timer = window.setTimeout(
          tick,
          typeSpeed + (phrase[char] === " " ? 26 : 0)
        );
        return;
      }

      char -= 1;
      node.textContent = phrase.slice(0, char);

      if (char <= 0) {
        deleting = false;
        index += 1;
        timer = window.setTimeout(tick, gap);
        return;
      }

      timer = window.setTimeout(tick, deleteSpeed);
    };

    timer = window.setTimeout(tick, startDelay);

    return () => {
      alive = false;
      window.clearTimeout(timer);
      node.textContent = "";
    };
  }, [active, phrases, typeSpeed, deleteSpeed, hold, gap, startDelay]);

  return { nodeRef, done };
}
