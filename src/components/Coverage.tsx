import { MapPin, Quote } from "lucide-react";
import { site } from "../lib/site";

const testimonials = [
  {
    quote:
      "Presupuesto cerrado y cumplieron el plazo. La reforma de la cocina y el salón cambió por completo la casa.",
    name: "Propietario · Cabo Roig",
    type: "Reforma integral",
  },
  {
    quote:
      "Nos llevaron las licencias y la dirección de obra. Solo teníamos que decidir acabados.",
    name: "Propietarios · La Zenia",
    type: "Ampliación + terraza",
  },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="section-glow py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bronze">Cobertura</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Trabajamos donde están tus villas
        </h2>
        <div className="rule-bronze mt-6 max-w-xs" />

        <div className="mt-8 flex flex-wrap gap-2">
          {site.zones.map((z) => (
            <span
              key={z}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-snow/80 backdrop-blur-sm transition hover:border-bronze/30 hover:text-snow"
            >
              <MapPin className="h-3.5 w-3.5 text-bronze" />
              {z}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="surface-card rounded-2xl p-6 transition duration-300">
              <Quote className="h-5 w-5 text-bronze/70" />
              <p className="mt-3 text-sm leading-relaxed text-snow/75">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-snow/45">
                <span className="font-medium text-snow/65">{t.name}</span>
                <span className="mx-2">·</span>
                {t.type}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-xs text-snow/35">
          Testimonios de ejemplo — sustituir por reseñas reales del cliente.
        </p>
      </div>
    </section>
  );
}
