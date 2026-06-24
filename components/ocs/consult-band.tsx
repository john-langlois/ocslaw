"use client";

import { images } from "@/lib/constants";
import { consult } from "@/lib/scroll";
import { FadeIn } from "./animated";

export function OCSConsultBand() {
  return (
    <section className="ocs3-band on-dark">
      <img className="ocs3-band-img" src={images.ctaBg} alt="" />
      <div className="ocs3-band-scrim" />
      <div className="ocs-grain" />
      <div className="cf-container ocs3-band-inner">
        <FadeIn>
          <h2 className="ocs3-band-title">Not sure where to begin?</h2>
          <p className="ocs3-band-sub">
            Most matters touch more than one area of law. Tell us what you&apos;re facing,
            and we&apos;ll map the path forward together.
          </p>
          <button className="cf-btn cf-btn-cream cf-btn-lg" onClick={() => consult()}>
            Start the conversation
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
