import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

interface LogoProps {
  handleCloseMenu: () => void;
}

export function Logo({ handleCloseMenu }: LogoProps) {
  return (
    <Link href="/" className={styles.logo} onClick={handleCloseMenu}>
      <Image
        src="/logo.png"
        alt="Essenza Di Vetro - Vidraçaria em Curitiba"
        width={317}
        height={144}
        sizes="(max-width: 992px) 100px, 150px"
        priority
      />
    </Link>
  );
}
