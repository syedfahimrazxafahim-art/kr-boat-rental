import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      id="floating-whatsapp-widget"
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-40 flex items-center group cursor-pointer"
    >
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0B1F33] hover:bg-[#087EA4] text-white px-4 py-3 rounded-full shadow-2xl border border-[#20C4D9]/40 transition-all active:scale-95 group-hover:pr-5"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-[#20C4D9]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-black text-[#20C4D9] tracking-wider leading-none">
            WhatsApp
          </span>
          <span className="text-xs font-bold leading-tight">
            1 907-444-6615
          </span>
        </div>
      </a>
    </aside>
  );
};
