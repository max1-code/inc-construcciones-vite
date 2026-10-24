import { CheckCircle2 } from "lucide-react";
import { site } from "../lib/site";

const badges = [
  { label: `+${site.years} años de experiencia local` },
  { label: "Presupuesto cerrado sin sorpresas" },
  { label: "Plazos firmados por contrato" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        alt="Villa moderna en Costa Blanca"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.75) 40%, rgba(11,15,25,0.45) 70%, rgba(11,15,25,0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:pb-28">
        <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-bronze">
          Orihuela Costa · Torrevieja · Costa Blanca
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-snow sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Reformas integrales y construcción de villas en Orihuela Costa y Torrevieja
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-snow/80 sm:text-lg">
          Proyectos llave en mano con presupuesto cerrado, plazos garantizados por contrato y gestión
          integral de licencias. Más de {site.years} años construyendo calidad en la Costa Blanca.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-xs text-snow/90 backdrop-blur-sm sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-bronze" />
              {b.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-bronze px-6 py-3 text-sm font-semibold text-slate-ink transition hover:bg-bronze-warm"
          >
            Solicitar presupuesto gratuito
          </a>
          <a
            href="#proyectos"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-snow backdrop-blur-sm transition hover:bg-white/10"
          >
            Ver transformaciones
          </a>
        </div>
      </div>
    </section>
  );
}
