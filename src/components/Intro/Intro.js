"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Intro.module.css";

export default function Intro({ onComplete }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Split text for staggered cinematic reveal
  const brandText = "EXCLUSIVE STUDENT LIVING".split("");

  return (
    <motion.div
      className={styles.introContainer}
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(100% 0% 0% 0%)" }}
      transition={{ duration: 1.2, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        const el = document.querySelector(`.${styles.introContainer}`);
        if (el) {
          el.style.display = "none";
          document.body.style.overflow = "";
        }
      }}
    >
      {/* Background SVG with subtle scale-in */}
      <motion.div 
        className={styles.bgPattern}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      
      <div className={styles.content}>
        {/* Animated Massive Logo */}
        <motion.div
          className={styles.logoWrap}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)", y: 20 }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.logoGlow} />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/logo.png"
              alt="Sultana Living Monogram"
              width={747}
              height={747}
              unoptimized
              priority
              className={styles.logoImage}
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
