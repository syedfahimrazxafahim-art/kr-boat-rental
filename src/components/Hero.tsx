import React, { useState } from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/mockData';
import { Anchor, Calendar, Users, ShieldCheck, Star, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedVessel, setSelectedVessel] = useState('pelican-trailblazer-100');
  const [selectedDuration, setSelectedDuration] = useState('full-day');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <section id="hero-section" className="relative bg-[#0B1F33] text-white overflow-hidden">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroScenic}
          alt="Alaskan River Kayaking at Sunset"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/85 to-[#0B1F33]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center space-x-2.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <span className="px-2.5 py-0.5 bg-[#20C4D9] text-[#0B1F33] text-[10px] font-black uppercase tracking-widest rounded-full">
                Anchorage, Alaska
              </span>
              <div className="h-1 w-6 bg-[#20C4D9]/60 rounded-full"></div>
              <span className="text-xs text-white/90 font-semibold tracking-wide">
                Wild Water Outfitting
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Rent Your <br />
              <span className="text-[#20C4D9] underline decoration-[#20C4D9]/30 underline-offset-8">
                Perfect Boat.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-xl font-normal">
              Premium Pelican kayaks, custom fishing setups, and restored watercraft in Anchorage.
              Paddle glacial lakes, fish wild Alaskan salmon rivers, and create unforgettable memories.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center space-x-2 text-white bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                <Star className="w-4 h-4 text-[#20C4D9] fill-[#20C4D9]" />
                <span className="text-xs sm:text-sm font-semibold">Top-Rated in Southcentral AK</span>
              </div>
              <div className="flex items-center space-x-2 text-white bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#20C4D9]" />
                <span className="text-xs sm:text-sm font-semibold">USCG Safety Gear Included</span>
              </div>
              <div className="flex items-center space-x-2 text-white bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                <Sparkles className="w-4 h-4 text-[#20C4D9]" />
                <span className="text-xs sm:text-sm font-semibold">Power Cleaning LLC Sanitized</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-book-cta"
                onClick={onOpenBooking}
                className="bg-[#20C4D9] text-[#0B1F33] hover:bg-white hover:text-[#0B1F33] px-8 py-3.5 rounded-full font-black text-base transition-all shadow-xl shadow-[#20C4D9]/20 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Anchor className="w-5 h-5" />
                <span>Reserve Your Rental</span>
              </button>

              <button
                id="hero-explore-fleet-cta"
                onClick={() => onNavigate('fleet')}
                className="bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all border border-white/30 backdrop-blur-sm flex items-center gap-2"
              >
                <span>View Fleet & Rates</span>
                <ArrowRight className="w-4 h-4 text-[#20C4D9]" />
              </button>
            </div>
          </div>

          {/* Right Fast-Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 text-[#142B3A] shadow-2xl shadow-[#0B1F33]/50 border border-white/40">
              <div className="flex items-center justify-between pb-4 border-b border-[#087EA4]/10 mb-6">
                <div>
                  <h2 className="text-xl font-black text-[#0B1F33]">Quick Rental Planner</h2>
                  <p className="text-xs text-[#142B3A]/60">Select your Alaskan trip parameters</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#087EA4]/10 flex items-center justify-center text-[#087EA4]">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Vessel Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                    Rental Vessel Model
                  </label>
                  <select
                    id="hero-vessel-select"
                    value={selectedVessel}
                    onChange={(e) => setSelectedVessel(e.target.value)}
                    className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                  >
                    <option value="pelican-trailblazer-100">Pelican Trailblazer 100 NXT (Single - $65/day)</option>
                    <option value="pelican-catch-120-fishing">Pelican Catch 120 Angler Edition ($85/day)</option>
                    <option value="pelican-alliance-130t-tandem">Pelican Alliance 130T Tandem ($95/day)</option>
                    <option value="alaska-expedition-weekend-pack">Alaskan 2-Kayak Excursion Bundle ($160/day)</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                      Trip Duration
                    </label>
                    <select
                      id="hero-duration-select"
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                    >
                      <option value="half-day">Half Day (4 hrs)</option>
                      <option value="full-day">Full Day (8 hrs)</option>
                      <option value="weekend">Weekend (2 Days)</option>
                      <option value="multi-day">Multi-Day Trip</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                      Target Date
                    </label>
                    <input
                      id="hero-date-input"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3.5 py-2 text-sm font-semibold text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                    />
                  </div>
                </div>

                {/* Included Perks Summary */}
                <div className="bg-[#F5F9FA] rounded-2xl p-4 border border-[#087EA4]/10 space-y-2">
                  <span className="text-[11px] font-bold text-[#087EA4] uppercase tracking-wider">
                    Always Included With K&R:
                  </span>
                  <ul className="text-xs text-[#142B3A]/80 space-y-1 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#087EA4]">✓</span> USCG Certified Life Vests (All Sizes)
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#087EA4]">✓</span> Lightweight Paddles & Phone Dry Bag
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#087EA4]">✓</span> Car Roof Rack Foam Block Kit & Straps
                    </li>
                  </ul>
                </div>

                {/* Submit Action */}
                <button
                  id="hero-start-booking-btn"
                  onClick={onOpenBooking}
                  className="w-full bg-[#0B1F33] hover:bg-[#087EA4] text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#0B1F33]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Check Availability & Price</span>
                  <ArrowRight className="w-4 h-4 text-[#20C4D9]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
