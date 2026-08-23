"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, platformNames, platformColors, getDiscountPercent } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? getDiscountPercent(product.price, product.originalPrice)
    : 0;

  const platformName = platformNames[product.platform];
  const badgeLabel =
    product.badge === "hot" ? "🔥 Popular" : product.badge === "bestseller" ? "🏆 Mais Vendido" : product.badge === "new" ? "✨ Novo" : null;

  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group block bg-white border border-gray-100 hover:border-[#FCD208]/30 transition-all hover:shadow-lg hover:shadow-[#FCD208]/5 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-white aspect-[4/3]">
        {discount > 0 && (
          <div className="absolute top-0 left-0 z-10 bg-[#FCD208] text-white text-[10px] font-bold px-2 py-1">
            -{discount}%
          </div>
        )}
        {badgeLabel && (
          <div className="absolute top-0 right-0 z-10 bg-gray-900 text-white text-[10px] font-bold px-2 py-1">
            {badgeLabel}
          </div>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[10px] text-gray-400 mb-1">{platformName}</p>

        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-[#FCD208] transition-colors leading-snug">
          {product.title}
        </h3>

        {/* Rating */}
        {product.rating != null && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`h-3 w-3 ${i < Math.round(product.rating!) ? "text-[#FCD208]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] text-gray-400">{product.rating}</span>
            {product.reviews != null && (
              <span className="text-[10px] text-gray-300">({product.reviews.toLocaleString("pt-BR")})</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto pt-2 border-t border-gray-50">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-base font-bold text-[#FCD208]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-[11px] text-gray-400 line-through">{product.originalPrice}</span>
            )}
          </div>
          {product.cashback && (
            <p className="text-[10px] text-green-600 font-semibold mt-1">+ {product.cashback} cashback</p>
          )}
          {product.freeShipping && (
            <span className="inline-block mt-1.5 bg-green-50 text-green-700 border border-green-200 text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
              Frete Gratis
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
