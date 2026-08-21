import "./globals.css";

export const metadata = {
  title: "Sultana Living — Exclusive Student Living & Investment",
  description:
    "Better Living for Students, Better Value for Investors. Hunian mahasiswa eksklusif berdesain modern di kawasan premium Samata, Gowa. Investasi mulai Rp 170 Jutaan dengan imbal hasil hingga 10%.",
  keywords:
    "sultana living, student housing, investasi properti, kos mahasiswa, samata gowa, exclusive student living, passive income properti",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Sultana Living — Exclusive Student Living & Investment",
    description:
      "Better Living for Students, Better Value for Investors. Hunian mahasiswa eksklusif di Samata, Gowa.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
