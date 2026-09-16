"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="wrap">

        {/* Top: Brand + Nav */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/images/logo.png"
              alt="Exclusive Student Living"
              width={52}
              height={52}
              unoptimized
              className={styles.brandLogo}
            />
            <div>
              <p className={styles.brandName}>Exclusive Student Living</p>
              <p className={styles.brandSub}>Romang Polong, Samata, Gowa</p>
            </div>
          </div>

          <nav className={styles.nav}>
            <a href="#about">Tentang</a>
            <a href="#properties">Tipe Unit</a>
            <a href="#amenities">Fasilitas</a>
            <a href="#location">Lokasi</a>
            <a href="#faq">FAQ</a>
            <a
              href="https://wa.me/6282142436178"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
            >
              Hubungi Kami
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom: Copyright + Logos */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {currentYear} Exclusive Student Living. All rights reserved.
          </p>

          <div className={styles.partners}>
            <div className={styles.partnerItem}>
              <span className={styles.partnerLabel}>Developed by</span>
              <Image src="/images/logo.png" alt="Sultana Living" width={32} height={32} unoptimized className={styles.partnerLogo} />
            </div>
            <div className={styles.separator} />
            <div className={styles.partnerItem}>
              <span className={styles.partnerLabel}>Design by</span>
              <Image src="/images/edra-logo.png" alt="EDRA Arsitek" width={80} height={28} unoptimized className={styles.partnerLogo} />
            </div>
            <div className={styles.separator} />
            <div className={styles.partnerItem}>
              <span className={styles.partnerLabel}>Operated by</span>
              <Image src="/images/zities-logo.png" alt="Zities Land" width={80} height={28} unoptimized className={styles.partnerLogo} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
