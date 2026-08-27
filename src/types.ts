export type PageView = 'home' | 'fleet' | 'restoration' | 'locations' | 'gallery' | 'contact' | 'book';

export interface FleetItem {
  id: string;
  name: string;
  category: 'single' | 'tandem' | 'fishing' | 'package';
  tagline: string;
  image: string;
  capacity: string;
  length: string;
  weightLimit: string;
  halfDayPrice: number;
  fullDayPrice: number;
  weekendPrice: number;
  features: string[];
  description: string;
  popular?: boolean;
}

export interface LaunchLocation {
  id: string;
  name: string;
  region: string;
  distanceFromAnchorage: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  waterType: string;
  targetFish?: string[];
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
  avatarBg: string;
}

export interface BookingDetails {
  vesselId: string;
  vesselName: string;
  duration: 'half-day' | 'full-day' | 'weekend' | 'multi-day';
  startDate: string;
  startTime: string;
  daysCount: number;
  quantity: number;
  renterName: string;
  renterPhone: string;
  renterEmail: string;
  deliveryOption: 'pickup' | 'delivery';
  deliveryAddress?: string;
  addOns: {
    fishingRig: boolean;
    dryBags: boolean;
    roofRackFoam: boolean;
    coolerPack: boolean;
  };
  notes: string;
}
