"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

const highlights = [
  { num: "01", title: "Guaranteed ROI", desc: "Jaminan pengembalian investasi dengan program buyback guarantee" },
  { num: "02", title: "High Yield 10%", desc: "Imbal hasil investasi tertinggi di kelasnya per tahun" },
  { num: "03", title: "Passive Income", desc: "Potensi pendapatan pasif hingga Rp 180 Juta per tahun*" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className="wrap">
        <div className={styles.grid}>
          {/* Left - Image with clip-path reveal */}
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            animate={isInView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/images/view.png"
                alt="Sultana Living Masterplan Aerial View"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Floating accent */}
            <motion.div
              className={styles.imageAccent}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className={styles.accentNumber}>36</span>
              <span className={styles.accentLabel}>Unit Eksklusif</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className={styles.content}>
            <motion.span
              className="label"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Vision
            </motion.span>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Where Modern Living
              <br />
              <span className={styles.titleAccent}>Meets Smart Investment</span>
            </motion.h2>

            <motion.div
              className="divider-gold"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className={`body-text ${styles.desc}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Telah hadir hunian Student Living di lokasi strategis Samata, menghadirkan
              kenyamanan tempat tinggal modern sekaligus menawarkan potensi investasi
              dengan imbal hasil tinggi di kawasan yang terus berkembang.
            </motion.p>

            <motion.p
              className={`body-text ${styles.desc}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Dirancang oleh <em>EDRA Arsitek Indonesia</em>, setiap unit menghadirkan
              standar arsitektur profesional dengan estetika modern yang membuat
              belajar dan bersantai terasa lebih menyenangkan.
            </motion.p>

            {/* Highlight Cards */}
            <motion.div
              className={styles.highlights}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.num}
                  className={styles.highlightItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.12 }}
                >
                  <span className={styles.highlightNum}>{item.num}</span>
                  <div>
                    <h4 className={styles.highlightTitle}>{item.title}</h4>
                    <p className={styles.highlightDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
