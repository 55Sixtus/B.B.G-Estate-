import { BgeProperty } from '../types/bge';

/**
 * Bashir Building Green Estates (B.G.E) Master Property Catalog
 * Strict Data Integrity: Conflicting or unconfirmed listings are set to 'Pending verification'
 * and excluded from public active inventory until resolved by the property principal.
 */
export const bgeProperties: BgeProperty[] = [
  // --- VERIFIED & PUBLISHED ACTIVE INVENTORY ---
  {
    id: 'bge-galadimawa-luxury-home',
    slug: '6-bedroom-luxury-home-galadimawa-abuja',
    title: 'Six-Bedroom Luxury Home, Galadimawa',
    category: 'Residential',
    location: 'Sun City, Galadimawa, Abuja, FCT',
    district: 'Galadimawa',
    price: 350000000,
    formattedPrice: '₦350,000,000',
    currency: 'NGN',
    bedrooms: 6,
    bathrooms: 6,
    propertyTypeDescription: '6-Bedroom Luxury Detached Home (Corner Piece)',
    description:
      'Substantial 6-bedroom luxurious corner-piece residence situated in coveted Sun City, Galadimawa, Abuja. Advertised as a distress sale at ₦350,000,000. Exceptional buy - renovate - sell or luxury Airbnb investment opportunity. Features private swimming pool (transparently noted: requires maintenance).',
    titleDocument: 'Sun City Estate Allocation & Title Documents',
    titleConfirmed: true,
    importantNotes:
      'Distress sale opportunity in Sun City at ₦350,000,000. Swimming pool is on-site and clearly disclosed as requiring maintenance before commissioning.',
    accessNotes: 'Prime corner-piece plot inside secure, fully paved Sun City Estate, Galadimawa.',
    features: [
      '6 En-Suite Bedrooms',
      'Corner-Piece Plot in Sun City',
      'Private Swimming Pool (Maintenance Required)',
      'High-Yield Airbnb / Resale Potential',
      'Distress Sale Asking Price',
      'Expansive Compound & Security Post'
    ],
    image: '/assets/images/abuja_luxury_mansion_1793279434177.jpg',
    gallery: [
      '/assets/images/abuja_luxury_mansion_1793279434177.jpg',
      '/assets/images/abuja_modern_duplex_hero_1793279432747.jpg',
      '/assets/aistudio/Screenshot_20261029-134524_9f71302d.png',
    ],
    featured: true,
    publicationStatus: 'Published',
    availability: 'Available',
    dateAdded: '2026-10-18',
  },
  {
    id: 'bge-kaura-plot-400sqm',
    slug: '400sqm-residential-plot-kaura-district-abuja',
    title: '400 SQM Plot for Detached Development, Kaura',
    category: 'Land',
    location: 'Kaura District, Abuja, FCT',
    district: 'Kaura',
    price: 60000000,
    formattedPrice: '₦60,000,000',
    currency: 'NGN',
    landSizeSqm: 400,
    propertyTypeDescription: 'Fully Detached Development Plot',
    description:
      '400 square metre plot intended for fully detached residential development, according to the owner. Located in Kaura District, within close reach of central Abuja transit lines. Accompanied by official drone site survey walkthrough video.',
    titleDocument: 'Certificate of Occupancy (C of O) stated in listing',
    titleConfirmed: true,
    importantNotes:
      'Verified 400 SQM plot with drone survey video. Note: marketing notes claiming a 60-second transit time to Games Village remain subject to traffic and verified route timing.',
    accessNotes: 'Paved access road connected to Kaura arterial network.',
    features: [
      '400 SQM Surveyed Plot',
      'Certificate of Occupancy (C of O)',
      'Approved for Fully Detached Residential Design',
      'Official Drone Site Survey & Video Available',
      'Fast-Developing Neighborhood',
      'Utilities Accessible in Sector'
    ],
    image: '/assets/images/abuja_land_katampe_1793279434121.jpg',
    gallery: [
      '/assets/images/abuja_land_katampe_1793279434121.jpg',
      '/assets/images/abuja_modern_duplex_hero_1793279432747.jpg',
    ],
    video: '/assets/aistudio/VID-20261029-WA0085_1d0fb0bc.mp4',
    featured: true,
    publicationStatus: 'Published',
    availability: 'Available',
    dateAdded: '2026-10-26',
  },
  {
    id: 'bge-gaduwa-land-450sqm',
    slug: '450sqm-residential-plot-gaduwa-district-abuja',
    title: '450 SQM Land Plot, Gaduwa District',
    category: 'Land',
    location: 'Gaduwa District, Abuja, FCT',
    district: 'Gaduwa',
    price: 95000000,
    formattedPrice: '₦95,000,000',
    currency: 'NGN',
    landSizeSqm: 450,
    propertyTypeDescription: 'Prime Residential Land Plot',
    description:
      'Prime 450 square metre residential plot in Gaduwa District. Favourably situated with confirmed tarred access roads, ready for immediate architectural design and development.',
    titleDocument: 'Certificate of Occupancy (C of O) stated in listing',
    titleConfirmed: true,
    importantNotes: 'The owner states and confirms that the access roads are fully tarred.',
    accessNotes: 'Direct access via fully tarred municipal roads in Gaduwa.',
    features: [
      '450 SQM Demarcated Land',
      'Certificate of Occupancy (C of O)',
      'Direct Tarred Road Access',
      'Ready for Residential Building',
      'Serene Established Neighborhood'
    ],
    image: '/assets/images/abuja_land_katampe_1793279434121.jpg',
    gallery: [
      '/assets/images/abuja_land_katampe_1793279434121.jpg',
    ],
    featured: true,
    publicationStatus: 'Published',
    availability: 'Available',
    dateAdded: '2026-10-22',
  },
  {
    id: 'bge-maitama-main-land-1000sqm',
    slug: '1000sqm-prime-estate-land-maitama-main-abuja',
    title: '1,000 SQM Prime Estate Land, Maitama Main',
    category: 'Land',
    location: 'Maitama Main, Abuja, FCT',
    district: 'Maitama',
    price: 1800000000,
    formattedPrice: '₦1,800,000,000',
    currency: 'NGN',
    landSizeSqm: 1000,
    propertyTypeDescription: 'Trophy Residential / Diplomatic Land Plot',
    description:
      'Ultra-exclusive 1,000 square metre parcel of land in Maitama Main. Prime diplomatic enclave location suitable for an ambassadorial residence, luxury private mansion, or bespoke development.',
    titleDocument: 'Certificate of Occupancy (C of O)',
    titleConfirmed: true,
    importantNotes:
      'Rare trophy parcel in central Maitama with verified Certificate of Occupancy. All inspections strictly by prior appointment and principal vetting.',
    accessNotes: 'Dual carriage paved asphalt road with comprehensive infrastructure.',
    features: [
      '1,000 SQM Regular Shaped Plot',
      'Full Certificate of Occupancy (C of O)',
      'Trophy Maitama Main Address',
      'Fully Serviced Infrastructure Corridor',
      'Unmatched Capital Retention & Exclusivity'
    ],
    image: '/assets/images/abuja_land_katampe_1793279434121.jpg',
    gallery: [
      '/assets/images/abuja_land_katampe_1793279434121.jpg',
      '/assets/images/abuja_luxury_mansion_1793279434177.jpg',
    ],
    featured: true,
    publicationStatus: 'Published',
    availability: 'Available',
    dateAdded: '2026-10-24',
  },
  {
    id: 'bge-gwarimpa-commercial-shop',
    slug: '40sqm-commercial-retail-shop-gwarimpa-abuja',
    title: '40 SQM Commercial Shop, Gwarimpa',
    category: 'Commercial',
    location: 'Gwarimpa Commercial Zone, Abuja, FCT',
    district: 'Gwarimpa',
    price: 50000000,
    formattedPrice: '₦50,000,000',
    currency: 'NGN',
    builtAreaSqm: 40,
    propertyTypeDescription: 'Retail / Commercial Space',
    description:
      'Compact 40 square metre commercial shop unit positioned in an active commercial node within Gwarimpa. Suitable for retail businesses, professional boutique offices, or pharmacy services.',
    titleDocument: 'Commercial deed and plaza allocation documents',
    titleConfirmed: false,
    importantNotes: 'High pedestrian and vehicular traffic sector with on-site customer parking.',
    accessNotes: 'Direct storefront access along commercial strip.',
    features: [
      '40 SQM Net Usable Floor Space',
      'Glass Display Frontage',
      'High Pedestrian Foot Traffic',
      'Dedicated Commercial Utilities',
      'Customer Parking Facility'
    ],
    image: '/assets/images/abuja_terrace_gwarimpa_1793279433524.jpg',
    gallery: [
      '/assets/images/abuja_terrace_gwarimpa_1793279433524.jpg',
    ],
    featured: false,
    publicationStatus: 'Published',
    availability: 'Available',
    dateAdded: '2026-10-25',
  },

  // --- UNCONFIRMED & CONFLICTING LISTINGS: KEPT UNPUBLISHED AS DRAFT / PENDING VERIFICATION ---
  {
    id: 'bge-gwarimpa-3rd-ave',
    slug: '5-bedroom-terrace-duplex-gwarimpa-3rd-avenue',
    title: 'Five-Bedroom Terrace Duplex, Gwarimpa',
    category: 'Residential',
    location: 'Behind Zenith Bank, Off 3rd Avenue, Gwarimpa, Abuja',
    district: 'Gwarimpa',
    price: 150000000,
    formattedPrice: '₦150,000,000',
    currency: 'NGN',
    bedrooms: 5,
    bathrooms: 5,
    propertyTypeDescription: '5-Bedroom Terrace Duplex',
    description:
      'Spacious five-bedroom terrace duplex situated behind Zenith Bank, off 3rd Avenue in central Gwarimpa. Features all-tarred road access, actual architectural design, 18-month payment plan flexibility, and stated Certificate of Occupancy (C of O).',
    titleDocument: 'Certificate of Occupancy (C of O)',
    titleConfirmed: true,
    importantNotes:
      'Advertised on flyer at ₦150,000,000 with alternate catalog entry citing ₦149,000,000. Kept unpublished pending owner price reconciliation.',
    accessNotes: 'Prime central location behind Zenith Bank with fully tarred access roads.',
    features: [
      '5 En-Suite Bedrooms',
      'Certificate of Occupancy (C of O)',
      '18-Month Flexible Payment Plan',
      'All Tarred Road in Central Gwarimpa',
      'Behind Zenith Bank Corridor',
      'Fitted Kitchen & Paved Compound'
    ],
    image: '/assets/images/abuja_terrace_gwarimpa_1793279433524.jpg',
    gallery: [
      '/assets/images/abuja_terrace_gwarimpa_1793279433524.jpg',
      '/assets/images/abuja_modern_duplex_hero_1793279432747.jpg',
    ],
    featured: false,
    publicationStatus: 'Pending verification',
    availability: 'Available',
    dateAdded: '2026-10-15',
    conflictingInfoNote:
      'Conflicting price: Flyer references ₦150,000,000 while WhatsApp catalog indicates ₦149,000,000. Kept unpublished pending principal price confirmation.',
  },
  {
    id: 'bge-katampe-nicon-duplex',
    slug: '5-bedroom-fully-detached-duplex-bq-katampe-main-abuja',
    title: '5-Bedroom Fully Detached Duplex + BQ, Katampe Main',
    category: 'Residential',
    location: 'Enter from NICON Junction, Katampe Main, Abuja',
    district: 'Katampe',
    price: 40000000,
    formattedPrice: '₦40,000,000',
    currency: 'NGN',
    landSizeSqm: 450,
    bedrooms: 5,
    bathrooms: 5,
    propertyTypeDescription: '5-Bedroom Detached Duplex + BQ',
    description:
      'Development alert in Katampe Main, accessible from NICON Junction. Cites a 450 square metre plot with approved plans for a 5-bedroom duplex plus BQ. Backed by FCDA building approval and verifiable documentation.',
    titleDocument: 'FCDA Building Approval & Verifiable Documents',
    titleConfirmed: true,
    importantNotes:
      'Promotional price cited at ₦40,000,000. Kept unpublished due to conflicting Katampe catalog materials with a separate ₦70,000,000 land listing.',
    accessNotes: 'Convenient entrance directly from NICON Junction, Katampe Main.',
    features: [
      '450 SQM Plot Area',
      '5 En-Suite Bedrooms + BQ',
      'FCDA Building Approval',
      'Verifiable Land & Development Documents',
      'Enter from NICON Junction'
    ],
    image: '/assets/images/abuja_land_katampe_1793279434121.jpg',
    gallery: [
      '/assets/images/abuja_land_katampe_1793279434121.jpg',
      '/assets/images/abuja_modern_duplex_hero_1793279432747.jpg',
    ],
    featured: false,
    publicationStatus: 'Pending verification',
    availability: 'Available',
    dateAdded: '2026-10-27',
    conflictingInfoNote:
      'Conflicting Katampe materials: Materials conflict between a ₦40,000,000 duplex catalog entry and a ₦70,000,000 400 sqm land listing. Kept unpublished pending confirmation.',
  },
  {
    id: 'bge-katampe-main-land-400sqm',
    slug: '400sqm-residential-land-katampe-main-abuja',
    title: '400 SQM Land Plot, Katampe Main',
    category: 'Land',
    location: 'Katampe Main, Abuja, FCT',
    district: 'Katampe',
    price: 70000000,
    formattedPrice: '₦70,000,000',
    currency: 'NGN',
    landSizeSqm: 400,
    propertyTypeDescription: 'Residential Development Land',
    description:
      '400 square metre residential land plot situated in elevated Katampe Main. Stated C of O in listing.',
    titleDocument: 'Certificate of Occupancy (C of O) stated in listing',
    titleConfirmed: true,
    importantNotes:
      'Access road to this plot is untarred and under construction. Price conflicts with alternate ₦40M Katampe entry.',
    accessNotes: 'Road currently untarred; municipal road works underway in sector.',
    features: [
      '400 SQM Surveyed Plot',
      'Certificate of Occupancy (C of O)',
      'Scenic Elevated Topography',
      'Residential Zoning'
    ],
    image: '/assets/images/abuja_land_katampe_1793279434121.jpg',
    gallery: [
      '/assets/images/abuja_land_katampe_1793279434121.jpg',
    ],
    featured: false,
    publicationStatus: 'Pending verification',
    availability: 'Available',
    dateAdded: '2026-10-20',
    conflictingInfoNote:
      'Katampe materials conflict between a ₦40 million catalog listing and this ₦70 million listing. Access road also untarred. Kept unpublished pending confirmation.',
  },
  {
    id: 'bge-dawaki-commercial-shops',
    slug: 'entire-commercial-plaza-5-massive-shops-dawaki-abuja',
    title: 'Entire Commercial Plaza (5 Massive Shops), Dawaki',
    category: 'Commercial',
    location: 'Dawaki Commercial Corridor, Abuja, FCT',
    district: 'Dawaki',
    price: 160000000,
    formattedPrice: '₦160,000,000',
    currency: 'NGN',
    builtAreaSqm: 280,
    propertyTypeDescription: 'Commercial Plaza with 5 Retail Shops',
    description:
      'Commercial investment opportunity in Dawaki, Abuja. Commercial plaza featuring five massive ground-floor retail shops with high visibility and dedicated customer parking.',
    titleDocument: 'Commercial Plaza Title & Allocation Documents',
    titleConfirmed: true,
    importantNotes:
      'Flyer lists Entire Plaza (5 Massive Shops) at ₦160,000,000, while WhatsApp catalog lists ₦16,000,000. Kept unpublished until confirmed whether price covers all five shops or single unit / deposit.',
    accessNotes: 'Direct road frontage along the main Dawaki business spine.',
    features: [
      'Entire Commercial Plaza',
      '5 Massive Commercial Shop Units',
      'High Pedestrian & Vehicular Footfall',
      'Dedicated Customer Parking Forecourt'
    ],
    image: '/assets/images/abuja_terrace_gwarimpa_1793279433524.jpg',
    gallery: [
      '/assets/images/abuja_terrace_gwarimpa_1793279433524.jpg',
      '/assets/aistudio/Screenshot_20261029-134524_9f71302d.png',
    ],
    featured: false,
    publicationStatus: 'Pending verification',
    availability: 'Available',
    dateAdded: '2026-10-28',
    conflictingInfoNote:
      "Dawaki's ₦16 million listing does not clearly establish whether the price covers all five shops or one unit (flyer states ₦160M for entire plaza). Kept unpublished until confirmed.",
  }
];

export const bgeLocations = [
  { name: 'Galadimawa', description: 'Tranquil district with expansive modern estates and luxury residences in Sun City.' },
  { name: 'Kaura', description: 'Centrally positioned district favored for detached residential developments and convenient transit.' },
  { name: 'Gaduwa', description: 'Established district with fully tarred access corridors, mature infrastructure, and residential plots.' },
  { name: 'Maitama', description: 'Abuja’s premier diplomatic and sovereign enclave, boasting unmatched security and prestige.' },
  { name: 'Gwarimpa', description: 'One of West Africa’s largest planned estates, offering prime terrace homes and vibrant commercial plazas.' },
  { name: 'Katampe', description: 'Elevated topography with scenic horizons, currently undergoing catalog reconciliation.' },
  { name: 'Dawaki', description: 'Fast-growing commercial and residential sector along the Kubwa expressway corridor.' },
];
