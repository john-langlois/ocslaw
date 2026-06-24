import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmailHtml, parseContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "info@ocslaw.ca";

  if (!apiKey || !from) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parseContactPayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Please check your form and try again." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = payload.service
    ? `New inquiry: ${payload.service}`
    : "New inquiry: General";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject,
    html: buildContactEmailHtml(payload),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Unable to send your message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
