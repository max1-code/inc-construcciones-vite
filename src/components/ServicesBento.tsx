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
    <section id="servicios" className="border-t border-white/5 bg-slate-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-bronze">Servicios</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Todo lo que una villa necesita, sin fragmentar el proyecto
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`group rounded-2xl border border-white/8 bg-slate-card p-6 transition hover:border-bronze/40 hover:bg-slate-card2 sm:p-8 ${
                  s.featured ? "sm:col-span-2 sm:grid sm:grid-cols-[auto_1fr] sm:gap-8 sm:items-start" : ""
                }`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bronze/15 text-bronze sm:mb-0">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-snow">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-snow/65">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
