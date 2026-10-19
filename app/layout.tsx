import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/*
  Font setup via next/font/google:
  - Downloads fonts at build time, serves them from your own domain.
  - Zero layout shift (CLS = 0) because the font is ready before paint.
  - The `.variable` property exposes a CSS custom property (--font-geist-sans)
    that globals.css maps to --font-sans in the @theme block.
*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/*
  Metadata is the Next.js way to set <head> content.
  This populates the browser tab title, search engine snippets,
  and social sharing cards (Open Graph / Twitter).
  
  ──────────────────────────────────────────────────
  TODO: Replace all placeholder values below with your real information.
  ──────────────────────────────────────────────────
*/
export const metadata: Metadata = {
  // Browser tab + search result title
  title: {
    default: "Christina Penheiro — Full-Stack Developer",
    template: "%s | Christina Penheiro",
  },
  // Search engine description (aim for 150–160 chars)
  description:
    "Aspiring full-stack web developer building modern, accessible web experiences with Next.js, TypeScript, and React.",

  // Canonical URL — used by search engines to avoid duplicate-content issues
  // Replace with your real Vercel domain or custom domain after deployment
  metadataBase: new URL("https://yourname.vercel.app"), // ← replace

  // Open Graph — controls how the page looks when shared on LinkedIn, Slack, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://christinapenheiro.vercel.app",
    siteName: "Christina Penheiro Portfolio",
    title: "Christina Penheiro — Full-Stack Developer",
    description:
      "Aspiring full-stack web developer building modern, accessible web experiences with Next.js, TypeScript, and React.",
    images: [
      {
        url: "/og-image.png",       // place a 1200×630 image here in /public
        width: 1200,
        height: 630,
        alt: "Your Name — Developer Portfolio",        // ← replace Your Name
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Christina Penheiro — Full-Stack Developer",
    description:
      "Aspiring full-stack web developer building modern web experiences.",
    images: ["/og-image.png"],
  },

  // Robots: allow all crawlers to index this page
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      {/*
        We do NOT add <head> here — Next.js manages it via the metadata export.
        Adding manual <head> tags breaks streaming and causes duplicate meta tags.
      */}
      <body>{children}</body>
    </html>
  );
}
