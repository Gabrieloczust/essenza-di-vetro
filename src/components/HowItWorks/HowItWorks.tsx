import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  { title: "Envie fotos e medidas", text: "Chame no WhatsApp e conte o que você precisa." },
  { title: "Receba o orçamento", text: "Sem compromisso, direto no seu WhatsApp." },
  { title: "Agende a instalação", text: "Aprovado o orçamento, combinamos o melhor dia e instalamos no seu endereço." },
];

export function HowItWorks() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        COMO <b>FUNCIONA</b>
      </h2>
      <ol className={styles.steps}>
        {steps.map(({ title, text }, i) => (
          <li key={title} className={styles.step}>
            <span className={styles.number}>{i + 1}</span>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
