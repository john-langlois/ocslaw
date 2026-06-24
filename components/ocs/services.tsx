"use client";

import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/services";
import { consult } from "@/lib/scroll";
import { FadeIn } from "./animated";

export function OCSServices() {
  return (
    <section className="ocs3-services" id="services">
      <div className="cf-container">
        <div className="ocs3-svc-layout">
          <FadeIn className="ocs3-svc-intro">
            <h2 className="ocs3-h2">Built around the well-being of your business.</h2>
            <p className="ocs3-body">
              The core of the commercial world revolves around well-being, the foundation
              for building and sustaining a prosperous business. Our firm was established
              to collaborate closely with you, addressing your requirements and facilitating
              the achievement of your commercial objectives.
            </p>
            <p className="ocs3-body">
              Twelve practice areas, one point of contact. Explore any matter below, or
              tell us what you&apos;re facing and we&apos;ll point the way.
            </p>
            <button className="cf-btn cf-btn-ink cf-btn-lg ocs3-svc-intro-cta" onClick={() => consult()}>
              Book a consultation
            </button>
          </FadeIn>

          <div className="ocs3-svc-list">
            {SERVICE_GROUPS.map((g, gi) => (
              <FadeIn key={g.label} className="ocs3-svc-group" delay={gi * 0.06}>
                <span className="eyebrow ocs3-svc-group-label">{g.label}</span>
                <ul className="ocs3-svc-rows">
                  {g.services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="ocs3-svc-row">
                        <span className="ocs3-svc-row-title">{s.title}</span>
                        <span className="ocs3-svc-row-more">
                          Discover more
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path
                              d="M2 8h11M9 3.5L13.5 8 9 12.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
