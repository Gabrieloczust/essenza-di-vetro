// Ajuste aqui quando o domínio próprio for registrado.
export const site = {
  name: "Essenza Di Vetro",
  owner: "Nelson Pires da Cruz Junior",
  // domínio próprio ainda não registrado: troque aqui quando tiver
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://essenza-di-vetro.vercel.app",
  city: "Curitiba",
  hours: "Todos os dias",
  payments: ["Pix", "PicPay", "Visa", "Mastercard", "Elo", "American Express"],
  title: "Vidraçaria em Curitiba | Essenza Di Vetro",
  description:
    "Vidraçaria com atendimento a domicílio em toda Curitiba: box de banheiro, espelhos, janelas, portas, sacadas e guarda-corpo em vidro temperado e laminado. Orçamento sem compromisso pelo WhatsApp.",
  // bairros exibidos na seção "Regiões atendidas" (edite à vontade)
  areas: [
    "Alto Boqueirão", "Boqueirão", "Sítio Cercado", "Xaxim", "Hauer",
    "Capão Raso", "Pinheirinho", "Portão", "Água Verde", "Batel",
    "Centro", "Cajuru", "Santa Felicidade", "CIC",
  ],
};
