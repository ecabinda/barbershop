"use client";

import React from "react";
import Image from "next/image";
import { Star, Calendar, Scissors, ArrowDown } from "lucide-react";
import { BUSINESS_INFO } from "@/data/barbershop-data";
import { getAssetPath } from "@/lib/utils";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-background"
    >
      {/* Background authentic photography with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/images/interior.png")}
          alt="Style Place Barbershop Interior com iluminação hexagonal de estúdio"
          fill
          priority
          className="object-cover object-center opacity-30 scale-105"
        />
        {/* Gradients to blend into deep dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Verified Google Rating Pill */}
        <a
          href="#avaliacoes"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary/80 backdrop-blur-md border border-gold/30 hover:border-gold transition-all duration-300 shadow-gold-sm mb-8 group"
        >
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs font-semibold text-ivory">5,0 no Google</span>
          <span className="text-xs text-soft-gray">•</span>
          <span className="text-xs text-soft-gray group-hover:text-gold transition-colors">
            {BUSINESS_INFO.googleReviewCount.toLocaleString("pt-PT")} avaliações
          </span>
        </a>

        {/* Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory max-w-4xl leading-[1.08] mb-6">
          O Teu Estilo.
          <br />
          <span className="text-gold-gradient italic font-normal">
            A Nossa Assinatura.
          </span>
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-xl text-soft-gray max-w-2xl font-light leading-relaxed mb-10">
          Mais do que um corte. Uma experiência de cuidado, detalhe e confiança
          no coração das Caldas da Rainha.
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-background font-semibold text-sm uppercase tracking-widest shadow-gold hover:shadow-gold-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Marcar Agora</span>
          </button>

          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-secondary/80 hover:bg-white/10 text-ivory border border-white/15 hover:border-gold/40 text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Scissors className="w-4 h-4 text-gold" />
            <span>Explorar Serviços</span>
          </a>
        </div>

        {/* Location snapshot micro-badge */}
        <div className="mt-12 text-xs text-soft-gray/80 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Aberto hoje em Caldas da Rainha • Rua Vitorino Fróis 31, Loja 17</span>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <a
        href="#sobre"
        aria-label="Descer para a secção Sobre Nós"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-soft-gray hover:text-gold transition-colors duration-200"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
      </a>
    </section>
  );
}
