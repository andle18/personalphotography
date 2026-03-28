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
      className="case-card group bg-black/10 self-end"
      style={{
        width: "22vw",
        maxWidth: 340,
        minWidth: 260,
        aspectRatio: "0.6 / 1",
      }}
    >
      <div className="flex flex-1 items-start justify-between px-6 pt-7">
        <div className="text-sm text-white/80">
          N°{String(index + 1).padStart(2, "0")}
        </div>

        <div className="text-right text-[10px] uppercase tracking-widest text-white/50">
          <div>{item.country ?? ""}</div>
          <div className="mt-1">{item.year ?? ""}</div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="text-4xl font-medium tracking-tight text-white">
          {item.title}
        </div>
        {item.country ? (
          <div className="mt-2 text-xs tracking-widest text-white/50">
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
