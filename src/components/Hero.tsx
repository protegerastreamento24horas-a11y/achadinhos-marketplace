"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const banners = [
  { title: "Achados do Dia", subtitle: "Produtos com ate 80% OFF", cta: "Ver Agora", href: "#ofertas" },
  { title: "Ofertas Relampago", subtitle: "Tempo limitado, pecas unicas", cta: "Correr!", href: "#ofertas" },
  { title: "Novidades Shopee", subtitle: "Os ultimos lancamentos com desconto", cta: "Explorar", href: "#ofertas" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const b = banners[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FF4B2B] to-[#FF416C]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {b.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            {b.subtitle}
          </p>
          <Link
            href={b.href}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4B2B] px-8 py-4 text-base font-bold hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            {b.cta}
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 transition-all ${i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Banner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
