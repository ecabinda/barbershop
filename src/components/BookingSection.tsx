"use client";

import React from "react";
import { Calendar, Phone, Sparkles, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/barbershop-data";

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export function BookingSection({ onOpenBooking }: BookingSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-radial from-gold/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-background-secondary/90 border border-gold/30 shadow-2xl relative overflow-hidden">
          {/* Subtle gold accent corner line */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reserva de Horário</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight mb-4">
            O teu próximo corte começa aqui.
          </h2>

          <p className="text-base sm:text-xl text-soft-gray font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Reserva o teu momento e deixa o resto connosco. Atendimento dedicado, ambiente acolhedor e mestria em cada pormenor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-background font-semibold text-xs uppercase tracking-widest shadow-gold hover:shadow-gold-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar Online</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20e%20marca%C3%A7%C3%B5es%20da%20Style%20Place%20Barbershop.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-ivory hover:text-black border border-[#25D366]/30 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-black" />
              <span>Contactar WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-soft-gray">
            <span>✓ Confirmação ágil</span>
            <span>✓ Sem tempos de espera desnecessários</span>
            <span>✓ Cancelamento flexível</span>
          </div>
        </div>
      </div>
    </section>
  );
}
