import Image from "next/image";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import styles from "./Experience.module.css";
import Interactions from "./Interactions";
import Intro from "./Intro";

const phone = "+62 877-8575-8656";
const words = ["Dekat Kampus", "Aman 24 Jam", "Siap Investasi"];
// Wide estate views only; the aerial leads.
const slides = [
  ["/images/render/garden.jpg", "Tampak udara kawasan Sultana Living"],
  ["/images/render/r8-wide.jpg", "Ilustrasi kawasan hunian dan deretan unit"],
  ["/images/render/r3-wide.jpg", "Ilustrasi jalan kawasan dan deretan unit"],
];
const whatsapp = "https://wa.me/6287785758656?text=Halo%2C%20saya%20tertarik%20dengan%20Sultana%20Living.%20Bisa%20info%20lebih%20lanjut%3F";

const units = [
  { letter: "A", name: "Executive", image: "/images/render/exec-r8.jpg", plan: "/images/canva/plan-exec.jpg", lot: "6,6 x 11 m", land: "72 m²", building: "82 m²", rooms: "5 KT", baths: "5 KM", floors: "2 lantai", quantity: "15 unit" },
  { letter: "B", name: "Deluxe", image: "/images/render/r6.jpg", plan: "/images/canva/plan-deluxe.jpg", lot: "6,6 x 11 m", land: "72 m²", building: "128 m²", rooms: "8 KT", baths: "8 KM", floors: "3 lantai", quantity: "14 unit" },
  { letter: "C", name: "Premier", image: "/images/render/r5.jpg", plan: "/images/canva/plan-premier.jpg", lot: "7 x 11 m", land: "91 m²", building: "158 m²", rooms: "10 KT", baths: "10 KM", floors: "3 lantai", quantity: "7 unit" },
];

const specs = [
  ["Struktur dan konstruksi", "Pondasi pile cap beton bertulang"],
  ["Dinding", "Bata ringan diplester, aci, dan finish cat"],
  ["Penutup lantai", "Homogeneous tile 60x60 cm, 30x60 cm untuk KM/WC"],
  ["Pantry", "Meja beton finish homogeneous tile 60x60 + kitchen sink"],
  ["Kusen pintu dan jendela", "Aluminium (Ex. Alexindo, Incalum, Dacon)"],
  ["Pintu utama", "Solid engineered door + smart door lock"],
  ["Pintu kamar dan KM/WC", "Engineered door"],
  ["Plafon", "Gypsum board 9 mm (ruang dalam), calsiboard 6 mm (KM/WC dan teras)"],
  ["Rangka dan penutup atap", "Baja ringan, UPVC Ex. Alderon"],
  ["Sanitair", "Closet duduk + jet washer, shower"],
  ["Cat", "Interior: cat Ex. Interior. Eksterior: cat Ex. Weathershield"],
  ["Listrik", "2.200 VA (rumah tinggal), 1.300 VA (rumah kost) @ 900 VA per kamar"],
  ["Air bersih", "PDAM + toren"],
];

const facilities = [
  { name: "Club house", text: "Ruang bersama untuk penghuni, berdampingan dengan taman dan jogging track", image: "/images/render/clubhouse.jpg" },
  { name: "Smart lock", text: "Keyless access dan akses kartu", image: "/images/canva/f-smartlock.jpg" },
  { name: "Keamanan 24 jam dan CCTV", text: "One gate system untuk seluruh kawasan", image: "/images/canva/f-security.jpg" },
  { name: "Taman dan jogging track", text: "Reflexy path dan kawasan ramah lingkungan", image: "/images/canva/f-taman.jpg" },
  { name: "Charging EV", text: "Shelter fast charging station SPKLU PLN", image: "/images/canva/ev.jpg" },
];

