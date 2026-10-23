import { Fragment, useState } from "react";
import { personal, hero } from "../../config/siteData";
import ImagePlaceholder from "../common/ImagePlaceholder";
import usePointerTilt from "../../hooks/usePointerTilt";
import useTypewriter from "../../hooks/useTypewriter";
import useRoleReveal from "../../hooks/useRoleReveal";
import {
  ArrowIcon,
  EmailIcon,
  LocationIcon,
  ReplayIcon,
} from "../common/icons";
import styles from "./Hero.module.css";

const nameParts = personal.name.split(" ");
const surname = nameParts.pop();
const givenName = nameParts.join(" ");

const [taglineLead, taglineRest] = hero.tagline
  .split("|")
  .map((part) => part.trim());

/* "Hi, I'm " + "Tayyaba " + "Amin" — typed as three styled segments. */
const NAME_SEGMENTS = [`${hero.greeting} `, `${givenName} `, surname];

/* The roles already stated in the tagline, used for the opening rotation. */
const ROLES = [
  taglineLead,
  ...taglineRest.split("&").map((role) => role.trim()),
].filter(Boolean);

function FinalTagline() {
  return (
    <>
      <span>{taglineLead}</span>
      {taglineRest && (
        <>
          <span className={styles.pipe} aria-hidden="true">
            |
          </span>
          <span>{taglineRest}</span>
        </>
      )}
    </>
  );
}

/**
 * Everything that belongs to the timed opening. Hero mounts a fresh instance
 * when Replay intro is pressed, so both hooks restart from zero without a
 * page reload.
 */
function HeroCopy() {
  const name = useTypewriter(NAME_SEGMENTS, {
    speed: 46,
    startDelay: 380,
    segmentGap: 60,
    hold: 160,
  });

  /* A masked vertical roll, deliberately different from the typing. */
  const role = useRoleReveal(ROLES.length, {
    active: name.state === "done",
    startDelay: 120,
    hold: 160,
    step: 360,
  });

  return (
    <>
      <p className={styles.badge}>
        <LocationIcon />
        {personal.location}
      </p>

      <h1 id="hero-heading" className={styles.title}>
        <span className="sr-only">{`${hero.greeting} ${personal.name}`}</span>

        <span className={styles.typeStack} aria-hidden="true">
          {/* Invisible final text reserves the exact layout height. */}
          <span className={styles.typeSizer}>
            <span className={styles.greeting}>{hero.greeting}</span>
            <span className={styles.name}>
              {givenName}{" "}
              <span className="text-gradient">{surname}</span>
            </span>
          </span>

          <span
            ref={name.rootRef}
            className={`type-live ${styles.typeLive}`}
            data-state={name.state}
          >
            <span className={`type-seg ${styles.greeting}`}>
              <span className="type-chunk" data-type-chunk>
                {NAME_SEGMENTS[0]}
              </span>
              <span className="type-caret" aria-hidden="true" />
            </span>
            <span className={`type-seg ${styles.name}`}>
              <span className="type-chunk" data-type-chunk>
                {NAME_SEGMENTS[1]}
              </span>
              <span className="type-caret" aria-hidden="true" />
              <span className={`type-seg ${styles.surname}`}>
                <span className="type-chunk" data-type-chunk>
                  {surname}
                </span>
                <span className="type-caret" aria-hidden="true" />
              </span>
            </span>
          </span>
        </span>
      </h1>

      <div className={styles.tagWrap}>
        <p className="sr-only">{hero.tagline}</p>

        {/* Final line, invisible, keeps the rotating slot from shifting. */}
        <p className={`${styles.tagline} ${styles.tagSizer}`} aria-hidden="true">
          <FinalTagline />
        </p>

        <p
          className={`${styles.tagline} ${styles.tagLive}`}
          aria-hidden="true"
          data-live={name.state === "done" || undefined}
          data-settled={role.done || undefined}
        >
          {role.done ? (
            <FinalTagline />
          ) : (
            <span className={styles.roleViewport}>
              <span
                className={styles.roleTrack}
                style={{ "--role-index": role.index }}
              >
                {ROLES.map((phrase, i) => (
                  <span
                    key={phrase}
                    className={styles.roleLine}
                    data-accent={i}
                  >
                    {phrase}
                  </span>
                ))}
              </span>
            </span>
          )}
        </p>
      </div>

      <p className={styles.intro}>{hero.intro}</p>

      <div className={styles.actions}>
        <a href="#projects" className="btn btn-primary">
          View Projects
          <ArrowIcon />
        </a>
        <a href="#contact" className="btn btn-ghost">
          <EmailIcon />
          Contact Me
        </a>
      </div>
    </>
  );
}

export default function Hero() {
  const sectionRef = usePointerTilt(6);
  const [runId, setRunId] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glowCoral} />
        <div className={styles.glowLilac} />
        <div className={styles.spotlight} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <HeroCopy key={runId} />

          <div className={styles.replayRow}>
            <button
              type="button"
              className={styles.replayBtn}
              onClick={() => setRunId((id) => id + 1)}
            >
              <ReplayIcon />
              Replay intro
            </button>
          </div>
        </div>

        <div className={styles.portraitColumn} key={`portrait-${runId}`}>
          <div className={styles.portrait}>
            <div className={styles.stage}>
              {/* Blurred light hugging the ring; purely decorative. */}
              <span className={styles.halo} aria-hidden="true" />

              <span className={styles.disc} aria-hidden="true" />

              {/* Open coral ring: the stroke draws itself on every intro. */}
              <svg
                className={styles.ring}
                viewBox="0 0 200 200"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ff9a86" />
                    <stop offset="0.55" stopColor="#ff6b81" />
                    <stop offset="1" stopColor="#ff5f79" />
                  </linearGradient>
                </defs>
                <path
                  className={styles.ringPath}
                  d="M28 39.6 A94 94 0 1 1 93.4 193.8"
                  fill="none"
                  stroke="url(#heroRing)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>

              {/* The portrait lives inside the disc, so the circle crops it. */}
              <div className={styles.frame}>
                <div className={styles.portraitTilt}>
                  <div className={styles.cutoutReveal}>
                    <ImagePlaceholder
                      src={personal.portraitCutout}
                      alt={`Portrait of ${personal.name}`}
                      fallback={personal.name}
                      aspect="auto"
                      priority
                      className={styles.cutout}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              {hero.info.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className={styles.infoDivider} aria-hidden="true" />
                  )}
                  <div className={styles.infoCell}>
                    <span className={styles.infoItem}>
                      <span className={styles.infoLabel}>{item.label}</span>
                      <span className={styles.infoValue}>{item.value}</span>
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
