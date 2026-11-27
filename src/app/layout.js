import "./globals.css";
import { Gloock, Figtree } from "next/font/google";

const display = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.sultanaliving.id"),
  alternates: { canonical: "/" },
  title: "Sultana Living | Student Living di Samata, Gowa",
  description:
    "Hunian student living modern di Samata, Gowa. Dirancang untuk kenyamanan mahasiswa dan nilai properti jangka panjang.",
  keywords:
    "sultana living, student housing, investasi properti, kos mahasiswa, samata gowa, exclusive student living, passive income properti",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Sultana Living | Student Living di Samata, Gowa",
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
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
