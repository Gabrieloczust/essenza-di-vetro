import React from "react";
import {
  Phones,
  Payments,
  Authorized,
  Logo,
} from "./componentes";

import { Contact } from "./componentes/Contact";
import { links } from "@/data";
import styles from "./Footer.module.css";

function Area() {
  return <Contact title="Região atendida" texts={["Curitiba e região"]} href={links["whatsapp-desk"]} />;
}

export function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <article className={styles.top}>
          <Phones />
          <Area />
        </article>

        <div className={styles.bar}></div>

        <div className={styles.bottom}>
          <Payments />
          <Authorized />
          <Logo />
        </div>
      </div>
    </section>
  );
}

