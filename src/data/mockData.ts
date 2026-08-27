import { FleetItem, LaunchLocation, Testimonial } from '../types';

import heroScenicImg from '../assets/images/knr_hero_scenic_1787865270816.jpg';
import pelicanFleetImg from '../assets/images/knr_pelican_fleet_1787865284967.jpg';
import salmonCatchImg from '../assets/images/knr_salmon_catch_1787865297929.jpg';
import glacierPaddleImg from '../assets/images/knr_glacier_paddle_1787865311831.jpg';
import upholsteryRestoredImg from '../assets/images/knr_upholstery_restored_1787865329093.jpg';
import upholsteryDirtyImg from '../assets/images/knr_upholstery_dirty_1787865341754.jpg';

export const ASSET_IMAGES = {
  heroScenic: heroScenicImg,
  pelicanFleet: pelicanFleetImg,
  salmonCatch: salmonCatchImg,
  glacierPaddle: glacierPaddleImg,
  upholsteryRestored: upholsteryRestoredImg,
  upholsteryDirty: upholsteryDirtyImg,
};

export const BUSINESS_INFO = {
  name: 'K&R Rentals',
  tagline: 'Premium Boat & Kayak Rentals in Anchorage, Alaska',
  city: 'Anchorage',
  state: 'Alaska',
  phone: '1 907-444-6615',
  phoneClean: '+19074446615',
  whatsappUrl: 'https://wa.me/19074446615?text=Hello%20K%26R%20Rentals!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20rental.',
  facebookUrl: 'https://www.facebook.com/KRrental',
  partnerCompany: 'Power Cleaning Upholstery & Carpet LLC',
  hours: 'Mon - Sun: 7:00 AM - 9:00 PM (Alaskan Summer Daylight Hours)',
  pickupLocation: 'Central Anchorage Pickup Point, Anchorage, AK 99501',
};

export const FLEET_DATA: FleetItem[] = [
  {
    id: 'pelican-trailblazer-100',
    name: 'Pelican Trailblazer 100 NXT (Single)',
    category: 'single',
    tagline: 'Lightweight, agile, and beginner-friendly for lakes and calm rivers',
    image: pelicanFleetImg,
    capacity: '1 Person',
    length: "10' 0\"",
    weightLimit: '275 lbs',
    halfDayPrice: 45,
    fullDayPrice: 65,
    weekendPrice: 150,
    features: [
      'Ergofit padded backrest with cushion',
      'Molded-in cockpit with bottle holder',
      'Dual carrying handles & drain plug',
      'Includes USCG life vest & lightweight paddle',
      'Stern storage hatch with bungees',
    ],
    description:
      'Engineered with a shallow V-chine hull for remarkable stability and effortless tracking on scenic Alaskan lakes like Eklutna or Little Campbell Lake.',
    popular: true,
  },
  {
    id: 'pelican-catch-120-fishing',
    name: 'Pelican Catch 120 Angler Edition',
    category: 'fishing',
    tagline: 'Custom rigged for Alaskan salmon and trout river angling',
    image: salmonCatchImg,
    capacity: '1 Angler + Gear',
    length: "12' 0\"",
    weightLimit: '400 lbs',
    halfDayPrice: 60,
    fullDayPrice: 85,
    weekendPrice: 195,
    features: [
      'Ergocast G2 dual-position seating system',
      '4 flush-mount rod holders + tackle rigging track',
      'Stand-up casting platform with anti-slip deck',
      'Includes anchor kit & waterproof dry bag',
      'USCG Type III life jacket with tackle pockets',
    ],
    description:
      'The premier choice for reeling in silver, pink, or red salmon across Southcentral Alaska rivers. Built with rigid pontoon hull stability for casting while standing.',
    popular: true,
  },
  {
    id: 'pelican-alliance-130t-tandem',
    name: 'Pelican Alliance 130T Tandem Cruiser',
    category: 'tandem',
    tagline: 'Two-person recreational kayak built for couples and family outings',
    image: glacierPaddleImg,
    capacity: '2 Adults (+ small child/pet)',
    length: "13' 0\"",
    weightLimit: '500 lbs',
    halfDayPrice: 70,
    fullDayPrice: 95,
    weekendPrice: 220,
    features: [
      'Dual adjustable padded backrests',
      'Center child/gear jump seating position',
      'Dual paddle tie-downs & cockpit beverage wells',
      'Includes 2 USCG life jackets & 2 lightweight paddles',
      'Front and rear bungee cargo decks',
    ],
    description:
      'Perfect for sharing Alaska’s wild waters with a partner or family member. Features high-buoyancy RAM-X™ multi-layer material and twin tracking channels.',
  },
  {
    id: 'alaska-expedition-weekend-pack',
    name: 'Alaskan Adventure Excursion Bundle',
    category: 'package',
    tagline: 'Complete 2-kayak weekend package with roof rack kits and dry packs',
    image: heroScenicImg,
    capacity: '2-4 Persons',
    length: 'Dual Vessels',
    weightLimit: '750 lbs Combined',
    halfDayPrice: 110,
    fullDayPrice: 160,
    weekendPrice: 340,
    features: [
      'Choice of 2 single kayaks OR 1 tandem + 1 single',
      'Universal car foam block roof rack transport kit',
      '30L heavy-duty waterproof gear dry packs',
      'Emergency marine whistle & signaling mirror kit',
      'Flexible drop-off options in Anchorage area',
    ],
    description:
      'Our all-in-one outfitting package designed for weekend getaways to Kenai Peninsula, Mat-Su Valley, or Portage Lake.',
  },
];

