"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./PopupFlyer.module.css";

export default function PopupFlyer({ introFinished }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only show if the intro has finished and we haven't shown it yet
    if (introFinished && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 1000); // 1 second delay after intro finishes

      return () => clearTimeout(timer);
    }
  }, [introFinished, hasShown]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
          style={{ zIndex: 9999 }}
        >
          <motion.div
            className={styles.popupContainer}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className={styles.closeButton} onClick={closePopup} aria-label="Close popup">
              <X size={24} />
            </button>
            <div className={styles.imageWrapper}>
              <img
                src="/images/FLYER%20Sultana.png"
                alt="Promo Flyer Sultana Living"
                className={styles.flyerImage}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
