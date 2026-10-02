import { contacts } from "./contacts";

const number = "55" + contacts.whatsapp.replace(/\D/g, "");
const message = encodeURIComponent(
  "Olá, vim pelo site da Essenza Di Vetro e gostaria de um orçamento",
);

export const links = {
  "whatsapp-desk": `https://api.whatsapp.com/send?phone=${number}&text=${message}`,
  "whatsapp-mobile": `https://wa.me/${number}?text=${message}`,
  tel: `tel:+${number}`,
};
