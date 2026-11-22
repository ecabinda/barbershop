"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryPhoto } from "@/data/barbershop-data";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "espaço" | "equipa" | "trabalhos">("todos");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Galeria Fotográfica</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight mb-4">
            O Nosso Trabalho
          </h2>

          <p className="text-base sm:text-lg text-soft-gray font-light leading-relaxed">
            Fotografias reais do nosso espaço na Loja 17, da nossa equipa e da precisão dedicada a cada corte.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(
              [
                { label: "Todos", key: "todos" },
                { label: "Espaço & Loja", key: "espaço" },
                { label: "A Nossa Equipa", key: "equipa" },
                { label: "Cortes & Trabalhos", key: "trabalhos" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-gold text-background font-semibold shadow-gold-sm"
                    : "bg-background-secondary border border-white/10 text-soft-gray hover:text-ivory hover:border-gold/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-background-secondary shadow-lg hover:border-gold/40 transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 text-gold flex items-center justify-center mb-3">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <p className="text-sm font-serif font-medium text-ivory">
                  {photo.caption}
                </p>
                <span className="text-[10px] uppercase tracking-wider text-gold mt-1">
                  Ver em tamanho ampliado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-ivory transition-colors"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-gold hover:text-background text-ivory transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-gold hover:text-background text-ivory transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={filteredPhotos[activePhotoIndex].src}
                alt={filteredPhotos[activePhotoIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm sm:text-base font-serif text-ivory">
                {filteredPhotos[activePhotoIndex].caption}
              </p>
              <span className="text-xs text-soft-gray mt-1 block">
                {activePhotoIndex + 1} de {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
