import React from "react";
import Image from "next/image";

import styles from "./Payments.module.css";

export function Payments() {
  return (
    <div className={styles.payment}>
      <span className={styles.title}>Pagamento</span>

      <div className={styles.logos}>
        <Image
          src="/images/payments/picpay.png"
          alt="Logo Pic Pay"
          title="Pic Pay"
          width={30}
          height={30}
        />

        <Image
          src="/images/payments/americanexpress.png"
          alt="Logo American Express"
          title="American Express"
          width={32}
          height={32}
        />

        <Image
          src="/images/payments/visa.png"
          alt="Logo Visa"
          title="Visa"
          width={40}
          height={30}
        />

        <Image
          src="/images/payments/mastercard.png"
          alt="Logo Mastercard"
          title="Mastercard"
          width={48}
          height={30}
        />

        <Image
          src="/images/payments/elo.png"
          alt="Logo Elo"
          title="Elo"
          width={30}
          height={30}
        />

        <Image
          src="/images/payments/pix.png"
          alt="Logo Pix"
          title="Pix"
          width={72}
          height={30}
        />
      </div>
    </div>
  );
}
