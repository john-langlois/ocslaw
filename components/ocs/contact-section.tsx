"use client";

import Link from "next/link";
import { CONTACT_INFO } from "@/lib/data";
import { FadeIn } from "./animated";
import { ContactForm } from "./contact-form";

type ContactSectionProps = {
  defaultService?: string;
  id?: string;
};

export function ContactSection({ defaultService = "", id = "contact" }: ContactSectionProps) {
  return (
    <section className="ocs3-contact" id={id}>
      <div className="cf-container">
        <div className="ocs3-contact-grid">
          <div className="ocs3-contact-left">
            <FadeIn>
              <h2 className="ocs3-h1">Let&apos;s start the conversation.</h2>
              <p className="ocs3-body" style={{ marginTop: 20, maxWidth: 380 }}>
                Tell us about your matter and we&apos;ll respond within one business day.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <dl className="ocs3-info-list">
                {CONTACT_INFO.map((item) => (
                  <div key={item.k} className="ocs3-info-row">
                    <dt className="eyebrow">{item.k}</dt>
                    <dd>
                      {"href" in item && item.href ? (
                        <a href={item.href}>{item.v[0]}</a>
                      ) : (
                        item.v.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          <FadeIn className="ocs3-form-card" delay={0.15}>
            <ContactForm defaultService={defaultService} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ContactSectionCompact({ defaultService = "" }: { defaultService?: string }) {
  return (
    <section className="ocs3-contact ocs3-contact-compact" id="contact">
      <div className="cf-container">
        <FadeIn className="ocs3-contact-compact-inner">
          <h2 className="ocs3-h2">Ready to talk?</h2>
          <p className="ocs3-body">
            Send us a message and we&apos;ll respond within one business day.{" "}
            <Link href="/#contact" className="cf-link" style={{ color: "var(--ink)" }}>
              View all contact details
            </Link>
          </p>
          <div className="ocs3-form-card ocs3-form-card-inline">
            <ContactForm defaultService={defaultService} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
