"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/barbershop-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 py-16 text-soft-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#hero" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-ivory">
                STYLE PLACE
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-light">
                BARBERSHOP
              </span>
            </Link>

            <p className="text-xs text-soft-gray max-w-sm leading-relaxed font-light">
              Barbearia contemporânea e cuidados de excelência no centro das Caldas da Rainha. Dedicação milimétrica ao teu cabelo e barba.
            </p>

            <div className="text-xs text-soft-gray">
              ★★★★★ <strong className="text-ivory">5,0 no Google</strong> ({BUSINESS_INFO.googleReviewCount.toLocaleString("pt-PT")} avaliações)
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#hero" className="hover:text-ivory transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-ivory transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-ivory transition-colors">
                  Serviços de Barbearia
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-ivory transition-colors">
                  Galeria de Trabalhos
                </Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-ivory transition-colors">
                  Avaliações Verificadas
                </Link>
              </li>
              <li>
                <Link href="#contactos" className="hover:text-ivory transition-colors">
                  Localização & Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Onde Estamos
            </h4>
            <p className="text-xs text-soft-gray leading-relaxed">
              {BUSINESS_INFO.address.street}
              <br />
              {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
              <br />
              Portugal
            </p>
            <div className="text-xs pt-1 space-y-1">
              <p>
                Tel:{" "}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-ivory hover:text-gold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p>
                Site:{" "}
                <a
                  href="https://styleplace.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory hover:text-gold transition-colors"
                >
                  styleplace.pt
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 text-soft-gray/80">
            <span className="hover:text-ivory cursor-pointer">
              Política de Privacidade
            </span>
            <span className="hover:text-ivory cursor-pointer">
              Termos de Serviço
            </span>
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory transition-colors"
            >
              Livro de Reclamações
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
