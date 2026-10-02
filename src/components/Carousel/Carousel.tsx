"use client";

import React from "react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { useRecursiveTimeout } from "./hooks";
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
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;

    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout({
    callback: autoplay,
    delay: interval,
  });

  const scrollNext = useCallback(() => {
    if (!embla) return;

    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;

    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;

    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    onSelect();

    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {children({ className: "embla__slide" })}
        </div>
      </div>

      {withButtons && (
        <div className={styleButtons ? `${styleButtons}` : "embla__buttons"}>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      )}
    </div>
  );
}

