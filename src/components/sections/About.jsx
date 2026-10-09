import { personal, about } from "../../config/siteData";
import ImagePlaceholder from "../common/ImagePlaceholder";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={`theme-light ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <header className={styles.head}>
          <p className="overline">About</p>
          <h2 id="about-heading" className={styles.headline}>
            {about.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < about.headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.subtitle}>{about.subtitle}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.text}>
            <div className={styles.bio}>
              {personal.bio.map((para, i) => (
                <p key={i} className={styles.para}>
                  {para}
                </p>
              ))}
            </div>

            <ul className={styles.highlights}>
              {about.highlights.map((item, i) => (
                <li key={i} className={styles.highlight}>
                  <span className="number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.image}>
            <ImagePlaceholder
              src={personal.aboutImage}
              alt=""
              fallback="[OPTIONAL_ABOUT_IMAGE_HERE]"
              aspect="4 / 3"
              className={styles.aboutImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
