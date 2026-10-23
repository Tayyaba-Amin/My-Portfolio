import { interests } from "../../config/siteData";
import SplitText from "../common/SplitText";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section
      id="interests"
      className={`section ${styles.interests}`}
      aria-labelledby="interests-heading"
    >
      <div className="container">
        <header className={styles.head}>
          <p className="eyebrow" data-reveal>
            Focus
          </p>
          <SplitText
            as="h2"
            id="interests-heading"
            className="section-title"
            data-reveal="words"
            text="What drives my work"
            delay={60}
            stagger={55}
          />
        </header>

        <ul className={styles.grid}>
          {interests.map((item, i) => (
            <li
              key={item.title}
              className={styles.item}
              data-reveal
              style={{ animationDelay: `${120 + i * 70}ms` }}
            >
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
