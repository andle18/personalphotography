"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import type { WorkItem } from "../data/work";
import CloudImage from "./CloudImage";

gsap.registerPlugin(CustomEase);
CustomEase.create("customEase", "M0,0 C0.06,0 0,1 1,1");
CustomEase.create("customEase2", "M0,0 C0.28,0 0,1 1,1");
CustomEase.create("customEase3", "M0,0 C0.835,0 0.335,0.995 1,1");

type Props = {
  item: WorkItem;
  index: number;
};

export default function WorkCard({ item, index }: Props) {
  const fit = item.fit ?? "cover";
  const cardRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    const line = lineRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    if (!card || !line || !text || !image) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          played.current = true;
          observer.disconnect();

          gsap
            .timeline()
            .fromTo(
              line,
              { y: 0 },
              { y: "calc(56% - 1px)", duration: 1.1, ease: "customEase2" },
            )
            .fromTo(
              text,
              { clipPath: "inset(0 0 100% 0)" },
              {
                clipPath: "inset(0 0 0% 0)",
                duration: 0.85,
                ease: "customEase",
              },
              "-=0.55",
            )
            .fromTo(
              image,
              { y: "100%" },
              { y: "0%", duration: 1, ease: "customEase3" },
              "-=0.65",
            );
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      href={`/work/${item.slug}`}
      className="case-card group shrink-0 self-end bg-black/10"
      style={{
        width: "clamp(180px, 58vw, 340px)",
        maxWidth: 340,
        aspectRatio: "0.6 / 1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LÍNEA BLANCA */}
      <div
        ref={lineRef}
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

      {/* TOP 56%: TEXTO */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "56%",
          overflow: "hidden",
        }}
      >
        <div
          ref={textRef}
          style={{
            position: "absolute",
            inset: 0,
            clipPath: "inset(0 0 100% 0)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* número + país/año */}
          <div className="flex items-start justify-between px-4 pt-5 sm:px-6 sm:pt-7">
            <div className="text-xs text-white/80 sm:text-sm">
              N°{String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-right text-[9px] uppercase tracking-widest text-white/50 sm:text-[10px]">
              <div>{item.country ?? ""}</div>
              <div className="mt-1">{item.year ?? ""}</div>
            </div>
          </div>

          {/* título + país */}
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
        </div>
      </div>

      {/* BOTTOM 44%: IMAGEN */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "44%",
          overflow: "hidden",
        }}
      >
        <div
          ref={imageRef}
          style={{
            position: "absolute",
            inset: 0,
            transform: "translateY(100%)",
          }}
        >
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
            <CloudImage
              id={item.cover}
              alt={item.title}
              fill
              fit={fit}
              className={fit === "contain" ? "object-contain" : "object-cover"}
              sizes="(max-width: 768px) 70vw, 340px"
              priority={index < 2}
              style={{ objectPosition: item.objectPosition ?? "50% 35%" }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
