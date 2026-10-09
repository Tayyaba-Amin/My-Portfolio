import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { GithubIcon, ExternalIcon, VideoIcon } from "./icons";
import styles from "./ProjectCard.module.css";

/**
 * Editorial project archive entry.
 *
 * @param {object} props
 * @param {object} props.project - project data from siteData
 * @param {number} props.index   - zero-based index for numbering (01–06)
 */
export default function ProjectCard({ project, index }) {
  const {
    title,
    description,
    tech,
    imagePath,
    imagePlaceholder,
    repoUrl,
    demoUrl,
    demoVideoUrl,
    note,
  } = project;
  const num = String(index + 1).padStart(2, "0");
  const side = index % 2 === 0 ? "left" : "right";

  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const descriptionRef = useRef(null);

  // Parse demoUrl in case it contains markdown-style [url](url)
  const parseUrl = (url) => {
    if (!url) return null;
    const markdownMatch = url.match(/\[([^\]]+)\]\(([^)]+)\)/);
    return markdownMatch ? markdownMatch[2] : url;
  };

  const parsedDemoUrl = parseUrl(demoUrl);
  const parsedDemoVideoUrl = parseUrl(demoVideoUrl);

  const hasDemo = Boolean(parsedDemoUrl);
  const hasVideo = Boolean(parsedDemoVideoUrl);
  const hasRepo = Boolean(repoUrl);
  const hasNote = Boolean(note && note.trim());

  const checkOverflow = () => {
    if (!descriptionRef.current) return;
    const el = descriptionRef.current;
    // Temporarily remove clamp to measure natural height
    el.style.webkitLineClamp = "unset";
    el.style.overflow = "visible";
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * 2;
    const hasOverflow = el.scrollHeight > maxHeight;
    el.style.webkitLineClamp = "2";
    el.style.overflow = "hidden";
    setShowToggle(hasOverflow);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [description]);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article className={styles.entry}>
      <div className={styles.head}>
        <span className="number" aria-hidden="true">
          {num}
        </span>
        <span className={styles.badge}>{title} </span>
      </div>

      <div className={`${styles.body} ${styles[side]}`}>
        <div className={styles.media}>
          <ImagePlaceholder
            src={imagePath}
            alt={altText(title)}
            fallback={[imagePlaceholder]}
            aspect="16 / 9"
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.descriptionWrapper}>
            <p
              ref={descriptionRef}
              className={`${styles.description} ${isExpanded ? styles.expanded : styles.collapsed}`}
            >
              {description}
            </p>
            {showToggle && (
              <button
                type="button"
                className={styles.expandButton}
                onClick={handleToggle}
                aria-expanded={isExpanded}
                aria-controls={`${title}-description`}
                id={`${title}-toggle`}
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
          <p className="tech-list">
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>

          {hasNote && (
            <p className={styles.note}>{note}</p>
          )}

          <div className={styles.links}>
            {hasRepo && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${title} GitHub repository`}
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>
            )}
            {hasDemo && (
              <a
                href={parsedDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${title} live demo`}
              >
                <ExternalIcon />
                <span>Live Demo</span>
              </a>
            )}
            {hasVideo && (
              <a
                href={parsedDemoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`${title} demo video`}
              >
                <VideoIcon />
                <span>Watch Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function altText(title) {
  return `${title} project screenshot`;
}
