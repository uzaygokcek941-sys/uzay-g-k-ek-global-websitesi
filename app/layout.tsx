import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uzaygokcek.com"),
  title: "Uzay Gökçek — n8n Automation, AI Agents & Websites for SMBs",
  description:
    "I build n8n automation, AI agents, and websites for small and mid-sized businesses across 15 industries. Delivered in days. You pay after you see it live.",
  keywords: [
    "n8n automation",
    "AI agent",
    "freelance developer",
    "small business automation",
    "website development",
    "AI customer support",
  ],
  openGraph: {
    title: "Uzay Gökçek — AI & Automation for Small Businesses",
    description:
      "n8n automation, AI agents, and websites for SMBs across 15 industries. Fixed price, delivered in days, pay after you see it live.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzay Gökçek — AI & Automation for Small Businesses",
    description:
      "n8n automation, AI agents, and websites for SMBs. Fixed price, delivered in days, pay after you see it live.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
