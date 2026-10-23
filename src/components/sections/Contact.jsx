import { contact, personal } from "../../config/siteData";
import SplitText from "../common/SplitText";
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
        <div className={styles.card} data-reveal="card">
          <div className={styles.inner}>
            <p
              className={`eyebrow ${styles.eyebrow}`}
              data-reveal
              style={{ "--reveal-delay": "100ms" }}
            >
              Contact
            </p>
            <SplitText
              as="h2"
              id="contact-heading"
              className={styles.headline}
              data-reveal="words"
              text="Have an idea worth building?"
              mode="lines"
              delay={80}
              lineStagger={150}
            />
            <p
              className={styles.invitation}
              data-reveal
              style={{ "--reveal-delay": "260ms" }}
            >
              {contact.invitation}
            </p>

            <div
              className={styles.actions}
              data-reveal
              style={{ "--reveal-delay": "360ms" }}
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

            <ul className={styles.socials}>
              <li data-reveal style={{ "--reveal-delay": "540ms" }}>
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
              <li data-reveal style={{ "--reveal-delay": "620ms" }}>
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
              style={{ "--reveal-delay": "700ms" }}
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
