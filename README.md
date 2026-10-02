# Essenza Di Vetro

Site da Essenza Di Vetro, vidraçaria com atendimento a domicílio em Curitiba. Next.js 15 + React 19.

## Rodar
```
pnpm install
pnpm dev
```

## Onde editar
- WhatsApp: `src/data/contacts.ts` (links e mensagem em `src/data/links.ts`)
- Domínio, textos de SEO e bairros atendidos: `src/data/site.ts`
- Serviços e quantidade de fotos: `src/data/services.ts` (fotos em `public/images/services`)

## Variáveis de ambiente (Vercel)
- `NEXT_PUBLIC_SITE_URL`: domínio final, ex.: `https://www.essenzadivetro.com.br`
- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics 4 (opcional)

## Pendências
- Registrar o domínio e definir `NEXT_PUBLIC_SITE_URL`
- Trocar `public/logo.png` por uma versão em alta resolução/SVG quando houver
