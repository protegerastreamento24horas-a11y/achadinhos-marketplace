export type Platform = "shopee" | "amazon" | "mercadolivre";

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: string;
  originalPrice?: string;
  image: string;
  platform: Platform;
  affiliateLink: string;
  category: string;
  badge?: "hot" | "bestseller" | "new";
  rating?: number;
  reviews?: number;
  cashback?: string;
  featured?: boolean;
  freeShipping?: boolean;
}

export const categories = [
  { id: "Todos", label: "Todos", icon: "🔥" },
  { id: "Tecnologia", label: "Tecnologia", icon: "📱" },
  { id: "Casa", label: "Casa & Decoracao", icon: "🏠" },
  { id: "Moda", label: "Moda", icon: "👗" },
  { id: "Beleza", label: "Beleza & Saude", icon: "💄" },
  { id: "Esportes", label: "Esportes", icon: "⚽" },
  { id: "Games", label: "Games", icon: "🎮" },
  { id: "Ferramentas", label: "Ferramentas", icon: "🔧" },
  { id: "Pet", label: "Pet Shop", icon: "🐾" },
  { id: "Automotivo", label: "Automotivo", icon: "🚗" },
];

export const platformNames: Record<Platform, string> = {
  shopee: "Shopee",
  amazon: "Amazon",
  mercadolivre: "Mercado Livre",
};

export const platformColors: Record<Platform, string> = {
  shopee: "bg-orange-50 text-orange-600 border-orange-200",
  amazon: "bg-amber-50 text-amber-700 border-amber-200",
  mercadolivre: "bg-yellow-50 text-yellow-600 border-yellow-200",
};

