import React from "react";
import Image from "next/image";
import { links } from "@/data";

import styles from "./Sociais.module.css";

export function Sociais() {
  return (
    <div className={styles.sociais}>
      <a
        className={`${styles.social} ${styles.whatsapp}`}
        href={links["whatsapp-desk"]}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/svgs/whatsapp.svg"
          alt="WhatsApp Essenza Di Vetro"
          title="WhatsApp"
          width={20}
          height={20}
        />
      </a>


    </div>
  );
}
