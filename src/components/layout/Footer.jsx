import { personal, contact } from "../../config/siteData";
import { GithubIcon, LinkedInIcon, EmailIcon } from "../common/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "GitHub", href: contact.github, Icon: GithubIcon, external: true },
    { label: "LinkedIn", href: contact.linkedin, Icon: LinkedInIcon, external: true },
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      Icon: EmailIcon,
      external: false,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand} data-reveal>
          <span className={styles.mark} aria-hidden="true">
            TA
          </span>
          <span className={styles.identity}>
            <span className={styles.name}>{personal.name}</span>
            <span className={styles.tagline}>
              Building and learning, one line at a time.
            </span>
          </span>
        </div>

        <nav
          aria-label="Social links"
          data-reveal
          style={{ animationDelay: "90ms" }}
        >
          <ul className={styles.socials}>
            {socialLinks.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.social}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`container ${styles.bottom}`}
        data-reveal
        style={{ animationDelay: "160ms" }}
      >
        <p className={styles.copy}>
          © {year} {personal.name}
        </p>
        <a href="#hero" className={styles.topLink}>
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
