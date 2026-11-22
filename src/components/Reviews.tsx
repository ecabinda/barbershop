"use client";

import React from "react";
import { Star, MessageSquare, ExternalLink, Quote, ShieldCheck } from "lucide-react";
import { REVIEWS, BUSINESS_INFO } from "@/data/barbershop-data";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-background-secondary/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 5.0 Google Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-5">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span>Classificação Máxima no Google</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight mb-4">
            A Confiança dos Nossos Clientes
          </h2>

          {/* Rating big score showcase */}
          <div className="flex items-center justify-center gap-4 mt-6 mb-4">
            <span className="font-serif text-5xl sm:text-6xl font-bold text-ivory">
              5,0
            </span>
            <div className="text-left">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-soft-gray font-medium mt-1 block">
                Com base em <strong>{BUSINESS_INFO.googleReviewCount.toLocaleString("pt-PT")} avaliações reais</strong>
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-soft-gray font-light max-w-xl mx-auto">
            Testemunhos genuínos de clientes locais e internacionais que confiam na Style Place Barbershop nas Caldas da Rainha.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <SpotlightCard
              key={rev.id}
              className="p-8 sm:p-10 bg-background/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verificado no Google</span>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-gold/30 mb-3" />

                <p className="text-sm sm:text-base text-ivory/90 font-light leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-semibold text-ivory text-base">
                    {rev.author}
                  </h4>
                  <span className="text-xs text-soft-gray">{rev.role}</span>
                </div>
                <span className="text-[11px] text-gold/80 font-mono">
                  {rev.date}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA to Google Profile */}
        <div className="text-center mt-12">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-gold/40 hover:border-gold bg-background-secondary hover:bg-gold/10 text-ivory hover:text-gold text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm"
          >
            <span>Ver Avaliações no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
