import React from "react";
import Image from "next/image";

import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo} title="Essenza Di Vetro - Vidraçaria em Curitiba">
      <Image
        src="/logo-icon.png"
        alt="Logo Essenza Di Vetro"
        width={60}
        height={60}
      />

      <span>Essenza Di Vetro</span>
    </div>
  );
}
