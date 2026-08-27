import React, { useState } from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/mockData';
import { Sparkles, Shield, Droplets, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export const BeforeAfterSection: React.FC<{ onOpenBooking?: () => void }> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offset / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const restorationFeatures = [
    {
      title: 'Deep Thermal Steam Sanitization',
      desc: '220°F high-pressure steam removes all organic river residue, river algae, and microbial growth between every rental.',
      icon: <Droplets className="w-5 h-5 text-[#20C4D9]" />,
    },
    {
      title: 'Marine Vinyl & Upholstery Rejuvenation',
      desc: 'Specialized deep fiber conditioning restores boat seats and kayak backrests to factory soft, non-cracking finish.',
      icon: <Sparkles className="w-5 h-5 text-[#20C4D9]" />,
    },
    {
      title: 'Hydrophobic UV Protective Barrier',
      desc: 'Coats all cockpits, hulls, and marine cushions against harsh Alaskan sub-arctic sun, salt air, and water staining.',
      icon: <Shield className="w-5 h-5 text-[#20C4D9]" />,
    },
    {
      title: 'USCG Gear Inspection & Care',
      desc: 'All life jackets, buckles, and safety ropes are inspected and sanitized to guarantee complete reliability.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#20C4D9]" />,
    },
  ];

  return (
    <section id="restoration-section" className="py-20 bg-[#F5F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-4 py-1.5 rounded-full border border-[#087EA4]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#087EA4]" />
            <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
              Fleet Maintenance & Restoration
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F33] tracking-tight mb-4">
            Restoration Excellence & Cleanliness
          </h2>
          <p className="text-base sm:text-lg text-[#142B3A]/70 leading-relaxed">
            In partnership with <strong className="text-[#0B1F33]">{BUSINESS_INFO.partnerCompany}</strong>,
            every vessel and piece of gear in our Anchorage fleet receives commercial-grade cleaning and
            sanitization. Experience pristine comfort on Alaska’s waters.
          </p>
        </div>

        {/* Main Comparison & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Before & After Slider */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-3xl shadow-xl shadow-[#087EA4]/5 border border-[#087EA4]/15">
              <div
                id="interactive-comparison-container"
                className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
                onMouseMove={(e) => isDragging && handleSliderMove(e)}
                onTouchMove={(e) => handleSliderMove(e)}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onClick={handleSliderMove}
              >
                {/* AFTER Image (Full background layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={ASSET_IMAGES.upholsteryRestored}
                    alt="After Upholstery Steam Restoration"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-10 bg-[#087EA4]/95 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    ✨ After Restoration
                  </div>
                </div>

                {/* BEFORE Image (Clipped overlay on the left) */}
                <div
                  className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-2xl transition-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={ASSET_IMAGES.upholsteryDirty}
                    alt="Before Upholstery Steam Restoration"
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-[#0B1F33]/90 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    ⚠️ Before Cleaning
                  </div>
                </div>

                {/* Slider Handle Divider */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-[#087EA4] text-[#087EA4] font-black text-sm">
                    ↔
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1F33]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-white">
                        Marine Vinyl Deep Extraction & Coating
                      </p>
                      <p className="text-white/70 text-xs">
                        Drag or click the slider to compare deep restoration results
                      </p>
                    </div>
                    <span className="text-xs bg-[#20C4D9] text-[#0B1F33] font-black px-2.5 py-1 rounded-full uppercase">
                      100% Sanitized
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Helper Controls */}
              <div className="flex items-center justify-between px-3 pt-3 text-xs font-medium text-[#142B3A]/60">
                <span>← Drag left to reveal After</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSliderPosition(20)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-[11px] font-bold text-[#0B1F33]"
                  >
                    View After
                  </button>
                  <button
                    onClick={() => setSliderPosition(50)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-[11px] font-bold text-[#0B1F33]"
                  >
                    50 / 50
                  </button>
                  <button
                    onClick={() => setSliderPosition(80)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-[11px] font-bold text-[#0B1F33]"
                  >
                    View Before
                  </button>
                </div>
                <span>Drag right to reveal Before →</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Protocols & Partner Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#0B1F33]">
                The K&R Clean Watercraft Guarantee
              </h3>
              <p className="text-sm text-[#142B3A]/70 leading-relaxed">
                We believe your Alaskan adventure shouldn't come with sticky seats, smelly mildew, or worn gear.
                Every boat is treated with hospital-grade, eco-conscious marine cleaners safe for Alaska's delicate ecosystems.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {restorationFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-[#087EA4]/10 shadow-sm hover:border-[#087EA4]/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0B1F33] flex items-center justify-center mb-2.5">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#0B1F33] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#142B3A]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Partner Direct Contact Card */}
            <div className="bg-gradient-to-br from-[#0B1F33] to-[#087EA4] p-5 rounded-2xl text-white shadow-xl shadow-[#0B1F33]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#20C4D9] font-black">
                  Official Fleet Partner
                </span>
                <h4 className="text-base font-bold text-white">
                  Power Cleaning Upholstery & Carpet LLC
                </h4>
                <p className="text-xs text-white/80">
                  Anchorage Residential & Marine Steam Cleaning
                </p>
              </div>

              <a
                id="restoration-whatsapp-cta"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#20C4D9] hover:bg-white text-[#0B1F33] px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all whitespace-nowrap shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Service</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
