import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-snow">
            INC <span className="text-bronze">Construcciones</span>
          </p>
          <p className="mt-2 text-sm text-snow/55">
            Reformas y obra nueva de villas en Orihuela Costa, Torrevieja y alrededores.
          </p>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-wider text-snow/40">Contacto</p>
          <p className="mt-2 text-sm text-snow/70">{site.phone}</p>
          <p className="text-sm text-snow/70">{site.email}</p>
        </div>
        <div>
          <p className="text-[0.65rem] uppercase tracking-wider text-snow/40">Legal</p>
          <ul className="mt-2 space-y-1 text-sm text-snow/70">
            <li>
              <a href="#" className="hover:text-bronze">
                Aviso legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-bronze">
                Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-bronze">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-[0.7rem] text-snow/40">
        © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
