"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Berapa harga investasi awal di Exclusive Student Living?",
    a: "Harga investasi awal mulai dari Rp 170 Jutaan. Exclusive Student Living merupakan high-yield investment dengan imbal hasil estimasi hingga 10% dan potensi passive income hingga Rp 180 Juta per tahun. *Syarat dan ketentuan berlaku.",
  },
  {
    q: "Apa saja tipe unit yang tersedia?",
    a: "Terdapat dua tipe unit yang ditawarkan: Tipe Executive (Lt: 71,5 m², Lb: 82 m², 5KT) dan Tipe Premier (Lt: 91,5 m², Lb: 145 m², 10KT). Keduanya didesain khusus untuk hunian mahasiswa.",
  },
  {
    q: "Apakah ada program jaminan pengembalian?",
    a: "Ya, kami menyediakan program Guarantee Return of Investment. Untuk detail lengkap mengenai skema dan syarat, silakan hubungi tim marketing kami di +62 852 1662 1987.",
  },
  {
    q: "Di mana lokasi Exclusive Student Living?",
    a: "Berlokasi di Romang Polong, Samata, Gowa — tepat bersebelahan dengan UIN Alauddin (0 Km). Kawasan ini merupakan area premium yang terus berkembang dengan aksesibilitas ke berbagai kampus dan fasilitas umum.",
  },
  {
    q: "Siapa yang mendesain dan mengelola kawasan ini?",
    a: "Kawasan ini didesain oleh EDRA Arsitek Indonesia, dan dikelola secara profesional oleh Zities Land Property Management & Estate, yang akan memastikan lingkungan tetap asri dan nilai investasi terjaga.",
  },
  {
    q: "Fasilitas apa saja yang didapatkan?",
    a: "Kawasan ini dilengkapi One Gate System dengan CCTV 24/7, Smart Lock & Digital Pass, Smart Parcel Locker, Jogging Track, Club House, Garden, serta infrastruktur rapi dengan Underground Utility.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
      <button className={styles.faqButton} onClick={onClick} aria-expanded={isOpen}>
        <span className={styles.faqQ}>{faq.q}</span>
        <motion.span
          className={styles.faqIcon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus size={22} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.faqContent}
          >
            <div className={styles.faqA}>{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faqSection} id="faq" ref={ref}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.header}>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Pertanyaan <span className={styles.accent}>Sering Diajukan</span>
            </motion.h2>
            <motion.p
              className={`body-text ${styles.desc}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Informasi lengkap seputar investasi, fasilitas, dan hunian di
              Exclusive Student Living.
            </motion.p>
          </div>

          <motion.div
            className={styles.accordion}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
