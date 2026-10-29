import React, { useState, useMemo } from 'react';
import { useBrand } from '../context/BrandContext';
import { PropertyCard } from './PropertyCard';
import { Property } from '../types';
import { SlidersHorizontal, ArrowUpDown, RotateCcw, Heart } from 'lucide-react';

export const PropertyGrid: React.FC = () => {
  const {
    properties,
    setSelectedProperty,
    savedPropertyIds,
    searchFilter,
    setSearchFilter,
  } = useBrand();

  const [activeTab, setActiveTab] = useState<'All' | 'Villa' | 'Penthouse' | 'Modern Estate' | 'Coastal'>('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-desc' | 'price-asc' | 'sqft-desc'>('featured');

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      // Category tab filter
      if (activeTab !== 'All' && item.type !== activeTab) {
        return false;
      }
      // Search console type filter
      if (searchFilter.type !== 'All' && item.type !== searchFilter.type) {
        return false;
      }
      // Saved filter
      if (showSavedOnly && !savedPropertyIds.includes(item.id)) {
        return false;
      }
      // Location query filter
      if (searchFilter.location.trim()) {
        const query = searchFilter.location.toLowerCase();
        const matchesCity = item.city.toLowerCase().includes(query);
        const matchesNeighborhood = item.neighborhood.toLowerCase().includes(query);
        const matchesAddress = item.address.toLowerCase().includes(query);
        const matchesTitle = item.title.toLowerCase().includes(query);
        if (!matchesCity && !matchesNeighborhood && !matchesAddress && !matchesTitle) {
          return false;
        }
      }
      // Price range
      if (item.price < searchFilter.minPrice || item.price > searchFilter.maxPrice) {
        return false;
      }
      // Bedrooms filter
      if (searchFilter.bedrooms !== 'Any') {
        const minBeds = parseInt(searchFilter.bedrooms, 10);
        if (item.bedrooms < minBeds) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'sqft-desc') return b.sqft - a.sqft;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [properties, activeTab, searchFilter, showSavedOnly, savedPropertyIds, sortBy]);

  const handleResetFilters = () => {
    setActiveTab('All');
    setShowSavedOnly(false);
    setSearchFilter({
      location: '',
      type: 'All',
      minPrice: 0,
      maxPrice: 60000000,
      bedrooms: 'Any',
    });
    setSortBy('featured');
  };

  const isFiltered =
    activeTab !== 'All' ||
    showSavedOnly ||
    searchFilter.location !== '' ||
    searchFilter.type !== 'All' ||
    searchFilter.minPrice > 0 ||
    searchFilter.maxPrice < 60000000 ||
    searchFilter.bedrooms !== 'Any';

  return (
    <section id="residences" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-400">
            <span>Curated Portfolio</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Architectural Significance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 tracking-tight">
            Distinguished Residences & Estates
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            Each property is vetted for architectural integrity, privacy engineering, and sovereign craftsmanship.
          </p>
        </div>

        {/* View Controls & Sort */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Saved toggle */}
          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors ${
              showSavedOnly
                ? 'bg-amber-400 text-neutral-950 border-amber-400'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-neutral-950' : 'text-amber-400'}`} />
            <span>Shortlist ({savedPropertyIds.length})</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-neutral-200 focus:outline-none cursor-pointer"
            >
              <option value="featured" className="bg-neutral-900 text-neutral-200">Featured Curations</option>
              <option value="price-desc" className="bg-neutral-900 text-neutral-200">Price: High to Low</option>
              <option value="price-asc" className="bg-neutral-900 text-neutral-200">Price: Low to High</option>
              <option value="sqft-desc" className="bg-neutral-900 text-neutral-200">Largest Scale (Sq Ft)</option>
            </select>
          </div>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              title="Reset all search filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Interactive Category Filter Tabs (Segmented Control per Section 1.A) */}
      <div className="flex items-center gap-1 p-1 bg-neutral-900/80 border border-neutral-800/80 rounded-xl mb-10 overflow-x-auto">
        {(['All', 'Villa', 'Penthouse', 'Modern Estate', 'Coastal'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === tab
                ? 'bg-neutral-800 text-neutral-100 shadow-sm border border-neutral-700/60'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
            }`}
          >
            {tab === 'All' ? 'All Residences' : tab}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={setSelectedProperty}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-10 max-w-lg mx-auto">
          <p className="font-serif text-xl text-neutral-200 mb-2">No Matching Curations Found</p>
          <p className="text-xs text-neutral-400 mb-6">
            There are currently no active properties meeting all the specified criteria. Try broadening your location, price, or suite criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
          >
            View All Properties
          </button>
        </div>
      )}
    </section>
  );
};
