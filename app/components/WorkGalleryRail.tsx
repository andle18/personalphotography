"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { WORK, WORK_INTRO } from "../data/work";
import WorkCard from "./WorkCard";

gsap.registerPlugin(CustomEase);
CustomEase.create("customEase", "M0,0 C0.06,0 0,1 1,1");
CustomEase.create("customEase2", "M0,0 C0.28,0 0,1 1,1");

export default function WorkGalleryRail() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Intro card refs para animación
  const introLineRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const introPlayed = useRef(false);

  const validItems = WORK.filter((item): item is (typeof WORK)[number] =>
    Boolean(item?.slug),
  );

  // Animar la intro card al montar
  useEffect(() => {
    if (introPlayed.current) return;
    introPlayed.current = true;

    const line = introLineRef.current;
    const text = introTextRef.current;
    if (!line || !text) return;

    gsap
      .timeline({ delay: 0.3 })
      // línea blanca baja hasta abajo de la intro card
      .fromTo(
        line,
        { y: 0 },
        { y: "calc(100% - 1px)", duration: 1.2, ease: "customEase2" },
      )
      // texto aparece
      .fromTo(
        text,
        { clipPath: "inset(0 0 100% 0)", opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          duration: 0.9,
          ease: "customEase",
        },
        "-=0.6",
      );
  }, []);

  // Scroll vertical → horizontal
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={scrollerRef}
      onWheel={handleWheel}
      className="scrollbar-themed h-full w-full overflow-x-auto overflow-y-hidden pt-3 sm:pt-0"
    >
      <div className="flex h-full items-end gap-[3px] px-4 pb-4 pr-4 sm:px-6 sm:pb-6 md:pr-[18vw]">
        {/* ── INTRO CARD — "Visual Elegance" ── */}
        <article
          className="case-card shrink-0 self-end"
          style={{
            width: "clamp(220px, 66vw, 390px)",
            maxWidth: 390,
            aspectRatio: "0.6 / 1",
            position: "relative",
            overflow: "hidden",
            background: "rgba(0,0,0,0.15)",
          }}
        >
          {/* línea blanca que baja */}
          <div
            ref={introLineRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "#ffffff",
              zIndex: 30,
              boxShadow: "0 0 5px rgba(255,255,255,0.3)",
            }}
          />

          {/* contenido con clip reveal */}
          <div
            ref={introTextRef}
            style={{
              clipPath: "inset(0 0 100% 0)",
              opacity: 0,
              height: "100%",
            }}
          >
            <div className="px-4 pb-6 pt-7 sm:px-6 sm:pb-8 sm:pt-7 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 sm:mt-10">
                  {WORK_INTRO.kicker}
                </p>
              </div>
              <div>
                <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  {WORK_INTRO.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70 sm:mt-4">
                  {WORK_INTRO.description}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── TARJETAS DE PROYECTOS ── */}
        {validItems.map((item, idx) => (
          <WorkCard key={item.slug} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
