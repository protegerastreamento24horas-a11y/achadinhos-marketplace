import { products, platformNames, getDiscountPercent } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} | Achadinhos`,
    description: `${product.title} por ${product.price} na ${platformNames[product.platform]}. Confira a oferta!`,
  };
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const discount = product.originalPrice ? getDiscountPercent(product.price, product.originalPrice) : 0;
  const platformName = platformNames[product.platform];
  const related = products
    .filter((p) => p.slug !== product.slug && (p.category === product.category || p.platform === product.platform))
    .slice(0, 4);

  const platformBg: Record<string, string> = {
    shopee: "bg-yellow-500",
    amazon: "bg-amber-500",
    mercadolivre: "bg-yellow-500",
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-[#FCD208] transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/produtos" className="hover:text-[#FCD208] transition-colors">Achadinhos</Link>
        <span>/</span>
        <span className="text-gray-600 truncate max-w-[200px]">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="relative bg-white border border-gray-100 p-4">
          {discount > 0 && (
            <div className="absolute top-4 left-4 z-10 bg-[#FCD208] text-white text-xs font-bold px-2 py-1">
              -{discount}%
            </div>
          )}
          <div className="relative w-full aspect-[4/3] bg-white">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className={`${platformBg[product.platform]} text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider`}>
              {platformName}
            </span>
            {product.freeShipping && (
              <span className="bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                Frete Gratis
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>

          {product.rating != null && (
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`h-4 w-4 ${i < Math.round(product.rating!) ? "text-[#FCD208]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
              {product.reviews != null && (
                <span className="text-sm text-gray-400">({product.reviews.toLocaleString("pt-BR")} avaliacoes)</span>
              )}
            </div>
          )}

          <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-[#FCD208]">{product.price}</span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">{product.originalPrice}</span>
              )}
            </div>
            {discount > 0 && (
              <p className="text-sm text-green-600 mt-1 font-medium">Economia de {discount}%</p>
            )}
            {product.cashback && (
              <p className="text-sm text-green-600 mt-1 font-medium">+ {product.cashback} cashback</p>
            )}
          </div>

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="w-full flex items-center justify-center gap-2 bg-[#FCD208] text-white px-8 py-4 text-base font-bold hover:bg-[#D4A500] transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            Ver Oferta na {platformName}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <div className="mt-4 text-[11px] text-gray-400 leading-relaxed">
            * Preco e estoque sujeitos a alteracao pela loja. Confira o preco final no link.
          </div>

          {product.badge && (
            <div className="mt-6 border-t border-gray-100 pt-6">
              <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                {product.badge === "hot" ? "🔥 Popular" : product.badge === "bestseller" ? "🏆 Mais Vendido" : "✨ Novo"}
              </span>
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Voce tambem pode gostar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
