import { BannerServices, Services, Contact } from "@/components";

export const metadata = {
  title: "Serviços | Essenza Di Vetro",
  description:
    "Trabalhamos com Vidros Temperados, Laminados, Comuns e Espelhos",
  alternates: { canonical: "/servicos" },
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

