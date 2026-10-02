import React from "react";
import { reviews } from "@/data";
import styles from "./Reviews.module.css";

export function Reviews() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        QUEM JÁ CONTRATOU <b>RECOMENDA</b>
      </h2>
      <div className={styles.cards}>
        {reviews.map(({ name, text }) => (
          <figure key={name} className={styles.card}>
            <span className={styles.stars} role="img" aria-label="5 estrelas">★★★★★</span>
            <blockquote className={styles.text}>{text}</blockquote>
            <figcaption className={styles.name}>{name}</figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.source}>
        Avaliações no Google de clientes atendidos pelo Nelson.
      </p>
    </section>
  );
}
