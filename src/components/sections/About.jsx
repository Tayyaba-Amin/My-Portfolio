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
            mode="lines"
            delay={60}
            lineStagger={150}
          />
          <span
            className={styles.headRule}
            data-reveal="rule"
            style={{ "--reveal-delay": "200ms" }}
            aria-hidden="true"
          />
        </header>

        <div
          className={styles.body}
          data-reveal="slide"
          style={{ "--reveal-delay": "180ms" }}
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
            style={{ "--reveal-delay": "320ms" }}
          >
            Focus areas
          </p>
          <ul className={styles.focusList}>
            {about.focusAreas.map((item, i) => (
              <li
                key={item}
                className={styles.focusItem}
                data-reveal
                style={{ "--reveal-delay": `${380 + i * 80}ms` }}
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
