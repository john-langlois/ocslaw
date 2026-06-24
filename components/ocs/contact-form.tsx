"use client";

import { useEffect, useState } from "react";
import { ALL_SERVICES, CONSULT_EVENT } from "@/lib/data";

type ContactFormProps = {
  defaultService?: string;
  className?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const emptyForm = (service = ""): FormState => ({
  name: "",
  email: "",
  phone: "",
  service,
  message: "",
});

export function ContactForm({ defaultService = "", className = "" }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(() => emptyForm(defaultService));
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm((current) => ({ ...current, service: defaultService }));
  }, [defaultService]);

  useEffect(() => {
    const onConsult = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail || "";
      setForm((current) => ({ ...current, service: detail }));
      setSent(false);
      setError("");
    };
    window.addEventListener(CONSULT_EVENT, onConsult);
    return () => window.removeEventListener(CONSULT_EVENT, onConsult);
  }, []);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  if (sent) {
    return (
      <div className={`cf-sent ${className}`.trim()}>
        <h3 className="cf-modal-title">Message received.</h3>
        <p className="cf-modal-sub">
          Thank you. We&apos;ll reach out within one business day to discuss your matter.
        </p>
        <button
          className="cf-btn cf-btn-ink"
          onClick={() => {
            setSent(false);
            setForm(emptyForm(defaultService));
            setError("");
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      className={`cf-form ${className}`.trim()}
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });

          const data = (await response.json().catch(() => null)) as { error?: string } | null;

          if (!response.ok) {
            throw new Error(data?.error || "Unable to send your message. Please try again.");
          }

          setSent(true);
        } catch (submitError) {
          setError(
            submitError instanceof Error
              ? submitError.message
              : "Unable to send your message. Please try again.",
          );
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="cf-form-row">
        <label className="cf-field">
          <span>Full name</span>
          <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            disabled={loading}
          />
        </label>
        <label className="cf-field">
          <span>Email</span>
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            disabled={loading}
          />
        </label>
      </div>
      <div className="cf-form-row">
        <label className="cf-field">
          <span>Phone (optional)</span>
          <input
            type="tel"
            placeholder="+1 (___) ___-____"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            disabled={loading}
          />
        </label>
        <label className="cf-field">
          <span>What does this concern?</span>
          <select
            className="ocs3-select"
            value={form.service}
            onChange={(e) => updateField("service", e.target.value)}
            disabled={loading}
          >
            <option value="">General inquiry</option>
            {ALL_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="cf-field">
        <span>Tell us about your matter</span>
        <textarea
          required
          rows={4}
          placeholder="A few words about your situation, timelines, and what a good outcome looks like..."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          disabled={loading}
        />
      </label>
      {error ? <p className="ocs3-form-error">{error}</p> : null}
      <button className="cf-btn cf-btn-ink cf-btn-lg" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send message"}
      </button>
      <p className="ocs3-form-note">
        Confidential. Your message goes directly to our team.
      </p>
    </form>
  );
}
