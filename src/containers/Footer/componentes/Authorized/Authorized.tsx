import React from "react";
import Image from "next/image";

import styles from "./Authorized.module.css";

export function Authorized() {
  return (
    <div className={styles.authorized}>
      <span className={styles.title}>Autorizado</span>

      <div className={styles.logos}>
        <div className={styles.logo}>
          <Image
            src="/images/authorized/mastertemp.png"
            alt="Logo Mastertemp"
            title="Mastertemp"
            width={71}
            height={36.5}
          />
        </div>

        <div className={styles.logo}>
          <Image
            src="/images/authorized/bazze-pvc.png"
            alt="Logo Bazze PVC"
            title="Bazze PVC"
            width={85}
            height={40}
          />
        </div>

        <div className={styles.logo}>
          <Image
            src="/images/authorized/blindex.jpg"
            alt="Logo Blindex"
            title="Blindex"
            width={83}
            height={83}
          />
        </div>
      </div>
    </div>
  );
}
