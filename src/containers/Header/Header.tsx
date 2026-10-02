"use client";

import React, { useState } from "react";

import { Logo, Menu, Sociais } from "./components";
import styles from "./Header.module.css";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Logo handleCloseMenu={handleCloseMenu} />
        <Menu
          menuIsOpen={menuIsOpen}
          handleToggleMenu={handleToggleMenu}
          handleCloseMenu={handleCloseMenu}
        />
        <Sociais />
      </div>
    </header>
  );
} 