# INC Construcciones — Landing (Vite + React)

Landing de conversión según **Plan Antigravity INC**.

- **Stack:** Vite · React 18 · Tailwind CSS · Lucide Icons
- **Zona:** Orihuela Costa, Torrevieja, Costa Blanca
- **Deploy:** Vercel (static)

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Configuración cliente

Edita `src/lib/site.ts`:

- Teléfono y `phoneHref`
- Número WhatsApp (`whatsapp` sin +)
- Email
- Años de experiencia

Sustituye imágenes del slider en `src/components/BeforeAfter.tsx`.

## Secciones

1. Header sticky + click-to-call
2. Hero de autoridad (presupuesto cerrado, plazos)
3. Slider Antes / Después interactivo
4. Bento de 4 servicios
5. Método INC (4 pasos)
6. Cobertura + testimonios
7. Formulario 3 campos → WhatsApp
8. Botón flotante WhatsApp + footer legal
