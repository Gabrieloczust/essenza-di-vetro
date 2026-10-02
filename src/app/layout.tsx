import "@/styles/globals.css";
import { Header, Footer, Copyrigth } from "@/containers";
import { WhatsappBudget } from "@/components";
import { site, contacts } from "@/data";
import Script from "next/script";
import { Montserrat } from "next/font/google";

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords:
    "vidraçaria em curitiba, vidraceiro curitiba, box de banheiro, espelhos, janelas de vidro, portas de vidro, guarda-corpo, vidro temperado, vidro laminado, essenza di vetro",
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    images: [{ url: "/og_image.jpg", width: 1200, height: 630, alt: site.title }],
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "/" },
};

const montserrat = Montserrat({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GlassRepair",
  name: site.name,
  url: site.url,
  telephone: "+55" + contacts.whatsapp.replace(/\D/g, ""),
  image: `${site.url}/og_image.jpg`,
  areaServed: { "@type": "City", name: site.city },
};

// Google Analytics (GA4): defina NEXT_PUBLIC_GA_ID na Vercel para ativar
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <WhatsappBudget />
        <Footer />
        <Copyrigth />
      </body>
    </html>
  );
}
