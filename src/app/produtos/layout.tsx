import { Suspense } from "react";
import ProductsPage from "./page";

export const metadata = {
  title: "Todos os Achadinhos | Achadinhos Marketplace",
  description: "Explore todos os achadinhos com desconto nas principais lojas do Brasil. Shopee, Amazon e Mercado Livre.",
  keywords: ["achadinhos", "descontos", "ofertas", "shopee", "amazon", "mercado livre", "compras online"],
  openGraph: {
    title: "Achadinhos | Menores Precos da Internet",
    description: "Encontre os melhores achadinhos com desconto nas principais lojas online do Brasil.",
    url: "https://achadinhos-marketplace.vercel.app",
    siteName: "Achadinhos Marketplace",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Achadinhos | Menores Precos da Internet",
    description: "Encontre os melhores achadinhos com desconto nas principais lojas online do Brasil.",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-20 text-center text-gray-400">Carregando...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