const gallery = [
  ["/images/render/bedroom.jpg", "Ilustrasi kamar tidur"],
  ["/images/render/dining.jpg", "Ilustrasi ruang tamu dan ruang makan"],
  ["/images/render/rooftop-cafe.jpg", "Ilustrasi kafe rooftop"],
  ["/images/render/bathroom.jpg", "Ilustrasi kamar mandi"],
  ["/images/render/pool.jpg", "Ilustrasi area kolam"],
  ["/images/render/clubhouse.jpg", "Club house Sultana Living"],
  ["/images/render/gate.jpg", "Gerbang utama Sultana Living"],
  ["/images/render/r4.jpg", "Ilustrasi deretan unit"],
];


const nearby = [["UIN Alauddin", 3], ["Polbangtan Gowa", 7], ["FK UNISMUH", 9], ["Masjid Cheng Ho", 11], ["Fakultas Teknik UNHAS", 12], ["Primaya Hospital", 18], ["Sekolah Al-Azhar", 18], ["Mall Panakkukang", 29]];

const steps = [
  { title: "Pilih tipe unit", text: "Executive 2 lantai, Deluxe 3 lantai, atau Premier 3 lantai. Bandingkan luas, jumlah kamar, dan denah setiap tipe.", image: "/images/render/fasad-pagi.jpg" },
  { title: "Hubungi marketing", text: "Tanyakan ketersediaan unit dan detail investasi langsung melalui WhatsApp atau telepon.", image: "/images/render/gate.jpg" },
  { title: "Ajukan KPR", text: "Sultana Living bekerja sama dengan BTN, BRI, dan BSI. Marketing menjelaskan skema dan ketentuannya.", image: "/images/render/dining.jpg" },
];

// [letter, name, marker positions in siteplan.jpg pixels (1400 x 1188)]
const places = [
  ["A", "Gerbang Utama", [[609, 777]]],
  ["B", "Club House", [[768, 715]]],
  ["C", "SPKLU", [[1270, 815]]],
  ["D", "Taman", [[569, 575], [1336, 579], [1163, 827]]],
  ["E", "Jogging Track", [[657, 693]]],
  ["F", "Reflexy Path", [[947, 563]]],
];

// Lot rectangles [x, y, width, height] in siteplan.jpg pixels. The artwork colours its lots in three groups of 15, 14 and 7, matching each type's unit count.
const lots = {
  Executive: [[574, 471, 765, 80]],
  Deluxe: [[563, 608, 86, 100], [779, 608, 356, 82], [879, 690, 256, 82]],
  Premier: [[715, 608, 64, 82], [1135, 608, 61, 82], [820, 690, 59, 80], [1135, 690, 61, 82], [1256, 607, 86, 63], [1256, 671, 76, 54], [1256, 725, 70, 65]],
};

const faqs = [
  ["Di mana lokasi Sultana Living?", "Sultana Living berada di Romang Polong, Samata, Gowa, di kawasan pendidikan yang terhubung dengan UIN Alauddin dan berbagai fasilitas kota."],
  ["Tipe unit apa saja yang tersedia?", "Tersedia tipe Executive 2 lantai, Deluxe 3 lantai, dan Premier 3 lantai. Premier memiliki luas tanah 91 m². Gambar lantai keempat pada materi denah adalah area atap, bukan lantai hunian tambahan."],
  ["Apa saja fasilitas kawasan?", "Kawasan dilengkapi smart lock, keamanan 24 jam, CCTV, taman, jogging track, reflexy path, club house, one gate system, akses kartu, utilitas bawah tanah, serta shelter fast charging station."],
  ["Apakah tersedia KPR?", "Sultana Living bekerja sama dengan BTN, BRI, dan BSI untuk KPR. Hubungi marketing untuk skema dan ketentuannya."],
  ["Bagaimana cara mendapatkan informasi unit?", "Klik Hubungi Kami untuk berbicara langsung dengan marketing melalui WhatsApp atau telepon."],
];

function Arrow() { return <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />; }

