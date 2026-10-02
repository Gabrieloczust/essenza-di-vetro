import { BannerServices, Services, Contact } from "@/components";

export const metadata = {
  title: "Serviços de Vidraçaria em Curitiba | Essenza Di Vetro",
  description:
    "Box de banheiro, espelhos, janelas, portas, sacadas, guarda-corpo, coberturas e esquadrias em vidro temperado e laminado. Veja fotos de trabalhos e peça orçamento pelo WhatsApp.",
  alternates: { canonical: "/servicos" },
  openGraph: { url: "/servicos", title: "Serviços de Vidraçaria em Curitiba | Essenza Di Vetro" },
};

export default function Servicos() {
  return (
    <main>
      <BannerServices />
      <Services />
      <Contact />
    </main>
  );
}

