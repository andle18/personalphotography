"use client";

import Link from "next/link";
import type { WorkItem } from "../data/work";
import CloudImage from "./CloudImage";

type Props = {
  item: WorkItem;
  index: number;
};

export default function WorkCard({ item, index }: Props) {
  const fit = item.fit ?? "cover";

  return (
    <Link
      href={`/work/${item.slug}`}
      className="case-card group shrink-0 self-end bg-black/10"
      style={{
        width: "clamp(180px, 58vw, 340px)",
        maxWidth: 340,
        aspectRatio: "0.6 / 1",
      }}
    >
      <div className="flex flex-1 items-start justify-between px-4 pt-5 sm:px-6 sm:pt-7">
        <div className="text-xs text-white/80 sm:text-sm">
          N°{String(index + 1).padStart(2, "0")}
        </div>

        <div className="text-right text-[9px] uppercase tracking-widest text-white/50 sm:text-[10px]">
          <div>{item.country ?? ""}</div>
          <div className="mt-1">{item.year ?? ""}</div>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
          {item.title}
        </div>
        {item.country ? (
          <div className="mt-1 text-[11px] tracking-widest text-white/50 sm:mt-2 sm:text-xs">
            {item.country}
          </div>
        ) : null}
      </div>

      <div className="relative h-[44%] w-full overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <CloudImage
            id={item.cover}
            alt={item.title}
            fill
            fit={fit}
            className={fit === "contain" ? "object-contain" : "object-cover"}
            sizes="(max-width: 768px) 70vw, 450px"
            priority={index < 2}
            style={{ objectPosition: item.objectPosition ?? "50% 35%" }}
          />
        </div>
      </div>
    </Link>
  );
}
