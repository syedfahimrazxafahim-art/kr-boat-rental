import React, { useState } from 'react';
import { PageView } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { Anchor, Phone, Menu, X, Waves, Sparkles, MapPin, Compass, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView; icon: React.ReactNode }[] = [
    { label: 'Fleet & Rates', page: 'fleet', icon: <Anchor className="w-4 h-4" /> },
    { label: 'Restoration & Care', page: 'restoration', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Waterways & Guides', page: 'locations', icon: <Compass className="w-4 h-4" /> },
    { label: 'Photo Gallery', page: 'gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { label: 'Contact', page: 'contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#087EA4]/10 transition-all">
      {/* Top Notification Bar */}
      <div id="announcement-bar" className="bg-[#0B1F33] text-white/90 text-xs py-1.5 px-4 sm:px-8 flex flex-wrap justify-between items-center border-b border-[#20C4D9]/20">
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20C4D9] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20C4D9]"></span>
          </span>
          <span className="text-[11px] font-medium tracking-wide">
            Anchorage, Alaska • Premium Boat & Kayak Outfitting • Summer 2024 Slots Available
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            id="top-whatsapp-link"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-white/80 hover:text-[#20C4D9] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#20C4D9]" />
            <span className="font-semibold text-[11px]">WhatsApp: {BUSINESS_INFO.phone}</span>
          </a>
          <a
            id="top-facebook-link"
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#20C4D9] transition-colors text-[11px] font-semibold"
          >
            Facebook @KRrental
          </a>
          <span className="text-white/40 text-[11px]">|</span>
          <span className="text-[11px] text-[#20C4D9] font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Restored by Power Cleaning LLC
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          id="brand-logo-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 bg-[#0B1F33] rounded-xl flex items-center justify-center text-white font-black text-lg tracking-wider border border-[#20C4D9]/40 shadow-md shadow-[#0B1F33]/20 group-hover:bg-[#087EA4] transition-colors">
            <span className="text-[#20C4D9] font-bold">K</span>
            <span className="text-white text-xs">&</span>
            <span className="text-[#20C4D9] font-bold">R</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0B1F33] uppercase">
                K&R Rentals
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-[#20C4D9]/20 text-[#087EA4] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#20C4D9]/40">
                Anchorage, AK
              </span>
            </div>
            <span className="text-[11px] text-[#142B3A]/60 font-medium tracking-wide">
              Boat & Kayak Adventures
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button
            id="nav-link-home"
            onClick={() => onNavigate('home')}
            className={`text-sm font-semibold transition-colors ${
              currentPage === 'home'
                ? 'text-[#087EA4] font-bold border-b-2 border-[#087EA4] pb-1'
                : 'text-[#0B1F33] hover:text-[#087EA4]'
            }`}
          >
            Home
          </button>
          {navLinks.map((item) => (
            <button
              id={`nav-link-${item.page}`}
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPage === item.page
                  ? 'text-[#087EA4] font-bold border-b-2 border-[#087EA4] pb-1'
                  : 'text-[#0B1F33] hover:text-[#087EA4]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & WhatsApp */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            id="header-whatsapp-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs font-bold text-[#087EA4] bg-[#087EA4]/10 hover:bg-[#087EA4]/20 px-3.5 py-2 rounded-lg border border-[#087EA4]/20 transition-all"
            title="Chat directly on WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-[#087EA4]" />
            <span>907-444-6615</span>
          </a>

          <button
            id="nav-book-now-btn"
            onClick={onOpenBooking}
            className="bg-[#0B1F33] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#087EA4] transition-all shadow-lg shadow-[#0B1F33]/20 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Anchor className="w-4 h-4 text-[#20C4D9]" />
            <span>Book Your Boat</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0B1F33] hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-[#087EA4]/20 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
            <button
              id="mobile-link-home"
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-base font-bold py-2 px-3 rounded-lg ${
                currentPage === 'home' ? 'bg-[#087EA4]/10 text-[#087EA4]' : 'text-[#0B1F33]'
              }`}
            >
              Home
            </button>
            {navLinks.map((item) => (
              <button
                id={`mobile-link-${item.page}`}
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base font-bold py-2 px-3 rounded-lg flex items-center gap-2.5 ${
                  currentPage === item.page ? 'bg-[#087EA4]/10 text-[#087EA4]' : 'text-[#0B1F33]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col space-y-3">
            <button
              id="mobile-book-now-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#0B1F33] text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-[#0B1F33]/20 hover:bg-[#087EA4]"
            >
              <Anchor className="w-4 h-4 text-[#20C4D9]" />
              <span>Book Your Boat Now</span>
            </button>

            <a
              id="mobile-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-50 text-emerald-800 border border-emerald-300 py-2.5 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Inquiries (1 907-444-6615)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
