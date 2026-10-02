"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { PrevButton, NextButton } from "./components";

interface CarouselProps {
  interval?: number;
  withButtons?: boolean;
  styleButtons?: string | null;
  children: (props: { className: string }) => React.ReactNode;
}

export function Carousel({
  interval = 4000,
  withButtons = true,
  styleButtons = null,
  children,
}: CarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!embla) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stop = () => clearInterval(timer.current);
    timer.current = setInterval(() => embla.scrollNext(), interval);
    embla.on("pointerDown", stop);

    return () => {
      stop();
      embla.off("pointerDown", stop);
    };
  }, [embla, interval]);

  const go = (direction: "prev" | "next") => {
    clearInterval(timer.current);
    if (direction === "prev") embla?.scrollPrev();
    else embla?.scrollNext();
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">{children({ className: "embla__slide" })}</div>
      </div>

      {withButtons && (
        <div className={styleButtons ?? "embla__buttons"}>
          <PrevButton onClick={() => go("prev")} />
          <NextButton onClick={() => go("next")} />
        </div>
      )}
    </div>
  );
}
