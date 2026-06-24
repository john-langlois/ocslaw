"use client";

export function getScroller(): Element | null {
  return document.querySelector(".kit-scroll");
}

export function scrollToSection(id: string) {
  const scroller = getScroller();
  const el = document.getElementById(id);
  if (!scroller || !el) return;
  const top = scroller.scrollTop + el.getBoundingClientRect().top - 64;
  scroller.scrollTo({ top, behavior: "smooth" });
}

export function consult(service = "") {
  window.dispatchEvent(new CustomEvent("ocs-consult", { detail: service }));
  scrollToSection("contact");
}
