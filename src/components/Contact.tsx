import { useState, type FormEvent } from "react";
import { site, whatsappUrl } from "../lib/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("nombre") || "");
    const phone = String(fd.get("telefono") || "");
    const desc = String(fd.get("descripcion") || "");
    const text = encodeURIComponent(
      `Hola, soy ${name}. Tel: ${phone}. Proyecto: ${desc || "consulta general"}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <section id="contacto" className="section-glow relative py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 80%, rgba(197,168,128,0.1), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bronze">Contacto</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Solicita presupuesto gratuito
        </h2>
        <p className="mt-3 text-sm text-snow/60">Tres datos. Te respondemos por WhatsApp o teléfono.</p>
        <div className="rule-bronze mx-auto mt-6 max-w-[12rem]" />

        {status === "ok" ? (
          <p className="surface-card mt-10 rounded-2xl px-4 py-8 text-sm text-snow">
            Gracias. Se ha abierto WhatsApp con tu mensaje. Si no, usa el botón flotante.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="surface-card mt-8 flex flex-col gap-3 rounded-2xl p-5 text-left sm:p-6">
            <input
              id="nombre"
              name="nombre"
              required
              placeholder="Nombre"
              className="min-h-[48px] w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-snow outline-none placeholder:text-snow/35 focus:border-bronze/50"
            />
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              placeholder="Teléfono / WhatsApp"
              className="min-h-[48px] w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-snow outline-none placeholder:text-snow/35 focus:border-bronze/50"
            />
            <textarea
              id="descripcion"
              name="descripcion"
              rows={4}
              placeholder="Breve descripción de la reforma o proyecto"
              className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-snow outline-none placeholder:text-snow/35 focus:border-bronze/50"
            />
            <button
              type="submit"
              className="mt-1 min-h-[48px] rounded-xl bg-bronze text-sm font-semibold text-slate-ink shadow-[0_0_28px_-8px_rgba(197,168,128,0.5)] transition hover:bg-bronze-warm"
            >
              Enviar y abrir WhatsApp
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs text-snow/45 underline-offset-2 hover:text-bronze hover:underline"
            >
              O escribir directamente por WhatsApp
            </a>
          </form>
        )}
      </div>
    </section>
  );
}
