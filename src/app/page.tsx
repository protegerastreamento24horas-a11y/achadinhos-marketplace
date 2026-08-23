"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import Carousel, { CarouselItem } from "@/components/Carousel";
import TopSellingSection from "@/components/TopSellingSection";
import FlashOffersSection from "@/components/FlashOffersSection";

export default function Home() {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = category === "Todos" ? products : products.filter((p) => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return list;
  }, [category, search]);

  const shopee = products.filter((p) => p.platform === "shopee").slice(0, 6);
  const amazon = products.filter((p) => p.platform === "amazon").slice(0, 6);
  const ml = products.filter((p) => p.platform === "mercadolivre").slice(0, 6);

  return (
    <div>
      <Hero />

      {/* Search */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-3 pb-4 sm:pt-4 sm:pb-5">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar achadinhos..."
            className="w-full border border-gray-200 bg-white py-3 sm:py-3.5 pl-12 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#FCD208] focus:ring-2 focus:ring-[#FCD208]/30 focus:outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      <Stories />
      <section id="ofertas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pt-6 sm:pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xl">🔥</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Ofertas do Dia</h2>
          <span className="bg-[#FCD208] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">atualizado</span>
        </div>
        <CategoryFilter selected={category} onSelect={setCategory} />
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <TopSellingSection />
      <FlashOffersSection />

      {/* Shopee carousel */}
      <section className="bg-yellow-50/50 border-y border-yellow-100/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-500 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">Shopee</span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Mais Vendidos Shopee</h2>
          </div>
          <Carousel id="shopee">
            {shopee.map((p) => (
              <CarouselItem key={p.slug}>
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Amazon carousel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">Amazon</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Destaque Amazon</h2>
        </div>
        <Carousel id="amazon">
          {amazon.map((p) => (
            <CarouselItem key={p.slug}>
              <ProductCard product={p} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>

      {/* ML carousel */}
      <section className="bg-yellow-50/50 border-y border-yellow-100/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-500 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">Mercado Livre</span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Ofertas Mercado Livre</h2>
          </div>
          <Carousel id="ml">
            {ml.map((p) => (
              <CarouselItem key={p.slug}>
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🔍", title: "Curadoria Diaria", desc: "Analisamos milhares de ofertas todos os dias para encontrar as melhores." },
            { icon: "✅", title: "Links Verificados", desc: "Todos os links sao verificados para garantir que a oferta ainda esta ativa." },
            { icon: "🚀", title: "Atualizacao Constante", desc: "Nossas ofertas sao atualizadas ao longo do dia para nao perder nada." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-gray-50 border border-gray-100">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {[
              { q: "Como funcionam os links de afiliado?", a: "Quando voce clica em um link e compra o produto, recebemos uma pequena comissao da loja. Isso nao aumenta o preco para voce — o preco e o mesmo de comprar direto na loja." },
              { q: "Os precos estao atualizados?", a: "Sim! Atualizamos as ofertas diariamente. Preco e estoque podem mudar a qualquer momento, entao recomendo sempre conferir no link direto." },
              { q: "Por que usar o Achadinhos ao inves de ir direto na loja?", a: "Fazemos todo o trabalho chato de ficar caçando ofertas, comparando precos e verificando se as promocoes sao reais. Voce so precisa escolher e comprar." },
              { q: "Preciso pagar para usar o site?", a: "Nao! O Achadinhos e totalmente gratuito. Nosso objetivo e ajudar voce a economizar." },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-gray-200 group">
                <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:text-[#FCD208] transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
