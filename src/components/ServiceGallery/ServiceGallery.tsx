"use client";

import React from "react";

interface ServiceGalleryProps {
  folder: string;
  total: number;
  videos?: string[];
  children?: React.ReactNode;
}

export function ServiceGallery({ folder, total, videos = [], children }: ServiceGalleryProps) {
  const open = async () => {
    // carrega a galeria (JS + CSS) só quando alguém clica
    const [{ default: lightGallery }, { default: thumbnail }, { default: zoom }, { default: video }] =
      await Promise.all([
        import("lightgallery"),
        import("lightgallery/plugins/thumbnail"),
        import("lightgallery/plugins/zoom"),
        import("lightgallery/plugins/video"),
        import("lightgallery/css/lightgallery.css"),
        import("lightgallery/css/lg-zoom.css"),
        import("lightgallery/css/lg-thumbnail.css"),
        import("lightgallery/css/lg-video.css"),
      ]);

    const base = `/images/services/gallery/${folder}`;
    const host = document.createElement("div");
    document.body.appendChild(host);

    const instance = lightGallery(host, {
      dynamic: true,
      speed: 500,
      plugins: [thumbnail, zoom, video],
      dynamicEl: [
        ...Array.from({ length: total }, (_, i) => ({
          src: `${base}/${i + 1}.jpg`,
          thumb: `${base}/${i + 1}.jpg`,
          subHtml: `<div>Imagem ${i + 1}</div>`,
        })),
        ...videos.map((src, i) => ({
          src,
          thumb: "/images/services/gallery/video-thumb.jpg",
          subHtml: `<div>Vídeo ${i + 1}</div>`,
          video: { source: [{ src, type: "vimeo" }], attributes: { preload: false, controls: true } },
        })),
      ],
    });

    host.addEventListener("lgAfterClose", () => {
      instance.destroy();
      host.remove();
    });
    instance.openGallery(0);
  };

  return (
    <div onClick={open} style={{ cursor: "pointer", width: "fit-content" }}>
      {children}
    </div>
  );
}
