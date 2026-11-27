"use client";

import { useEffect, useState } from "react";
import PopupFlyer from "@/components/PopupFlyer/PopupFlyer";
import GlassIconReveal, { revealDuration } from "@/components/ui/liquid-glass-logo-reveal";

const BG = "#25321a";
const TUNING = { present: 2.2, startZoom: 1.7 };
const SHOW_MS = (revealDuration({ present: TUNING.present }) + 0.4) * 1000;

// Web intro: the Sultana mark appears through a glass tile, then the cover takes over.
// Shown once per session; skipped for reduced motion, no WebGL2, or when the page is reopened.
export default function Intro() {
  const [phase, setPhase] = useState("init"); // init | show | leave | done

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("sl-intro") === "1"; } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = document.createElement("canvas").getContext("webgl2");
    if (seen || reduce || !gl) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only check, must run after mount
      setPhase("done");
      return;
    }
    try { sessionStorage.setItem("sl-intro", "1"); } catch {}
    setPhase("show");
  }, []);

  useEffect(() => {
    if (phase === "init" || phase === "done") return;
    if (phase === "show") {
      document.documentElement.style.overflow = "hidden";
      const t = setTimeout(() => setPhase("leave"), SHOW_MS);
      return () => clearTimeout(t);
    }
    document.documentElement.style.overflow = "";
    const t = setTimeout(() => setPhase("done"), 700);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => () => { document.documentElement.style.overflow = ""; }, []);

  if (phase === "init") return null;
  if (phase === "done") return <PopupFlyer introFinished />;
  return (
    <div
      role="presentation"
      onClick={() => setPhase("leave")}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: BG, cursor: "pointer", opacity: phase === "leave" ? 0 : 1, transition: "opacity .7s cubic-bezier(.2,.8,.2,1)", pointerEvents: phase === "leave" ? "none" : "auto" }}
    >
      <GlassIconReveal
        logo="/images/logo.png"
        label="Sultana Living"
        look="dark"
        background={BG}
        plateColor="#1b2512"
        originalColors
        loop={false}
        tuning={TUNING}
        style={{ position: "absolute", inset: 0 }}
      />
      <span style={{ position: "absolute", left: 0, right: 0, bottom: 28, textAlign: "center", color: "rgba(255,255,255,.7)", fontSize: 14, fontFamily: "var(--font-body), system-ui, sans-serif" }}>Ketuk untuk melewati</span>
    </div>
  );
}
