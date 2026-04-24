"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { WORK } from "../data/work";
import CloudImage from "./CloudImage";
import "swiper/css";
import "swiper/css/effect-fade";

const BG = WORK.map((item) => ({
  id: item.cover,
  alt: `${item.title} background`,
  objectPosition: item.objectPosition ?? "50% 60%",
}));

export default function WorkBackgroundSlider() {
  return (
    <div className="fixed inset-10 -z-10">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        loop
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {BG.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full w-full scale-[1.06]">
              <CloudImage
                id={item.id}
                alt={item.alt}
                fill
                w={1800}
                className="object-cover"
                style={{ objectPosition: item.objectPosition }}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
