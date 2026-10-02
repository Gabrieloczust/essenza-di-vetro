import React from "react";
import { links } from "@/data";

import styles from "./Sociais.module.css";

export function Sociais() {
  return (
    <a className={styles.cta} href={links["whatsapp-desk"]} target="_blank" rel="noreferrer">
      Pedir orçamento
    </a>
  );
}
