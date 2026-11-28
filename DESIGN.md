---
name: Sultana Living
description: Landing hunian mahasiswa di Samata, Gowa, bergaya Cabin: hero penuh layar, sheet putih, serif besar, olive dan emas.
colors:
  stone: "#ecece8"
  sheet: "#ffffff"
  olive-900: "#25321a"
  olive-800: "#2f3e20"
  olive-700: "#43592a"
  gold: "#d6a233"
  gold-ink: "#7a5710"
  ink: "#1b221c"
  muted: "#566052"
  line: "#dcded6"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "4rem"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "12px"
  md: "28px"
  lg: "40px"
  pill: "999px"
spacing:
  sm: "16px"
  md: "48px"
  lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.olive-900}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-dark:
    backgroundColor: "{colors.olive-900}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
---

# Sultana Living

## Overview
Product: hunian mahasiswa dan investasi di Samata, Gowa. Pembuka berupa foto gerbang layar penuh yang tetap di tempat, dengan satu kata serif raksasa yang bergantian (Tinggal, Belajar, Berinvestasi). Sheet putih bersudut 40px naik menutupinya. Strukturnya mengikuti Cabin sebagai acuan, bukan salinan.

## Colors
Latar halaman `stone`, sheet putih, panel gelap `olive-900`. Perpaduan olive green dan emas: `olive-500` (#5b7a2a) untuk tombol di header dan angka; `gold` untuk tombol utama, garis, panah, dan judul di panel gelap; `gold-ink` untuk teks emas di atas putih (kontras 4.5:1). Logo Sultana tidak diwarnai ulang.

## Typography
Gloock untuk semua judul (hanya bobot 400), Figtree untuk isi. Judul tidak melewati 6rem. Tidak ada kicker di atas judul.

## Layout
Hero tetap, sheet menutupnya (`heroSpace` setinggi layar dikurangi 48px). Isi hero: judul tetap "Hunian Mahasiswa" + kata emas bergantian, satu kalimat, tombol emas "Tanya ketersediaan unit" + tombol garis "Lihat tipe unit". Gradasi paling gelap di belakang teks (kiri di desktop, bawah di ponsel); tombol WA melayang disembunyikan selama di hero. Isi sheet maks 1280px. Tipe unit: satu panel setinggi layar per tipe, satu kali scroll berpindah satu tipe (CSS scroll-snap di layar sentuh, `snapStep.mjs` untuk roda mouse dan trackpad). Layar lebih pendek dari 560px mengalir biasa.

## Elevation & Depth
Hampir datar. Bayangan hanya pada header dan tombol mengambang.

## Shapes
Radius hanya tiga: 16px (permukaan kecil), 28px (kartu, foto, panel), dan pil untuk tombol. Skala huruf 13, 14, 16, 18, 24, 32, 40px ditambah judul clamp; jarak kelipatan 4px, header berbentuk pil setelah di-scroll.

## Components
Header satu pil liquid glass bening gaya iOS 26 (tint putih .38, blur 10px, saturasi tinggi, tepi specular; menu layar penuh di bawah 1024px); di hero hanya latarnya yang hilang, logo dan tautan tetap tampil putih. Footer "Meadow Rise" (komponen kiriman pemilik, versi JS): ajakan penutup di atas perbukitan olive dan emas yang digambar di canvas, lalu identitas, navigasi, kontak, baris mitra (Balla Sultana, EDRA, logo BTN/BRI/BSI tanpa kotak; EDRA dan bank satu warna terang lewat CSS, file asli tidak diubah, logo developer tetap emas), dan disclaimer di tanah olive gelap. Panel kontak terpisah sudah digabung ke sini; tanpa form email. Isi lain: foto besar yang membesar saat di-scroll, kolase miring yang meluruskan diri, kartu unit dengan garis dimensi, daftar fasilitas foto, tabel jarak.

## Do's and Don'ts
- Do: konten terbaca tanpa JS; gerak scroll mati saat reduced motion.
- Do: beri label "ilustrasi" pada render.
- Don't: tambah aksen kedua, kartu bersarang, kicker, atau testimoni dan harga yang tidak ada.

Section tur kawasan (judul brosur "Investasi bernilai tinggi di kawasan strategis Samata"): render/garden.jpg satu layar penuh dengan tiga penanda bernomor (posisi dalam persen foto), panel judul, daftar, tombol WA dan siteplan. Di bawah 901px foto di atas, panel di bawahnya.

Kepadatan (audit tasteskill): jarak antar-section 80px desktop dan 56px ponsel. Semua ajakan menghubungi berlabel "Tanya ketersediaan unit". Intro dua kolom, FAQ dua kolom. Spesifikasi: foto fasad r4.jpg di kiri, tiga kelompok tanpa kartu di kanan; judul kelompok memakai garis ukuran.
