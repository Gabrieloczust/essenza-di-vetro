import React from "react";
import styles from "./Contact.module.css";

interface ContactProps {
  href: string;
  title: string;
  texts: string[];
}

export function Contact({ href, title, texts }: ContactProps) {
  return (
    <a
      className={styles.contact}
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.title}>{title}</span>

      {texts.map((text, index) => (
        <address className={styles.text} key={index}>
          {text}
        </address>
      ))}
    </a>
  );
}
