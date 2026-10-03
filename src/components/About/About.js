"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Key, ArrowUpRight } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className="wrap">
        <motion.div 
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Card 1: Large Hero */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardLarge}`}>
            <div className={styles.cardLargeBg} />
            <div className={styles.cardLargeOverlay} />

            <div className={styles.cardLargeContent}>
              <div className={styles.cardLargeBadge}>
                <span className={styles.pulseDot} />
                Student Living
              </div>
              <h3 className={styles.cardLargeTitle}>
                Where Modern Living
                <br />
                <span style={{ color: "var(--gold-300)" }}>Meets Smart Investment</span>
              </h3>
              <p className={styles.cardLargeDesc}>
                Hunian eksklusif yang dirancang untuk generasi modern, memadukan 
                desain arsitektur premium dengan potensi investasi tinggi di kawasan strategis Samata.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Stats (Yield) */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardStats1}`}>
            <div className={styles.cardStats1Blur} />
            <div className={styles.cardStats1Content}>
              <div className={styles.cardIcon}>
                <TrendingUp className="w-7 h-7" />
              </div>
              <h4 className={styles.cardStatsValue}>10%</h4>
              <p className={styles.cardStatsLabel}>Potential Yield p.a.</p>
            </div>
          </motion.div>

          {/* Card 3: Feature */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardFeature}`}>
            <div className={`${styles.cardIcon}`}>
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h4 className={styles.cardFeatureTitle}>
                36 Exclusive Units
              </h4>
              <p className={styles.cardFeatureDesc}>
                Terbatas hanya 36 unit dengan jaminan privasi dan kenyamanan.
              </p>
            </div>
          </motion.div>

          {/* Card 4: CTA */}
          <motion.a 
            href="#contact"
            variants={itemVariants} 
            className={`${styles.card} ${styles.cardCta}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className={styles.cardCtaHeader}>
              <div className={styles.cardCtaArrow}>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <h4 className={styles.cardCtaTitle}>
              Hubungi
              <br />
              Kami
            </h4>
          </motion.a>

          {/* Card 5: Stats (Income) */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardStats2}`}>
            <div className={styles.cardStats2Bg} />
            <div className={styles.pingIndicator}>
              <span className={styles.pingOuter}></span>
              <span className={styles.pingInner}></span>
            </div>
            <div className={styles.cardStats1Content}>
              <span className={styles.cardStats2Value}>
                Rp180 Juta
              </span>
              <p className={styles.cardStatsLabel} style={{ marginTop: "0.5rem" }}>
                Passive Income p.a.*
              </p>
            </div>
          </motion.div>

          {/* Card 6: Stats (ROI) */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardStats3}`}>
            <div className={styles.cardStats3Blur} />
            <div className={styles.cardStats1Content}>
              <span className={styles.cardStats3Value}>Guaranteed</span>
              <p className={styles.cardStatsLabel} style={{ color: "var(--gold-200)", marginTop: "0.5rem" }}>
                Buyback Program
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
