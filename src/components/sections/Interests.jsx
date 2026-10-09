import { interests } from "../../config/siteData";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section
      id="interests"
      className={`theme-light ${styles.interests}`}
      aria-labelledby="interests-heading"
    >
      <div className="container">
        <header className={styles.head}>
          <p className="overline">Focus</p>
          <h2 id="interests-heading" className={styles.heading}>
            What drives my work
          </h2>
        </header>

        <ul className={styles.list}>
          {interests.map((item, i) => (
            <li key={item.title} className={styles.item}>
              <span className="number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.itemText}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
