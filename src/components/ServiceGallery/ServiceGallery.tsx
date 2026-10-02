"use client";

import React, { useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

interface ServiceGalleryProps {
  folder: string;
  total: number;
  extension?: string;
  videos?: string[];
  children?: React.ReactNode;
}

export function ServiceGallery({
  folder,
  total,
  extension = "jpg",
  videos = [],
  children,
}: ServiceGalleryProps) {
  const gallery = `/images/services/gallery/${folder}`;
  const images = Array.from({ length: total }, (_, i) => i + 1);
  const lightGalleryRef = useRef<any>(null);

  const handleOpenGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(0);
    }
  };

  return (
    <>
      <div
        onClick={handleOpenGallery}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        {children}
      </div>

      <LightGallery
        onInit={(ref) => (lightGalleryRef.current = ref.instance)}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        elementClassNames="service-gallery"
        dynamic
        dynamicEl={[
          ...images.map((number) => ({
            src: `${gallery}/${number}.${extension}`,
            thumb: `${gallery}/${number}.${extension}`,
            subHtml: `<div>Imagem ${number}</div>`,
          })),
          ...videos.map((video, index) => ({
            src: video,
            thumb: "/images/services/gallery/video-thumb.jpg",
            subHtml: `<div>Vídeo ${index + 1}</div>`,
            video: {
              source: [
                {
                  src: video,
                  type: "vimeo",
                },
              ],
              attributes: { preload: false, controls: true },
            },
          })),
        ]}
      />
    </>
  );
}

