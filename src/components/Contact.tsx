import { useState, type FormEvent } from "react";
import { whatsappUrl } from "../lib/site";

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
    // Envía por WhatsApp hasta tener backend de email
    window.open(`https://wa.me/34XXXXXXXXX?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <section id="contacto" className="border-t border-white/5 bg-slate-card/50 py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-bronze">Contacto</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Solicita presupuesto gratuito
        </h2>
        <p className="mt-3 text-sm text-snow/65">
          Tres datos. Te respondemos por WhatsApp o teléfono.
        </p>

        {status === "ok" ? (
          <p className="mt-10 rounded-xl border border-bronze/30 bg-bronze/10 px-4 py-8 text-sm text-snow">
            Gracias. Se ha abierto WhatsApp con tu mensaje. Si no, escríbenos desde el botón flotante.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 text-left">
            <label className="sr-only" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              required
              placeholder="Nombre"
              className="min-h-[48px] w-full rounded-xl border border-white/10 bg-slate-ink px-4 text-sm text-snow outline-none placeholder:text-snow/40 focus:border-bronze"
            />
            <label className="sr-only" htmlFor="telefono">
              Teléfono / WhatsApp
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              placeholder="Teléfono / WhatsApp"
              className="min-h-[48px] w-full rounded-xl border border-white/10 bg-slate-ink px-4 text-sm text-snow outline-none placeholder:text-snow/40 focus:border-bronze"
            />
            <label className="sr-only" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={4}
              placeholder="Breve descripción de la reforma o proyecto"
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-ink px-4 py-3 text-sm text-snow outline-none placeholder:text-snow/40 focus:border-bronze"
            />
            <button
              type="submit"
              className="mt-2 min-h-[48px] rounded-xl bg-bronze text-sm font-semibold text-slate-ink transition hover:bg-bronze-warm"
            >
              Enviar y abrir WhatsApp
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs text-snow/50 underline-offset-2 hover:text-bronze hover:underline"
            >
              O escribir directamente por WhatsApp
            </a>
          </form>
        )}
      </div>
    </section>
  );
}
