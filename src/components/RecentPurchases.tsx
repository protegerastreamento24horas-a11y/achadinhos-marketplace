"use client";

const purchases = [
  { name: "Carlos M.", product: "Fone Bluetooth TWS Pro", time: "2 min", platform: "Shopee" },
  { name: "Ana P.", product: "Smart Watch Series 8", time: "5 min", platform: "Amazon" },
  { name: "Rafael S.", product: "Camiseta Oversized Premium", time: "8 min", platform: "Shopee" },
  { name: "Juliana F.", product: "Kit Maquiagem Profissional", time: "11 min", platform: "Shopee" },
  { name: "Lucas O.", product: "Echo Dot 5a Geracao", time: "14 min", platform: "Amazon" },
  { name: "Mariana T.", product: "Kindle Paperwhite 11a", time: "17 min", platform: "Amazon" },
  { name: "Pedro H.", product: "Aspirador Robo X10", time: "20 min", platform: "Mercado Livre" },
  { name: "Fernanda L.", product: "Kit Barraca Camping", time: "23 min", platform: "Mercado Livre" },
  { name: "Bruno K.", product: "Controle PS5 DualSense", time: "26 min", platform: "Amazon" },
  { name: "Camila R.", product: "Luminaria LED RGB Gamer", time: "29 min", platform: "Shopee" },
  { name: "Thiago A.", product: "Kit Ferramentas 108 Pecas", time: "32 min", platform: "Mercado Livre" },
  { name: "Isabela N.", product: "Cama Pet Ortopedica", time: "35 min", platform: "Mercado Livre" },
];

const platformColors: Record<string, string> = {
  Shopee: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/20",
  Amazon: "from-amber-500/20 to-amber-600/10 border-amber-500/20",
  "Mercado Livre": "from-yellow-500/20 to-yellow-600/10 border-yellow-500/20",
};

export default function RecentPurchases() {
  const items = [...purchases, ...purchases, ...purchases];

  return (
    <section className="py-5 border-y border-gray-100 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            Compras recentes ao vivo
          </p>
        </div>
      </div>

      <div className="relative" style={{ perspective: "800px" }}>
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max animate-scroll py-2">
            {items.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative flex items-center gap-3 border border-gray-100 bg-white backdrop-blur-md px-5 py-3 transition-all duration-500 hover:border-[#FCD208]/30 hover:shadow-[0_0_30px_rgba(252,210,8,0.08)]"
                  style={{
                    transform: "rotateY(-2deg) rotateX(1deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.8] to-transparent pointer-events-none" />

                  <div className={`h-9 w-9 bg-gradient-to-br ${platformColors[p.platform] || platformColors.Shopee} flex items-center justify-center shrink-0`}>
                    <svg className="h-4.5 w-4.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold text-gray-700 truncate">{p.name}</span>
                    <span className="text-[10px] text-gray-400 truncate">
                      <span className="text-[#FCD208]/80 font-semibold">{p.product}</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-end ml-2 shrink-0">
                    <span className="text-[8px] font-bold text-green-500 uppercase tracking-wider">Confirmado</span>
                    <span className="text-[8px] text-gray-300">ha {p.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
