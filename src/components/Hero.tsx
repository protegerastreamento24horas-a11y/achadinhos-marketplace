"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";

const banners = [
  {
    src: "/banner-1.png",
    alt: "Ofertas do Dia - Ate 50% OFF",
    title: "Ofertas Imperdiveis",
    subtitle: "Ate 50% de desconto em selecionados",
  },
  {
    src: "/banner-2.png",
    alt: "Frete Gratis em Todo Site",
    title: "Frete Gratis",
    subtitle: "Compre sem se preocupar com o frete",
  },
  {
    src: "/banner-3.png",
    alt: "Novidades da Semana",
    title: "Chegou Novidade",
    subtitle: "Veja os lancamentos mais quentes",
  },
  {
    src: "/banner-4.png",
    alt: "Promocao Especial",
    title: "Super Promocao",
    subtitle: "Descontos exclusivos por tempo limitado",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({ left: el.offsetWidth * index, behavior: "smooth" });
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: carouselRef.current.offsetWidth * currentIndex, behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex h-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-x"
      >
        {banners.map((banner, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-start relative aspect-[32/11] overflow-hidden"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1600}
              height={550}
              className="w-full h-full object-contain"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>
        ))}
      </div>

      {/* Indicators - Progress bar style */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="relative w-10 h-1.5 rounded-full bg-white/30 hover:bg-white/50 transition-all overflow-hidden"
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className="absolute left-0 top-0 h-full bg-white transition-transform duration-500 ease-out origin-left"
              style={{
                transform: i === currentIndex ? "scaleX(1)" : i < currentIndex ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: i < currentIndex ? "left" : "right",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}