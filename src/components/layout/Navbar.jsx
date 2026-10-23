import { useEffect, useRef, useState } from "react";
import { navLinks, personal } from "../../config/siteData";
import { MenuIcon, CloseIcon } from "../common/icons";
import styles from "./Navbar.module.css";

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(SECTION_IDS[0]);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const menuBtnRef = useRef(null);

  const close = () => setOpen(false);

  // Scroll state + active section.
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);

      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close on Escape, outside click, or a jump to desktop width.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    const onClick = (e) => {
      if (panelRef.current?.contains(e.target)) return;
      if (menuBtnRef.current?.contains(e.target)) return;
      close();
    };
    const onResize = () => {
      if (window.innerWidth > 860) close();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      data-open={open || undefined}
    >
      <nav className={`container ${styles.row}`} aria-label="Primary">
        <a
          href="#hero"
          className={styles.brand}
          onClick={close}
          aria-label={`${personal.name} — back to top`}
        >
          <span className={styles.mark} aria-hidden="true">
            TA
          </span>
          <span className={styles.brandText}>
            {personal.name}
            <span className={styles.brandRole}>Software Engineering Student</span>
          </span>
        </a>

        <div className={styles.links}>
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className={styles.tail}>
          <a href="#contact" className={`btn btn-primary btn-sm ${styles.cta}`}>
            Let&apos;s talk
          </a>

          <button
            type="button"
            ref={menuBtnRef}
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" ref={panelRef} className={styles.panel}>
          <div className={`container ${styles.panelInner}`}>
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className={styles.panelLink} onClick={close}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className={`btn btn-primary ${styles.panelCta}`}
              onClick={close}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
