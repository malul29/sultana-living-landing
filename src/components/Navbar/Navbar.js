"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MenuToggleIcon } from "./MenuToggleIcon";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Tipe Unit", href: "#properties" },
  { label: "Fasilitas", href: "#amenities" },
  { label: "Lokasi", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sectionIds = ["about", "properties", "amenities", "location", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className={styles.nav}>
          <a href="#" className={styles.logo} aria-label="Sultana Living Home">
            <Image
              src="/images/logo.png"
              alt="Sultana Living"
              width={84}
              height={84}
              priority
              unoptimized
            />
          </a>

          {/* Desktop Nav */}
          <div className={styles.navCenter}>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.href} className={styles.navItem}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${activeSection === link.href ? styles.navLinkActive : ""}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <motion.div
                        className={styles.activeIndicator}
                        layoutId="navIndicator"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.navRight}>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.ctaBtn}`}
              onClick={(e) => handleLinkClick(e, "#contact")}
            >
              Hubungi Kami
            </a>

            <button
              className={styles.menuToggleBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <MenuToggleIcon open={menuOpen} className={styles.menuIcon} duration={500} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.mobileMenuContent}>
              <ul className={styles.mobileNavLinks}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <span className={styles.mobileLinkNum}>0{i + 1}</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className={styles.mobileContact}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a href="tel:+6285216621987" className={styles.mobilePhone}>
                  +62 852 1662 1987
                </a>
                <a href="mailto:admin@sultanaliving.id" className={styles.mobileEmail}>
                  admin@sultanaliving.id
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
