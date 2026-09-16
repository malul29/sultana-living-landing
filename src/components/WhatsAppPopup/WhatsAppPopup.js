"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import styles from "./WhatsAppPopup.module.css";

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChat = () => {
    window.open(
      "https://wa.me/6282142436178?text=Halo%2C%20saya%20tertarik%20dengan%20Sultana%20Living.%20Bisa%20info%20lebih%20lanjut%3F",
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {showButton && (
        <>
          {/* Popup Card */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles.popupCard}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.popupHeader}>
                  <div className={styles.popupHeaderInfo}>
                    <div className={styles.popupAvatar}>
                      <MessageCircle size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={styles.popupName}>Sultana Living</p>
                      <p className={styles.popupStatus}>
                        <span className={styles.statusDot} />
                        Online
                      </p>
                    </div>
                  </div>
                  <button
                    className={styles.popupClose}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close popup"
                  >
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>

                <div className={styles.popupBody}>
                  <div className={styles.chatBubble}>
                    <p>Halo! 👋</p>
                    <p>Ada yang bisa kami bantu seputar Sultana Living?</p>
                  </div>
                </div>

                <a
                  className={styles.chatBtn}
                  href="https://wa.me/6282142436178?text=Halo%2C%20saya%20tertarik%20dengan%20Sultana%20Living.%20Bisa%20info%20lebih%20lanjut%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Mulai Chat
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            className={styles.fab}
            onClick={() => setIsOpen(!isOpen)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat WhatsApp"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.fabIcon}
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.span>
              )}
            </AnimatePresence>

            {/* Pulse ring */}
            <span className={styles.fabPulse} />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
