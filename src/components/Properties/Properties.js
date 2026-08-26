"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./Properties.module.css";
import { GlassButton } from "../ui/GlassButton";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import {
  Maximize2,
  BedDouble,
  Bath,
  Layers,
  Ruler,
  ChevronDown,
  X,
  ZoomIn
} from "lucide-react";

const properties = [
  {
    type: "Executive",
    tagline: "Efisiensi & Kenyamanan",
    desc: "Desain compact yang memaksimalkan fungsi ruang, sangat ideal untuk investasi hunian mahasiswa dengan permintaan sewa tinggi.",
    landArea: "6,5 x 11 m",
    landSize: "71,5 m²",
    buildingSize: "82 m²",
    bedrooms: 5,
    bathrooms: 4,
    floors: 2,
    units: 30,
    facade: "/images/executive.png",
    floorPlan: "/images/executive_type_floor_plan.png",
  },
  {
    type: "Premier",
    tagline: "Kapasitas Maksimal Investasi",
    desc: "Varian eksklusif dengan kapasitas kamar tidur lebih banyak, dirancang khusus untuk investor yang menginginkan passive income maksimal.",
    landArea: "7 x 11 m",
    landSize: "91,5 m²",
    buildingSize: "145 m²",
    bedrooms: 10,
    bathrooms: 9,
    floors: 3,
    units: 6,
    facade: "/images/premier.png",
    floorPlan: "/images/Premier_Type_Floor_Plan.png",
  },
];

const buildingSpecs = [
  { label: "Struktur", value: "Pondasi Pile Cap Beton Bertulang" },
  { label: "Dinding", value: "Bata Ringan diplaster + aci + finish cat" },
  { label: "Lantai", value: "Homogeneous Tile 60x60cm, 30x60cm (KM/WC)" },
  { label: "Pantry", value: "Meja beton finish HT 60x60 + kitchen zink" },
  { label: "Plafon", value: "Gypsum Board 9mm, Calsiboard 6mm" },
  { label: "Kusen", value: "Aluminium (Ex. Alexindo, Incalum, Dacon)" },
  { label: "Pintu", value: "Solid Engineered Door & Engineered Door" },
  { label: "Atap", value: "Rangka Baja Ringan, Penutup UPVC Alderon" },
  { label: "Sanitair", value: "Closet duduk + Jet Washer, Shower" },
  { label: "Listrik & Air", value: "2.200 VA & PDAM" },
];

function PropertySection({ prop, index, onImageClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className={styles.propertyBlock} ref={ref}>
      <div className="wrap">
        <motion.div
          className={styles.blockHeader}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.headerTitleArea}>
            <span className={styles.badge}>{prop.units} Unit Tersedia</span>
            <h3 className={styles.blockType}>Type {prop.type}</h3>
            <p className={styles.blockTagline}>{prop.tagline}</p>
          </div>
          <p className={styles.blockDesc}>{prop.desc}</p>
        </motion.div>

        <motion.div
          className={styles.massiveFacade}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onImageClick(prop.facade)}
        >
          <Image
            src={prop.facade}
            alt={`Sultana Living Type ${prop.type} Facade`}
            fill
            sizes="100vw"
            priority={index === 0}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.imageOverlay} />
          <div className={styles.zoomHint}>
            <ZoomIn size={24} color="white" />
          </div>
        </motion.div>

        <div className={styles.blockSplit}>
          <motion.div
            className={styles.floorPlanSide}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className={styles.floorPlanHeader}>
              <h4>Denah Ruangan</h4>
              <span>Lihat detail tata letak ruangan {prop.type}</span>
            </div>
            <div 
              className={styles.floorPlanImageWrap}
              onClick={() => onImageClick(prop.floorPlan)}
            >
              <Image
                src={prop.floorPlan}
                alt={`Sultana Living Type ${prop.type} Floor Plan`}
                width={1200}
                height={1600}
                style={{ width: "100%", height: "auto" }}
                quality={100}
              />
              <div className={styles.zoomHint}>
                <ZoomIn size={24} color="white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.detailsSide}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className={styles.specsCard}>
              <h4>Spesifikasi Unit</h4>
              <div className={styles.specsList}>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Ruler size={20} strokeWidth={1.5} /></div>
                  <div className={styles.specText}>
                    <span className={styles.specLabel}>Luas Tanah</span>
                    <span className={styles.specValue}>{prop.landArea} ({prop.landSize})</span>
                  </div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Maximize2 size={20} strokeWidth={1.5} /></div>
                  <div className={styles.specText}>
                    <span className={styles.specLabel}>Luas Bangunan</span>
                    <span className={styles.specValue}>{prop.buildingSize}</span>
                  </div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><BedDouble size={20} strokeWidth={1.5} /></div>
                  <div className={styles.specText}>
                    <span className={styles.specLabel}>Kamar Tidur</span>
                    <span className={styles.specValue}>{prop.bedrooms} Kamar</span>
                  </div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Bath size={20} strokeWidth={1.5} /></div>
                  <div className={styles.specText}>
                    <span className={styles.specLabel}>Kamar Mandi</span>
                    <span className={styles.specValue}>{prop.bathrooms} Kamar</span>
                  </div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}><Layers size={20} strokeWidth={1.5} /></div>
                  <div className={styles.specText}>
                    <span className={styles.specLabel}>Struktur</span>
                    <span className={styles.specValue}>{prop.floors} Lantai</span>
                  </div>
                </div>
              </div>
              <GlassButton href="#contact" fullWidth>
                Book Unit {prop.type}
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSpecs, setShowSpecs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.properties} id="properties">
      <div className="wrap">
        <motion.div
          className={styles.header}
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >

          <h2 className={styles.title}>
            Premium <span className={styles.accent}>Collections</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "38rem", margin: "0 auto" }}>
            Eksplorasi dua mahakarya desain yang diciptakan untuk memaksimalkan
            kenyamanan hunian dan memberikan return of investment terbaik.
          </p>
        </motion.div>
      </div>

      <div className={styles.sectionsContainer}>
        {properties.map((prop, i) => (
          <PropertySection key={prop.type} prop={prop} index={i} onImageClick={setSelectedImage} />
        ))}
      </div>

      <div className="wrap">
        <motion.div
          className={styles.globalSpecsWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <button
            className={styles.specsToggleBtn}
            onClick={() => setShowSpecs(!showSpecs)}
            aria-expanded={showSpecs}
          >
            <span>Lihat Spesifikasi Material & Bangunan</span>
            <motion.div
              animate={{ rotate: showSpecs ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} strokeWidth={1.5} />
            </motion.div>
          </button>

          <AnimatePresence>
            {showSpecs && (
              <motion.div
                className={styles.specsPanel}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.specsGrid}>
                  {buildingSpecs.map((spec, i) => (
                    <div key={i} className={styles.specGridItem}>
                      <span className={styles.specGridLabel}>{spec.label}</span>
                      <span className={styles.specGridValue}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className={styles.lightboxCloseBtn}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close image preview"
            >
              <X size={28} />
            </button>
            <motion.div
              className={styles.lightboxImageWrap}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
