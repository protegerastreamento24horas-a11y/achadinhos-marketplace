const benefits = [
  { icon: "01", title: "OFERTAS SELECIONADAS", desc: "Encontre as melhores ofertas em um so lugar." },
  { icon: "02", title: "COMPARACAO", desc: "Compare precos entre Shopee, Amazon e ML." },
  { icon: "03", title: "PRATICIDADE", desc: "Encontre seu proximo achadinho rapidamente." },
  { icon: "04", title: "COMPRA SEGURA", desc: "A compra acontece na plataforma responsavel." },
];

export default function BenefitsBar() {
  return (
    <section className="border-y border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="text-xs font-bold text-[#FF4B2B] bg-[#FF4B2B]/10 h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">{b.icon}</span>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">{b.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
