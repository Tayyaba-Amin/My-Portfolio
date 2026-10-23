import { projects } from "../../config/siteData";
import ProjectCard from "../common/ProjectCard";
import SplitText from "../common/SplitText";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`section ${styles.projects}`}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow" data-reveal>
            Selected work
          </p>
          <SplitText
            as="h2"
            id="projects-heading"
            className="section-title"
            data-reveal="words"
            text="Projects I've built"
            delay={60}
            stagger={55}
          />
          <p
            className={`section-lead ${styles.lead}`}
            data-reveal
            style={{ "--reveal-delay": "230ms" }}
          >
            Six applications I&apos;ve built — from AI-powered tools to
            full-stack marketplaces. Each is a real project, linked to its
            repository.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
