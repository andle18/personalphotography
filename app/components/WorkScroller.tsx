"use client";

import { useRef } from "react";
import { WORK, WORK_INTRO } from "../data/work";
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
      <div className="flex h-full items-end gap-[3px] px-5 pb-6 pr-5 sm:px-6 md:pr-[18vw]">
        <article
          className="case-card hidden shrink-0 items-end self-end bg-black/10 md:flex"
          style={{
            width: "clamp(260px, 36vw, 520px)",
            maxWidth: 520,
            aspectRatio: "0.6 / 1",
          }}
        >
          <div className="px-6 pb-8 pt-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {WORK_INTRO.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {WORK_INTRO.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              {WORK_INTRO.description}
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
