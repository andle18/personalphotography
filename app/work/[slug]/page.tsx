import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GALLERIES } from "../../data/galleries";
import GalleryGrid from "./ui/GalleryGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = GALLERIES.find((item) => item.slug === slug);

  if (!gallery) {
    return {
      title: "Gallery",
      description: "Selected photography work by Andres Gomes.",
    };
  }

  return {
    title: gallery.title,
    description: `Selected photographs from the ${gallery.title} series by Andres Gomes.`,
  };
}

export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const gallery = GALLERIES.find((g) => g.slug === slug);
  if (!gallery) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              {gallery.title}
            </h1>
            <p className="mt-2 text-white/60">{gallery.images.length} photos</p>
          </div>

          <Link href="/work" className="text-sm text-white/70 hover:text-white">
            ← Back to Work
          </Link>
        </div>

        <div className="mt-10">
          <GalleryGrid images={gallery.images} />
        </div>
      </div>
    </div>
  );
}
