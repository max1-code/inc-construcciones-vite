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
    <section id="cobertura" className="border-t border-white/5 bg-slate-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-bronze">Cobertura</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Trabajamos donde están tus villas
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {site.zones.map((z) => (
            <span
              key={z}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-card px-3 py-2 text-xs text-snow/85"
            >
              <MapPin className="h-3.5 w-3.5 text-bronze" />
              {z}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-white/8 bg-slate-card p-6"
            >
              <Quote className="h-5 w-5 text-bronze/80" />
              <p className="mt-3 text-sm leading-relaxed text-snow/80">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-snow/50">
                <span className="font-medium text-snow/70">{t.name}</span>
                <span className="mx-2">·</span>
                {t.type}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-xs text-snow/40">
          Testimonios de ejemplo — sustituir por reseñas reales del cliente.
        </p>
      </div>
    </section>
  );
}
