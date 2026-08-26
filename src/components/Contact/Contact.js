"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [waHovered, setWaHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285216621987", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+6285216621987";
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.contactBg}>
        <div className={styles.overlay} />
      </div>

      <div className={styles.contentWrap}>
        {/* ===== SUCCESS STATE ===== */}
        <div
          className={styles.successState}
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Heading */}
          <div className={styles.successHeading}>
            <span
              className={styles.successLabel}
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Siap Berinvestasi
            </span>
            <h3
              className={styles.successTitle}
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Hubungi Kami
            </h3>
          </div>

          {/* WhatsApp button */}
          <button
            onClick={handleWhatsApp}
            onMouseEnter={() => setWaHovered(true)}
            onMouseLeave={() => setWaHovered(false)}
            className={styles.actionButton}
            style={{
              transform: showSuccess
                ? waHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            <span
              className={styles.actionLine}
              style={{
                transform: waHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: waHovered ? 0 : 0.5,
              }}
            />
            <span
              className={styles.actionPill}
              style={{
                borderColor: waHovered
                  ? "var(--gold-400)"
                  : "var(--white-alpha-200)",
                backgroundColor: waHovered
                  ? "var(--gold-400)"
                  : "transparent",
                boxShadow: waHovered
                  ? "0 0 30px rgba(196,184,126,0.15), 0 10px 40px rgba(0,0,0,0.2)"
                  : "none",
              }}
            >
              <MessageCircle
                size={18}
                strokeWidth={1.5}
                style={{
                  color: waHovered ? "var(--green-900)" : "var(--gold-300)",
                }}
              />
              <span
                style={{
                  color: waHovered ? "var(--green-900)" : "var(--white)",
                }}
              >
                Chat via WhatsApp
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                style={{
                  color: waHovered ? "var(--green-900)" : "var(--gold-300)",
                  transform: waHovered
                    ? "translate(3px, -3px) scale(1.1)"
                    : "translate(0, 0) scale(1)",
                  transition: "all 0.5s ease",
                }}
              />
            </span>
            <span
              className={styles.actionLine}
              style={{
                transform: waHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: waHovered ? 0 : 0.5,
              }}
            />
          </button>

          {/* Phone button */}
          <button
            onClick={handlePhone}
            onMouseEnter={() => setPhoneHovered(true)}
            onMouseLeave={() => setPhoneHovered(false)}
            className={styles.actionButton}
            style={{
              transform: showSuccess
                ? phoneHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "300ms",
            }}
          >
            <span
              className={styles.actionLine}
              style={{
                transform: phoneHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: phoneHovered ? 0 : 0.5,
              }}
            />
            <span
              className={styles.actionPill}
              style={{
                borderColor: phoneHovered
                  ? "var(--white)"
                  : "var(--white-alpha-200)",
                backgroundColor: phoneHovered
                  ? "var(--white)"
                  : "transparent",
                boxShadow: phoneHovered
                  ? "0 0 30px rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.2)"
                  : "none",
              }}
            >
              <Phone
                size={18}
                strokeWidth={1.5}
                style={{
                  color: phoneHovered
                    ? "var(--green-900)"
                    : "var(--white-alpha-600)",
                }}
              />
              <span
                style={{
                  color: phoneHovered ? "var(--green-900)" : "var(--white)",
                }}
              >
                Telepon Sekarang
              </span>
            </span>
            <span
              className={styles.actionLine}
              style={{
                transform: phoneHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: phoneHovered ? 0 : 0.5,
              }}
            />
          </button>

          {/* Location subtext */}
          <span
            className={styles.successSubtext}
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            <MapPin size={12} strokeWidth={1.5} />
            Romang Polong, Samata, Gowa
          </span>
        </div>

        {/* ===== INITIAL STATE ===== */}
        <motion.div
          className={styles.initialState}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            opacity: isClicked ? 0 : undefined,
            transform: isClicked ? "translateY(-20px)" : undefined,
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          {/* Availability badge */}
          <div
            className={styles.badge}
            style={{
              opacity: isClicked ? 0 : 1,
              transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            }}
          >
            <span className={styles.pingContainer}>
              <span className={styles.pingOuter} />
              <span className={styles.pingInner} />
            </span>
            <span className={styles.badgeText}>Unit Tersedia Terbatas</span>
          </div>

          {/* Main heading — clickable */}
          <div
            className={styles.headingGroup}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            style={{ pointerEvents: isClicked ? "none" : "auto" }}
          >
            <h2
              className={styles.title}
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked
                  ? "translateY(-40px) scale(0.95)"
                  : "translateY(0) scale(1)",
              }}
            >
              <span className={styles.titleOverflow}>
                <span
                  className={styles.titleSlide}
                  style={{
                    transform:
                      isHovered && !isClicked
                        ? "translateY(-8%)"
                        : "translateY(0)",
                  }}
                >
                  Ready to Secure Your
                </span>
              </span>
              <span className={styles.titleOverflow}>
                <span
                  className={styles.titleSlide}
                  style={{
                    transform:
                      isHovered && !isClicked
                        ? "translateY(-8%)"
                        : "translateY(0)",
                    transitionDelay: "75ms",
                  }}
                >
                  <span className={styles.titleFade}>Premium Unit?</span>
                </span>
              </span>
            </h2>

            {/* Arrow circle */}
            <div className={styles.arrowContainer}>
              <div
                className={styles.arrowCircle}
                style={{
                  borderColor: isClicked
                    ? "var(--gold-400)"
                    : isHovered
                    ? "var(--gold-400)"
                    : "var(--white-alpha-200)",
                  backgroundColor: isClicked
                    ? "transparent"
                    : isHovered
                    ? "var(--gold-400)"
                    : "transparent",
                  transform: isClicked
                    ? "scale(3)"
                    : isHovered
                    ? "scale(1.1)"
                    : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                size={28}
                strokeWidth={1.5}
                className={styles.arrowIcon}
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                    ? "translate(2px, -2px)"
                    : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color:
                    isHovered && !isClicked
                      ? "var(--green-900)"
                      : "var(--gold-300)",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>

            {/* Decorative side lines */}
            <div className={styles.sideLineLeft}>
              <div
                className={styles.sideLine}
                style={{
                  transform: isClicked
                    ? "scaleX(0) translateX(-20px)"
                    : isHovered
                    ? "scaleX(1.5)"
                    : "scaleX(1)",
                  opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                }}
              />
            </div>
            <div className={styles.sideLineRight}>
              <div
                className={styles.sideLine}
                style={{
                  transform: isClicked
                    ? "scaleX(0) translateX(20px)"
                    : isHovered
                    ? "scaleX(1.5)"
                    : "scaleX(1)",
                  opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div
            className={styles.footerText}
            style={{
              opacity: isClicked ? 0 : 1,
              transform: isClicked ? "translateY(20px)" : "translateY(0)",
            }}
          >
            <p className={styles.desc}>
              Jadwalkan kunjungan ke lokasi Exclusive Student Living untuk melihat
              langsung kualitas bangunan dan potensi investasi yang kami tawarkan.
            </p>
            <span className={styles.email}>admin@sultanaliving.id</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
