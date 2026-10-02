import React from "react";
import { MenuItem } from "../../components";
import styles from "./Menu.module.css";

interface MenuProps {
  menuIsOpen: boolean;
  handleToggleMenu: () => void;
  handleCloseMenu: () => void;
}

export function Menu({ menuIsOpen, handleToggleMenu, handleCloseMenu }: MenuProps) {
  return (
    <>
      <div
        className={`${styles.hamburguer} ${menuIsOpen ? styles.close : ""}`}
        onClick={handleToggleMenu}
      >
        <div></div>
      </div>

      <nav
        className={`${styles.menu} ${menuIsOpen ? "" : styles.hide}`}
        onClick={handleCloseMenu}
      >
        <MenuItem route="/" name="Início" />

        <div className={styles.separator}></div>

        <MenuItem route="/servicos" name="Serviços" />
      </nav>
    </>
  );
}
