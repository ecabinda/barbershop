"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { SERVICES, BARBERS, BUSINESS_INFO, ServiceItem, BarberItem } from "@/data/barbershop-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  preselectedServiceId,
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(() => {
    return SERVICES.find((s) => s.id === preselectedServiceId) || SERVICES[0];
  });
  const [selectedBarber, setSelectedBarber] = useState<BarberItem | "any">("any");
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    // Default to tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    // If Sunday, move to Monday
    if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>("11:00");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    "10:00",
    "10:45",
    "11:30",
    "12:15",
    "14:00",
    "14:45",
    "15:30",
    "16:15",
    "17:00",
    "17:45",
    "18:30",
    "19:15",
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 3 && !selectedTime) return;
    if (step === 4) {
      // Validate form
      const newErrors: Record<string, string> = {};
      if (!formData.name.trim()) newErrors.name = "Por favor, indique o seu nome.";
      if (!formData.phone.trim() || formData.phone.length < 9) {
        newErrors.phone = "Por favor, insira um número de contacto válido.";
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      // Simulate booking submission
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(5);
      }, 600);
      return;
    }
    setStep((prev) => (prev < 5 ? ((prev + 1) as any) : prev));
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev > 1 ? ((prev - 1) as any) : prev));
  };

  // Build WhatsApp prefilled message
  const barberName =
    selectedBarber === "any"
      ? "Qualquer profissional disponível"
      : selectedBarber.name;

  const whatsappMessage = encodeURIComponent(
    `Olá Style Place Barbershop! Gostaria de confirmar o meu agendamento:\n\n` +
      `✂️ Serviço: ${selectedService?.title}\n` +
      `👤 Especialista: ${barberName}\n` +
      `📅 Data: ${selectedDate}\n` +
      `⏰ Horário: ${selectedTime}\n` +
      `🙋‍♂️ Nome: ${formData.name}\n` +
      `📞 Contacto: ${formData.phone}` +
      (formData.notes ? `\n📝 Notas: ${formData.notes}` : "")
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div className="relative w-full max-w-2xl bg-background-secondary border border-gold/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-background/50">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-medium">
              Agendamento Online
            </span>
            <h2 id="booking-title" className="text-xl sm:text-2xl font-serif text-ivory">
              {step === 5 ? "Marcação Solicitada!" : "Reservar Experiência"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-soft-gray hover:text-ivory transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2 bg-background/30 flex items-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  step >= i ? "bg-gold" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-sm text-soft-gray mb-2">
                Passo 1 de 4: Escolha o serviço que pretende realizar
              </div>
              <div className="grid grid-cols-1 gap-3">
                {SERVICES.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className={`flex items-start justify-between p-4 rounded-xl border text-left transition-all ${
                      selectedService?.id === srv.id
                        ? "border-gold bg-gold/10 text-ivory shadow-gold-sm"
                        : "border-white/10 hover:border-white/20 bg-background/50 text-soft-gray hover:text-ivory"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 font-medium text-ivory">
                        <span>{srv.title}</span>
                        {selectedService?.id === srv.id && (
                          <CheckCircle2 className="w-4 h-4 text-gold inline" />
                        )}
                      </div>
                      <p className="text-xs text-soft-gray mt-1 line-clamp-2">
                        {srv.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gold">
                        <span>⏱ {srv.duration}</span>
                        <span>•</span>
                        <span>{srv.indicativePrice}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Specialist */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-sm text-soft-gray mb-2">
                Passo 2 de 4: Escolha o profissional da sua preferência
              </div>

              {/* Any barber option */}
              <button
                onClick={() => setSelectedBarber("any")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                  selectedBarber === "any"
                    ? "border-gold bg-gold/10 text-ivory shadow-gold-sm"
                    : "border-white/10 hover:border-white/20 bg-background/50 text-soft-gray hover:text-ivory"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif">
                    ★
                  </div>
                  <div>
                    <h4 className="font-medium text-ivory">Primeiro Profissional Disponível</h4>
                    <p className="text-xs text-soft-gray">
                      Ideal para horários flexíveis e marcações prioritárias
                    </p>
                  </div>
                </div>
                {selectedBarber === "any" && (
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                )}
              </button>

              {/* Specific barbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {BARBERS.map((barber) => (
                  <button
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber)}
                    className={`flex flex-col p-4 rounded-xl border text-left transition-all ${
                      selectedBarber !== "any" && selectedBarber.id === barber.id
                        ? "border-gold bg-gold/10 text-ivory shadow-gold-sm"
                        : "border-white/10 hover:border-white/20 bg-background/50 text-soft-gray hover:text-ivory"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/40">
                        <Image
                          src={barber.image}
                          alt={barber.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-ivory">{barber.name}</h4>
                        <span className="text-xs text-gold">{barber.role}</span>
                      </div>
                    </div>
                    <p className="text-xs text-soft-gray mt-1 line-clamp-2">
                      {barber.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {barber.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-soft-gray"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="text-sm text-soft-gray mb-1">
                Passo 3 de 4: Selecione o dia e horário pretendido
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">
                  Data da Marcação
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-background border border-white/15 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                />
                <p className="text-xs text-soft-gray mt-1.5">
                  A barbearia encerra aos Domingos. Horário regular: 10:00 às 20:00 (Sábado até às 16:00).
                </p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">
                  Horários Disponíveis
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "bg-gold text-background font-semibold shadow-gold-sm"
                          : "bg-background border border-white/10 hover:border-gold/50 text-ivory"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Client Details */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="text-sm text-soft-gray mb-1">
                Passo 4 de 4: Os seus dados para confirmação da reserva
              </div>

              {/* Summary pill */}
              <div className="p-3.5 rounded-xl bg-background border border-gold/20 flex flex-wrap items-center justify-between gap-2 text-xs text-ivory">
                <div>
                  <span className="text-gold font-medium">Serviço:</span>{" "}
                  {selectedService?.title}
                </div>
                <div>
                  <span className="text-gold font-medium">Profissional:</span>{" "}
                  {barberName}
                </div>
                <div>
                  <span className="text-gold font-medium">Data/Hora:</span>{" "}
                  {selectedDate} às {selectedTime}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-soft-gray mb-1">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-soft-gray absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Ex: João Silva"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-ivory text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-soft-gray mb-1">
                    Telemóvel (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-soft-gray absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="Ex: +351 912 345 678"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-background border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-ivory text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-soft-gray mb-1">
                    Email (opcional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-soft-gray absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="joao@exemplo.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-ivory text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-soft-gray mb-1">
                    Observações ou Preferências
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Gostaria de aconselhamento para formato de barba..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full bg-background border border-white/15 rounded-xl px-3.5 py-2 text-ivory text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Success & Confirmation */}
          {step === 5 && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-gold/20 text-gold border border-gold mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-serif text-ivory">
                  Pedido de Marcação Enviado!
                </h3>
                <p className="text-sm text-soft-gray max-w-md mx-auto mt-2">
                  Obrigado, <strong className="text-ivory">{formData.name}</strong>. A nossa equipa da Style Place Barbershop recebeu os seus detalhes.
                </p>
              </div>

              {/* Confirmation card */}
              <div className="max-w-md mx-auto bg-background p-5 rounded-2xl border border-gold/30 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-soft-gray">Serviço:</span>
                  <span className="font-semibold text-ivory">{selectedService?.title}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-soft-gray">Profissional:</span>
                  <span className="font-semibold text-ivory">{barberName}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-soft-gray">Data & Horário:</span>
                  <span className="font-semibold text-gold">
                    {selectedDate} às {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-gray">Local:</span>
                  <span className="text-ivory">Rua Vitorino Fróis 31, Loja 17</span>
                </div>
              </div>

              {/* Fast WhatsApp confirmation action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-sm transition-all shadow-lg hover:shadow-green-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirmar Instantaneamente via WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-ivory text-sm font-medium transition-colors"
                >
                  Fechar
                </button>
              </div>

              <p className="text-[11px] text-soft-gray max-w-sm mx-auto">
                Nota: A confirmação oficial do horário fica garantida após o contacto direto da barbearia.
              </p>
            </div>
          )}
        </div>

        {/* Footer controls */}
        {step < 5 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-background/50">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex items-center gap-2 text-sm text-soft-gray hover:text-ivory px-3 py-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleNextStep}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-background font-semibold text-sm shadow-gold-sm hover:shadow-gold transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                "A processar..."
              ) : step === 4 ? (
                "Finalizar Reserva"
              ) : (
                <>
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
