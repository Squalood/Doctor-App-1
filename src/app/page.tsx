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
        <Services onBookingClick={openBooking} />
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