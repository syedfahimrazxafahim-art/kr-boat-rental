import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-4 py-1 rounded-full border border-[#087EA4]/20 mb-3">
            <Star className="w-4 h-4 text-[#087EA4] fill-[#087EA4]" />
            <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
              Guest Experiences
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F33] tracking-tight mb-4">
            Tested & Trusted on Alaskan Waters
          </h2>
          <p className="text-base text-[#142B3A]/70 leading-relaxed">
            Read real feedback from local Anchorage anglers, touring families, and travelers who explored with K&R Rentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              id={`review-card-${rev.id}`}
              key={rev.id}
              className="bg-[#F5F9FA] rounded-3xl p-8 border border-[#087EA4]/15 shadow-xl shadow-[#087EA4]/5 flex flex-col justify-between hover:border-[#087EA4]/35 transition-all relative"
            >
              <div>
                {/* Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#087EA4] bg-[#087EA4]/10 px-2.5 py-0.5 rounded-full">
                    {rev.tripType}
                  </span>
                </div>

                <p className="text-sm text-[#142B3A]/85 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#087EA4]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-[#0B1F33]">{rev.name}</h4>
                  <p className="text-xs text-[#142B3A]/60">{rev.location} • {rev.date}</p>
                </div>
                <div className="flex items-center text-xs font-bold text-emerald-600 gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Trip</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
