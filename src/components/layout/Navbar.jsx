import { useEffect, useRef, useState } from "react";
import { navLinks, personal } from "../../config/siteData";
import styles from "./Navbar.module.css";

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const panelRef = useRef(null);

  const close = () => setOpen(false);

  // Scroll-linked active section
  useEffect(() => {
    const updateActive = () => {
      const offsets = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });
      const scrollY = window.scrollY + window.innerHeight * 0.45;
      let current = SECTION_IDS[0];
      for (let i = 0; i < SECTION_IDS.length; i++) {
        if (scrollY >= offsets[i]) current = SECTION_IDS[i];
      }
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  // Close menu on Escape / outside click
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    const onClick = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        close();
      }
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.row}>
        <a href="#hero" className={styles.logo} onClick={close}>
          <span className={styles.number}>00&nbsp;</span>
          {personal.name}
        </a>

        <div className={styles.desktop} role="menubar">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                role="menuitem"
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                onClick={close}
              >
                {label}
                {isActive && (
                  <svg
                    aria-hidden="true"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="currentColor"
                  >
                    <circle cx="2" cy="2" r="2" />
                  </svg>
                )}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.menuIcon}>≡</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.mobile} ${open ? styles.open : ""}`}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={styles.mobileLink}
            onClick={close}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
