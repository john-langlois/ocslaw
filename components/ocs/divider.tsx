"use client";

import { useEffect, useRef } from "react";

type OCSDividerProps = {
  src: string;
  caption?: string;
  height?: number;
};

export function OCSDivider({ src, caption, height = 440 }: OCSDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const scroller = document.querySelector(".kit-scroll");
    if (!scroller) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!ref.current || !imgRef.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      imgRef.current.style.transform = `translateY(${(p - 0.5) * -72}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="ocs3-divider" style={{ height }}>
      <img ref={imgRef} src={src} alt={caption || ""} />
      <div className="ocs3-divider-scrim" />
      {caption && <span className="ocs3-divider-caption">{caption}</span>}
    </div>
  );
}
