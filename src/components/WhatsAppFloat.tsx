"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BUSINESS_INFO } from "@/data/barbershop-data";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const message = encodeURIComponent(
    "Olá! Gostaria de obter informações sobre os serviços e marcações da Style Place Barbershop."
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background-secondary border border-gold/30 shadow-xl text-xs text-ivory animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Tem dúvidas? Fale connosco no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-soft-gray hover:text-ivory ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating trigger button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com Style Place Barbershop"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
        {/* Pulsing online badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-background animate-pulse" />
      </a>
    </div>
  );
}
