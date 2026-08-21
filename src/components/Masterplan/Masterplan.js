"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import styles from "./Masterplan.module.css";

const legends = [
  {
    num: "01",
    title: "Main Gate & Security",
    desc: "Akses satu pintu (One Gate System) dengan pengamanan 24 jam dan pantauan CCTV terintegrasi."
  },
  {
    num: "02",
    title: "Residential Area",
    desc: "Kawasan hunian eksklusif dengan 36 unit yang dirancang khusus untuk kenyamanan dan privasi mahasiswa."
  },
  {
    num: "03",
    title: "Club House & Amenities",
    desc: "Pusat fasilitas penghuni meliputi kolam renang, gym, dan area komunal untuk belajar bersama."
  },
  {
    num: "04",
    title: "Green Open Space",
    desc: "Taman tematik dan area hijau terbuka yang memberikan suasana asri serta sirkulasi udara optimal."
  }
];

export default function Masterplan() {
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
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

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
            Tata letak kawasan yang terencana dengan matang, menghadirkan keseimbangan 
            antara hunian premium dan fasilitas berkelas.
          </motion.p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left: Interactive Image */}
          <motion.div
            className={styles.imageSide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/images/masterplan-v2.png"
                alt="Sultana Living Masterplan Layout"
                fill
                sizes="(max-width: 960px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Floating Location Badge */}
            <motion.div 
              className={styles.mapBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className={styles.mapBadgeIcon}>
                <MapPin className="w-5 h-5" />
              </div>
              <div className={styles.mapBadgeText}>
                <span className={styles.mapBadgeTitle}>Lokasi Strategis</span>
                <span className={styles.mapBadgeDesc}>0 Km ke UIN Alauddin</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Legends List */}
          <motion.div 
            className={styles.legendSide}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {legends.map((legend) => (
              <motion.div key={legend.num} variants={itemVariants} className={styles.legendCard}>
                <div className={styles.legendNumber}>
                  {legend.num}
                </div>
                <div className={styles.legendInfo}>
                  <h4 className={styles.legendTitle}>{legend.title}</h4>
                  <p className={styles.legendDesc}>{legend.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
