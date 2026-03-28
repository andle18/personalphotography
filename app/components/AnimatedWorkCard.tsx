"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import type { WorkItem } from "../data/work";
import CloudImage from "./CloudImage";

type Props = {
  item: WorkItem;
  index: number;
  activeIndex: number;
};

export default function AnimatedWorkCard({ item, index, activeIndex }: Props) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const layersRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const offset = index - activeIndex;
  const isActive = offset === 0;

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        xPercent: -50 + offset * 65,
        yPercent: -50,
        scale: isActive ? 1 : 0.85,
        opacity: Math.abs(offset) > 3 ? 0 : 1,
        duration: 0.72,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.set(cardRef.current, {
        zIndex: 100 - Math.abs(offset),
      });

      if (!layersRef.current || !imageRef.current) return;

      const layers = Array.from(
        layersRef.current.querySelectorAll<HTMLElement>("[data-layer]"),
      );

      if (isActive) {
        gsap.to(layers, {
          opacity: 1,
          y: 0,
          duration: 0.64,
          stagger: 0.06,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(imageRef.current, {
          scale: 1,
          filter: "brightness(1)",
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(layers, {
          opacity: 0.55,
          y: offset > 0 ? 18 : -18,
          duration: 0.42,
          stagger: 0.03,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(imageRef.current, {
          scale: 1.08,
          filter: "brightness(0.75)",
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [offset, isActive]);

  return (
    <Link
      ref={cardRef}
      href={`/work/${item.slug}`}
      className="absolute top-1/2 left-1/2 case-card group"
      style={{
        width: "45vw",
        maxWidth: 450,
        minWidth: 310,
        aspectRatio: "0.6 / 1",

        transform: "translate(-50%, -50%)",
      }}
    >
      <div ref={layersRef}>
        {/* HEADER */}
        <div className="flex items-start justify-between px-6 pt-7">
          <div
            data-layer
            className="text-sm text-white/80 will-change-transform"
          >
            N°{String(index + 1).padStart(2, "0")}
          </div>

          <div
            data-layer
            className="text-right text-[10px] uppercase tracking-widest text-white/50 will-change-transform"
          >
            <div>{item.country ?? ""}</div>
            <div className="mt-1">{item.year ?? ""}</div>
          </div>
        </div>

        {/* BODY */}
        <div className="px-6 pb-6">
          <div
            data-layer
            className="text-4xl font-medium tracking-tight text-white will-change-transform"
          >
            {item.title}
          </div>

          {item.country && (
            <div
              data-layer
              className="mt-2 text-xs tracking-widest text-white/50 will-change-transform"
            >
              {item.country}
            </div>
          )}
        </div>
      </div>

      {/* IMAGE (Cloudinary) */}
      <div className="relative h-[44%] w-full overflow-hidden">
        <div
          ref={imageRef}
          className="h-full w-full will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <CloudImage
            id={item.cover}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
