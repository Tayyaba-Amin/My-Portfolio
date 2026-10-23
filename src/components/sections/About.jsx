import { personal, about } from "../../config/siteData";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={`section ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <div className={`container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <p className="eyebrow">About me</p>
          <h2 id="about-heading" className="section-title">
            {about.headline}
          </h2>
        </header>

        <div
          className={styles.body}
          data-reveal
          style={{ animationDelay: "90ms" }}
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
            style={{ animationDelay: "160ms" }}
          >
            Focus areas
          </p>
          <ul className={styles.focusList}>
            {about.focusAreas.map((item, i) => (
              <li
                key={item}
                className={styles.focusItem}
                data-reveal
                style={{ animationDelay: `${220 + i * 70}ms` }}
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
