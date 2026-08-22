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

export const products: Product[] = [];

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
