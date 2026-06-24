"use client";

import { useEffect, useRef } from "react";
import { images } from "@/lib/constants";
import { consult } from "@/lib/scroll";

const HERO_LINES = ["Your business", "success is our", "primary focus."];

export function OCSHero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const scroller = document.querySelector(".kit-scroll");
    if (!scroller) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (imgRef.current) {
        const y = Math.min(scroller.scrollTop, window.innerHeight);
        imgRef.current.style.transform = `translateY(${y * 0.28}px) scale(1.06)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="ocs3-hero" id="top">
      <img ref={imgRef} className="ocs3-hero-img" src={images.heroBg} alt="" />
      <div className="ocs3-hero-scrim" />
      <div className="ocs-grain" />
      <div className="ocs3-hero-content">
        <h1 className="ocs3-hero-title">
          {HERO_LINES.map((line, i) => (
            <span key={line} className="ocs3-hero-line">
              <span style={{ animationDelay: `${0.15 + i * 0.13}s` }}>{line}</span>
            </span>
          ))}
        </h1>
        <div className="ocs3-hero-foot">
          <p className="ocs3-hero-sub">
            Full-service commercial law in London, Ontario, with over 15 years of guiding
            businesses through legal matters with clarity and confidence.
          </p>
          <div className="ocs3-hero-ctas">
            <button className="cf-btn cf-btn-cream cf-btn-lg" onClick={() => consult()}>
              Book a consultation
            </button>
            <a href="#services" className="cf-btn cf-btn-lg ocs3-btn-ghost">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
