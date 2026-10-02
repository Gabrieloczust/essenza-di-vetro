"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  route: string;
  name: string;
}

export function MenuItem({ route, name }: MenuItemProps) {
  const pathname = usePathname();

  const active = pathname === route ? styles.menuItemActive : "";

  return (
    <Link href={route} className={`${styles.menuItem} ${active}`}>
      {name}
    </Link>
  );
}
