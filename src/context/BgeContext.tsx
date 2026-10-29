import React, { createContext, useContext, useState, useEffect } from 'react';
import { BgeProperty, InspectionBooking, PropertyCategory, PublicationStatus } from '../types/bge';
import { bgeProperties } from '../data/bgeProperties';

export type PageRoute =
  | 'home'
  | 'properties'
  | 'property-detail'
  | 'about'
  | 'inspection'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'admin';

interface FilterState {
  search: string;
  category: PropertyCategory | 'All';
  district: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
}

interface BgeContextType {
  activePage: PageRoute;
  selectedProperty: BgeProperty | null;
  navigateTo: (page: PageRoute, propertyId?: string) => void;
  publishedProperties: BgeProperty[];
  allProperties: BgeProperty[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  inspectionBookings: InspectionBooking[];
  addInspectionBooking: (booking: Omit<InspectionBooking, 'id' | 'createdAt' | 'status'>) => InspectionBooking;
  generateWhatsAppLink: (message: string) => string;
  generatePropertyWhatsAppLink: (property: BgeProperty) => string;
  generateInspectionWhatsAppLink: (booking: InspectionBooking) => string;
  updatePropertyStatus: (id: string, status: PublicationStatus) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const defaultFilters: FilterState = {
  search: '',
  category: 'All',
  district: 'All',
  minPrice: 0,
  maxPrice: 2000000000,
  bedrooms: 'All',
  sortBy: 'featured',
};

const BgeContext = createContext<BgeContextType | undefined>(undefined);

export const BgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [properties, setProperties] = useState<BgeProperty[]>(bgeProperties);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const stored = localStorage.getItem('bge_theme');
      return (stored === 'light' || stored === 'dark') ? stored : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('bge_theme', nextTheme);
    } catch (e) {
      console.warn('Failed to save theme', e);
    }
  };

  const [inspectionBookings, setInspectionBookings] = useState<InspectionBooking[]>(() => {
    try {
      const stored = localStorage.getItem('bge_inspections');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Keep hash sync for browser back/forward and direct routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('property/')) {
        const id = hash.replace('property/', '');
        setSelectedPropertyId(id);
        setActivePage('property-detail');
      } else if (['properties', 'about', 'inspection', 'contact', 'privacy', 'admin'].includes(hash)) {
        setActivePage(hash as PageRoute);
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute, propertyId?: string) => {
    setActivePage(page);
    if (page === 'property-detail' && propertyId) {
      setSelectedPropertyId(propertyId);
      window.location.hash = `property/${propertyId}`;
    } else if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProperty =
    properties.find((p) => p.id === selectedPropertyId || p.slug === selectedPropertyId) ||
    properties.find((p) => p.publicationStatus === 'Published') ||
    null;

  const publishedProperties = properties.filter((p) => p.publicationStatus === 'Published');

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const addInspectionBooking = (bookingData: Omit<InspectionBooking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: InspectionBooking = {
      ...bookingData,
      id: `insp-${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    const updated = [newBooking, ...inspectionBookings];
    setInspectionBookings(updated);
    try {
      localStorage.setItem('bge_inspections', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save inspection booking', e);
    }
    return newBooking;
  };

  const updatePropertyStatus = (id: string, status: PublicationStatus) => {
    setProperties((prev) =>
      prev.map((item) => (item.id === id ? { ...item, publicationStatus: status } : item))
    );
  };

  const BGE_PHONE = '2348112958241';

  const generateWhatsAppLink = (message: string) => {
    const encoded = encodeURIComponent(message.trim());
    return `https://wa.me/${BGE_PHONE}?text=${encoded}`;
  };

  const generatePropertyWhatsAppLink = (property: BgeProperty) => {
    const msg = `Hello Bashir Building Green Estates (B.G.E), I am interested in enquiring about:
*${property.title}*
Location: ${property.location}
Price: ${property.formattedPrice}
Reference ID: ${property.id}

Please provide more information regarding its current availability, title inspection, and private viewing schedule. Thank you.`;
    return generateWhatsAppLink(msg);
  };

  const generateInspectionWhatsAppLink = (booking: InspectionBooking) => {
    const msg = `Hello Bashir Building Green Estates (B.G.E), I have submitted a property inspection request on your website:
*Property:* ${booking.propertyTitle} (${booking.propertyLocation})
*Name:* ${booking.fullName}
*Phone:* ${booking.phoneNumber}
*Preferred Date:* ${booking.preferredDate}
*Preferred Time:* ${booking.preferredTime}
${booking.message ? `*Notes:* ${booking.message}` : ''}

Please confirm availability and coordinate the site inspection. Thank you.`;
    return generateWhatsAppLink(msg);
  };

  return (
    <BgeContext.Provider
      value={{
        activePage,
        selectedProperty,
        navigateTo,
        publishedProperties,
        allProperties: properties,
        filters,
        setFilters,
        resetFilters,
        inspectionBookings,
        addInspectionBooking,
        generateWhatsAppLink,
        generatePropertyWhatsAppLink,
        generateInspectionWhatsAppLink,
        updatePropertyStatus,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </BgeContext.Provider>
  );
};

export const useBge = () => {
  const context = useContext(BgeContext);
  if (!context) {
    throw new Error('useBge must be used within a BgeProvider');
  }
  return context;
};
