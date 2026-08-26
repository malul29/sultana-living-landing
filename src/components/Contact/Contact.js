"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.contactBg}>
        <div className={styles.overlay} />
      </div>
      
      <div className={`wrap ${styles.contentWrap}`}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Start Your Investment</span>
          <h2 className={styles.title}>
            Ready to Secure Your
            <br />
            <span className={styles.accent}>Premium Unit?</span>
          </h2>
          <p className={`body-text ${styles.desc}`}>
            Jadwalkan kunjungan ke lokasi Exclusive Student Living untuk melihat langsung
            kualitas bangunan dan potensi investasi yang kami tawarkan.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/6285216621987"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.btnPrimary}`}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Chat via WhatsApp
            </a>
            <a
              href="tel:+6285216621987"
              className={`btn btn-outline ${styles.btnOutline}`}
            >
              <Phone size={18} strokeWidth={1.5} />
              Telepon Sekarang
            </a>
          </div>

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Marketing Gallery</span>
              <span className={styles.infoValue}>Romang Polong, Samata, Gowa</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
