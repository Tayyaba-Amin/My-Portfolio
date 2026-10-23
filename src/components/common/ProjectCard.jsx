import ImagePlaceholder from "./ImagePlaceholder";
import { GithubIcon, ExternalIcon, VideoIcon } from "./icons";
import usePointerTilt from "../../hooks/usePointerTilt";
import styles from "./ProjectCard.module.css";

/** Parse a URL that may arrive wrapped in markdown-style [label](url). */
function parseUrl(url) {
  if (!url) return null;
  const markdownMatch = url.match(/\[([^\]]+)\]\(([^)]+)\)/);
  return markdownMatch ? markdownMatch[2] : url;
}

/**
 * Project gallery card: real screenshot, factual summary, actual stack.
 *
 * @param {object} props
 * @param {object} props.project - project data from siteData
 * @param {number} props.index   - zero-based index for the running number
 */
export default function ProjectCard({ project, index }) {
  const {
    title,
    summary,
    tech,
    imagePath,
    category,
    builtFor,
    repoUrl,
    demoUrl,
    demoVideoUrl,
    note,
  } = project;

  const num = String(index + 1).padStart(2, "0");
  const liveUrl = parseUrl(demoUrl);
  const videoUrl = parseUrl(demoVideoUrl);
  /* Normalized pointer position only; the card owns its own tilt. */
  const cardRef = usePointerTilt(0);

  return (
    <article
      ref={cardRef}
      className={styles.card}
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 110}ms` }}
    >
      <div className={styles.media}>
        <ImagePlaceholder
          src={imagePath}
          alt={`${title} project screenshot`}
          fallback={title}
          aspect="3 / 2"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{category}</span>
          <span className={styles.num} aria-hidden="true">
            {num}
          </span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        {builtFor && (
          <p className={styles.builtFor} title={builtFor}>
            <span className={styles.builtDot} aria-hidden="true" />
            <span className={styles.builtText}>{builtFor}</span>
          </p>
        )}

        <p className={styles.summary}>{summary}</p>

        <ul className={styles.tech} aria-label={`${title} technologies`}>
          {tech.map((item) => (
            <li key={item} className={styles.chip}>
              {item}
            </li>
          ))}
        </ul>

        {note && (
          <p className={styles.note} title={note}>
            {note}
          </p>
        )}

        <div className={styles.actions}>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
              aria-label={`${title} GitHub repository`}
            >
              <GithubIcon />
              GitHub
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.action} ${styles.actionPrimary}`}
              aria-label={`${title} live demo`}
            >
              <ExternalIcon />
              Live Demo
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          )}
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
              aria-label={`${title} demo video`}
            >
              <VideoIcon />
              Video
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
