const steps = [
  {
    n: "01",
    title: "Diagnóstico técnico",
    desc: "Visita presencial a la vivienda sin compromiso. Medimos, escuchamos y detectamos limitaciones reales de estructura y normativa.",
  },
  {
    n: "02",
    title: "Propuesta comercial",
    desc: "Presupuesto detallado partida por partida. Sabes qué incluye cada línea antes de firmar.",
  },
  {
    n: "03",
    title: "Ejecución de obra",
    desc: "Fotos de avance semanales por WhatsApp. Un interlocutor, plazos y control de calidad en obra.",
  },
  {
    n: "04",
    title: "Entrega limpia",
    desc: "Certificación técnica y garantía formal de obra. Entregamos lista para habitar, no a medias.",
  },
];

export default function Method() {
  return (
    <section id="proceso" className="section-glow relative py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(197,168,128,0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bronze">Método INC</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Cuatro pasos transparentes
        </h2>
        <div className="rule-bronze mt-6 max-w-xs" />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="surface-card rounded-2xl p-5 transition duration-300 sm:p-6">
              <span className="bg-gradient-to-br from-bronze to-bronze-warm bg-clip-text text-2xl font-semibold text-transparent">
                {s.n}
              </span>
              <h3 className="mt-3 text-base font-semibold text-snow">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-snow/60">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
