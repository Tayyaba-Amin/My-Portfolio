import { projects } from "../../config/siteData";
import ProjectCard from "../common/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`section ${styles.projects}`}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <header className={styles.header} data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading" className="section-title">
            Projects I&apos;ve built
          </h2>
          <p className={`section-lead ${styles.lead}`}>
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
