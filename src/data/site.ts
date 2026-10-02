// Ajuste aqui quando o domínio próprio for registrado.
export const site = {
  name: "Essenza Di Vetro",
  owner: "Nelson Pires da Cruz Junior",
  // domínio próprio ainda não registrado: troque aqui quando tiver
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://essenza-di-vetro.vercel.app",
  city: "Curitiba",
  title: "Essenza Di Vetro - Vidraçaria em Curitiba",
  description:
    "Box, espelhos, janelas, portas, guarda-corpo e muito mais. Vidraçaria com atendimento a domicílio em toda Curitiba. Orçamento sem compromisso pelo WhatsApp.",
  // bairros exibidos na seção "Regiões atendidas" (edite à vontade)
  areas: [
    "Alto Boqueirão", "Boqueirão", "Sítio Cercado", "Xaxim", "Hauer",
    "Capão Raso", "Pinheirinho", "Portão", "Água Verde", "Batel",
    "Centro", "Cajuru", "Santa Felicidade", "CIC",
  ],
};
