"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Stats from "@/components/Stats/Stats";
import Properties from "@/components/Properties/Properties";
import Amenities from "@/components/Amenities/Amenities";
import Location from "@/components/Location/Location";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Masterplan from "@/components/Masterplan/Masterplan";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <Intro onComplete={() => setIntroFinished(true)} />
      
      {/* 
        We render the main content immediately but keep it invisible until the preloader starts sliding away.
        This allows Next.js to pre-render the elements, prevent flash of unstyled content (FOUC), and allows 
        Framer Motion animations to trigger smoothly exactly when the preloader ends.
      */}
      <div style={{ opacity: introFinished ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Properties />
          <Masterplan />
          <Amenities />
          <Location />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
