import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { PageView } from '../types';
import { Anchor, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer id="main-footer" className="bg-[#0B1F33] text-white border-t border-[#20C4D9]/20">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#20C4D9] font-black text-xl border border-white/20">
                K&R
              </div>
              <div>
                <span className="text-xl font-black uppercase tracking-tight text-white block">
                  K&R Rentals
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#20C4D9] font-bold">
                  Anchorage, Alaska Outfitting
                </span>
              </div>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing adventurers, anglers, and families with pristine watercraft and kayaks to explore Alaska's scenic lakes, rivers, and coastal waterways.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                id="footer-fb-link"
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#20C4D9] hover:text-white transition-colors"
              >
                Facebook @KRrental
              </a>
              <span className="text-white/30">•</span>
              <a
                id="footer-wa-link"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#20C4D9] hover:text-white transition-colors"
              >
                WhatsApp 1 907-444-6615
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#20C4D9]">
              Explore K&R
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#20C4D9] transition-colors"
                >
                  Home & Trip Planner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fleet')}
                  className="hover:text-[#20C4D9] transition-colors"
                >
                  Rental Fleet & Daily Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('restoration')}
                  className="hover:text-[#20C4D9] transition-colors"
                >
                  Restoration & Sanitization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-[#20C4D9] transition-colors"
                >
                  Anchorage Waterway Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#20C4D9] transition-colors"
                >
                  Alaska Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#20C4D9] transition-colors"
                >
                  Contact & Pickup Logistics
                </button>
              </li>
            </ul>
          </div>

          {/* Partner & Location Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#20C4D9]">
              Anchorage Outfitting Base
            </h4>
            <div className="text-xs text-white/70 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#20C4D9] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.pickupLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#20C4D9] shrink-0" />
                <span>Direct Hotline: {BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-white/10 text-white/80">
                <Sparkles className="w-3.5 h-3.5 text-[#20C4D9] shrink-0 mt-0.5" />
                <span>
                  Official Fleet Partner: <strong>{BUSINESS_INFO.partnerCompany}</strong>
                </span>
              </div>
            </div>

            <button
              id="footer-book-cta"
              onClick={onOpenBooking}
              className="w-full bg-[#20C4D9] hover:bg-white text-[#0B1F33] py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
            >
              Book Your Boat Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sleek Bar */}
      <div className="border-t border-white/10 px-4 sm:px-12 py-4 bg-[#081726] text-white flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] uppercase tracking-widest">
        <p className="opacity-60 font-medium">
          &copy; 2024 K&R Rentals Anchorage • All Rights Reserved
        </p>
        <div className="flex items-center space-x-4 opacity-80 font-bold">
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#20C4D9] hover:text-white transition-colors"
          >
            Facebook
          </a>
          <div className="h-3 w-[1px] bg-white/20"></div>
          <span>Power Cleaning Upholstery & Carpet LLC Partner</span>
        </div>
      </div>
    </footer>
  );
};