export default function Experience() {
  const navLinks = <><a href="#about">Tentang</a><a href="#properties">Tipe Unit</a><a href="#amenities">Fasilitas</a><a href="#location">Lokasi</a><a href="#faq">FAQ</a></>;
  return (
    <div className={styles.site} id="site">
      <Interactions rootId="site" />
      <Intro />
      <header className={styles.header}>
        <a href="#site" className={styles.brand} aria-label="Sultana Living beranda">
          <Image src="/images/logo-light.png" alt="Sultana Living" width={124} height={48} priority />
        </a>
        <nav className={styles.nav} aria-label="Navigasi utama">{navLinks}</nav>
        <a className={styles.navCta} href="#contact">Hubungi Kami</a>
        <details className={styles.menu}>
          <summary aria-label="Menu navigasi"><span /><span /></summary>
          <nav className={styles.menuPanel} aria-label="Navigasi seluler">{navLinks}</nav>
        </details>
      </header>

      <section className={styles.hero} id="hero" data-hero>
        <div className={styles.slides}>
          {slides.map(([src, alt], i) => <Image key={src} src={src} alt={alt} fill priority={i === 0} loading={i === 0 ? undefined : "eager"} sizes="100vw" />)}
        </div>
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <h1 aria-label="Hunian mahasiswa eksklusif">
            <span className={styles.words} aria-hidden="true">{words.map((w) => <span key={w}>{w}</span>)}</span>
          </h1>
          <div className={styles.heroFoot}>
            <p>Tinggal 3 menit dari UIN Alauddin. Pilih dari 36 unit hunian mahasiswa di Samata, Gowa, dengan smart lock, one gate system, dan keamanan 24 jam.</p>
          </div>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href={whatsapp} target="_blank" rel="noreferrer">Chat WhatsApp <Arrow /></a>
            <a className={styles.ghostCta} href="#properties">Lihat tipe unit</a>
          </div>
        </div>
      </section>

      <main className={styles.sheetWrap}>
        <div className={styles.heroSpace} aria-hidden="true" />
        <div className={styles.sheet}>
          <section className={styles.intro} id="about">
            <h2>Hunian student living di lokasi strategis Samata, dengan kenyamanan tempat tinggal modern dan potensi nilai investasi tinggi</h2>
            <p className={styles.introNote}>Gowa memadukan jejak Kerajaan Gowa dan Sultan Hasanuddin, Balla Lompoa, Malino, serta Bendungan Bili-bili, didukung UNHAS, UIN Alauddin, Politeknik Pembangunan Pertanian Gowa, UNISMUH, dan UNM.</p>
            <p className={styles.facts} data-r>
              <span><b data-count="36">36</b> unit eksklusif</span>
              <span><b data-count="3">3</b> tipe hunian</span>
              <span><b data-count="3" data-suffix=" menit">3 menit</b> ke UIN Alauddin</span>
            </p>
          </section>

          <section className={styles.bigPhotoSection} aria-label="Gerbang utama">
            <div className={styles.bigPhoto} data-p><Image src="/images/render/gate.jpg" alt="Gerbang utama Sultana Living" fill sizes="100vw" /></div>
          </section>

          <section className={styles.collageSection} id="gallery" aria-label="Interior">
            <div className={styles.collage} data-p>
              <div className={styles.collageGrid}>
                {gallery.map(([src, alt]) => <div key={src}><Image src={src} alt={alt} fill sizes="30vw" /></div>)}
              </div>
              <h2>Nyaman untuk belajar, strategis untuk berinvestasi</h2>
            </div>
            <p className={styles.note}>Gambar merupakan ilustrasi</p>
          </section>

          <section className={styles.collection} id="properties">
            <div className={styles.head}>
              <h2>Tiga tipe unit, 36 rumah</h2>
              <p>Setiap tipe memberi ruang yang efisien, pencahayaan yang baik, dan kesiapan untuk kebutuhan student living.</p>
            </div>
            <div className={styles.unitList}>
              {units.map((u) => (
                <article className={styles.unit} data-snap key={u.name}>
                  <div className={styles.unitImage}>
                    <Image src={u.image} alt={`Fasad tipe ${u.name} Sultana Living`} fill sizes="(max-width: 960px) 100vw, 780px" />
                    <span className={styles.tag}>{u.quantity}</span>
                  </div>
                  <div className={styles.unitInfo}>
                    <h3>Type {u.name}</h3>
                    <p>{u.rooms} · {u.baths} · {u.building}</p>
                    <div className={styles.dim} role="img" aria-label={`Ukuran tanah ${u.lot}`}><span>{u.lot}</span></div>
                    <dl className={styles.unitSpecs}>
                      <div><dt>Luas tanah</dt><dd>{u.land}</dd></div><div><dt>Luas bangunan</dt><dd>{u.building}</dd></div><div><dt>Lantai</dt><dd>{u.floors}</dd></div>
                    </dl>
                    <div className={styles.unitActions}>
                      <a className={styles.unitAsk} href={whatsapp} target="_blank" rel="noreferrer">Tanya unit ini <Arrow /></a>
                      <a className={styles.textLink} href={u.plan} data-plan={`Denah tipe ${u.name}`}>Lihat denah <Arrow /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.ctaCard} data-snap>
              <h3>Tanya ketersediaan unit</h3>
              <a className={styles.outlineCta} href="#contact">Hubungi kami</a>
            </div>
            <div className={styles.specs}>
              <h3>Spesifikasi bangunan</h3>
              <dl>{specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            </div>
          </section>

          <section className={styles.masterplan} id="masterplan">
            <div className={styles.head}><h2>Satu kawasan, satu gerbang</h2><p>Gerbang utama, club house, taman, dan jogging track tersusun dalam satu kawasan dengan one gate system.</p></div>
            <div className={styles.site3}>
              <figure className={styles.mapCard}>
                <div className={styles.typeSwitch} role="group" aria-label="Tandai kavling per tipe unit">
                  {units.map((u) => <button type="button" key={u.name} data-place={u.name} aria-pressed="false"><b>{u.name}</b><span>{u.quantity}</span></button>)}
                </div>
                <div className={styles.mapCrop}>
                  <div className={styles.mapStage}>
                    <Image src="/images/canva/siteplan.jpg" alt="Siteplan Sultana Living: kavling, jalan, dan area hijau dengan penanda A sampai F" width={1400} height={1188} sizes="(max-width: 960px) 100vw, 900px" />
                    <svg className={styles.lots} viewBox="0 0 1400 1188" aria-hidden="true">
                      {Object.entries(lots).map(([name, rects]) => <g key={name} data-pin={name}>{rects.map(([x, y, w, h]) => <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="4" />)}</g>)}
                    </svg>
                    {places.map(([k, , points]) => points.map(([x, y]) => <span key={`${k}${x}`} className={styles.pin} data-pin={k} style={{ left: `${x / 14}%`, top: `${y / 11.88}%` }} aria-hidden="true" />))}
                  </div>
                </div>
                <a className={styles.mapZoom} href="/images/canva/siteplan.jpg" data-plan="Siteplan Sultana Living"><Maximize2 aria-hidden="true" size={16} strokeWidth={2} /> Perbesar siteplan</a>
              </figure>
              <div className={styles.legend}>
                <p>Pilih tipe unit atau tempat untuk menandainya di siteplan.</p>
                <ol>{places.map(([k, name]) => <li key={k}><button type="button" data-place={k} aria-pressed="false"><b>{k}</b>{name}</button></li>)}</ol>
              </div>
            </div>
          </section>

          <section className={styles.facilities} id="amenities">
            <div className={styles.head}><h2>Smart lock, keamanan 24 jam, dan ruang hijau</h2></div>
            <div className={styles.facilityGrid} data-r>
              {facilities.map(({ name, text, image }) => (
                <article className={styles.facility} key={name}>
                  <Image src={image} alt={name} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <div><h3>{name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
            <p className={styles.note}>Fasilitas listrik bawah tanah, akses kartu, dan kawasan ramah lingkungan</p>
          </section>

          <section className={styles.location} id="location">
            <div className={styles.head}><h2>Di kawasan pendidikan Samata</h2><p>Romang Polong, Samata, Gowa. Dekat kawasan kampus utama di Gowa dan Makassar. Perkiraan waktu tempuh dari lokasi:</p></div>
            <div className={styles.locationGrid}>
              <div className={styles.locationImage}>
                <iframe title="Peta lokasi Sultana Living di Romang Polong, Samata, Gowa" src="https://maps.google.com/maps?q=-5.210936,119.500354&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className={styles.nearbyBox}>
                <div className={styles.nearby}>{nearby.map(([n, m]) => <span key={n}>{n}<b>{m} menit</b></span>)}</div>
                <a href="https://maps.google.com/?q=Romang+Polong,+Samata,+Gowa" target="_blank" rel="noreferrer" className={styles.textLink}>Buka peta <Arrow /></a>
              </div>
            </div>
          </section>

          <section className={styles.steps} id="steps">
            <div className={styles.head}><h2>Tiga langkah memiliki unit</h2></div>
            <div className={styles.stepGrid} data-r>
              {steps.map(({ title, text, image }, i) => (
                <article className={styles.step} key={title}>
                  <div className={styles.stepImage}><Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
                  <span className={styles.stepNo}>{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.faq} id="faq">
            <div className={styles.head}><h2>Pertanyaan tentang unit dan kawasan</h2><p>Butuh pembahasan lebih rinci? Tim kami siap membantu.</p></div>
            <div className={styles.faqList}>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
          </section>

          <section className={styles.contact} id="contact">
            <div className={styles.contactPanel}>
              <h2>Tanya ketersediaan unit</h2>
              <p>Hubungi tim marketing Sultana Living untuk ketersediaan dan detail investasi.</p>
              <div className={styles.contactActions}><a className={styles.primaryCta} href={whatsapp} target="_blank" rel="noreferrer">Chat WhatsApp <Arrow /></a><a className={styles.phoneCta} href="tel:+6287785758656">{phone}</a></div>
            </div>
          </section>
        </div>
      </main>

      <dialog className={styles.planDialog} data-plan-dialog aria-label="Denah unit">
        <form method="dialog"><strong data-plan-title /><button aria-label="Tutup"><X aria-hidden="true" size={22} strokeWidth={2} /></button></form>
        {/* eslint-disable-next-line @next/next/no-img-element -- src is set on click */}
        <img alt="" />
      </dialog>

      <a className={styles.floatCall} href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.08.9.92-3-.2-.31A8.2 8.2 0 1 1 12.04 20.1Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7 1.5.65 2.1.7 2.85.59.46-.07 1.46-.6 1.66-1.17.2-.57.2-1.06.14-1.17-.06-.1-.23-.16-.48-.28Z"/></svg></a>

      <footer className={styles.footer}>
        <div className={styles.footerTop}><div className={styles.footerLogos}><Image src="/images/logo.png" alt="Sultana Living" width={140} height={55} /><Image src="/images/logo-balla-sultana.png" alt="PT. Balla Sultana Samata" width={110} height={87} /></div><p>Exclusive Student Living<br />Romang Polong, Samata, Gowa</p><p>Developer: PT. BALLA SULTANA SAMATA<br />Exclusive Design by EDRA Arsitek Indonesia<br />Kerja sama KPR: BTN, BRI, BSI</p></div>
        <p className={styles.legal}>Disclaimer : Seluruh informasi yang dipublikasikan dalam semua halaman presentasi ini disajikan untuk tujuan informasi saja dan bukan merupakan dokumen resmi, pernyataan dan/atau perjanjian yang sah menurut hukum. Informasi tertulis, desain dan/atau gambar yang terdapat dalam presentasi ini bersifat tidak mengikat dan pengembang berhak untuk mengubah atau mengganti/menghapus baik sebagian dan/atau seluruhnya, pada setiap waktu tanpa pemberitahuan sebelumnya. Desain dan/atau gambar yang terdapat dalam presentasi ini bukan menjadi acuan atau dasar pelaksanaan pembangunan dan dasar pelaksanaan transaksi jual beli produk.</p>
        <div className={styles.footerBottom}><span>© 2026 Sultana Living. All rights reserved.</span><a href="mailto:admin@sultanaliving.id">admin@sultanaliving.id</a></div>
      </footer>
    </div>
  );
}
