"use client";

import Link from "next/link";
import type { Service } from "@/lib/services";
import { ContactSectionCompact } from "./contact-section";
import { FAQ } from "./faq";
import { FadeIn } from "./animated";

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      <section className="ocs3-service-page">
        <div className="cf-container">
          <FadeIn className="ocs3-service-page-inner">
            <Link href="/#services" className="ocs3-service-back eyebrow">
              ← All practice areas
            </Link>
            <span className="eyebrow ocs3-service-group">{service.group}</span>
            <h1 className="ocs3-h1">{service.title}</h1>
            <p className="ocs3-body ocs3-service-lead">{service.description}</p>
          </FadeIn>
        </div>
      </section>

      <section className="ocs3-service-faq">
        <div className="cf-container">
          <FadeIn className="ocs3-service-faq-inner">
            <h2 className="ocs3-h2">Frequently asked questions</h2>
            <FAQ items={service.faqs} />
          </FadeIn>
        </div>
      </section>

      <ContactSectionCompact defaultService={service.title} />
    </>
  );
}
