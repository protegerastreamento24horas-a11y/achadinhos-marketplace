import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 mt-auto border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-[#FCD208]">Achadinhos</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Encontre os melhores achadinhos com desconto nas principais lojas online do Brasil.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Navegacao</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#FCD208] transition-colors">Inicio</Link></li>
              <li><Link href="/produtos" className="hover:text-[#FCD208] transition-colors">Todos os Achadinhos</Link></li>
              <li><Link href="/produtos?cat=Tecnologia" className="hover:text-[#FCD208] transition-colors">Tecnologia</Link></li>
              <li><Link href="/produtos?cat=Casa" className="hover:text-[#FCD208] transition-colors">Casa & Decoracao</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Categorias</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/produtos?cat=Moda" className="hover:text-[#FCD208] transition-colors">Moda</Link></li>
              <li><Link href="/produtos?cat=Beleza" className="hover:text-[#FCD208] transition-colors">Beleza & Saude</Link></li>
              <li><Link href="/produtos?cat=Games" className="hover:text-[#FCD208] transition-colors">Games</Link></li>
              <li><Link href="/produtos?cat=Esportes" className="hover:text-[#FCD208] transition-colors">Esportes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Lojas</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-yellow-500 shrink-0" />
                Shopee
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-amber-500 shrink-0" />
                Amazon
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-yellow-500 shrink-0" />
                Mercado Livre
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Achadinhos. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400">
              <span>Este site contem links de afiliado.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
