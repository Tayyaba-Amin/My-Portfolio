import { contact, personal } from "../../config/siteData";
import { ArrowIcon, LocationIcon } from "../common/icons";
import styles from "./Contact.module.css";

function ContactLink({ label, value, href, type }) {
  const isConfigured = Boolean(value && !value.includes("["));

  if (!isConfigured) {
    return (
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <span className={styles.placeholder}>{value}</span>
      </div>
    );
  }

  const linkHref = type === "email" ? `mailto:${value}` : href || value;

  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <a
        href={linkHref}
        target={type === "email" ? undefined : "_blank"}
        rel={type === "email" ? undefined : "noopener noreferrer"}
        className="link-arrow"
      >
        {value}
        <ArrowIcon />
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className={styles.content}>
          <h2 id="contact-heading" className={styles.headline}>
            Have an idea worth building?
          </h2>
          <p className={styles.intro}>{contact.invitation}</p>

          <div className={styles.links}>
            <ContactLink label="Email" value={contact.email} type="email" />
            <ContactLink
              label="GitHub"
              value={contact.github}
              href={contact.github}
            />
            <ContactLink
              label="LinkedIn"
              value={contact.linkedin}
              href={contact.linkedin}
            />
            <div className={styles.row}>
              <span className={styles.label}>Location</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--text-dim)' }}>
                <LocationIcon />
                {personal.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
