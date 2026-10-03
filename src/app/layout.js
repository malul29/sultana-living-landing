import "./globals.css";
import { Outfit, Geist } from "next/font/google";

// Display: Outfit. Body and UI: Geist. Neither ships an italic, so emphasis uses colour.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.sultanaliving.id"),
  alternates: { canonical: "/" },
  title: "Sultana Living - Exclusive Student Living & Investment",
  description:
    "Better Living for Students, Better Value for Investors. Hunian mahasiswa eksklusif berdesain modern di kawasan premium Samata, Gowa. Investasi mulai Rp 170 Jutaan dengan imbal hasil hingga 10%.",
  keywords:
    "sultana living, student housing, investasi properti, kos mahasiswa, samata gowa, exclusive student living, passive income properti",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Sultana Living - Exclusive Student Living & Investment",
    description:
      "Better Living for Students, Better Value for Investors. Hunian mahasiswa eksklusif di Samata, Gowa.",
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Sultana Living",
    images: [{ url: "/images/gate.png", alt: "Gerbang masuk Sultana Living" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/gate.png"],
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${outfit.variable} ${geist.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
