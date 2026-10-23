import { personal, about } from "../../config/siteData";
import SplitText from "../common/SplitText";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={`section ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <p className="eyebrow" data-reveal>
            About me
          </p>
          <SplitText
            as="h2"
            id="about-heading"
            className="section-title"
            data-reveal="words"
            text={about.headline}
            delay={60}
            stagger={55}
          />
        </header>

        <div
          className={styles.body}
          data-reveal
          style={{ animationDelay: "150ms" }}
        >
          {personal.bio.map((para) => (
            <p key={para} className={styles.para}>
              {para}
            </p>
          ))}
        </div>

        <div className={styles.focus}>
          <p
            className={styles.focusLabel}
            data-reveal
            style={{ animationDelay: "210ms" }}
          >
            Focus areas
          </p>
          <ul className={styles.focusList}>
            {about.focusAreas.map((item, i) => (
              <li
                key={item}
                className={styles.focusItem}
                data-reveal
                style={{ animationDelay: `${260 + i * 60}ms` }}
              >
                <span className={styles.dot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
