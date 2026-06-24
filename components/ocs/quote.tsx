"use client";

import { images } from "@/lib/constants";
import { STATS } from "@/lib/data";
import { AnimatedNumber, FadeIn } from "./animated";

export function OCSQuote() {
  return (
    <section className="ocs3-quote on-dark" id="about">
      <div className="ocs-grain" />
      <div className="cf-container">
        <FadeIn className="ocs3-quote-grid">
          <div className="ocs3-quote-media">
            <img src={images.osvaldoMain} alt="Osvaldo C. Sousa" />
          </div>
          <div className="ocs3-quote-body">
            <blockquote className="ocs3-quote-text">
              We established this firm to collaborate closely with each client, addressing
              unique business requirements and facilitating the achievement of commercial
              objectives with clarity and care.
            </blockquote>
            <div className="ocs3-quote-attr">
              <span className="ocs3-quote-name">Osvaldo C. Sousa</span>
              <span className="ocs3-quote-role">Founder, OCS Law</span>
            </div>
          </div>
        </FadeIn>

        <div className="ocs3-quote-stats">
          <div className="ocs3-stats-row">
            {STATS.map((s, i) => (
              <FadeIn key={s.t} className="ocs3-stat" delay={i * 0.12}>
                <div className="ocs3-stat-n">
                  <AnimatedNumber value={s.n} suffix={s.suffix} />
                </div>
                <p className="ocs3-stat-t">{s.t}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
