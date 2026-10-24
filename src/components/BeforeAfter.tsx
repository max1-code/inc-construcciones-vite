import { useCallback, useRef, useState } from "react";

const BEFORE =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80";
const AFTER =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, x)));
  }, []);

  return (
    <section id="proyectos" className="section-glow py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bronze">Proyectos</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
          Antes y después: el resultado se ve, no se inventa
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-snow/60 sm:text-base">
          Desliza el tirador para comparar. Sustituiremos estas imágenes por obras reales de INC en
          Costa Blanca.
        </p>
        <div className="rule-bronze mt-6 max-w-xs" />

        <div
          ref={box}
          className="relative mt-10 aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl border border-bronze/15 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.7)]"
          onPointerDown={(e) => {
            dragging.current = true;
            box.current?.setPointerCapture?.(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!dragging.current) return;
            setFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
        >
          <img
            src={AFTER}
            alt="Después de la reforma"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          <img
            src={BEFORE}
            alt="Antes de la reforma"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            draggable={false}
          />

          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-px bg-bronze shadow-[0_0_12px_rgba(197,168,128,0.6)]"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bronze/80 bg-slate-ink/95 shadow-[0_0_24px_rgba(197,168,128,0.35)]">
              <span className="text-sm font-bold text-bronze">⇄</span>
            </div>
          </div>

          <span className="pointer-events-none absolute left-3 top-3 rounded-md border border-white/10 bg-black/55 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-snow backdrop-blur-sm">
            Antes
          </span>
          <span className="pointer-events-none absolute right-3 top-3 rounded-md border border-white/10 bg-black/55 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-snow backdrop-blur-sm">
            Después
          </span>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="ba-range absolute inset-0 z-20 h-full w-full opacity-0"
            aria-label="Comparar antes y después"
          />
        </div>
      </div>
    </section>
  );
}
