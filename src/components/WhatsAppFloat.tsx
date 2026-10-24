import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 flex min-h-[52px] min-w-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-[#20bd5a] sm:right-6"
    >
      <MessageCircle className="h-5 w-5" fill="currentColor" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
