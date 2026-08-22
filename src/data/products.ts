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
    title: "Fone Philips TAT1109BK Bluetooth TWS",
    slug: "fone-philips-tat1109bk-bluetooth-tws",
    description: "Fone de ouvido sem fio Philips TWS com Bluetooth, microfone integrado e ate 24 horas de bateria. Preto.",
    price: "R$ 99,99",
    originalPrice: "R$ 144,00",
    image: "/fone-philips-tat1109bk.jpg",
    platform: "amazon",
    affiliateLink: "https://www.amazon.com.br/PHILIPS-TAT1109BK-00-Bluetooth-Microfone/dp/B0DVMQVVDY?tag=achadinh026c7-20",
    category: "Tecnologia",
    badge: "bestseller",
    rating: 4.6,
    reviews: 7500,
    featured: true,
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
