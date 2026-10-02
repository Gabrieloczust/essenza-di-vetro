import React from "react";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/data";
import { ServiceGallery } from "@/components";

import styles from "./SomeServices.module.css";

export function SomeServices() {
  return (
    <main className={styles.container}>
      <div className={styles.divider}></div>
      <div className={styles.degrade}>
        <Image
          src={`/images/services/degrade-verde.png`}
          width={251}
          height={608}
          alt="Degradê verde"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>
          CONHEÇA ALGUNS DOS NOSSOS <b>SERVIÇOS</b>
        </span>

        <div className={styles.arrow}>
          <Image
            src={`/svgs/arrow.svg`}
            width={90}
            height={60}
            alt="Seta para baixo"
          />
        </div>

        <div className={styles.services}>
          {services
            .filter((service) => service.highlight)
            .map(({ title, image, total, videos = [] }, index) => (
              <div key={index} className={styles.service} title={title}>
                <ServiceGallery
                  folder={image}
                  total={total}
                  videos={videos}
                >
                  <div className={styles.service__image}>
                    <Image
                      src={`/images/services/miniaturas/${image}.jpg`}
                      width={200}
                      height={200}
                      alt={title}
                    />
                  </div>
                </ServiceGallery>
                <h2 className={styles.service__title}>{title}</h2>
              </div>
            ))}
        </div>

        <div className={styles.footer}>
          <h3 className={styles.footer__text}>
            <strong>Trabalhamos</strong> com vidro <br /> <b>laminado</b> e{" "}
            <b>temperado</b>
          </h3>

          <Link
            href="/servicos"
            className={styles.footer__button}
            title="Ver todos os serviços"
          >
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </main>
  );
}
