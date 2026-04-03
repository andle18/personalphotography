import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { siteDescription, siteUrl, socialPreviewImage } from "./data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andres Gomes | Photography Portfolio",
    template: "%s | Andres Gomes",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description: siteDescription,
  applicationName: "Andres Gomes Portfolio",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Andres Gomes" }],
  creator: "Andres Gomes",
  keywords: [
    "Andres Gomes",
    "photography portfolio",
    "travel photography",
    "street photography",
    "motorsport photography",
    "wildlife photography",
  ],
  openGraph: {
    title: "Andres Gomes | Photography Portfolio",
    description: siteDescription,
    siteName: "Andres Gomes Portfolio",
    type: "website",
    url: "/",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "Portrait preview for Andres Gomes photography portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres Gomes | Photography Portfolio",
    description: siteDescription,
    images: [socialPreviewImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
