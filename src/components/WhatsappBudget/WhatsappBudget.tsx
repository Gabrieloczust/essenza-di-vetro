import React from "react";
import Image from "next/image";
import { links } from "@/data/links";
import styles from "./WhatsappBudget.module.css";

// Barra fixa no rodapé, só no celular (no desktop os botões ficam no topo e nas seções)
export function WhatsappBudget() {
  return (
    <a
      href={links["whatsapp-mobile"]}
      target="_blank"
      rel="noreferrer"
      className={styles.budget}
      title="Clique e solicite um orçamento pelo WhatsApp"
    >
      <Image src="/svgs/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
      <span>Solicite um orçamento</span>
    </a>
  );
}
