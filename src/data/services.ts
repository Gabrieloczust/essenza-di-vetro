interface Service {
  title: string;
  image: string;
  total: number;
  highlight: boolean;
  videos?: string[];
}

export const services: Service[] = [
  {
    title: "Box Padrão",
    image: "box-padrao",
    total: 59,
    highlight: true,
  },
  {
    title: "Box Engenharia",
    image: "box-engenharia",
    total: 32,
    highlight: true,
  },
  {
    title: "Espelhos e Painéis",
    image: "espelhos-e-paineis",
    total: 57,
    highlight: true,
  },
  {
    title: "Janelas",
    image: "janelas",
    total: 67,
    highlight: true,
  },
  {
    title: "Portas de Vidro",
    image: "portas-de-vidro",
    total: 69,
    highlight: true,
  },
  {
    title: "Sacadas e Guarda-Corpo",
    image: "sacadas-e-guarda-corpo",
    total: 61,
    highlight: true,
  },
  {
    title: "Coberturas Fixas",
    image: "coberturas-fixas",
    total: 64,
    highlight: true,
  },
  {
    title: "Esquadria de PVC",
    image: "esquadria-de-pvc",
    total: 75,
    highlight: true,
  },
  {
    title: "Esquadria de Alumínio",
    image: "esquadria-de-aluminio",
    total: 32,
    highlight: false,
  },
  {
    title: "Aquários",
    image: "aquarios",
    total: 10,
    highlight: false,
  },
  {
    title: "Coberturas Retráteis",
    image: "coberturas-retrateis",
    total: 33,
    videos: [
      "https://vimeo.com/617475525",
      "https://vimeo.com/617475670",
      "https://vimeo.com/617475301",
      "https://vimeo.com/617475604",
      "https://vimeo.com/715833101",
      "https://vimeo.com/761252651",
      "https://vimeo.com/761252674",
      "https://vimeo.com/761252695",
    ],
    highlight: false,
  },
  {
    title: "Cortinas de Vidro",
    image: "cortinas-de-vidro",
    total: 10,
    highlight: false,
  },
  {
    title: "Corrimão",
    image: "corrimao",
    total: 19,
    highlight: false,
  },
  {
    title: "Deck",
    image: "deck",
    total: 10,
    highlight: false,
  },
  {
    title: "Fachada Estrutural",
    image: "fachada-estrutural",
    total: 39,
    highlight: false,
  },
  {
    title: "Fixos",
    image: "fixos",
    total: 21,
    highlight: false,
  },
  {
    title: "Mesas e Prateleiras",
    image: "mesas-e-prateleiras",
    total: 25,
    highlight: false,
  },
  {
    title: "Muros de Vidro",
    image: "muros-de-vidro",
    total: 27,
    highlight: false,
  },
  {
    title: "Pergolados",
    image: "pergolados",
    total: 62,
    highlight: false,
  },
  {
    title: "Persianas Integradas",
    image: "persianas-integradas",
    total: 10,
    highlight: false,
  },
  {
    title: "Puxadores de Porta",
    image: "puxadores-de-porta",
    total: 20,
    highlight: false,
  },
  {
    title: "Structural Glazing",
    image: "structural-glazing",
    total: 4,
    highlight: false,
  },
  {
    title: "Tampo de Mesa",
    image: "tampo-de-mesa",
    total: 4,
    highlight: false,
  },
];
