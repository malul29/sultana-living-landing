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
Hero tetap, sheet menutupnya (`heroSpace` setinggi layar dikurangi 48px). Isi sheet maks 1280px. Tipe unit: satu panel setinggi layar per tipe, satu kali scroll berpindah satu tipe (CSS scroll-snap di layar sentuh, `snapStep.mjs` untuk roda mouse dan trackpad). Layar lebih pendek dari 560px mengalir biasa.

## Elevation & Depth
Hampir datar. Bayangan hanya pada header dan tombol mengambang.

## Shapes
Foto dan panel bersudut 28 sampai 40px, tombol berbentuk pil, header bersudut bawah 28px.

## Components
Header putih, foto besar yang membesar saat di-scroll, kolase miring yang meluruskan diri, kartu unit dengan garis dimensi, daftar fasilitas foto, tabel jarak, panel kontak gelap, footer gelap berisi logo Sultana dan PT Balla Sultana.

## Do's and Don'ts
- Do: konten terbaca tanpa JS; gerak scroll mati saat reduced motion.
- Do: beri label "ilustrasi" pada render.
- Don't: tambah aksen kedua, kartu bersarang, kicker, atau testimoni dan harga yang tidak ada.
