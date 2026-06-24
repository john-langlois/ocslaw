"use client";

import { images } from "@/lib/constants";
import { TEAM } from "@/lib/data";
import { FadeIn } from "./animated";

export function OCSTeam() {
  return (
    <section className="ocs3-team" id="team">
      <div className="cf-container">
        <FadeIn>
          <h2 className="ocs3-h1">The people behind OCS Law.</h2>
        </FadeIn>
        <div className="ocs3-team-grid">
          {TEAM.map((m, i) => (
            <FadeIn key={m.name} className="ocs3-team-card" delay={i * 0.12}>
              <div className="ocs3-team-photo">
                <img src={images[m.imgKey]} alt={m.name} />
              </div>
              <div className="ocs3-team-info">
                <h3 className="ocs3-team-name">{m.name}</h3>
                <span className="eyebrow" style={{ marginTop: 8, display: "block" }}>
                  {m.role}
                </span>
                <p className="ocs3-body" style={{ marginTop: 14 }}>
                  {m.bio}
                </p>
                <div className="ocs3-team-links">
                  <a href={`mailto:${m.email}`} className="ocs3-pill">
                    {m.email}
                  </a>
                  <a
                    href={m.linkedin}
                    className="ocs3-pill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
