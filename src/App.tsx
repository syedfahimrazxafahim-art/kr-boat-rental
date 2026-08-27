import React, { useState } from 'react';
import { PageView, FleetItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FleetSection } from './components/FleetSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { AlaskaLocationsSection } from './components/AlaskaLocationsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVessel, setSelectedVessel] = useState<FleetItem | null>(null);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithVessel = (vessel?: FleetItem) => {
    if (vessel) {
      setSelectedVessel(vessel);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FA] text-[#142B3A] flex flex-col font-sans selection:bg-[#20C4D9] selection:text-[#0B1F33]">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithVessel()}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onOpenBooking={() => handleOpenBookingWithVessel()}
              onNavigate={handleNavigate}
            />
            <BeforeAfterSection
              onOpenBooking={() => handleOpenBookingWithVessel()}
            />
            <FleetSection
              onSelectVessel={(vessel) => handleOpenBookingWithVessel(vessel)}
            />
            <AlaskaLocationsSection
              onOpenBooking={() => handleOpenBookingWithVessel()}
            />
            <GallerySection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
          </>
        )}

        {currentPage === 'fleet' && (
          <>
            <div className="bg-[#0B1F33] text-white py-12 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#20C4D9] font-black block mb-2">
                  K&R Rentals Catalog
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  Rental Fleet & Transparent Rates
                </h1>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl">
                  Every rental includes USCG life vests, paddles, and vehicle tie-downs with central Anchorage pickup.
                </p>
              </div>
            </div>
            <FleetSection
              onSelectVessel={(vessel) => handleOpenBookingWithVessel(vessel)}
            />
            <FAQSection />
          </>
        )}

        {currentPage === 'restoration' && (
          <>
            <div className="bg-[#0B1F33] text-white py-12 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#20C4D9] font-black block mb-2">
                  Fleet Care & Maintenance
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  Restoration Excellence
                </h1>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl">
                  Partnered with Power Cleaning Upholstery & Carpet LLC to ensure pristine, sanitized equipment.
                </p>
              </div>
            </div>
            <BeforeAfterSection
              onOpenBooking={() => handleOpenBookingWithVessel()}
            />
            <GallerySection />
          </>
        )}

        {currentPage === 'locations' && (
          <>
            <div className="bg-[#0B1F33] text-white py-12 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#20C4D9] font-black block mb-2">
                  Anchorage & Beyond
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  Alaskan Launch Waterways & Guides
                </h1>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl">
                  Explore top flatwater lakes, glacial waterways, and salmon rivers near Anchorage.
                </p>
              </div>
            </div>
            <AlaskaLocationsSection
              onOpenBooking={() => handleOpenBookingWithVessel()}
            />
            <FAQSection />
          </>
        )}

        {currentPage === 'gallery' && (
          <>
            <div className="bg-[#0B1F33] text-white py-12 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#20C4D9] font-black block mb-2">
                  Our Work & Expeditions
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  Alaska Adventures & Fleet Gallery
                </h1>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl">
                  Photos from real trips on Alaskan waters and fleet restoration results.
                </p>
              </div>
            </div>
            <GallerySection />
            <TestimonialsSection />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <div className="bg-[#0B1F33] text-white py-12 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#20C4D9] font-black block mb-2">
                  Anchorage, Alaska
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  Contact & Gear Pickup Logistics
                </h1>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl">
                  Get in touch with K&R Rentals for custom requests, delivery coordination, or gear inquiries.
                </p>
              </div>
            </div>
            <ContactSection />
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithVessel()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVessel={selectedVessel}
      />

      {/* Instant WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
