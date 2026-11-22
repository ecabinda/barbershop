"use client";

import React from "react";
import Image from "next/image";
import { Check, Globe2, Sparkles, HeartHandshake } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { getAssetPath } from "@/lib/utils";

interface AboutProps {
  onOpenBooking: () => void;
}

export function About({ onOpenBooking }: AboutProps) {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-background-secondary/50 relative overflow-hidden">
      {/* Subtle ambient gold glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column with authentic photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary authentic photo: Clara at the chair */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={getAssetPath("/images/barber-clara.png")}
                  alt="Clara, profissional especialista na Style Place Barbershop"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                    Equipa de Excelência
                  </span>
                  <h3 className="text-xl font-serif text-ivory">Clara</h3>
                  <p className="text-xs text-soft-gray mt-1">
                    Especialista em corte & visagismo • Fluente em Português e Inglês
                  </p>
                </div>
              </div>

              {/* Secondary floating card: Storefront badge */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 rounded-2xl overflow-hidden border border-gold/40 shadow-gold-sm bg-background-secondary p-2">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
                  <Image
                    src={getAssetPath("/images/storefront.png")}
                    alt="Entrada da Style Place Barbershop na Loja 17"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] text-center text-ivory font-medium">
                  Loja 17 • Caldas da Rainha
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Nossa Identidade</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight leading-tight">
              Mais do que uma barbearia.
              <br />
              <span className="text-gold italic font-normal">
                Um espaço onde a confiança se constrói ao detalhe.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-soft-gray leading-relaxed font-light">
              Na <strong className="text-ivory font-medium">Style Place Barbershop</strong>, cada visita é pensada como um momento exclusivo de pausa e renovação. Não nos limitamos a cortar cabelo ou alinhar a barba: ouvimos as tuas preferências, estudamos as tuas feições e aplicamos técnicas apuradas para que saias com a melhor versão de ti próprio.
            </p>

            <p className="text-sm sm:text-base text-soft-gray leading-relaxed font-light">
              Localizada no centro das Caldas da Rainha, a nossa barbearia orgulha-se de acolher tanto a comunidade local como clientes internacionais que visitam a região Oeste, proporcionando um serviço amigável, atencioso e comunicativo.
            </p>

            {/* Feature highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <SpotlightCard className="p-5 bg-background/60">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-semibold text-ivory mb-1">
                  Atendimento Personalizado
                </h4>
                <p className="text-xs text-soft-gray leading-relaxed">
                  Sem pressa nem cortes padronizados. Dedicamos o tempo necessário a cada pormenor.
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-5 bg-background/60">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-semibold text-ivory mb-1">
                  Ambiente Internacional
                </h4>
                <p className="text-xs text-soft-gray leading-relaxed">
                  Comunicação natural em Português e Inglês para receber confortavelmente todos os clientes.
                </p>
              </SpotlightCard>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-background font-semibold text-xs uppercase tracking-widest shadow-gold-sm transition-all duration-300 hover:scale-[1.02]"
              >
                Conhecer o Nosso Espaço
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
