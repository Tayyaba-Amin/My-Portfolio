import { personal, hero } from "../../config/siteData";
import ImagePlaceholder from "../common/ImagePlaceholder";
import usePointerTilt from "../../hooks/usePointerTilt";
import useTypewriter from "../../hooks/useTypewriter";
import usePhraseRotation from "../../hooks/usePhraseRotation";
import { ArrowIcon, EmailIcon, LocationIcon } from "../common/icons";
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

export default function Hero() {
  const sectionRef = usePointerTilt(6);

  const name = useTypewriter(NAME_SEGMENTS, {
    speed: 72,
    startDelay: 260,
    segmentGap: 130,
    hold: 460,
  });

  // The tagline starts typing the moment the name settles.
  const tagline = usePhraseRotation(ROLES, {
    active: name.state === "done",
    typeSpeed: 42,
    deleteSpeed: 22,
    hold: 800,
    gap: 200,
  });

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
              data-settled={tagline.done || undefined}
            >
              {tagline.done ? (
                <FinalTagline />
              ) : (
                <span className={styles.tagRun}>
                  <span className="type-chunk" ref={tagline.nodeRef} />
                  {name.state === "done" && (
                    <span className={styles.tagCaret} />
                  )}
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
        </div>

        <div className={styles.portraitColumn}>
          <div className={styles.portrait}>
            <div className={styles.portraitGlow} aria-hidden="true" />
            <div className={styles.portraitTilt}>
              <div className={styles.frame}>
                <ImagePlaceholder
                  src={personal.portraitImage}
                  alt={`Portrait of ${personal.name}`}
                  fallback={personal.name}
                  aspect="4 / 5"
                  priority
                  className={styles.portraitImg}
                />
              </div>
            </div>

            <div className={styles.infoCard}>
              {hero.info.map((item, i) => (
                <div key={item.label} className={styles.infoCell}>
                  {i > 0 && (
                    <span className={styles.infoDivider} aria-hidden="true" />
                  )}
                  <span className={styles.infoItem}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
