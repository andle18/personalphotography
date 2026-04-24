import type { Metadata } from "next";
import Link from "next/link";
import WorkGalleryRail from "../components/WorkGalleryRail";
import { socialPreviewImage } from "../data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse selected photography series by Andres Gomes across travel, street, motorsport, and wildlife.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Andres Gomes",
    description:
      "Browse selected photography series by Andres Gomes across travel, street, motorsport, and wildlife.",
    url: "/work",
    type: "website",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "Preview of Andres Gomes work portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Andres Gomes",
    description:
      "Browse selected photography series by Andres Gomes across travel, street, motorsport, and wildlife.",
    images: [socialPreviewImage],
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black/55 text-white">
      <div className="mx-auto max-w-6xl px-4 pt-5 pb-3 sm:px-8 sm:pt-8 sm:pb-4">
        <Link href="/" className="inline-block">
          <h1 className="text-2xl font-semibold tracking-tight hover:opacity-90 sm:text-4xl">
            ← Work
          </h1>
        </Link>

        <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
          A visual selection of cities, light, and moments.
        </p>
      </div>

      <div className="h-[52vh] min-h-[430px] pb-6 sm:h-[520px] sm:pb-6 md:h-[calc(100vh-148px)] md:pb-0">
        <WorkGalleryRail />
      </div>
    </main>
  );
}
