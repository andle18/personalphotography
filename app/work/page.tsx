import type { Metadata } from "next";
import Link from "next/link";
import WorkGalleryRail from "../components/WorkScroller";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse selected photography series by Andres Gomes across travel, street, motorsport, and wildlife.",
};

export default function WorkPage() {
  return (
    <main className="h-screen overflow-hidden bg-black/55 text-white">
      <div className="mx-auto max-w-6xl px-8 pt-8 pb-4">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl font-semibold tracking-tight hover:opacity-90 sm:text-4xl">
            ← Work
          </h1>
        </Link>

        <p className="mt-2 max-w-2xl text-white/70">
          A visual selection of cities, light, and moments.
        </p>
      </div>

      <div className="h-[calc(100vh-128px)]">
        <WorkGalleryRail />
      </div>
    </main>
  );
}
