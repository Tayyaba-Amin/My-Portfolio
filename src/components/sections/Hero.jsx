import { personal, hero } from "../../config/siteData";
import ImagePlaceholder from "../common/ImagePlaceholder";
import { ArrowIcon, LocationIcon } from "../common/icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.meta}>
        <span className={styles.indexNumber} aria-hidden="true">
          {hero.indexLabel}
        </span>
        <span className={styles.caption}>
          <span className={styles.captionMain}>
            Full-stack
            <span className={styles.dot} aria-hidden="true" />
            AI
            <span className={styles.dot} aria-hidden="true" />
            Hackathons
          </span>
          <span className={styles.captionLocation}>
            <LocationIcon />
            {personal.location}
          </span>
        </span>
      </div>

      <div className={styles.grid}>
        <div className={styles.text}>
          <h1 className={styles.headline}>
            {hero.headline.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
            <br />
            <span className={styles.subheadline}>{hero.subheadline}</span>
          </h1>

          <p className={styles.intro}>{hero.intro}</p>

          <div className={styles.links}>
            <a href="#projects" className="link-arrow">
              Explore my work
              <ArrowIcon />
            </a>
            <a href="#contact" className="link-arrow">
              Get in touch
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className={styles.portrait}>
          <div className={styles.frame}>
            <ImagePlaceholder
              src={personal.portraitImage}
              alt={personal.name}
              fallback="[UPLOAD_YOUR_PERSONAL_PHOTO_HERE]"
              aspect="3 / 4"
              className={styles.portraitImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
