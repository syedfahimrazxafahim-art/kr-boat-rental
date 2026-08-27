import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tripDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#087EA4]/10 px-4 py-1 rounded-full border border-[#087EA4]/20 mb-3">
            <Phone className="w-4 h-4 text-[#087EA4]" />
            <span className="text-xs font-black tracking-widest text-[#087EA4] uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F33] tracking-tight mb-4">
            Connect with K&R Rentals
          </h2>
          <p className="text-base text-[#142B3A]/70 leading-relaxed">
            Have questions about local waterway launches, multi-day fishing rates, or equipment transport?
            Reach out via WhatsApp, phone, or submit an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Connect Card - Theme matched */}
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-[#087EA4]/5 border border-[#087EA4]/15 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#087EA4] font-bold mb-1">
                    WhatsApp Quick Connect
                  </p>
                  <p className="text-2xl font-black text-[#0B1F33]">{BUSINESS_INFO.phone}</p>
                </div>
                <div className="w-12 h-12 bg-[#20C4D9]/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#20C4D9] rounded-full shadow-[0_0_15px_#20C4D9]"></div>
                </div>
              </div>
              <p className="text-xs text-[#142B3A]/70 mb-4">
                Fastest response for same-day availability checks and Anchorage drop-off coordination.
              </p>
              <a
                id="contact-whatsapp-direct-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0B1F33] hover:bg-[#087EA4] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#20C4D9]" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Location & Details Card */}
            <div className="bg-[#F5F9FA] p-6 rounded-3xl border border-[#087EA4]/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B1F33] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#20C4D9]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F33]">Anchorage Location</h4>
                  <p className="text-xs text-[#142B3A]/70 mt-0.5">{BUSINESS_INFO.pickupLocation}</p>
                  <p className="text-[11px] text-[#087EA4] font-semibold mt-1">Delivery available across Anchorage</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B1F33] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#20C4D9]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F33]">Operating Hours</h4>
                  <p className="text-xs text-[#142B3A]/70 mt-0.5">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B1F33] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#20C4D9]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F33]">Restoration Partner</h4>
                  <p className="text-xs text-[#142B3A]/70 mt-0.5">{BUSINESS_INFO.partnerCompany}</p>
                </div>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-[#0B1F33] text-white p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#20C4D9] font-bold uppercase tracking-wider block">Official Facebook</span>
                <span className="text-sm font-bold">Follow @KRrental</span>
              </div>
              <a
                id="contact-facebook-link"
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg text-xs font-bold transition-colors"
              >
                Visit Facebook →
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F9FA] rounded-3xl p-6 sm:p-10 border border-[#087EA4]/15 shadow-xl shadow-[#087EA4]/5">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-black text-[#0B1F33] mb-2">Send an Outfitting Inquiry</h3>
                  <p className="text-xs text-[#142B3A]/70 mb-6">
                    Fill in your details and we will get back to you with custom rates and logistics within 2 hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#087EA4]/20 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="1 907-xxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#087EA4]/20 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#087EA4]/20 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1">
                        Planned Launch Date
                      </label>
                      <input
                        type="date"
                        value={formData.tripDate}
                        onChange={(e) => setFormData({ ...formData, tripDate: e.target.value })}
                        className="w-full bg-white border border-[#087EA4]/20 rounded-xl px-3.5 py-2 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your trip (e.g. number of paddlers, fishing plans, delivery address)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#087EA4]/20 rounded-xl px-3.5 py-2.5 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                    ></textarea>
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    className="w-full bg-[#0B1F33] hover:bg-[#087EA4] text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4 text-[#20C4D9]" />
                    <span>Send Message to K&R Rentals</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0B1F33]">Message Sent!</h3>
                  <p className="text-sm text-[#142B3A]/70 max-w-sm mx-auto">
                    Thanks {formData.name}! Our team in Anchorage will get in touch shortly to assist with your rental.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#087EA4] font-bold underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
