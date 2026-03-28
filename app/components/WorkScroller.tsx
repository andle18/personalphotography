"use client";

import { useRef } from "react";
import { WORK } from "../data/work";
import WorkCard from "./WorkCard";

export default function WorkGalleryRail() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const validItems = WORK.filter((item): item is (typeof WORK)[number] =>
    Boolean(item?.slug),
  );

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // If vertical wheel dominates, reinterpret it as horizontal movement.
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={scrollerRef}
      onWheel={handleWheel}
      className="scrollbar-themed h-full w-full overflow-x-auto overflow-y-hidden"
    >
      <div className="flex h-full items-end gap-[3px] px-6 pb-6 pr-[18vw]">
        <article
          className="case-card flex items-end bg-black/10 self-end"
          style={{
            width: "36vw",
            maxWidth: 520,
            minWidth: 360,
            aspectRatio: "0.6 / 1",
          }}
        >
          <div className="px-6 pb-8 pt-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              SCROLL
            </p>
            <h2 className="mt-3 text-4xl font-medium tracking-tight text-white">
              Visual Elegance
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              This journey is meant to be explored slowly, allowing each image
              the space to breathe. Continue to the right to discover all the
              series.
            </p>
          </div>
        </article>

        {validItems.map((item, idx) => (
          <WorkCard key={item.slug} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
