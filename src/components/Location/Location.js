"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";
import styles from "./Location.module.css";

const distances = [
  { label: "UIN Alauddin", time: "0 Min", distance: "0 km (Bersebelahan)" },
  { label: "Pusat Kota Makassar", time: "20 Min", distance: "Via Jl. Hertasning" },
  { label: "Bandara Hasanuddin", time: "45 Min", distance: "Via Tol" },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.location} id="location" ref={ref}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.content}>

            
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              The Center of <span className={styles.accent}>Academic Hub</span>
            </motion.h2>

            <motion.p
              className={`body-text ${styles.desc}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Berlokasi di Romang Polong, Samata, Gowa. Sultana Living menawarkan
              aksesibilitas terbaik ke kampus-kampus ternama, menjadikannya lokasi
              hunian mahasiswa paling diminati dengan potensi sewa yang tinggi.
            </motion.p>

            <motion.div
              className={styles.distances}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {distances.map((dist) => (
                <div key={dist.label} className={styles.distItem}>
                  <div className={styles.distTime}>
                    <Clock size={16} strokeWidth={1.5} className={styles.distIcon} />
                    {dist.time}
                  </div>
                  <div className={styles.distInfo}>
                    <span className={styles.distLabel}>{dist.label}</span>
                    <span className={styles.distDesc}>
                      <Navigation size={12} strokeWidth={1.5} />
                      {dist.distance}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mapFrame}>
              <iframe
                src="https://maps.google.com/maps?q=-5.210936,119.500354&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) hue-rotate(180deg) contrast(1.2)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sultana Living Location Map"
              ></iframe>
              <div className={styles.mapOverlay} />
              <div className={styles.mapBadge}>
                <MapPin size={16} strokeWidth={1.5} />
                <span>Romang Polong, Samata, Gowa</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
