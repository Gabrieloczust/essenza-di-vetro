import { contacts } from "./contacts";
import { services } from "./services";
import { site } from "./site";

const serviceList = services.map(({ title }) => title.toLowerCase()).join(", ");

export const faq = [
  {
    question: "Como peço um orçamento?",
    answer: `Chame a ${site.name} no WhatsApp ${contacts.whatsapp} e envie fotos e medidas do local e o que você precisa. O orçamento é sem compromisso.`,
  },
  {
    question: "Quais serviços a Essenza Di Vetro faz?",
    answer: `Trabalhamos com ${serviceList}.`,
  },
  {
    question: "Quais regiões de Curitiba vocês atendem?",
    answer: `Atendemos toda Curitiba, incluindo ${site.areas.join(", ")} e demais bairros.`,
  },
  {
    question: "Vocês trabalham com vidro temperado e laminado?",
    answer: "Sim. Trabalhamos com vidros temperados, laminados e comuns, além de espelhos.",
  },
  {
    question: "Vocês têm loja física?",
    answer: "Não. Somos uma vidraçaria com atendimento a domicílio: o orçamento é feito pelo WhatsApp e o serviço é realizado no seu endereço.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: `Aceitamos ${site.payments.slice(0, -1).join(", ")} e ${site.payments.at(-1)}.`,
  },
  {
    question: "Qual o horário de atendimento?",
    answer: `${site.hours}, pelo WhatsApp ou telefone ${contacts.whatsapp}.`,
  },
];
