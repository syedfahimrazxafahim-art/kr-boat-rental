import React, { useState } from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/mockData';
import { Image as ImageIcon, Sparkles, X, Eye, Compass, Anchor, Fish } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fleet' | 'adventures' | 'fishing' | 'restoration'>('all');
  const [activeLightbox, setActiveLightbox] = useState<null | {
    src: string;
    title: string;
    category: string;
    desc: string;
  }>(null);

  const galleryItems = [
    {
      id: '1',
      src: ASSET_IMAGES.heroScenic,
      title: 'Alaskan Riverbank Sunset Launch',
      category: 'adventures',
      categoryLabel: 'Alaskan Adventures',
      desc: 'Pelican single kayaks resting on the calm gravel riverbanks of Southcentral Alaska during golden hour.',
      span: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: '2',
      src: ASSET_IMAGES.pelicanFleet,
      title: 'Pelican Trailblazer Fleet Lineup',
      category: 'fleet',
      categoryLabel: 'Fleet & Gear',
      desc: 'High-visibility lime green and vibrant orange Pelican kayaks complete with USCG life jackets and lightweight paddles.',
      span: 'col-span-1',
    },
    {
      id: '3',
      src: ASSET_IMAGES.salmonCatch,
      title: 'Wild Alaskan Salmon River Catch',
      category: 'fishing',
      categoryLabel: 'Salmon Fishing',
      desc: 'Angler in river waders displaying fresh Alaskan salmon landed from a K&R rigged fishing kayak.',
      span: 'col-span-1',
    },
    {
      id: '4',
      src: ASSET_IMAGES.glacierPaddle,
      title: 'Glacier River Group Expedition',
      category: 'adventures',
      categoryLabel: 'Alaskan Adventures',
      desc: 'Exploring turquoise glacial waters with mountain ridges and Alaskan wilderness as the backdrop.',
      span: 'col-span-1 md:col-span-2',
    },
    {
      id: '5',
      src: ASSET_IMAGES.upholsteryRestored,
      title: 'Marine Upholstery Steam Restoration',
      category: 'restoration',
      categoryLabel: 'Fleet Restoration',
      desc: 'Power Cleaning Upholstery & Carpet LLC restored marine vinyl boat seating with deep thermal sanitization.',
      span: 'col-span-1',
    },
    {
      id: '6',
      src: ASSET_IMAGES.upholsteryDirty,
      title: 'Pre-Restoration Field Condition',
      category: 'restoration',
      categoryLabel: 'Fleet Restoration',
      desc: 'Demonstrating before-treatment marine wear prior to commercial steam extraction and hydrophobic coating.',
      span: 'col-span-1',
    },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="gallery-section" className="py-20 bg-[#F5F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-3.5 py-1 rounded-full border border-[#087EA4]/20 mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-[#087EA4]" />
              <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
                Real Alaskan Adventures
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F33] tracking-tight">
              Photo Gallery & Our Work
            </h2>
            <p className="text-sm sm:text-base text-[#142B3A]/70 mt-2 max-w-xl">
              Glimpse real moments on the water with K&R Rentals and see our fleet restoration standard with Power Cleaning Upholstery & Carpet LLC.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {[
              { key: 'all', label: 'All Photos' },
              { key: 'fleet', label: 'Fleet & Gear' },
              { key: 'adventures', label: 'Adventures' },
              { key: 'fishing', label: 'Salmon Fishing' },
              { key: 'restoration', label: 'Restoration' },
            ].map((tab) => (
              <button
                id={`gallery-filter-${tab.key}`}
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#0B1F33] text-white shadow-md shadow-[#0B1F33]/20'
                    : 'bg-white text-[#0B1F33] hover:bg-slate-100 border border-[#087EA4]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              id={`gallery-item-${item.id}`}
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#087EA4]/5 border border-[#087EA4]/15 cursor-pointer hover:border-[#087EA4]/40 transition-all aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#0B1F33]/80 backdrop-blur-md text-[#20C4D9] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* View Icon on hover */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Card Footer Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-black leading-tight text-white mb-1 group-hover:text-[#20C4D9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-[#0B1F33]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-white/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0B1F33]/80 hover:bg-[#0B1F33] text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[360px] sm:h-[480px] bg-slate-950">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="w-full h-full object-contain object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#087EA4] block mb-1">
                  {activeLightbox.category}
                </span>
                <h3 className="text-2xl font-black text-[#0B1F33]">{activeLightbox.title}</h3>
                <p className="text-sm text-[#142B3A]/70 mt-1 max-w-xl">{activeLightbox.desc}</p>
              </div>

              <a
                id="lightbox-whatsapp-inquiry"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B1F33] hover:bg-[#087EA4] text-white px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap"
              >
                Inquire About This Trip
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
