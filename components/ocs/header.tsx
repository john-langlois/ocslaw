"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/data";
import { SERVICE_GROUPS } from "@/lib/services";
import { consult } from "@/lib/scroll";

export function OCSHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onLightPage = pathname !== "/";

  useEffect(() => {
    const scroller = document.querySelector(".kit-scroll");
    if (!scroller) return;
    const onScroll = () => setScrolled(scroller.scrollTop > 24);
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const scroller = document.querySelector(".kit-scroll") as HTMLElement | null;
    if (!scroller) return;

    if (mobileOpen) {
      scroller.style.overflow = "hidden";
    } else {
      scroller.style.overflow = "";
    }

    return () => {
      scroller.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const handleConsult = () => {
    closeMobile();
    consult();
  };

  return (
    <header
      className={`cf-header${onLightPage ? " on-light" : ""}${scrolled || mobileOpen ? " is-scrolled" : ""}${mobileOpen ? " menu-open" : ""}`}
    >
      <div className="cf-header-inner">
        <Link className="cf-logo" href="/" onClick={closeMobile}>
          OCS Law
        </Link>

        <nav className="cf-nav" aria-label="Main">
          {NAV_ITEMS.map((n) => (
            <Link key={n.label} className="cf-nav-link" href={n.href}>
              {n.label}
            </Link>
          ))}
          <div
            className={`cf-nav-dropdown${servicesOpen ? " is-open" : ""}`}
            ref={dropdownRef}
          >
            <button
              type="button"
              className="cf-nav-link cf-nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="cf-nav-dropdown-menu">
              <div className="cf-nav-dropdown-columns">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.label} className="cf-nav-dropdown-col">
                    <span className="cf-nav-dropdown-label">{g.label}</span>
                    <ul className="cf-nav-dropdown-list">
                      {g.services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className={`cf-nav-dropdown-link${
                              pathname === `/services/${s.slug}` ? " is-active" : ""
                            }`}
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <button className="cf-btn cf-btn-cream cf-header-cta" onClick={() => consult()}>
          Book a consultation
        </button>

        <button
          type="button"
          className={`cf-nav-mobile-toggle${mobileOpen ? " is-open" : ""}`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`cf-nav-mobile${mobileOpen ? " is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!mobileOpen}
      >
        <div className="cf-nav-mobile-inner">
          {NAV_ITEMS.map((n) => (
            <Link
              key={n.label}
              className="cf-nav-mobile-link"
              href={n.href}
              onClick={closeMobile}
            >
              {n.label}
            </Link>
          ))}
          <Link className="cf-nav-mobile-link" href="/#services" onClick={closeMobile}>
            Services
          </Link>
          <button className="cf-btn cf-btn-cream cf-btn-lg cf-nav-mobile-cta" onClick={handleConsult}>
            Book a consultation
          </button>
        </div>
      </nav>
    </header>
  );
}
