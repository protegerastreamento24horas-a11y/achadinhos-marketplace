"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function FlashOffersSection() {
  const offers = products.filter((p) => p.originalPrice && p.featured);

  if (offers.length === 0) return null;

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            <span className="text-gradient">Ofertas em Destaque</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Confira oportunidades selecionadas</p>
        </div>
        <Carousel id="flash-offers">
          {offers.map((product) => (
            <CarouselItem key={product.id}>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
