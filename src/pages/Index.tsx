import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import CalendarSection from "@/components/CalendarSection";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  
  // Exemple de dates réservées (à remplacer par les données iCal)
  const bookedDates: Date[] = [];

  const handleDateSelect = (selectedCheckIn: Date, selectedCheckOut: Date) => {
    setCheckIn(selectedCheckIn);
    setCheckOut(selectedCheckOut);
    
    // Scroll to booking section after selecting dates
    setTimeout(() => {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AmenitiesSection />
      <GallerySection />
      <CalendarSection 
        onDateSelect={handleDateSelect} 
        bookedDates={bookedDates}
      />
      <BookingSection 
        checkIn={checkIn} 
        checkOut={checkOut}
        pricePerNight={150}
        cleaningFee={80}
      />
      <LocationSection />
      <NeighborhoodSection />
      <Footer />
    </main>
  );
};

export default Index;
