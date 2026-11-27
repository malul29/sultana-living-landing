"use client";

import { useEffect } from "react";
import { snapStep } from "./snapStep.mjs";

// Scroll-linked motion: hero fade, photo grow, collage straighten, reveal, count-up, header state, nav scroll-spy, plan popup, siteplan markers.
// Content stays visible without JS.
export default function Interactions({ rootId }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clamp = (n) => Math.min(Math.max(n, 0), 1);
    const hero = root.querySelector("[data-hero]");
    const tracked = [...root.querySelectorAll("[data-p]")];

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      root.toggleAttribute("data-scrolled", window.scrollY > 24);
      if (hero) {
        hero.style.setProperty("--h", clamp(window.scrollY / vh).toFixed(3));
        hero.toggleAttribute("data-past", window.scrollY > vh * 1.1);
      }
      if (still) return;
      tracked.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = clamp((vh - r.top) / (vh + r.height));
        el.style.setProperty("--p", p.toFixed(3));
        el.style.setProperty("--e", clamp(p * 2.4).toFixed(3));
      });
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    const count = (el) => {
      const end = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / 900, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    let reveal;
    if ("IntersectionObserver" in window && !still) {
      reveal = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute("data-shown", "");
          e.target.querySelectorAll("[data-count]").forEach(count);
          reveal.unobserve(e.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      root.setAttribute("data-js", "");
      root.querySelectorAll('main section > *, main [data-r] > *').forEach((el) => {
        if (el.hasAttribute("data-p") || el.getBoundingClientRect().top <= window.innerHeight) return;
        el.setAttribute("data-reveal", "");
        reveal.observe(el);
      });
    }

    const links = [...root.querySelectorAll("header nav a")];
    let spy;
    if ("IntersectionObserver" in window) {
      spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.toggleAttribute("data-active", a.getAttribute("href") === `#${e.target.id}`));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      root.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
    }

    // One scroll, one unit. Touch uses native CSS snap; mouse wheel and trackpad are stepped here,
    // because proximity snap pulls a single wheel notch back to the same panel.
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (touch) document.documentElement.style.scrollSnapType = "y proximity";
    const panels = [...root.querySelectorAll("[data-snap]")];
    let lastWheel = 0;
    let lockUntil = 0;
    let locked = false;
    const onWheel = (e) => {
      const now = performance.now();
      const gap = now - lastWheel;
      lastWheel = now;
      // Stay locked until the gesture ends, so trackpad momentum cannot skip a unit.
      if (locked) {
        if (now < lockUntil || gap < 180) return e.preventDefault();
        locked = false;
      }
      const vh = window.innerHeight;
      if (e.ctrlKey || !panels.length || vh < 560 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.target.closest?.("dialog")) return;
      const points = panels.map((el) => Math.round(el.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(el).scrollMarginTop) || 0)));
      const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      const target = snapStep(points, window.scrollY, delta, vh);
      if (target === null) return;
      e.preventDefault();
      locked = true;
      lockUntil = now + 600;
      window.scrollTo({ top: target, behavior: still ? "auto" : "smooth" });
    };
    if (!touch) window.addEventListener("wheel", onWheel, { passive: false });

    // Without JS or <dialog> support the link just opens the plan in the same tab.
    const dialog = root.querySelector("[data-plan-dialog]");
    const onPlan = (e) => {
      if (e.target === dialog) return dialog.close(); // backdrop click
      const place = e.target.closest("button[data-place]");
      if (place) {
        const key = place.getAttribute("aria-pressed") === "true" ? null : place.dataset.place;
        root.querySelectorAll("button[data-place]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.place === key)));
        root.querySelectorAll("[data-pin]").forEach((pin) => pin.toggleAttribute("data-on", pin.dataset.pin === key));
        return;
      }
      const a = e.target.closest("a[data-plan]");
      if (!a || !dialog?.showModal) return;
      e.preventDefault();
      const img = dialog.querySelector("img");
      img.src = a.href;
      img.alt = a.dataset.plan;
      dialog.querySelector("[data-plan-title]").textContent = a.dataset.plan;
      dialog.showModal();
    };
    root.addEventListener("click", onPlan);

    return () => {
      document.documentElement.style.scrollSnapType = "";
      window.removeEventListener("wheel", onWheel);
      root.removeEventListener("click", onPlan);
      window.removeEventListener("scroll", onScroll);
      reveal?.disconnect();
      spy?.disconnect();
    };
  }, [rootId]);
  return null;
}
