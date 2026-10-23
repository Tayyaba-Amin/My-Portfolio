import { interests } from "../../config/siteData";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section
      id="interests"
      className={`section ${styles.interests}`}
      aria-labelledby="interests-heading"
    >
      <div className="container">
        <header className={styles.head} data-reveal>
          <p className="eyebrow">Focus</p>
          <h2 id="interests-heading" className="section-title">
            What drives my work
          </h2>
        </header>

        <ul className={styles.grid}>
          {interests.map((item, i) => (
            <li key={item.title} className={styles.item} data-reveal>
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
