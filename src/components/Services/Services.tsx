import React from "react";
import Image from "next/image";

import { services } from "@/data";
import { ServiceGallery } from "@/components";

import styles from "./Services.module.css";

export function Services() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.services}>
          {services.map(({ image, title, total, videos = [] }, index) => (
            <div key={index} className={styles.service} title={title}>
              <ServiceGallery folder={image} total={total} videos={videos}>
                <div className={styles.service__photo}>
                  <Image
                    fill
                    alt={title}
                    src={`/images/services/miniaturas/${image}.jpg`}
                  />
                </div>
                <h2 className={styles.service__title}>{title}</h2>
              </ServiceGallery>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

