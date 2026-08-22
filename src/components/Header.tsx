"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="bg-[#FF4B2B] text-white text-[10px] font-bold px-1.5 py-0.5">ACH</span>
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            Achadinhos
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-[#FF4B2B] transition-colors">Inicio</Link>
          <Link href="/produtos" className="hover:text-[#FF4B2B] transition-colors">Achadinhos</Link>
          <Link href="/produtos?cat=Tecnologia" className="hover:text-[#FF4B2B] transition-colors">Tecnologia</Link>
          <Link href="/produtos?cat=Moda" className="hover:text-[#FF4B2B] transition-colors">Moda</Link>
        </nav>

        <div className="flex-1" />

        {/* Search */}
        <div className="hidden sm:flex items-center bg-gray-50 border border-gray-200 px-3 h-9 w-64 focus-within:border-[#FF4B2B] focus-within:bg-white transition-all">
          <Search className="h-4 w-4 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Buscar achadinhos..."
            className="ml-2 bg-transparent text-sm w-full outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden h-9 w-9 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-[#FF4B2B] transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-3 space-y-2">
          <div className="flex items-center bg-gray-50 border border-gray-200 px-3 h-9 sm:hidden mb-3">
            <Search className="h-4 w-4 text-gray-400 shrink-0" />
            <input type="text" placeholder="Buscar achadinhos..." className="ml-2 bg-transparent text-sm w-full outline-none" />
          </div>
          {[
            { href: "/", label: "Inicio" },
            { href: "/produtos", label: "Achadinhos" },
            { href: "/produtos?cat=Tecnologia", label: "Tecnologia" },
            { href: "/produtos?cat=Moda", label: "Moda" },
          ].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-[#FF4B2B] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
