"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

interface ExperienceProps {
  onOpenBooking: () => void;
}

export function Experience({ onOpenBooking }: ExperienceProps) {
  const experiences = [
    {
      title: "Iluminação de Precisão",
      description:
        "O nosso espaço está equipado com iluminação hexagonal de temperatura de estúdio, garantindo visibilidade milimétrica para cortes e linhas impecáveis.",
    },
    {
      title: "Ritual da Toalha Quente",
      description:
        "Preparação aromática com toalha aquecida que abre os poros e suaviza o pelo para um barbear clássico com conforto supremo.",
    },
    {
      title: "Consultoria de Visagismo",
      description:
        "Aconselhamento sobre a melhor proporção de corte e barba para harmonizar os traços do teu rosto e estilo de vida.",
    },
    {
      title: "Cosmética de Alta Gama",
      description:
        "Utilizamos apenas pomadas, óleos e tónicos seleccionados que cuidam da fibra capilar e da saúde do couro cabeludo.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background-secondary/70 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Nossa Filosofia</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight mb-4">
            Cada detalhe faz a diferença.
          </h2>

          <p className="text-base sm:text-lg text-soft-gray font-light leading-relaxed">
            Do primeiro olhar no espelho ao toque final da tesoura, a nossa missão é proporcionar um serviço onde a técnica apurada se cruza com a calma e o bem-estar.
          </p>
        </div>

        {/* Interactive layout: Slider on left, Experience details on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Interactive Before & After comparison slider with real haircut photos */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full">
              <BeforeAfterSlider
                beforeImage="/images/haircut-back.png"
                afterImage="/images/haircut-side.png"
                beforeLabel="Textura & Base"
                afterLabel="Definição de Perfil"
              />
            </div>
            <p className="text-xs text-soft-gray text-center mt-4">
              Corte executado na Style Place Barbershop • Detalhe de perfil e acabamento texturado
            </p>
          </div>

          {/* Experience list */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background/80 border border-white/10 hover:border-gold/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-ivory mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-soft-gray leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <h4 className="font-serif text-lg font-semibold text-ivory">
                  Pronto para transformar o teu estilo?
                </h4>
                <p className="text-xs text-soft-gray">
                  Garante o teu horário com a Clara ou com o Master Barber.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-background font-semibold text-xs uppercase tracking-wider shadow-gold-sm transition-all duration-200 shrink-0"
              >
                Reservar Horário
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
