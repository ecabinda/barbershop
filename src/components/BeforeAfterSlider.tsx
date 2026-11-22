"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Antes da transformação",
  afterAlt = "Resultado final do corte",
  beforeLabel = "Início do Styling",
  afterLabel = "Resultado Final",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-lg mx-auto rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl group"
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Controlo de comparação antes e depois do corte"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPosition((prev) => Math.max(0, prev - 5));
        if (e.key === "ArrowRight") setSliderPosition((prev) => Math.min(100, prev + 5));
      }}
    >
      {/* After image (Base layer) */}
      <Image
        src={getAssetPath(afterImage)}
        alt={afterAlt}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-gold/30 text-xs font-medium tracking-wider uppercase text-ivory">
        {afterLabel}
      </div>

      {/* Before image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
          <Image
            src={getAssetPath(beforeImage)}
            alt={beforeAlt}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wider uppercase text-soft-gray">
          {beforeLabel}
        </div>
      </div>

      {/* Draggable Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold to-transparent cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-gold shadow-gold-sm flex items-center justify-center text-gold transition-transform duration-200 group-hover:scale-110">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>

      {/* Instruction indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-soft-gray flex items-center gap-2 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
        <span>Arraste para comparar</span>
      </div>
    </div>
  );
}
