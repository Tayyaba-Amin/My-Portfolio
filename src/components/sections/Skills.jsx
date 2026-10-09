import { skills } from "../../config/siteData";
import styles from "./Skills.module.css";

const skillGroups = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Currently Learning", items: skills.learning },
  { label: "Interests", items: skills.interests },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <header className={styles.head}>
          <p className="overline">Knowledge</p>
          <h2 id="skills-heading" className={styles.heading}>
            Tools and interests
          </h2>
        </header>

        <div className={styles.groups}>
          {skillGroups.map(({ label, items }, i) => (
            <div key={label} className={styles.group}>
              <div className={styles.groupHead}>
                <span className="number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.groupTitle}>{label}</span>
              </div>
              <div className={styles.tech}>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
