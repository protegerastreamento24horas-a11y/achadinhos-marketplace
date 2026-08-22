"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/produtos?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue("");
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-[#FF4B2B]/10"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="bg-[#FF4B2B] text-white text-[10px] font-bold px-1.5 py-0.5">ACH</span>
          <span className="text-lg font-bold text-gray-900 tracking-tight">Achadinhos</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-[#FF4B2B] transition-colors">Inicio</Link>
          <Link href="/produtos" className="hover:text-[#FF4B2B] transition-colors">Achadinhos</Link>
          <Link href="/produtos?cat=Tecnologia" className="hover:text-[#FF4B2B] transition-colors">Tecnologia</Link>
          <Link href="/produtos?cat=Moda" className="hover:text-[#FF4B2B] transition-colors">Moda</Link>
        </nav>

        <div className="flex-1" />

        {/* Search toggle */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2.5 text-gray-400 hover:text-[#FF4B2B] hover:bg-[#FF4B2B]/5 transition-all"
          aria-label="Buscar"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2.5 text-gray-400 hover:text-[#FF4B2B] hover:bg-[#FF4B2B]/5 transition-all"
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <form onSubmit={handleSearch} className="border-t border-gray-100 bg-white px-4 pb-4 pt-3 animate-fade-in">
          <div className="relative mx-auto max-w-7xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="O que voce quer encontrar hoje?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
              className="w-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#FF4B2B] focus:bg-white focus:ring-2 focus:ring-[#FF4B2B]/10"
            />
          </div>
        </form>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-3 space-y-2 animate-fade-in">
          {[
            { href: "/", label: "Inicio" },
            { href: "/produtos", label: "Achadinhos" },
            { href: "/produtos?cat=Tecnologia", label: "Tecnologia" },
            { href: "/produtos?cat=Moda", label: "Moda" },
          ].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-[#FF4B2B] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
