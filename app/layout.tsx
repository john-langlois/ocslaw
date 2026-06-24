import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@/components/google-tag-manager";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCS Law | Commercial Law Firm",
  description:
    "Full-service commercial law firm in London, Ontario, with over 15 years guiding businesses through legal matters with clarity and confidence.",
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
