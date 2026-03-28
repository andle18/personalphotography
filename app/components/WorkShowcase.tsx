"use client";

import { useRef, useState } from "react";
import { WORK } from "../data/work";
import AnimatedWorkCard from "./AnimatedWorkCard";

export default function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (isScrolling.current) return;
    if (Math.abs(e.deltaY) < 30) return;

    isScrolling.current = true;

    setActiveIndex((prev) => {
      if (e.deltaY > 0) {
        return Math.min(prev + 1, WORK.length - 1);
      }
      return Math.max(prev - 1, 0);
    });

    window.setTimeout(() => {
      isScrolling.current = false;
    }, 760);
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
      onWheel={handleWheel}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {WORK.map((item, index) => (
          <AnimatedWorkCard
            key={item.slug}
            item={item}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </section>
  );
}
