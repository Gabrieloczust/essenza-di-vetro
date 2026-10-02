import { contacts, services, site } from "@/data";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> Vidraçaria com atendimento a domicílio em toda ${site.city} (PR). Box de banheiro, espelhos, janelas, portas, sacadas e guarda-corpo, coberturas e esquadrias em vidro temperado e laminado. Orçamento sem compromisso pelo WhatsApp.

## Informações
- Responsável: ${site.owner}
- WhatsApp e telefone: ${contacts.whatsapp}
- Atendimento: ${site.hours.toLowerCase()}
- Região: ${site.city} (PR), incluindo ${site.areas.join(", ")}
- Sem loja física: o orçamento é feito pelo WhatsApp e o serviço é realizado no endereço do cliente
- Pagamento: ${site.payments.join(", ")}

## Páginas
- [Início](${site.url}/): apresentação, serviços em destaque, perguntas frequentes e contato
- [Serviços](${site.url}/servicos): todos os serviços com fotos de trabalhos

## Serviços
${services.map(({ title }) => `- ${title}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
