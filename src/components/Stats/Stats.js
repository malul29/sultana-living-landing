"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Home, TrendingUp, Wallet, BadgeDollarSign } from "lucide-react";
import styles from "./Stats.module.css";

const stats = [
  {
    number: 36, suffix: "", label: "Unit Eksklusif",
    description: "A new way of residential investment",
    icon: <Home size={24} strokeWidth={1.5} />,
  },
  {
    number: 10, suffix: "%", label: "High-Yield Investment",
    description: "Guarantee return of investment*",
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
  },
  {
    number: 180, suffix: "Jt", label: "Passive Income / Tahun",
    description: "Estimasi pendapatan pasif per tahun*",
    icon: <Wallet size={24} strokeWidth={1.5} />,
  },
  {
    number: 170, suffix: "Jt+", label: "Starting Investment",
    description: "*Syarat dan ketentuan berlaku",
    icon: <BadgeDollarSign size={24} strokeWidth={1.5} />,
  },
];

function AnimatedNumber({ target, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2200;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span className={styles.number}>
      {count}
      <span className={styles.suffix}>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.stats} ref={ref}>
      <div className="wrap">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.cardIcon}>{stat.icon}</div>
              <AnimatedNumber
                target={stat.number}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.desc}>{stat.description}</span>
              <div className={styles.cardShimmer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
