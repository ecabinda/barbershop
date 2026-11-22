"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { BookingSection } from "@/components/BookingSection";
import { LocationContact } from "@/components/LocationContact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BookingModal } from "@/components/BookingModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-background text-ivory relative">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* About Section */}
      <About onOpenBooking={() => handleOpenBooking()} />

      {/* Services Section */}
      <Services onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

      {/* Experience & Before/After Haircut Transformation */}
      <Experience onOpenBooking={() => handleOpenBooking()} />

      {/* Photo Gallery with authentic photography & Lightbox */}
      <Gallery />

      {/* Customer Reviews & Google Rating Showcase */}
      <Reviews />

      {/* Distinctive Booking CTA Section */}
      <BookingSection onOpenBooking={() => handleOpenBooking()} />

      {/* Location, Schedule & Interactive Map */}
      <LocationContact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Live Button */}
      <WhatsAppFloat />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={selectedServiceId}
      />
    </main>
  );
}
