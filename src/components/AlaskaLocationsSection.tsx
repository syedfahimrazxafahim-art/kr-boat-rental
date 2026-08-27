import React, { useState } from 'react';
import { LAUNCH_LOCATIONS, ASSET_IMAGES } from '../data/mockData';
import { Compass, MapPin, Fish, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';

export const AlaskaLocationsSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [selectedLocation, setSelectedLocation] = useState(LAUNCH_LOCATIONS[0]);

  return (
    <section id="locations-section" className="py-20 bg-white border-y border-[#087EA4]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-4 py-1 rounded-full border border-[#087EA4]/20 mb-3">
            <Compass className="w-4 h-4 text-[#087EA4]" />
            <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
              Anchorage & Southcentral Alaska
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F33] tracking-tight mb-4">
            Curated Launch Locations & Routes
          </h2>
          <p className="text-base text-[#142B3A]/70 leading-relaxed">
            From calm woodland lakes right inside Anchorage to turquoise glacial waters and wild salmon streams,
            discover the best paddling spots suited for your skill level.
          </p>
        </div>

        {/* Interactive Locations Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location Selection Cards */}
          <div className="lg:col-span-5 space-y-3">
            {LAUNCH_LOCATIONS.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              return (
                <div
                  id={`loc-tab-${loc.id}`}
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#0B1F33] text-white border-[#20C4D9] shadow-xl shadow-[#0B1F33]/20'
                      : 'bg-[#F5F9FA] text-[#142B3A] border-[#087EA4]/10 hover:border-[#087EA4]/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#20C4D9]">
                      {loc.region}
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                        loc.difficulty === 'Beginner'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {loc.difficulty}
                    </span>
                  </div>

                  <h3 className={`text-lg font-black ${isSelected ? 'text-white' : 'text-[#0B1F33]'}`}>
                    {loc.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-xs opacity-75">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.distanceFromAnchorage}</span>
                  </div>
                </div>
              );
            })}

            {/* Alaskan Water Safety Card */}
            <div className="bg-[#F5F9FA] p-5 rounded-2xl border border-[#087EA4]/15 mt-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#087EA4] mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Alaska Cold Water Safety Guidelines</span>
              </div>
              <p className="text-xs text-[#142B3A]/75 leading-relaxed">
                Alaskan waters remain cold year-round. All K&R Rentals include high-buoyancy USCG approved PFDs, emergency whistles, and our complimentary waterproof phone dry bag for instant communication.
              </p>
            </div>
          </div>

          {/* Right Column: Selected Location Spotlight */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F9FA] rounded-3xl p-6 sm:p-8 border border-[#087EA4]/15 shadow-xl shadow-[#087EA4]/5 space-y-6">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={ASSET_IMAGES.glacierPaddle}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#20C4D9]">
                    Featured Anchorage Route
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedLocation.name}</h3>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#087EA4] mb-2">
                  Destination Overview
                </h4>
                <p className="text-sm text-[#142B3A]/80 leading-relaxed">
                  {selectedLocation.description}
                </p>
              </div>

              {/* Waterway Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-[#087EA4]/10 shadow-sm">
                  <span className="text-[11px] uppercase font-bold text-[#142B3A]/60 block mb-1">
                    Water Conditions
                  </span>
                  <p className="text-xs font-bold text-[#0B1F33]">{selectedLocation.waterType}</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#087EA4]/10 shadow-sm">
                  <span className="text-[11px] uppercase font-bold text-[#142B3A]/60 block mb-1">
                    Target Fish & Wildlife
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedLocation.targetFish?.map((fish, i) => (
                      <span
                        key={i}
                        className="bg-[#087EA4]/10 text-[#087EA4] text-[10px] font-bold px-2 py-0.5 rounded-full"
                      >
                        {fish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white p-4 rounded-2xl border border-[#087EA4]/10 shadow-sm">
                <span className="text-[11px] uppercase font-bold text-[#142B3A]/60 block mb-2">
                  Key Location Highlights
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="bg-[#0B1F33] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3 h-3 text-[#20C4D9]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking CTA for this Location */}
              <button
                id="location-book-now-btn"
                onClick={onOpenBooking}
                className="w-full bg-[#0B1F33] hover:bg-[#087EA4] text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#0B1F33]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Reserve Gear For {selectedLocation.name}</span>
                <ArrowRight className="w-4 h-4 text-[#20C4D9]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
