import React from "react";
import { links, contacts } from "@/data";
import { Contact } from "../Contact";

export function Phones() {
  return (
    <Contact
      title="Atendimento"
      texts={[contacts.whatsapp]}
      href={links["whatsapp-desk"]}
    />
  );
}
