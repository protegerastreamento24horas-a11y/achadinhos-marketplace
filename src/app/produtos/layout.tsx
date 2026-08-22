import { Suspense } from "react";
import ProductsPage from "./page";

export const metadata = { title: "Todos os Achadinhos | Achadinhos Marketplace" };

export default function Page() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-20 text-center text-gray-400">Carregando...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
