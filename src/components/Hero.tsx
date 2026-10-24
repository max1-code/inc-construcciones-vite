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
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85"
        alt="Villa moderna en Costa Blanca"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        fetchPriority="high"
      />
      {/* Cinematic multi-stop overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to top, #070a12 0%, rgba(7,10,18,0.92) 28%, rgba(7,10,18,0.55) 55%, rgba(7,10,18,0.35) 100%),
            radial-gradient(ellipse 80% 50% at 70% 30%, rgba(197,168,128,0.12), transparent 60%)
          `,
        }}
      />
      {/* Soft vignette edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 120px 40px rgba(7,10,18,0.55)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:pb-28">
        <div className="mb-5 h-px w-16 bg-gradient-to-r from-bronze to-transparent" />
        <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bronze">
          Orihuela Costa · Torrevieja · Costa Blanca
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-snow sm:text-4xl md:text-5xl lg:text-[3.35rem]">
          Reformas integrales y construcción de villas en Orihuela Costa y Torrevieja
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-snow/75 sm:text-lg">
          Proyectos llave en mano con presupuesto cerrado, plazos garantizados por contrato y gestión
          integral de licencias. Más de {site.years} años construyendo calidad en la Costa Blanca.
        </p>

        <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-bronze/25 bg-black/35 px-3.5 py-2 text-xs text-snow/90 shadow-lg shadow-black/20 backdrop-blur-md sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-bronze" />
              {b.label}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-bronze px-7 py-3 text-sm font-semibold text-slate-ink shadow-[0_0_32px_-8px_rgba(197,168,128,0.55)] transition hover:bg-bronze-warm hover:shadow-[0_0_40px_-6px_rgba(217,119,6,0.5)]"
          >
            Solicitar presupuesto gratuito
          </a>
          <a
            href="#proyectos"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/20 bg-white/[0.06] px-7 py-3 text-sm font-medium text-snow backdrop-blur-md transition hover:border-bronze/40 hover:bg-white/[0.1]"
          >
            Ver transformaciones
          </a>
        </div>
      </div>
    </section>
  );
}
