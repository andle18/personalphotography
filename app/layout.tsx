import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const socialPreviewId = process.env.NEXT_PUBLIC_SOCIAL_PREVIEW_ID;
const socialPreviewImage =
  cloudinaryCloudName && socialPreviewId
    ? `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/${socialPreviewId.replace(/^\/+/, "")}`
    : "/social-preview.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andres Gomes | Photography Portfolio",
    template: "%s | Andres Gomes",
  },
  description:
    "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.",
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
    description:
      "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.",
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
    description:
      "Photography portfolio featuring travel, street, motorsport, and wildlife work by Andres Gomes.",
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