export const LAUNCH_LOCATIONS: LaunchLocation[] = [
  {
    id: 'eklutna-lake',
    name: 'Eklutna Lake State Recreation Area',
    region: 'Chugach State Park (North Anchorage)',
    distanceFromAnchorage: '40 mins from Downtown',
    difficulty: 'Beginner',
    waterType: 'Glacial Alpine Lake (Calm to moderate wind)',
    targetFish: ['Dolly Varden', 'Kokanee Salmon'],
    description:
      'A breathtaking 7-mile long glacial lake framed by massive peaks. Pristine turquoise water and stunning reflections make this Anchorage’s premier flatwater kayaking destination.',
    highlights: ['Glacier views', 'Rental vehicle access', 'Picnic and campground launch'],
  },
  {
    id: 'campbell-creek',
    name: 'Campbell Creek & Estuary',
    region: 'South Anchorage',
    distanceFromAnchorage: '12 mins from Downtown',
    difficulty: 'Intermediate',
    waterType: 'Meandering Coastal Stream & Tidal Estuary',
    targetFish: ['Silver Salmon (Coho)', 'Pink Salmon'],
    description:
      'Paddlers can explore serene winding waterways right in Anchorage with rich birdwatching and seasonal salmon runs.',
    highlights: ['Urban convenience', 'Abundant wildlife & eagles', 'Tide-assisted cruising'],
  },
  {
    id: 'little-campbell-lake',
    name: 'Little Campbell Lake (Kincaid Park)',
    region: 'West Anchorage / Kincaid',
    distanceFromAnchorage: '15 mins from Downtown',
    difficulty: 'Beginner',
    waterType: 'Sheltered Woodland Lake',
    targetFish: ['Rainbow Trout', 'Arctic Char'],
    description:
      'A peaceful, wind-protected wooded lake nestled in Kincaid Park. Ideal for leisurely evening paddles, families with kids, and first-time paddlers.',
    highlights: ['No motorized boats allowed', 'Calm water guarantee', 'Kincaid Park trailheads'],
  },
  {
    id: 'portage-lake',
    name: 'Portage Lake & Valley',
    region: 'Turnagain Arm / Kenai Gateway',
    distanceFromAnchorage: '50 mins South along Seward Hwy',
    difficulty: 'Intermediate',
    waterType: 'Glacial Lake with Floating Bergs',
    targetFish: ['Scenic Touring'],
    description:
      'A world-famous Alaskan destination where paddlers can safely view hanging alpine glaciers and blue floating icebergs from designated shoreline boundaries.',
    highlights: ['Turnagain Arm scenic drive', 'Glacial ice formations', 'Dramatic photography'],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Cody M.',
    location: 'Anchorage, AK',
    rating: 5,
    date: 'July 2024',
    comment:
      'K&R Rentals made our trip to Eklutna Lake completely seamless! The Pelican kayaks were spotless and in mint condition, and having the life jackets and tie-down straps ready to go saved us so much time. Highly recommend to anyone in Anchorage.',
    tripType: 'Weekend Family Rental',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: '2',
    name: 'Jessica & Brett T.',
    location: 'Wasilla, AK',
    rating: 5,
    date: 'August 2024',
    comment:
      'We rented two kayaks for salmon fishing along the river. The rod holders and stability on the Catch 120 were phenomenal. Communication on WhatsApp with K&R was instant. Will definitely be renting again next season!',
    tripType: 'River Angling Setup',
    avatarBg: 'bg-cyan-600',
  },
  {
    id: '3',
    name: 'David L.',
    location: 'Visiting from Seattle, WA',
    rating: 5,
    date: 'June 2024',
    comment:
      'Outstanding service! The upholstery and equipment cleanliness was pristine thanks to their partner Power Cleaning Upholstery & Carpet. True Alaskan hospitality and top tier gear.',
    tripType: 'Full-Day Glacial Excursion',
    avatarBg: 'bg-blue-600',
  },
];

export const FAQS_DATA = [
  {
    q: 'What equipment is included with each boat and kayak rental?',
    a: 'Every single and tandem rental includes Coast Guard-approved USCG life jackets (sized for your party), lightweight aluminum/fiberglass paddles, a waterproof phone dry-case, and vehicle foam block tie-down straps for safe transit.',
  },
  {
    q: 'How does pickup and drop-off work in Anchorage?',
    a: 'We offer central Anchorage location pickup with pre-scheduled time slots. We also offer local delivery directly to your Anchorage hotel, residence, or selected waterway launch site upon request.',
  },
  {
    q: 'What is the partnership with Power Cleaning Upholstery & Carpet LLC?',
    a: 'We partner with Anchorage’s premier restoration specialists, Power Cleaning Upholstery & Carpet LLC, to ensure every vessel, marine cushion, life jacket, and interior undergoes deep thermal steam sanitization and hydrophobic marine protection between rentals.',
  },
  {
    q: 'Can I transport the kayaks on my standard SUV or rental car?',
    a: 'Yes! We provide heavy-duty universal roof rack foam pads, cam buckle tie-down straps, and bow/stern safety lines that safely secure to almost any vehicle, SUV, or truck without scratching.',
  },
  {
    q: 'What is your weather and cancellation policy?',
    a: 'Alaskan weather can change rapidly. If high winds or hazardous conditions occur on your scheduled rental day, we offer 100% free rescheduling or a full deposit refund with at least 24 hours notice.',
  },
];
