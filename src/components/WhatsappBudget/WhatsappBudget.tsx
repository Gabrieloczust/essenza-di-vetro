import React from "react";
import Image from "next/image";
import { links } from "@/data/links";
import styles from "./WhatsappBudget.module.css";

export function WhatsappBudget() {
  return (
    <a
      href={links["whatsapp-mobile"]}
      target="_blank"
      rel="noreferrer"
      className={styles.budget}
      title="Clique e Solicite um orçamento pelo Whatsapp"
    >
      <div className={styles.desk}>
        <Image
          src="/svgs/whatsapp.svg"
          alt="WhatsApp"
          width={64}
          height={30}
        />
      </div>

      <div className={styles.mobile}>
        <Image
          src="/svgs/whatsapp.svg"
          alt="WhatsApp"
          width={20}
          height={20}
        />
      </div>

      <span>Solicite um orçamento</span>
    </a>
  );
}
