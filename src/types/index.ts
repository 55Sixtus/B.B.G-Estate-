export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  address: string;
  city: string;
  neighborhood: string;
  state: string;
  zipCode: string;
  type: 'Villa' | 'Penthouse' | 'Modern Estate' | 'Coastal' | 'Historic';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  architect?: string;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  highlightSpecs: { label: string; value: string }[];
  isFeatured?: boolean;
  status: 'Available' | 'Private Off-Market' | 'Under Contract';
}

export interface BrandSettings {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  email: string;
  officeAddress: string;
  primaryLocations: string[];
  currencySymbol: string;
  volumeClosed: string;
  listToSaleRatio: string;
  daysOnMarket: string;
  exclusiveListingsCount: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  license: string;
  email: string;
  phone: string;
  image: string;
  volume: string;
  specialization: string;
}

export interface MarketInsight {
  neighborhood: string;
  region: string;
  avgPriceSqFt: number;
  medianPrice: string;
  yoyAppreciation: string;
  avgDaysOnMarket: number;
  marketPace: 'High Demand' | 'Balanced' | 'Rare Supply';
}