export const products: Product[] = [
  {
    id: 1,
    title: "Fone Bluetooth TWS Pro 5.3",
    slug: "fone-bluetooth-tws-pro",
    description: "Fone sem fio com cancelamento de ruido ativo, caixa de carga e 30h de bateria.",
    price: "R$ 29,90",
    originalPrice: "R$ 149,90",
    image: "https://down-br.img.susercontent.com/file/sg-11134201-23020-r7t5k3l0genv0f",
    platform: "shopee",
    affiliateLink: "https://shopee.com.br/product/123/456",
    category: "Tecnologia",
    badge: "hot",
    rating: 4.7,
    reviews: 2340,
    cashback: "12%",
    featured: true,
    freeShipping: true,
  },
  {
    id: 2,
    title: "Smart Watch Series 8 Waterproof",
    slug: "smart-watch-series-8",
    description: "Relogio inteligente com tela AMOLED, monitor cardiaco, GPS e 7 dias de bateria.",
    price: "R$ 89,90",
    originalPrice: "R$ 399,90",
    image: "https://down-br.img.susercontent.com/file/sg-11134201-23020-r7t5k3l0genv0f",
    platform: "shopee",
    affiliateLink: "https://shopee.com.br/product/789/012",
    category: "Tecnologia",
    badge: "bestseller",
    rating: 4.8,
    reviews: 5120,
    cashback: "15%",
    featured: true,
    freeShipping: true,
  },
  {
    id: 3,
    title: "Camiseta Oversized Premium Algodao",
    slug: "camiseta-oversized-premium",
    description: "Camiseta 100% algodao peignee, corte oversized, 12 cores disponiveis.",
    price: "R$ 34,90",
    originalPrice: "R$ 89,90",
    image: "https://down-br.img.susercontent.com/file/sg-11134201-23020-r7t5k3l0genv0f",
    platform: "shopee",
    affiliateLink: "https://shopee.com.br/product/345/678",
    category: "Moda",
    badge: "hot",
    rating: 4.6,
    reviews: 1890,
    featured: true,
    freeShipping: true,
  },
  {
    id: 4,
    title: "Kit Maquiagem Profissional 42 Pecas",
    slug: "kit-maquiagem-profissional",
    description: "Kit completo com paleta de sombras, batons, pinceis e necessaire.",
    price: "R$ 49,90",
    originalPrice: "R$ 199,90",
    image: "https://down-br.img.susercontent.com/file/sg-11134201-23020-r7t5k3l0genv0f",
    platform: "shopee",
    affiliateLink: "https://shopee.com.br/product/901/234",
    category: "Beleza",
    badge: "bestseller",
    rating: 4.5,
    reviews: 3200,
    cashback: "10%",
    featured: true,
    freeShipping: true,
  },
  {
    id: 5,
    title: "Echo Dot 5a Geracao Smart Speaker",
    slug: "echo-dot-5a-geracao",
    description: "Alto-falante inteligente Alexa com som mejorado e luzes ambiente.",
    price: "R$ 199,00",
    originalPrice: "R$ 349,00",
    image: "https://images-na.ssl-images-amazon.com/images/I/518cWc6gXBL._AC_SL1000_.jpg",
    platform: "amazon",
    affiliateLink: "https://amazon.com.br/dp/B09B8V1LZ3",
    category: "Tecnologia",
    badge: "hot",
    rating: 4.9,
    reviews: 12500,
    featured: true,
    freeShipping: true,
  },
  {
    id: 6,
    title: "Kindle Paperwhite 11a Geracao 16GB",
    slug: "kindle-paperwhite-11",
    description: "E-reader com tela 6.8\" antirreflexo, luz quente ajustavel e impermeavel IPX8.",
    price: "R$ 499,00",
    originalPrice: "R$ 699,00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61PHxELLEjL._AC_SL1000_.jpg",
    platform: "amazon",
    affiliateLink: "https://amazon.com.br/dp/B09TMN58KL",
    category: "Tecnologia",
    badge: "bestseller",
    rating: 4.8,
    reviews: 8900,
    cashback: "5%",
    featured: true,
    freeShipping: true,
  },
  {
    id: 7,
    title: "Aspirador Robo Intelligent X10",
    slug: "aspirador-robo-x10",
    description: "Robo aspirador com mapeamento laser, app, 4 modos de limpeza e 120min de bateria.",
    price: "R$ 899,90",
    originalPrice: "R$ 2.499,90",
    image: "https://http2.mlstatic.com/D_NQ_NP_632891-MLA44158264036_112020-F.jpg",
    platform: "mercadolivre",
    affiliateLink: "https://mercadolivre.com.br/produto/123456",
    category: "Casa",
    badge: "hot",
    rating: 4.7,
    reviews: 450,
    cashback: "8%",
    featured: true,
    freeShipping: true,
  },
  {
    id: 8,
    title: "Kit Barraca Camping 4 Pessoas",
    slug: "kit-barraca-camping",
    description: "Barraca impermeavel com toldo, saco de dormir e almofadas. Tudo em 1 kit.",
    price: "R$ 159,90",
    originalPrice: "R$ 399,90",
    image: "https://http2.mlstatic.com/D_NQ_NP_901891-MLA44158264036_112020-F.jpg",
    platform: "mercadolivre",
    affiliateLink: "https://mercadolivre.com.br/produto/789012",
    category: "Esportes",
    badge: "new",
    rating: 4.4,
    reviews: 320,
    freeShipping: true,
  },
  {
    id: 9,
    title: "Controle PS5 DualSense Sem Fio",
    slug: "controle-ps5-dualsense",
    description: "Controle oficial Sony com gatilhos adaptativos e feedback tatil.",
    price: "R$ 349,90",
    originalPrice: "R$ 499,90",
    image: "https://images-na.ssl-images-amazon.com/images/I/51FHW3NgKbL._AC_SL1500_.jpg",
    platform: "amazon",
    affiliateLink: "https://amazon.com.br/dp/B09V3KXJPB",
    category: "Games",
    badge: "bestseller",
    rating: 4.9,
    reviews: 6700,
    freeShipping: true,
  },
  {
    id: 10,
    title: "Luminaria LED RGB Gamer",
    slug: "luminaria-led-rgb-gamer",
    description: "Luminaria de ambiente com 16 cores, controle remoto e modo musica.",
    price: "R$ 45,90",
    originalPrice: "R$ 129,90",
    image: "https://down-br.img.susercontent.com/file/sg-11134201-23020-r7t5k3l0genv0f",
    platform: "shopee",
    affiliateLink: "https://shopee.com.br/product/567/890",
    category: "Games",
    rating: 4.3,
    reviews: 890,
    cashback: "15%",
    featured: true,
  },
  {
    id: 11,
    title: "Kit Ferramentas 108 Pecas Profissional",
    slug: "kit-ferramentas-108",
    description: "Kit completo com chave inglesa, alicates, chaves de fenda, soquetes e mala.",
    price: "R$ 129,90",
    originalPrice: "R$ 299,90",
    image: "https://http2.mlstatic.com/D_NQ_NP_901891-MLA44158264036_112020-F.jpg",
    platform: "mercadolivre",
    affiliateLink: "https://mercadolivre.com.br/produto/345678",
    category: "Ferramentas",
    badge: "hot",
    rating: 4.6,
    reviews: 2100,
    freeShipping: true,
  },
  {
    id: 12,
    title: "Cama Pet Ortopedica Super Macia",
    slug: "cama-pet-ortopedica",
    description: "Cama ortopedica para caes e gatos, lavavel, anti-alergica, 3 tamanhos.",
    price: "R$ 69,90",
    originalPrice: "R$ 159,90",
    image: "https://http2.mlstatic.com/D_NQ_NP_632891-MLA44158264036_112020-F.jpg",
    platform: "mercadolivre",
    affiliateLink: "https://mercadolivre.com.br/produto/901234",
    category: "Pet",
    rating: 4.5,
    reviews: 1340,
    cashback: "10%",
    freeShipping: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
}

export function getDiscountPercent(price: string, originalPrice: string): number {
  const current = parsePrice(price);
  const original = parsePrice(originalPrice);
  if (!original || !current) return 0;
  return Math.round((1 - current / original) * 100);
}
