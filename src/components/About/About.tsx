import React from "react";
import { site } from "@/data";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        SOBRE A <b>ESSENZA DI VETRO</b>
      </h2>
      <p>
        A {site.name} é uma vidraçaria com atendimento a domicílio em toda{" "}
        {site.city}, comandada pelo vidraceiro {site.owner}, com muitos anos de
        experiência no ramo.
      </p>
      <p>
        Fazemos box de banheiro, espelhos, janelas, portas, sacadas e
        guarda-corpo, coberturas e esquadrias de alumínio e PVC, entre outros
        serviços, em vidro temperado e laminado. Envie fotos e medidas pelo
        WhatsApp para receber seu orçamento sem compromisso. Atendemos{" "}
        {site.hours.toLowerCase()}.
      </p>
    </section>
  );
}
