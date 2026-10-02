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
}

export function Gallery({
  folder,
  length,
  width,
  height,
  withButtons = true,
}: GalleryProps) {
  return (
    <Carousel withButtons={withButtons}>
      {({ ...slideProps }) =>
        [...Array(length)].map((_, index) => (
          <div {...slideProps} key={index}>
            <Image
              src={`${folder}/${++index}.jpg`}
              alt={`Foto ${++index}`}
              width={width}
              height={height}
              priority={true}
            />
          </div>
        ))
      }
    </Carousel>
  );
}

