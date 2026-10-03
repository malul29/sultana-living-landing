"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import { GlassButton } from "../ui/GlassButton";
import Plasma from "../ui/Plasma";

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.25, 0.65]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      {/* Background Image */}
      <motion.div className={styles.heroBg}>
        <Image
          src="/images/gate.png"
          alt="Sultana Living Gate Entrance"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <motion.div className={styles.heroOverlay} style={{ opacity: overlayOpacity }} />
        <div className={styles.heroGradient} />
      </motion.div>

      {/* Plasma WebGL Layer */}
      {!reduceMotion && (
      <div className={styles.plasmaLayer}>
        <Plasma
          color="#c4b87e"
          speed={0.4}
          direction="forward"
          scale={1.3}
          opacity={0.2}
          mouseInteractive={true}
        />
      </div>
      )}

      {/* Hero Content */}
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className={styles.title}>
          <span className={styles.titleLine}>Exclusive</span>
          <span className={styles.titleLine}>
            <em className={styles.titleAccent}>Student Living</em>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.tagline}>
          Hunian mahasiswa eksklusif di Samata, dengan potensi imbal hasil hingga 10% per tahun.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.heroCtas}>
          <GlassButton
            href="https://wa.me/6287785758656"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Kami
          </GlassButton>
          <GlassButton
            href="#properties"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Lihat Unit
          </GlassButton>
        </motion.div>

      </motion.div>
    </section>
  );
}
