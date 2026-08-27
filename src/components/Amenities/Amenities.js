"use client";

import { useRef } from "react";
import { clsx } from "clsx";
import { motion, useInView } from "framer-motion";
import { Lock, Camera, Package, Flower2, Pipette } from "lucide-react";
import styles from "./Amenities.module.css";

const featuredCards = [
  {
    eyebrow: "Security",
    title: "One Gate System & Digital Pass",
    description:
      "Satu akses terkontrol dengan digital pass. Keamanan dan privasi penghuni selalu terjaga penuh.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=900&q=80",
    span: "large",
  },
  {
    eyebrow: "Safety",
    title: "Security 24/7",
    description:
      "Pengawasan penuh 24 jam setiap hari oleh tim security profesional.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=900&q=80",
    span: "small",
  },
  {
    eyebrow: "Lifestyle",
    title: "Jogging Track",
    description:
      "Fasilitas olahraga di lingkungan hijau yang asri dan tertata.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=80",
    span: "small",
  },
  {
    eyebrow: "Community",
    title: "Club House",
    description:
      "Ruang komunal eksklusif untuk belajar kelompok, bersosialisasi, dan bersantai.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80",
    span: "large",
  },
];

// Secondary supporting facilities
const supportingFacilities = [
  { icon: <Lock size={20} strokeWidth={1.5} />, label: "Smart Lock / Keyless Access" },
  { icon: <Camera size={20} strokeWidth={1.5} />, label: "CCTV 24/7" },
  { icon: <Package size={20} strokeWidth={1.5} />, label: "Smart Parcel Locker" },
  { icon: <Flower2 size={20} strokeWidth={1.5} />, label: "Garden & Landscape" },
  { icon: <Pipette size={20} strokeWidth={1.5} />, label: "Underground Utility" },
];

function BentoCard({ eyebrow, title, description, image, span, index, isInView }) {
  return (
    <motion.div
      className={clsx(styles.card, span === "large" ? styles.cardLarge : styles.cardSmall)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Full image */}
      <div className={styles.graphicWrap}>
        <div
          className={styles.graphic}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.graphicFade} />
      </div>

      {/* Frosted glass text */}
      <div className={styles.textOverlay}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.amenities} id="amenities" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >

          <h2 className={styles.title}>
            Fasilitas <span className={styles.accent}>Premium</span>
          </h2>
        </motion.div>

        {/* 4 Featured Bento Cards */}
        <div className={styles.grid}>
          {featuredCards.map((card, i) => (
            <BentoCard key={card.title} {...card} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Supporting Facilities Strip */}
        <motion.div
          className={styles.supportingWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className={styles.supportingLabel}>Dan berbagai fasilitas pendukung lainnya</p>
          <div className={styles.supportingList}>
            {supportingFacilities.map((f, i) => (
              <motion.div
                key={f.label}
                className={styles.supportingItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              >
                <span className={styles.supportingIcon}>{f.icon}</span>
                <span className={styles.supportingText}>{f.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
