import { Building2, FileCheck, Home, Waves } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Reformas integrales de villas",
    desc: "Redistribución de espacios, cocinas abiertas, suites y domótica. Transformamos villas de los 80–90 en viviendas actuales sin sorpresas de coste.",
    featured: true,
  },
  {
    icon: Building2,
    title: "Obra nueva y ampliaciones",
    desc: "Villas independientes, segundas plantas y torreones. Estructura, instalaciones y acabados bajo un solo interlocutor.",
    featured: false,
  },
  {
    icon: Waves,
    title: "Terrazas, piscinas y soláriums",
    desc: "Microcemento, impermeabilización, piscinas e iluminación exterior. El exterior al mismo nivel que el interior.",
    featured: false,
  },
  {
    icon: FileCheck,
    title: "Licencias y llave en mano",
    desc: "Arquitecto, trámites municipales y dirección técnica. Nos ocupamos del papeleo para que tú avances sin bloqueos.",
    featured: false,
  },
];

export default function ServicesBento() {
  return (
    <section id="servicios" className="section-glow py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bronze">Servicios</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Todo lo que una villa necesita, sin fragmentar el proyecto
        </h2>
        <div className="rule-bronze mt-6 max-w-xs" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`surface-card group rounded-2xl p-6 transition duration-300 sm:p-8 ${
                  s.featured ? "sm:col-span-2 sm:grid sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8" : ""
                }`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-bronze/20 bg-bronze/10 text-bronze transition group-hover:border-bronze/40 group-hover:bg-bronze/15 sm:mb-0">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-snow">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-snow/60">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
