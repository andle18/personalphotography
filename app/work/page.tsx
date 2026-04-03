import type { Metadata } from "next";
import Link from "next/link";
import WorkGalleryRail from "../components/WorkScroller";
import { socialPreviewImage } from "../data/site";
import { WORK_INTRO } from "../data/work";

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
    <main className="min-h-screen overflow-x-hidden bg-black/55 text-white md:h-screen md:overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-6 pb-4 sm:px-8 sm:pt-8">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl font-semibold tracking-tight hover:opacity-90 sm:text-4xl">
            ← Work
          </h1>
        </Link>

        <p className="mt-2 max-w-2xl text-white/70">
          A visual selection of cities, light, and moments.
        </p>

        <article className="mt-5 rounded-[24px] bg-black/15 p-5 ring-1 ring-white/10 backdrop-blur md:hidden">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {WORK_INTRO.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-white">
            {WORK_INTRO.title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            {WORK_INTRO.description}
          </p>
        </article>
      </div>

      <div className="h-[440px] pb-6 sm:h-[520px] md:h-[calc(100vh-128px)] md:pb-0">
        <WorkGalleryRail />
      </div>
    </main>
  );
}
