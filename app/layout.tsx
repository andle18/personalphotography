import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Andres Gomes | Photography Portfolio",
    template: "%s | Andres Gomes",
  },
  description:
    "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.",
  applicationName: "Andres Gomes Portfolio",
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
    description:
      "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.",
    siteName: "Andres Gomes Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres Gomes | Photography Portfolio",
    description:
      "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.",
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
