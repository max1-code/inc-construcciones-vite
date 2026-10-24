import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "../lib/site";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#cobertura", label: "Zonas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-slate-ink/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="font-semibold tracking-[0.18em] text-sm uppercase text-snow">
          INC <span className="font-normal text-bronze">Construcciones</span>
        </a>

        <nav className="hidden items-center gap-7 text-[0.7rem] font-medium uppercase tracking-wider text-snow/70 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-bronze">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-bronze/40 px-3 py-2 text-xs font-medium text-bronze transition hover:bg-bronze/10 sm:inline-flex min-h-[44px]"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-snow lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-slate-ink px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm uppercase tracking-wider text-snow/90 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-bronze px-3 py-3 text-sm font-semibold text-slate-ink"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
