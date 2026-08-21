"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./Masterplan.module.css";

export default function Masterplan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.masterplan} id="masterplan" ref={ref}>
      <div className="wrap">
        <div className={styles.header}>
          <motion.span
            className="label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Site Layout
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Kawasan <span className={styles.accent}>Sultana Living</span>
          </motion.h2>
          <motion.p
            className={`body-text ${styles.desc}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Tata letak kawasan yang eksklusif dengan 36 unit hunian dan fasilitas
            Club House terintegrasi dalam lingkungan modern.
          </motion.p>
        </div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/masterplan-v2.png"
              alt="Sultana Living Masterplan Layout"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Floating Action Badge */}
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className={styles.badgeIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <div>
              <span className={styles.badgeTitle}>Lokasi Strategis</span>
              <span className={styles.badgeDesc}>0 Km ke UIN Alauddin</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
