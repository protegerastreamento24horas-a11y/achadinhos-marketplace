"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, parsePrice, getDiscountPercent } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "Todos";

  const [category, setCategory] = useState(initialCat);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recent");

  const filtered = useMemo(() => {
    let result = category === "Todos" ? [...products] : products.filter((p) => p.category === category);
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (sort === "discount") result.sort((a, b) => getDiscountPercent(b.price, b.originalPrice || b.price) - getDiscountPercent(a.price, a.originalPrice || a.price));
    else if (sort === "price-asc") result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    else if (sort === "price-desc") result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return result;
  }, [category, query, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Todos os Achadinhos</h1>
        <p className="text-sm text-gray-500">{filtered.length} ofertas encontradas</p>
      </div>

      <SearchBar value={query} onChange={setQuery} placeholder="Buscar produto..." />
      <div className="mt-4">
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <p className="text-sm text-gray-500">
          Mostrando <span className="font-semibold text-gray-900">{filtered.length}</span> produtos
        </p>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm border border-gray-200 bg-white px-3 py-2 text-gray-700 focus:border-[#FF4B2B] focus:outline-none"
        >
          <option value="recent">Todos</option>
          <option value="discount">Maior desconto</option>
          <option value="price-asc">Menor preco</option>
          <option value="price-desc">Maior preco</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">Nenhum produto encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
