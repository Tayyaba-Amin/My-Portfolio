import { personal, contact } from "../../config/siteData";
import { GithubIcon, LinkedInIcon, EmailIcon } from "../common/icons";
import styles from "./Footer.module.css";

function isConfigured(value) {
  return Boolean(value && !value.includes("["));
}

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: contact.github,
      icon: GithubIcon,
      configured: isConfigured(contact.github),
    },
    {
      label: "LinkedIn",
      href: contact.linkedin,
      icon: LinkedInIcon,
      configured: isConfigured(contact.linkedin),
    },
    {
      label: "Email",
      href: contact.email ? `mailto:${contact.email}` : "",
      icon: EmailIcon,
      configured: isConfigured(contact.email),
    },
  ];

  return (
    <footer className={`theme-dark ${styles.footer}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.tagline}>
            Building and learning, one line at a time.
          </span>
        </div>

        <nav className={styles.nav} aria-label="Social">
          <ul className={styles.links}>
            {socialLinks.map((link) =>
              link.configured ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={link.label}
                    title={link.label}
                  >
                    <link.icon />
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </nav>

        <div className={styles.copy}>
          <span>© {year}</span>
          <span className={styles.divider}>/ </span>
          <span>{personal.name}</span>
        </div>
      </div>
    </footer>
  );
}
