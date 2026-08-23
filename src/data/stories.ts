export interface Story {
  id: number;
  label: string;
  image: string;
  slides: StorySlide[];
}

export interface StorySlide {
  image: string;
  title?: string;
  subtitle?: string;
  cta?: string;
  link?: string;
  duration?: number;
}

export const stories: Story[] = [
  {
    id: 1,
    label: "Ofertas",
    image: "https://m.media-amazon.com/images/I/519bjoeFBTL._AC_SL1000_.jpg",
    slides: [
      {
        image: "https://m.media-amazon.com/images/I/519bjoeFBTL._AC_SL1000_.jpg",
        title: "Fone Philips TWS",
        subtitle: "R$ 99,99 — 31% OFF",
        cta: "Ver Oferta",
        link: "/produto/fone-philips-tat1109bk-bluetooth-tws",
        duration: 5000,
      },
      {
        image: "https://m.media-amazon.com/images/I/51ML3MBfGGL._AC_SL1500_.jpg",
        title: "Camiseta Insider",
        subtitle: "R$ 89,90 — 43% OFF",
        cta: "Ver Oferta",
        link: "/produto/camiseta-insider-tech-t-shirt-gola-u-masculino",
        duration: 5000,
      },
    ],
  },
  {
    id: 2,
    label: "Lancamentos",
    image: "https://m.media-amazon.com/images/I/51ML3MBfGGL._AC_SL1500_.jpg",
    slides: [
      {
        image: "https://m.media-amazon.com/images/I/51ML3MBfGGL._AC_SL1500_.jpg",
        title: "Novidade Insider",
        subtitle: "Camiseta Tech com tecnologia de frescor",
        cta: "Quero Agora",
        link: "/produto/camiseta-insider-tech-t-shirt-gola-u-masculino",
        duration: 5000,
      },
    ],
  },
  {
    id: 3,
    label: "Mais Vendidos",
    image: "https://m.media-amazon.com/images/I/61+a0fo6xNL._AC_SL1200_.jpg",
    slides: [
      {
        image: "https://m.media-amazon.com/images/I/61+a0fo6xNL._AC_SL1200_.jpg",
        title: "Garrafa Termica 1000ml",
        subtitle: "R$ 65,98 — Aco Inox",
        cta: "Ver Oferta",
        link: "/produto/garrafa-termica-agua-isolada-1000ml-aco-inox",
        duration: 5000,
      },
    ],
  },
  {
    id: 4,
    label: "Promocao",
    image: "https://m.media-amazon.com/images/I/519bjoeFBTL._AC_SL1000_.jpg",
    slides: [
      {
        image: "https://m.media-amazon.com/images/I/519bjoeFBTL._AC_SL1000_.jpg",
        title: "⚡ Super Desconto",
        subtitle: "Fone Philips por apenas R$ 99,99",
        cta: "Aproveitar",
        link: "/produto/fone-philips-tat1109bk-bluetooth-tws",
        duration: 5000,
      },
    ],
  },
  {
    id: 5,
    label: "Dica do Dia",
    image: "https://m.media-amazon.com/images/I/61+a0fo6xNL._AC_SL1200_.jpg",
    slides: [
      {
        image: "https://m.media-amazon.com/images/I/61+a0fo6xNL._AC_SL1200_.jpg",
        title: "Hidratacao em Dia",
        subtitle: "Garrafa termica mantem a temperatura por horas",
        cta: "Ver Produto",
        link: "/produto/garrafa-termica-agua-isolada-1000ml-aco-inox",
        duration: 5000,
      },
    ],
  },
];
