"use client";

import { BookingModal } from "@/components/bookingModal";
import { FAQ } from "@/components/fAQ";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TravelSupport } from "@/components/travelSupport";
import { TrustStrip } from "@/components/trustStrip";
import { WhyChoose } from "@/components/whyChoose";
import { useState } from "react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header/>
      
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials/>
        <FAQ />
        <TravelSupport />
      </main>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}