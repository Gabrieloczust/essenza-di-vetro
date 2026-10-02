"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "@/components";

interface GalleryProps {
  folder: string;
  length: number;
  width: number;
  height: number;
  withButtons?: boolean;
  alt?: string;
}

export function Gallery({ folder, length, width, height, withButtons = true, alt = "Foto" }: GalleryProps) {
  return (
    <Carousel withButtons={withButtons}>
      {(slideProps) =>
        Array.from({ length }, (_, i) => (
          <div {...slideProps} key={i}>
            <Image
              src={`${folder}/${i + 1}.jpg`}
              alt={`${alt} ${i + 1}`}
              width={width}
              height={height}
              sizes="(max-width: 992px) 100vw, 60vw"
              priority={i === 0}
            />
          </div>
        ))
      }
    </Carousel>
  );
}
