import React from "react";
import { Gallery } from "@/components";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.welcome}>
          <h1 className={styles.subtitle}>VIDRAÇARIA EM CURITIBA</h1>

          <div className={styles.bar}></div>

          <h2 className={styles.title}>
            <b>ESSENZA</b>
            <span>DI VETRO</span>
          </h2>

          <div className={styles.bar}></div>

          <p className={styles.text}>
            Atendimento a domicílio em <b>toda Curitiba</b>. Box, espelhos,
            janelas, portas e muito mais em vidro <b>temperado</b> e{" "}
            <b>laminado</b>. Peça seu orçamento pelo <b>WhatsApp</b>.
          </p>
        </div>

        <div className={styles.gallery}>
          <Gallery
            folder="/images/hero/gallery"
            length={6}
            width={792}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
