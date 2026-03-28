"use client";

import { useEffect, useMemo, useState } from "react";
import type { GalleryImage } from "../../../data/galleries";
import CloudImage from "../../../components/CloudImage";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  const current = useMemo(() => {
    if (active === null) return null;
    return images[active] ?? null;
  }, [active, images]);

  // cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight" && active !== null) {
        setActive((n) =>
          n === null ? null : Math.min(images.length - 1, n + 1),
        );
      }
      if (e.key === "ArrowLeft" && active !== null) {
        setActive((n) => (n === null ? null : Math.max(0, n - 1)));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            type="button"
            onClick={() => setActive(idx)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10"
          >
            <CloudImage
              id={img.src}
              alt={img.alt ?? ""}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            {img.caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-black/55 px-2 py-1 text-left text-[11px] text-white/90">
                {img.caption}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {/* MODAL */}
      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black ring-1 ring-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <CloudImage
                id={current.src}
                alt={current.alt ?? ""}
                fill
                fit="contain"
                className="object-contain bg-black"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="text-sm text-white/80">
                {current.caption ?? ""}
              </div>

              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-md bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/10 hover:bg-white/15"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
