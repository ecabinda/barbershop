"use client";

import React from "react";
import { Scissors, Sparkles, Crown, Flame, Check, ArrowRight } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/barbershop-data";
import { SpotlightCard } from "@/components/SpotlightCard";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-6 h-6 text-gold" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-gold" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-gold" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-gold" />;
      default:
        return <Scissors className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            <Scissors className="w-3.5 h-3.5" />
            <span>Menu de Grooming</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight mb-4">
            Os Nossos Serviços
          </h2>

          <p className="text-base sm:text-lg text-soft-gray font-light leading-relaxed">
            Cada serviço é executado com mestria técnica, navalha de precisão e cosmética de topo para cabelo e barba.
          </p>
        </div>

        {/* Services Cards Grid with spotlight effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <SpotlightCard
              key={service.id}
              className="flex flex-col justify-between p-8 sm:p-10 bg-background-secondary/90 hover:bg-background-secondary transition-all"
            >
              <div>
                {/* Top metadata */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shadow-gold-sm">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
                      {service.duration}
                    </span>
                    <span className="text-xs text-soft-gray block mt-0.5">
                      {service.indicativePrice}
                    </span>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-widest text-gold/80 font-medium">
                  {service.subtitle}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory mt-1 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-soft-gray font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features checklist */}
                <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-4">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-soft-gray">
                      <div className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA Button */}
              <button
                onClick={() => onSelectService(service.id)}
                className="w-full py-3.5 px-6 rounded-xl border border-gold/40 hover:border-gold bg-gold/10 hover:bg-gold text-ivory hover:text-background font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>Marcar Este Serviço</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold group-hover/btn:text-background transition-transform duration-200 group-hover/btn:translate-x-1" />
              </button>
            </SpotlightCard>
          ))}
        </div>

        {/* Note on transparent pricing */}
        <div className="mt-12 text-center text-xs text-soft-gray/80 max-w-xl mx-auto">
          Valores e durações sujeitos a confirmação no momento da marcação. Para serviços especiais ou descolorações, contacte-nos diretamente.
        </div>
      </div>
    </section>
  );
}
