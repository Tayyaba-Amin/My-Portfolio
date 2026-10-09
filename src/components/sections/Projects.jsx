import { projects } from "../../config/siteData";
import ProjectCard from "../common/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`theme-light ${styles.projects}`}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <p className="overline">Archive</p>
          <h2 id="projects-heading" className={styles.heading}>
            Selected work
          </h2>
          <p className={styles.subhead}>
            Six applications I've built — from AI-powered tools to full-stack
            marketplaces. Each is a real project, linked to its repository.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
