import React, { useState } from 'react';
import { FLEET_DATA } from '../data/mockData';
import { FleetItem } from '../types';
import { Anchor, ShieldCheck, Check, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface FleetSectionProps {
  onSelectVessel: (vessel: FleetItem) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVessel }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'single' | 'fishing' | 'tandem' | 'package'>('all');

  const filteredFleet = activeCategory === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter((v) => v.category === activeCategory);

  return (
    <section id="fleet-section" className="py-20 bg-[#F5F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-3.5 py-1 rounded-full border border-[#087EA4]/20 mb-3">
              <Anchor className="w-3.5 h-3.5 text-[#087EA4]" />
              <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
                Premium Rental Fleet
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F33] tracking-tight">
              Alaskan Watercraft & Kayaks
            </h2>
            <p className="text-sm sm:text-base text-[#142B3A]/70 mt-2 max-w-xl">
              Each vessel is outfitted with USCG-approved life jackets, lightweight paddles, and universal car roof tie-down kits.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {[
              { key: 'all', label: 'All Fleet' },
              { key: 'single', label: 'Single Kayaks' },
              { key: 'fishing', label: 'Fishing Rigged' },
              { key: 'tandem', label: 'Tandems' },
              { key: 'package', label: 'Adventure Bundles' },
            ].map((tab) => (
              <button
                id={`fleet-filter-${tab.key}`}
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-[#0B1F33] text-white shadow-md shadow-[#0B1F33]/20'
                    : 'bg-white text-[#0B1F33] hover:bg-slate-100 border border-[#087EA4]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredFleet.map((vessel) => (
            <div
              id={`vessel-card-${vessel.id}`}
              key={vessel.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#087EA4]/5 border border-[#087EA4]/15 hover:border-[#087EA4]/35 transition-all flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 bg-slate-900 overflow-hidden">
                <img
                  src={vessel.image}
                  alt={vessel.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent"></div>

                {/* Popular Badge */}
                {vessel.popular && (
                  <div className="absolute top-4 left-4 bg-[#20C4D9] text-[#0B1F33] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    ★ Most Popular
                  </div>
                )}

                {/* Rates Badge */}
                <div className="absolute bottom-4 right-4 bg-[#0B1F33]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white text-right">
                  <span className="text-xs text-white/70 block uppercase font-bold tracking-wider">Starting at</span>
                  <span className="text-xl font-black text-[#20C4D9]">${vessel.fullDayPrice}</span>
                  <span className="text-xs text-white/80"> / day</span>
                </div>

                {/* Capacity Pill */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/30">
                  {vessel.capacity}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-[#0B1F33] group-hover:text-[#087EA4] transition-colors">
                    {vessel.name}
                  </h3>
                  <p className="text-xs font-medium text-[#087EA4] mt-1 mb-3">{vessel.tagline}</p>
                  <p className="text-sm text-[#142B3A]/75 leading-relaxed mb-6">
                    {vessel.description}
                  </p>

                  {/* Specifications Bar */}
                  <div className="grid grid-cols-3 gap-2 bg-[#F5F9FA] p-3 rounded-2xl border border-[#087EA4]/10 text-center mb-6">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-[#142B3A]/60">Length</span>
                      <span className="text-xs font-black text-[#0B1F33]">{vessel.length}</span>
                    </div>
                    <div className="border-x border-[#087EA4]/10">
                      <span className="block text-[10px] uppercase font-bold text-[#142B3A]/60">Capacity</span>
                      <span className="text-xs font-black text-[#0B1F33]">{vessel.weightLimit}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-[#142B3A]/60">Sanitization</span>
                      <span className="text-xs font-black text-[#087EA4]">100% Steam</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F33] block mb-2">
                      Included With Rental:
                    </span>
                    {vessel.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center text-xs text-[#142B3A]/80 gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087EA4]/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#087EA4]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Rates & CTA */}
                <div className="pt-6 border-t border-[#087EA4]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#142B3A]/70 space-x-3">
                    <span>Half-Day: <strong>${vessel.halfDayPrice}</strong></span>
                    <span>•</span>
                    <span>Weekend: <strong>${vessel.weekendPrice}</strong></span>
                  </div>

                  <button
                    id={`book-vessel-btn-${vessel.id}`}
                    onClick={() => onSelectVessel(vessel)}
                    className="bg-[#0B1F33] hover:bg-[#087EA4] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#0B1F33]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Reserve Vessel</span>
                    <ArrowRight className="w-4 h-4 text-[#20C4D9]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
