import React from "react";
import Image from "next/image";
import { links, contacts, site } from "@/data";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.container} id="contato">
      <div className={styles.content}>
        <span className={styles.title}>
          Peça seu <b>orçamento</b> pelo WhatsApp
        </span>
        <p className={styles.text}>
          Envie fotos e medidas e receba um orçamento sem compromisso.
        </p>
        <a
          className={styles.button}
          href={links["whatsapp-mobile"]}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/svgs/whatsapp.svg" alt="" width={22} height={22} />
          Chamar no WhatsApp
        </a>
        <a className={styles.phone} href={links.tel}>
          ou ligue: {contacts.whatsapp}
        </a>

        <h2 className={styles.areasTitle}>Regiões atendidas em Curitiba</h2>
        <ul className={styles.areas}>
          {site.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
