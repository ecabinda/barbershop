"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/barbershop-data";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contactos", href: "#contactos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex flex-col group">
          <span className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-ivory group-hover:text-gold transition-colors">
            STYLE PLACE
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold font-light">
            BARBERSHOP
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-soft-gray hover:text-ivory transition-colors tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-xs text-soft-gray hover:text-gold transition-colors flex items-center gap-1.5"
            aria-label="Ligar para a barbearia"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span className="hidden lg:inline">{BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-background font-semibold text-xs uppercase tracking-wider shadow-gold-sm hover:shadow-gold transition-all duration-200 active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Marcar Agora</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg md:hidden text-ivory hover:bg-white/10 transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-background-secondary/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-ivory hover:text-gold transition-colors border-b border-white/5 pb-2"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-gold text-background font-semibold text-center uppercase tracking-wider text-xs shadow-gold-sm"
              >
                Marcar Agora
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 rounded-xl border border-white/15 text-ivory text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold" />
                Ligar: {BUSINESS_INFO.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
