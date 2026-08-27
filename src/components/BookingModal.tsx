import React, { useState } from 'react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/mockData';
import { FleetItem, BookingDetails } from '../types';
import { X, Anchor, CheckCircle2, Shield, Calendar, Phone, Sparkles, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVessel?: FleetItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialVessel }) => {
  const [selectedVesselId, setSelectedVesselId] = useState<string>(
    initialVessel ? initialVessel.id : FLEET_DATA[0].id
  );
  const [duration, setDuration] = useState<'half-day' | 'full-day' | 'weekend' | 'multi-day'>('full-day');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState('09:00');
  const [daysCount, setDaysCount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [renterName, setRenterName] = useState('');
  const [renterPhone, setRenterPhone] = useState('');
  const [renterEmail, setRenterEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [addOns, setAddOns] = useState({
    fishingRig: false,
    dryBags: false,
    roofRackFoam: true,
    coolerPack: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentVessel = FLEET_DATA.find((v) => v.id === selectedVesselId) || FLEET_DATA[0];

  // Calculate live pricing
  let baseRate = currentVessel.fullDayPrice;
  if (duration === 'half-day') baseRate = currentVessel.halfDayPrice;
  if (duration === 'weekend') baseRate = currentVessel.weekendPrice;
  if (duration === 'multi-day') baseRate = currentVessel.fullDayPrice * daysCount;

  let totalBase = baseRate * quantity;
  let addOnsTotal = 0;
  if (addOns.fishingRig) addOnsTotal += 15;
  if (addOns.dryBags) addOnsTotal += 10;
  if (addOns.coolerPack) addOnsTotal += 15;
  if (deliveryOption === 'delivery') addOnsTotal += 25;

  const grandTotal = totalBase + addOnsTotal;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!renterName || !renterPhone) {
      alert('Please provide your name and phone number so we can confirm your reservation.');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#20C4D9', '#087EA4', '#0B1F33', '#10B981'],
      });
    } catch (err) {
      // Confetti fallback
    }

    setIsSubmitted(true);
  };

  const getWhatsAppBookingText = () => {
    const text = `Hi K&R Rentals! I would like to book:\n` +
      `- Vessel: ${currentVessel.name} (Qty: ${quantity})\n` +
      `- Duration: ${duration.toUpperCase()} (Start: ${startDate} at ${startTime})\n` +
      `- Option: ${deliveryOption === 'delivery' ? `Delivery to ${deliveryAddress}` : 'Anchorage Pickup'}\n` +
      `- Name: ${renterName}\n` +
      `- Phone: ${renterPhone}\n` +
      `- Estimated Total: $${grandTotal}\n` +
      `- Notes: ${notes || 'None'}`;
    return encodeURIComponent(text);
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0B1F33]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#087EA4]/20 my-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1F33] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#20C4D9]/20 relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#20C4D9]/20 text-[#20C4D9] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1">
              <Sparkles className="w-3 h-3" />
              Anchorage Outfitting Reservation
            </div>
            <h2 className="text-2xl font-black text-white">Reserve Your Alaskan Watercraft</h2>
            <p className="text-xs text-white/70">Instant availability verification with K&R Rentals</p>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Vessel Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-2">
                1. Select Vessel Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FLEET_DATA.map((vessel) => {
                  const isSelected = selectedVesselId === vessel.id;
                  return (
                    <div
                      key={vessel.id}
                      onClick={() => setSelectedVesselId(vessel.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#087EA4]/10 border-[#087EA4] ring-2 ring-[#087EA4]/20'
                          : 'bg-[#F5F9FA] border-[#087EA4]/10 hover:bg-white'
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F33]">{vessel.name}</h4>
                        <p className="text-[11px] text-[#142B3A]/60">{vessel.capacity} • ${vessel.fullDayPrice}/day</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-[#087EA4] border-[#087EA4] text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                  Trip Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value as any)}
                  className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                >
                  <option value="half-day">Half Day (4 Hours)</option>
                  <option value="full-day">Full Day (8 Hours)</option>
                  <option value="weekend">Weekend (2 Days)</option>
                  <option value="multi-day">Multi-Day Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                  Launch Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                  Number of Boats
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                />
              </div>
            </div>

            {/* Step 3: Pickup / Delivery */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-1.5">
                2. Pickup or Delivery Preference
              </label>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <button
                  type="button"
                  onClick={() => setDeliveryOption('pickup')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    deliveryOption === 'pickup'
                      ? 'bg-[#0B1F33] text-white'
                      : 'bg-[#F5F9FA] text-[#0B1F33] border border-[#087EA4]/15'
                  }`}
                >
                  Central Anchorage Pickup (Free)
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryOption('delivery')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    deliveryOption === 'delivery'
                      ? 'bg-[#0B1F33] text-white'
                      : 'bg-[#F5F9FA] text-[#0B1F33] border border-[#087EA4]/15'
                  }`}
                >
                  Anchorage Hotel / Launch Delivery (+$25)
                </button>
              </div>

              {deliveryOption === 'delivery' && (
                <input
                  type="text"
                  placeholder="Enter Anchorage delivery address / hotel name..."
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3 py-2 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                />
              )}
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-2">
                3. Optional Trip Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F5F9FA] border border-[#087EA4]/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.fishingRig}
                    onChange={(e) => setAddOns({ ...addOns, fishingRig: e.target.checked })}
                    className="rounded text-[#087EA4] focus:ring-[#087EA4]"
                  />
                  <span className="text-xs text-[#0B1F33] font-medium">Salmon Fishing Rig & Mount (+$15)</span>
                </label>

                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F5F9FA] border border-[#087EA4]/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.dryBags}
                    onChange={(e) => setAddOns({ ...addOns, dryBags: e.target.checked })}
                    className="rounded text-[#087EA4] focus:ring-[#087EA4]"
                  />
                  <span className="text-xs text-[#0B1F33] font-medium">Extra 30L Waterproof Dry Bag (+$10)</span>
                </label>

                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F5F9FA] border border-[#087EA4]/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.roofRackFoam}
                    onChange={(e) => setAddOns({ ...addOns, roofRackFoam: e.target.checked })}
                    className="rounded text-[#087EA4] focus:ring-[#087EA4]"
                  />
                  <span className="text-xs text-[#0B1F33] font-medium">Universal Car Foam Tie-Down Kit (Included Free)</span>
                </label>

                <label className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F5F9FA] border border-[#087EA4]/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.coolerPack}
                    onChange={(e) => setAddOns({ ...addOns, coolerPack: e.target.checked })}
                    className="rounded text-[#087EA4] focus:ring-[#087EA4]"
                  />
                  <span className="text-xs text-[#0B1F33] font-medium">Insulated Marine Catch Cooler (+$15)</span>
                </label>
              </div>
            </div>

            {/* Step 5: Contact Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-2">
                4. Primary Renter Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={renterName}
                  onChange={(e) => setRenterName(e.target.value)}
                  className="bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3 py-2.5 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number *"
                  value={renterPhone}
                  onChange={(e) => setRenterPhone(e.target.value)}
                  className="bg-[#F5F9FA] border border-[#087EA4]/20 rounded-xl px-3 py-2.5 text-xs text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#087EA4]"
                />
              </div>
            </div>

            {/* Price Summary & Submit */}
            <div className="bg-[#0B1F33] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/70 block">Estimated Rental Total</span>
                <span className="text-3xl font-black text-[#20C4D9]">${grandTotal}</span>
                <span className="text-[11px] text-white/60 block">Includes USCG life jackets, paddles & tie-down straps</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#20C4D9] hover:bg-white text-[#0B1F33] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Reservation</span>
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#0B1F33]">Reservation Request Received!</h3>
              <p className="text-sm text-[#142B3A]/70 max-w-md mx-auto">
                Thank you, <strong>{renterName}</strong>. We have placed a hold for your{' '}
                <strong>{currentVessel.name}</strong> for {startDate}.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#F5F9FA] rounded-2xl p-5 border border-[#087EA4]/15 max-w-md mx-auto text-left text-xs space-y-2 text-[#142B3A]">
              <div className="flex justify-between">
                <span className="text-[#142B3A]/60">Vessel:</span>
                <span className="font-bold">{currentVessel.name} ({quantity}x)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#142B3A]/60">Date & Duration:</span>
                <span className="font-bold">{startDate} • {duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#142B3A]/60">Total Estimated:</span>
                <span className="font-bold text-[#087EA4] text-sm">${grandTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#142B3A]/60">Sanitization:</span>
                <span className="font-bold text-emerald-700">Power Cleaning LLC Steam Verified</span>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="space-y-3 pt-2">
              <a
                id="confirmation-whatsapp-send-btn"
                href={`https://wa.me/19074446615?text=${getWhatsAppBookingText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-emerald-900/20"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp (1 907-444-6615)</span>
              </a>

              <p className="text-[11px] text-[#142B3A]/60">
                Or call us directly at <strong>{BUSINESS_INFO.phone}</strong>
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-[#087EA4] font-bold hover:underline"
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
