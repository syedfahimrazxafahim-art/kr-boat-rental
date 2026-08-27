import React, { useState } from 'react';
import { FAQS_DATA } from '../data/mockData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#F5F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-3.5 py-1 rounded-full border border-[#087EA4]/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#087EA4]" />
            <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F33] tracking-tight">
            Alaskan Watercraft Rental Details
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#087EA4]/15 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1F33] hover:text-[#087EA4] transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#F5F9FA] flex items-center justify-center text-[#087EA4] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#142B3A]/75 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
