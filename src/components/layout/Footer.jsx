import { personal } from "../../config/siteData";
import { motionEnabled, setMotionEnabled } from "../../lib/motion";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const animated = motionEnabled();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.bar}`}>
        <p className={styles.copy} data-reveal>
          © {year} {personal.name}
        </p>

        <div
          className={styles.controls}
          data-reveal
          style={{ "--reveal-delay": "80ms" }}
        >
          {/* Quiet motion opt-out, kept away from the hero controls. */}
          <button
            type="button"
            className={styles.motionToggle}
            onClick={() => setMotionEnabled(!animated)}
          >
            {animated ? "Reduce motion" : "Enable motion"}
          </button>

          <span className={styles.divider} aria-hidden="true" />

          <a href="#hero" className={styles.topLink}>
            Back to top
            <span className={styles.arrow} aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
