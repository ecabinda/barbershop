"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Globe,
  Mail,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/barbershop-data";

export function LocationContact() {
  return (
    <section id="contactos" className="py-24 sm:py-32 bg-background-secondary/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização & Contactos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight mb-4">
            Encontra-nos.
          </h2>

          <p className="text-base sm:text-lg text-soft-gray font-light leading-relaxed">
            Estamos no centro das Caldas da Rainha, na Rua de Vitorino Fróis, prontos para te receber com a máxima comodidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact and schedule details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-background border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-ivory text-base mb-1">
                    {BUSINESS_INFO.name}
                  </h4>
                  <p className="text-sm text-soft-gray leading-relaxed">
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                    <br />
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-background font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Obter Direções</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background-secondary border border-white/15 hover:border-gold/40 text-ivory text-xs font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Ligar: {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20marca%C3%A7%C3%B5es.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-ivory hover:text-black border border-[#25D366]/30 text-xs font-semibold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-black" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 rounded-2xl bg-background border border-white/10 space-y-4">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <Clock className="w-5 h-5 text-gold" />
                <h4 className="font-serif font-semibold text-ivory text-base">
                  Horário de Funcionamento
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                {BUSINESS_INFO.schedule.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex items-center justify-between py-1 border-b border-white/5 last:border-0"
                  >
                    <span className="text-soft-gray">{slot.day}</span>
                    <span
                      className={`font-mono font-medium ${
                        slot.status === "closed" ? "text-red-400" : "text-ivory"
                      }`}
                    >
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-soft-gray italic">
                * Aberto à Segunda-feira a partir das 10:00. Encerrado ao Domingo.
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-background">
              <iframe
                title="Localização da Style Place Barbershop nas Caldas da Rainha"
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-gold/30 text-xs text-ivory flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span>Loja 17 • Rua Vitorino Fróis 31</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
