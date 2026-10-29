import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrandSettings, Property } from '../types';
import { defaultBrandSettings, initialProperties } from '../data/properties';

interface BrandContextType {
  brandSettings: BrandSettings;
  updateBrandSettings: (newSettings: Partial<BrandSettings>) => void;
  resetBrandSettings: () => void;
  properties: Property[];
  savedPropertyIds: string[];
  toggleSaveProperty: (id: string) => void;
  isSaved: (id: string) => boolean;
  selectedProperty: Property | null;
  setSelectedProperty: (property: Property | null) => void;
  isTourModalOpen: boolean;
  setIsTourModalOpen: (open: boolean) => void;
  tourTargetProperty: Property | null;
  openTourModal: (property?: Property) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  searchFilter: {
    location: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: string;
  };
  setSearchFilter: React.Dispatch<React.SetStateAction<{
    location: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: string;
  }>>;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [brandSettings, setBrandSettings] = useState<BrandSettings>(() => {
    try {
      const stored = localStorage.getItem('solstice_brand_settings');
      return stored ? { ...defaultBrandSettings, ...JSON.parse(stored) } : defaultBrandSettings;
    } catch {
      return defaultBrandSettings;
    }
  });

  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('solstice_saved_properties');
      return stored ? JSON.parse(stored) : ['prop-1'];
    } catch {
      return ['prop-1'];
    }
  });

  const [properties] = useState<Property[]>(initialProperties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [tourTargetProperty, setTourTargetProperty] = useState<Property | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const [searchFilter, setSearchFilter] = useState({
    location: '',
    type: 'All',
    minPrice: 0,
    maxPrice: 60000000,
    bedrooms: 'Any',
  });

  useEffect(() => {
    try {
      localStorage.setItem('solstice_brand_settings', JSON.stringify(brandSettings));
    } catch (e) {
      console.warn('Failed to save brand settings', e);
    }
  }, [brandSettings]);

  useEffect(() => {
    try {
      localStorage.setItem('solstice_saved_properties', JSON.stringify(savedPropertyIds));
    } catch (e) {
      console.warn('Failed to save saved properties', e);
    }
  }, [savedPropertyIds]);

  const updateBrandSettings = (newSettings: Partial<BrandSettings>) => {
    setBrandSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetBrandSettings = () => {
    setBrandSettings(defaultBrandSettings);
  };

  const toggleSaveProperty = (id: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedPropertyIds.includes(id);

  const openTourModal = (property?: Property) => {
    setTourTargetProperty(property || properties[0]);
    setIsTourModalOpen(true);
  };

  return (
    <BrandContext.Provider
      value={{
        brandSettings,
        updateBrandSettings,
        resetBrandSettings,
        properties,
        savedPropertyIds,
        toggleSaveProperty,
        isSaved,
        selectedProperty,
        setSelectedProperty,
        isTourModalOpen,
        setIsTourModalOpen,
        tourTargetProperty,
        openTourModal,
        isCustomizerOpen,
        setIsCustomizerOpen,
        searchFilter,
        setSearchFilter,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
