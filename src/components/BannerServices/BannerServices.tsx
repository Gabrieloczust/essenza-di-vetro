import React from "react";
import Image from "next/image";

import styles from "./BannerServices.module.css";

export function BannerServices() {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.build}>
          <div className={styles.build__border}></div>
          <Image
            src={`/images/services/build.jpg`}
            width={282}
            height={346}
            alt="Prédio"
          />
        </div>

        <div className={styles.title}>
          <div>
            <h1 className={styles.title__bold}>SERVIÇOS</h1>
            <span>IMPECÁVEIS</span>

            <p>
              Nossa qualidade vai <br /> te surpreender
            </p>
          </div>
        </div>

        <div className={styles.degrade}>
          <Image
            src={`/images/services/degrade-verde-big.png`}
            width={311}
            height={459}
            alt="Degradê verde"
          />
        </div>
      </div>
    </section>
  );
}
