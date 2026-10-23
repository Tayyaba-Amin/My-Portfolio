import { skills } from "../../config/siteData";
import SplitText from "../common/SplitText";
import styles from "./Skills.module.css";

const groups = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Database", items: skills.database },
  { label: "Tools", items: skills.tools },
  { label: "AI & APIs", items: skills.ai },
  { label: "Currently Learning", items: skills.learning, accent: true },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={`section ${styles.skills}`}
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <header className={styles.head}>
          <p className="eyebrow" data-reveal>
            Toolkit
          </p>
          <SplitText
            as="h2"
            id="skills-heading"
            className="section-title"
            data-reveal="words"
            text="Skills & tools"
            delay={60}
            stagger={55}
          />
          <p
            className="section-lead"
            data-reveal
            style={{ "--reveal-delay": "230ms" }}
          >
            The technologies behind my projects, plus what I&apos;m learning
            next.
          </p>
        </header>

        <div className={styles.grid}>
          {groups.map((group, i) => (
            <div
              key={group.label}
              className={`${styles.group} ${group.accent ? styles.accent : ""}`}
              data-reveal="panel"
              style={{ "--reveal-delay": `${i * 110}ms` }}
            >
              <div className={styles.groupHead}>
                <span className={styles.marker} aria-hidden="true" />
                <h3 className={styles.groupTitle}>{group.label}</h3>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={styles.foundations}
          data-reveal
          style={{ "--reveal-delay": `${groups.length * 110}ms` }}
        >
          <span className={styles.foundationsLabel}>Foundations</span>
          <ul className={styles.foundationsList}>
            {skills.foundations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
