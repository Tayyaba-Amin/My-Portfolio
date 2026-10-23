import { personal, hero } from "../../config/siteData";
import ImagePlaceholder from "../common/ImagePlaceholder";
import { ArrowIcon, EmailIcon, LocationIcon } from "../common/icons";
import styles from "./Hero.module.css";

const nameParts = personal.name.split(" ");
const surname = nameParts.pop();
const givenName = nameParts.join(" ");

const [taglineLead, taglineRest] = hero.tagline
  .split("|")
  .map((part) => part.trim());

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glowViolet} />
        <div className={styles.glowCyan} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.badge} style={{ animationDelay: "0ms" }}>
            <LocationIcon />
            {personal.location}
          </p>

          <h1
            id="hero-heading"
            className={styles.title}
            style={{ animationDelay: "90ms" }}
          >
            <span className={styles.greeting}>{hero.greeting}</span>
            <span className={styles.name}>
              {givenName}{" "}
              <span className="text-gradient">{surname}</span>
            </span>
          </h1>

          <p className={styles.tagline} style={{ animationDelay: "170ms" }}>
            <span>{taglineLead}</span>
            {taglineRest && (
              <>
                <span className={styles.pipe} aria-hidden="true">
                  |
                </span>
                <span>{taglineRest}</span>
              </>
            )}
          </p>

          <p className={styles.intro} style={{ animationDelay: "250ms" }}>
            {hero.intro}
          </p>

          <div className={styles.actions} style={{ animationDelay: "330ms" }}>
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
