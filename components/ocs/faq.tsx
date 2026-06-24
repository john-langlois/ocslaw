"use client";

import { useState } from "react";
import type { ServiceFAQ } from "@/lib/services";
import { FadeIn } from "./animated";

type FAQProps = {
  items: ServiceFAQ[];
};

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="ocs3-faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <FadeIn key={item.q} delay={i * 0.05}>
            <div className={`ocs3-faq-item${isOpen ? " is-open" : ""}`}>
              <button
                className="ocs3-faq-q"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                {item.q}
                <span className="ocs3-faq-sign" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div className="ocs3-faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
