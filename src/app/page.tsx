"use client";

import { BookingModal } from "@/components/BookingModal";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TravelSupport } from "@/components/TravelSupport";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyChoose } from "@/components/WhyChoose";
import { useState } from "react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={openBooking} />
      
      <main>
        <Hero onBookingClick={openBooking} />
        <TrustStrip />
        <Services onBookingClick={openBooking} />
        <WhyChoose />
        <Process />
        <FAQ />
        <TravelSupport />
      </main>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}