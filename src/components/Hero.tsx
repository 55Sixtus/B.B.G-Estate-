import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Search, MapPin, Building2, DollarSign, BedDouble, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { brandSettings, searchFilter, setSearchFilter, openTourModal } = useBrand();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const section = document.getElementById('residences');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLocationPreset = (loc: string) => {
    setSearchFilter((prev) => ({ ...prev, location: loc }));
    const section = document.getElementById('residences');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/hero_architectural_villa_1793278320229.jpg"
          alt="Architectural luxury residence at dusk"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40" />
        <div className="absolute inset-0 bg-neutral-950/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Quiet Category Lead-in (Zero-pill discipline, unboxed text) */}
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-300/90">
            <span>{brandSettings.tagline}</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>Private Advisory</span>
          </div>

          {/* Balanced Display Headline */}
          <h1
            className="font-serif text-neutral-100 font-normal tracking-tight leading-[1.12]"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', textWrap: 'balance' }}
          >
            {brandSettings.heroHeadline}
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed">
            {brandSettings.heroSubheadline}
          </p>

          {/* Quick Preset Locations */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-neutral-400">
            <span className="text-neutral-500">Prime Locations:</span>
            {brandSettings.primaryLocations.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => handleLocationPreset(loc)}
                className="hover:text-amber-200 transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-amber-300"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* High-Performance Real Estate Search Console */}
        <div className="mt-12 w-full max-w-5xl bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-xl p-4 sm:p-5 shadow-2xl">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            {/* Field 1: Location */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Location</span>
              </label>
              <input
                type="text"
                placeholder="City or neighborhood..."
                value={searchFilter.location}
                onChange={(e) => setSearchFilter((prev) => ({ ...prev, location: e.target.value }))}
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/70 transition-colors"
              />
            </div>

            {/* Field 2: Property Type */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Residence Type</span>
              </label>
              <select
                value={searchFilter.type}
                onChange={(e) => setSearchFilter((prev) => ({ ...prev, type: e.target.value }))}
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-amber-400/70 transition-colors"
              >
                <option value="All">All Architecture</option>
                <option value="Villa">Luxury Villa</option>
                <option value="Penthouse">Sky Penthouse</option>
                <option value="Modern Estate">Modernist Estate</option>
                <option value="Coastal">Coastal Sanctuary</option>
              </select>
            </div>

            {/* Field 3: Price Tier */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                <span>Price Bracket</span>
              </label>
              <select
                value={
                  searchFilter.maxPrice === 20000000
                    ? 'under-20'
                    : searchFilter.minPrice === 20000000 && searchFilter.maxPrice === 30000000
                    ? '20-30'
                    : searchFilter.minPrice === 30000000
                    ? 'above-30'
                    : 'all'
                }
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 'under-20') {
                    setSearchFilter((prev) => ({ ...prev, minPrice: 0, maxPrice: 20000000 }));
                  } else if (val === '20-30') {
                    setSearchFilter((prev) => ({ ...prev, minPrice: 20000000, maxPrice: 30000000 }));
                  } else if (val === 'above-30') {
                    setSearchFilter((prev) => ({ ...prev, minPrice: 30000000, maxPrice: 100000000 }));
                  } else {
                    setSearchFilter((prev) => ({ ...prev, minPrice: 0, maxPrice: 100000000 }));
                  }
                }}
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-amber-400/70 transition-colors"
              >
                <option value="all">Any Price</option>
                <option value="under-20">Under $20 Million</option>
                <option value="20-30">$20M - $30 Million</option>
                <option value="above-30">$30 Million +</option>
              </select>
            </div>

            {/* Field 4: Bedrooms */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                <span>Bedrooms</span>
              </label>
              <select
                value={searchFilter.bedrooms}
                onChange={(e) => setSearchFilter((prev) => ({ ...prev, bedrooms: e.target.value }))}
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-amber-400/70 transition-colors"
              >
                <option value="Any">Any Suite Count</option>
                <option value="4+">4+ Bedroom Suites</option>
                <option value="5+">5+ Bedroom Suites</option>
                <option value="6+">6+ Bedroom Suites</option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="sm:col-span-2 lg:col-span-1 pt-1 sm:pt-4">
              <button
                type="submit"
                className="w-full h-[42px] flex items-center justify-center gap-2 px-5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Proof Strip (Adjacency Rule & Quantitative Rigor) */}
      <div className="relative z-10 w-full border-t border-neutral-900 bg-neutral-950/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <p className="font-mono text-xl sm:text-2xl font-medium tracking-tight text-neutral-100 tabular-nums">
              {brandSettings.volumeClosed}
            </p>
            <p className="text-xs text-neutral-400">Total Transactions Closed</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-xl sm:text-2xl font-medium tracking-tight text-neutral-100 tabular-nums">
              {brandSettings.listToSaleRatio}
            </p>
            <p className="text-xs text-neutral-400">List-to-Sale Price Ratio</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-xl sm:text-2xl font-medium tracking-tight text-neutral-100 tabular-nums">
              {brandSettings.daysOnMarket}
            </p>
            <p className="text-xs text-neutral-400">Median Days to Contract</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-xl sm:text-2xl font-medium tracking-tight text-neutral-100 tabular-nums">
              {brandSettings.exclusiveListingsCount}
            </p>
            <p className="text-xs text-neutral-400">Curated Active Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
};
