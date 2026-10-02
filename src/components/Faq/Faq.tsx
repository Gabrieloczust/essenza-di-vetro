import React from "react";
import { faq } from "@/data";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        PERGUNTAS <b>FREQUENTES</b>
      </h2>
      {faq.map(({ question, answer }) => (
        <details key={question} className={styles.item}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}
