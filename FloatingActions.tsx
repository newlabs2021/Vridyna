import { MessageCircle, Phone } from "lucide-react";

import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <a
        href={PHONE_TEL}
        aria-label="Call Vridyna Technologies"
        className="pointer-events-auto grid size-12 place-items-center rounded-full border border-border bg-surface-elevated/90 text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary/60 hover:text-primary sm:hidden"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vridyna Technologies on WhatsApp"
        className="pointer-events-auto grid size-12 place-items-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:size-13"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  );
}
