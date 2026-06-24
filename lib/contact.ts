export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { name, email, phone, service, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || trimmedName.length > 120) return null;
  if (!trimmedEmail || trimmedEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return null;
  }
  if (!trimmedMessage || trimmedMessage.length > 5000) return null;

  const trimmedPhone = typeof phone === "string" ? phone.trim().slice(0, 40) : "";
  const trimmedService = typeof service === "string" ? service.trim().slice(0, 120) : "";

  return {
    name: trimmedName,
    email: trimmedEmail,
    phone: trimmedPhone || undefined,
    service: trimmedService || undefined,
    message: trimmedMessage,
  };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactEmailHtml(payload: ContactPayload): string {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Practice area", payload.service || "General inquiry"],
    ["Message", payload.message],
  ];

  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#898379;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 0;color:#100f0d;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#100f0d;line-height:1.5;">
      <p style="margin:0 0 16px;">New contact form submission from ocslaw.ca</p>
      <table style="border-collapse:collapse;">${body}</table>
    </div>
  `.trim();
}
