import React, { useState, useMemo } from 'react';
import { useBge } from '../context/BgeContext';
import { BgePropertyCard } from '../components/BgePropertyCard';
import { Search, Filter, RotateCcw, ArrowUpDown, X, Building, MapPin } from 'lucide-react';
import { PropertyCategory } from '../types/bge';
import { CatalogGuideSection } from '../components/CatalogGuideSection';

export const PropertiesPage: React.FC = () => {
  const { publishedProperties, filters, setFilters, resetFilters } = useBge();

  const [visibleCount, setVisibleCount] = useState(6);

  // Filtered properties computation
  const filteredList = useMemo(() => {
    return publishedProperties.filter((item) => {
      // Search text
      if (filters.search.trim()) {
        const q = filters.search.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesLoc = item.location.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesDist = item.district.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLoc && !matchesDesc && !matchesDist) {
          return false;
        }
      }

      // Category
      if (filters.category !== 'All' && item.category !== filters.category) {
        return false;
      }

      // District
      if (filters.district !== 'All' && item.district !== filters.district) {
        return false;
      }

      // Price range
      if (item.price < filters.minPrice || item.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms (for residential)
      if (filters.bedrooms !== 'All') {
        const requiredBeds = parseInt(filters.bedrooms, 10);
        if (!item.bedrooms || item.bedrooms < requiredBeds) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'newest') return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [publishedProperties, filters]);

  const hasActiveFilters =
    filters.search !== '' ||
    filters.category !== 'All' ||
    filters.district !== 'All' ||
    filters.minPrice > 0 ||
    filters.maxPrice < 2000000000 ||
    filters.bedrooms !== 'All';

  const visibleProperties = filteredList.slice(0, visibleCount);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
          <span>Verified Inventory</span>
          <span aria-hidden="true" className="text-[#777F79]">·</span>
          <span>Abuja, FCT</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F5F5F0] tracking-tight">
          All Available Properties
        </h1>
        <p className="text-sm text-[#777F79] max-w-2xl leading-relaxed">
          Browse verified residential duplexes, prime development land plots, and commercial spaces across the Federal Capital Territory, Abuja.
        </p>
      </div>

      {/* Filter Control Console */}
      <div className="bg-[#151B18]/70 border border-[#151B18] rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Keyword Search */}
          <div className="space-y-1 sm:col-span-2 lg:col-span-1">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#D0AD55]" />
              <span>Keyword Search</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 5-bedroom, Katampe, C of O..."
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F0] placeholder:text-[#777F79] focus:outline-none focus:border-[#123D2B]"
            />
          </div>

          {/* District / Location */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D0AD55]" />
              <span>District</span>
            </label>
            <select
              value={filters.district}
              onChange={(e) => setFilters((prev) => ({ ...prev, district: e.target.value }))}
              className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3 py-2 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
            >
              <option value="All">All Districts</option>
              <option value="Gwarimpa">Gwarimpa</option>
              <option value="Galadimawa">Galadimawa</option>
              <option value="Katampe">Katampe</option>
              <option value="Gaduwa">Gaduwa</option>
              <option value="Maitama">Maitama</option>
              <option value="Kaura">Kaura</option>
              <option value="Dawaki">Dawaki</option>
            </select>
          </div>

          {/* Property Category */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-[#D0AD55]" />
              <span>Category</span>
            </label>
            <select
              value={filters.category}
              onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value as any }))}
              className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3 py-2 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
            >
              <option value="All">All Categories</option>
              <option value="Residential">Houses & Duplexes</option>
              <option value="Land">Land & Plots</option>
              <option value="Commercial">Commercial Properties</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79]">
              Price Range (₦)
            </label>
            <select
              value={
                filters.maxPrice === 100000000
                  ? 'under-100m'
                  : filters.minPrice === 100000000 && filters.maxPrice === 500000000
                  ? '100m-500m'
                  : filters.minPrice === 500000000
                  ? 'above-500m'
                  : 'all'
              }
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'under-100m') {
                  setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 100000000 }));
                } else if (val === '100m-500m') {
                  setFilters((prev) => ({ ...prev, minPrice: 100000000, maxPrice: 500000000 }));
                } else if (val === 'above-500m') {
                  setFilters((prev) => ({ ...prev, minPrice: 500000000, maxPrice: 2000000000 }));
                } else {
                  setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 2000000000 }));
                }
              }}
              className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3 py-2 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
            >
              <option value="all">Any Price</option>
              <option value="under-100m">Under ₦100,000,000</option>
              <option value="100m-500m">₦100M – ₦500,000,000</option>
              <option value="above-500m">Above ₦500,000,000 (Prime/Maitama)</option>
            </select>
          </div>
        </div>

        {/* Secondary Filter Row: Bedrooms, Sort, Reset */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#151B18] text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Bedrooms (Active when category is Residential or All) */}
            <div className="flex items-center gap-2">
              <span className="text-[#777F79]">Bedrooms:</span>
              <div className="flex items-center gap-1 bg-[#080D0B] p-1 rounded-lg border border-[#151B18]">
                {['All', '5', '6'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setFilters((prev) => ({ ...prev, bedrooms: b }))}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      filters.bedrooms === b
                        ? 'bg-[#123D2B] text-[#F5F5F0] font-bold'
                        : 'text-[#777F79] hover:text-[#F5F5F0]'
                    }`}
                  >
                    {b === 'All' ? 'Any' : `${b}+ Beds`}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort by */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#777F79]" />
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                className="bg-[#080D0B] border border-[#151B18] rounded-lg px-2.5 py-1 text-xs text-[#F5F5F0] focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Listed</option>
              </select>
            </div>
          </div>

          {/* Active Filter Counter & Reset */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D0AD55]">
              {filteredList.length} {filteredList.length === 1 ? 'Property' : 'Properties'} Found
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080D0B] hover:bg-[#123D2B] text-xs text-[#777F79] hover:text-[#F5F5F0] border border-[#151B18] transition-colors"
              >
                <RotateCcw className="w-3 h-3 text-[#D0AD55]" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Pill Indicators */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
            <span className="text-[#777F79]">Active Filters:</span>
            {filters.search && (
              <span className="inline-flex items-center gap-1 bg-[#080D0B] px-2 py-0.5 rounded border border-[#151B18] text-[#F5F5F0]">
                Search: "{filters.search}"
                <X className="w-3 h-3 cursor-pointer text-[#777F79] hover:text-[#F5F5F0]" onClick={() => setFilters(p => ({ ...p, search: '' }))} />
              </span>
            )}
            {filters.category !== 'All' && (
              <span className="inline-flex items-center gap-1 bg-[#080D0B] px-2 py-0.5 rounded border border-[#151B18] text-[#F5F5F0]">
                Category: {filters.category}
                <X className="w-3 h-3 cursor-pointer text-[#777F79] hover:text-[#F5F5F0]" onClick={() => setFilters(p => ({ ...p, category: 'All' }))} />
              </span>
            )}
            {filters.district !== 'All' && (
              <span className="inline-flex items-center gap-1 bg-[#080D0B] px-2 py-0.5 rounded border border-[#151B18] text-[#F5F5F0]">
                District: {filters.district}
                <X className="w-3 h-3 cursor-pointer text-[#777F79] hover:text-[#F5F5F0]" onClick={() => setFilters(p => ({ ...p, district: 'All' }))} />
              </span>
            )}
          </div>
        )}
      </div>

      {/* Property Results Grid */}
      {filteredList.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProperties.map((property) => (
              <BgePropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleProperties.length < filteredList.length && (
            <div className="text-center pt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] bg-[#151B18] hover:bg-[#123D2B] border border-[#151B18] rounded-lg transition-colors"
              >
                Load More Properties ({filteredList.length - visibleProperties.length} remaining)
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-[#151B18]/50 border border-[#151B18] rounded-2xl p-10 max-w-lg mx-auto space-y-4">
          <p className="font-heading font-semibold text-lg text-[#F5F5F0]">
            No Properties Match Your Criteria
          </p>
          <p className="text-xs text-[#777F79] leading-relaxed">
            There are currently no active published properties matching the selected district, category, or price range.
            {(filters.district === 'Katampe' || filters.district === 'Dawaki') && (
              <span className="block mt-2 text-[#D0AD55]">
                Note: {filters.district} opportunities are currently in our internal verification queue undergoing price and documentation review prior to release.
              </span>
            )}
          </p>
          <div className="pt-2">
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

      {/* Official WhatsApp Catalog & Flyer Information Guides */}
      <CatalogGuideSection />
    </div>
  );
};
