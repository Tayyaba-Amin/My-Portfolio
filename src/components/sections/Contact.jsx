import { contact, personal } from "../../config/siteData";
import {
  ArrowIcon,
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
} from "../common/icons";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`section ${styles.contact}`}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className={styles.card} data-reveal>
          <div className={styles.inner}>
            <p className={`eyebrow ${styles.eyebrow}`}>Contact</p>
            <h2
              id="contact-heading"
              className={styles.headline}
              data-reveal
              style={{ animationDelay: "70ms" }}
            >
              Have an idea worth building?
            </h2>
            <p
              className={styles.invitation}
              data-reveal
              style={{ animationDelay: "150ms" }}
            >
              {contact.invitation}
            </p>

            <div
              className={styles.actions}
              data-reveal
              style={{ animationDelay: "230ms" }}
            >
              <a
                href={`mailto:${contact.email}`}
                className={`btn btn-primary ${styles.emailBtn}`}
              >
                <EmailIcon />
                Email me
                <ArrowIcon />
              </a>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className={styles.emailText}
              data-reveal
              style={{ animationDelay: "300ms" }}
            >
              {contact.email}
            </a>

            <ul
              className={styles.socials}
              data-reveal
              style={{ animationDelay: "380ms" }}
            >
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <GithubIcon />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            </ul>

            <p
              className={styles.location}
              data-reveal
              style={{ animationDelay: "450ms" }}
            >
              <LocationIcon />
              {personal.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
