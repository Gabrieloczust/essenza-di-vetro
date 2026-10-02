"use client";

import React, { useState } from "react";

import { Logo, Menu, Sociais } from "./components";
import styles from "./Header.module.css";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Logo handleCloseMenu={() => setMenuIsOpen(false)} />
        <Menu
          menuIsOpen={menuIsOpen}
          handleToggleMenu={() => setMenuIsOpen((prev) => !prev)}
          handleCloseMenu={() => setMenuIsOpen(false)}
        />
        <Sociais />
      </div>
    </header>
  );
}
