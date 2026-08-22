"use client";

import { products, getDiscountPercent } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function TopSellingSection() {
  const topSelling = products
    .filter((p) => p.reviews && p.reviews >= 500)
    .sort((a, b) => (b.reviews || 0) - (a.reviews || 0));

  if (topSelling.length === 0) return null;

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            <span className="text-gradient">Mais Vendidos</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Os achadinhos que mais chamam atencao</p>
        </div>
        <Carousel id="top-selling">
          {topSelling.map((product, i) => (
            <CarouselItem key={product.id}>
              <div className="relative">
                {i < 3 && (
                  <div className="absolute -top-2 -left-1 z-10 text-xs font-bold bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white h-6 w-6 flex items-center justify-center shadow-lg">
                    {i + 1}
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
