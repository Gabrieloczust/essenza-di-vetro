import { contacts } from "./contacts";
import { faq } from "./faq";
import { services } from "./services";
import { site } from "./site";

const telephone = "+55" + contacts.whatsapp.replace(/\D/g, "");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.url}/#negocio`,
      name: site.name,
      description: site.description,
      url: site.url,
      telephone,
      image: `${site.url}/og_image.jpg`,
      logo: `${site.url}/logo.png`,
      founder: { "@type": "Person", name: site.owner },
      areaServed: [
        { "@type": "City", name: site.city, containedInPlace: { "@type": "AdministrativeArea", name: "Paraná" } },
        ...site.areas.map((name) => ({ "@type": "Place", name: `${name}, ${site.city}` })),
      ],
      address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "PR", addressCountry: "BR" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        availableLanguage: "pt-BR",
        areaServed: "BR",
      },
      paymentAccepted: site.payments.join(", "),
      knowsAbout: services.map(({ title }) => title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de vidraçaria",
        itemListElement: services.map(({ title }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: title, areaServed: site.city },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};
