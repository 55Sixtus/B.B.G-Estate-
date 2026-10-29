export type PropertyCategory = 'Residential' | 'Land' | 'Commercial';

export type PublicationStatus = 'Published' | 'Pending verification' | 'Draft' | 'Sold or unavailable';

export type AvailabilityStatus = 'Available' | 'Under Offer' | 'Sold';

export interface BgeProperty {
  id: string;
  slug: string;
  title: string;
  category: PropertyCategory;
  location: string;
  district: 'Gwarimpa' | 'Galadimawa' | 'Katampe' | 'Gaduwa' | 'Maitama' | 'Kaura' | 'Dawaki' | 'Abuja FCT';
  price: number;
  formattedPrice: string;
  currency: string;
  bedrooms?: number;
  bathrooms?: number;
  landSizeSqm?: number;
  builtAreaSqm?: number;
  propertyTypeDescription: string;
  description: string;
  titleDocument?: string;
  titleConfirmed: boolean;
  importantNotes?: string;
  accessNotes?: string;
  ownerNotes?: string;
  features: string[];
  image: string;
  gallery: string[];
  video?: string;
  featured: boolean;
  publicationStatus: PublicationStatus;
  availability: AvailabilityStatus;
  dateAdded: string;
  conflictingInfoNote?: string;
}

export interface InspectionBooking {
  id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  propertyId: string;
  propertyTitle: string;
  propertyLocation: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'Pending' | 'Contacted' | 'Scheduled' | 'Completed';
  createdAt: string;
}
