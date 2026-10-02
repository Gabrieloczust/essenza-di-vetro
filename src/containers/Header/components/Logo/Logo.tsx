import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

interface LogoProps {
  handleCloseMenu: () => void;
}

export function Logo({ handleCloseMenu }: LogoProps) {
  return (
    <Link passHref href="/" className={styles.logo} onClick={handleCloseMenu}>
      <div className={styles.desk}>
        <Image
          src="/logo.png"
          alt="Logo Essenza Di Vetro"
          title="Essenza Di Vetro"
          width={150}
          height={68}
        />
      </div>
      <div className={styles.mobile}>
        <Image
          src="/logo.png"
          alt="Logo Essenza Di Vetro"
          title="Essenza Di Vetro"
          width={110}
          height={50}
        />
      </div>
    </Link>
  );
}

