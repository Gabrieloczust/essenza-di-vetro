import React from "react";
import styles from "./Copyrigth.module.css";

export function Copyrigth() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.copyrigth}>
      <div className={styles.container}>
        <span>© {year} | Essenza Di Vetro | <br /> Todos os direitos reservados</span>
        <a
          href="https://api.whatsapp.com/send?phone=5541999023899&text=Ol%C3%A1%20entro%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Essenza%20Di%20Vetro,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
          target="_blank"
          rel="noreferrer"
        >
          Desenvolvido por <b>Gabriel Oczust</b>
        </a>
      </div>
    </div>
  );
} 