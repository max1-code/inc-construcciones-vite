/** Datos de empresa — sustituir placeholders con datos reales del cliente */
export const site = {
  name: "INC Construcciones",
  legalName: "INC Construcciones S.L.",
  phone: "[Teléfono pendiente]",
  phoneHref: "tel:+34XXXXXXXXX",
  whatsapp: "34XXXXXXXXX",
  whatsappMsg: encodeURIComponent(
    "Hola, me interesa un presupuesto de reforma / construcción en Costa Blanca."
  ),
  email: "[email pendiente]",
  zones: [
    "Cabo Roig",
    "Playa Flamenca",
    "La Zenia",
    "Campoamor",
    "Las Colinas",
    "Torrevieja",
    "Punta Prima",
    "Ciudad Quesada",
  ],
  years: 20,
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`;
