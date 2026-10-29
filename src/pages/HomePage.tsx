import React, { useState } from 'react';
import { useBge } from '../context/BgeContext';
import { BgePropertyCard } from '../components/BgePropertyCard';
import { bgeLocations } from '../data/bgeProperties';
import { CatalogGuideSection } from '../components/CatalogGuideSection';
import {
  Search,
  MapPin,
  Building,
  DollarSign,
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle,
  Home,
  Layers,
  Compass,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { publishedProperties, navigateTo, setFilters, generateWhatsAppLink } = useBge();

  const [searchLocation, setSearchLocation] = useState('All');
  const [searchCategory, setSearchCategory] = useState<'All' | 'Residential' | 'Land' | 'Commercial'>('All');
  const [searchPriceRange, setSearchPriceRange] = useState('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let min = 0;
    let max = 2000000000;

    if (searchPriceRange === 'under-100m') {
      max = 100000000;
    } else if (searchPriceRange === '100m-500m') {
      min = 100000000;
      max = 500000000;
    } else if (searchPriceRange === 'above-500m') {
      min = 500000000;
    }

    setFilters((prev) => ({
      ...prev,
      district: searchLocation,
      category: searchCategory,
      minPrice: min,
      maxPrice: max,
    }));
    navigateTo('properties');
  };

  const handleCategoryClick = (category: 'Residential' | 'Land' | 'Commercial') => {
    setFilters((prev) => ({ ...prev, category, district: 'All' }));
    navigateTo('properties');
  };

  const handleLocationClick = (districtName: string) => {
    setFilters((prev) => ({ ...prev, district: districtName, category: 'All' }));
    navigateTo('properties');
  };

  const featuredListings = publishedProperties.filter((p) => p.featured).slice(0, 4);

  const whatsAppInspectionLink = generateWhatsAppLink(
    'Hello Bashir Building Green Estates, I would like to arrange an inspection for a property in Abuja.'
  );

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#080D0B]">
        {/* Professional Transparent Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center scale-105 opacity-40 mix-blend-screen filter contrast-110 brightness-90 transition-opacity duration-1000"
          >
            <source src="/assets/aistudio/VID-20261029-WA0085_1d0fb0bc.mp4" type="video/mp4" />
          </video>
          {/* Measured Architectural Transparency Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D0B] via-[#080D0B]/85 to-[#080D0B]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080D0B] via-[#080D0B]/75 to-transparent" />
          <div className="absolute inset-0 bg-[#123D2B]/25 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
                <span>Bashir Building Green Estates</span>
                <span aria-hidden="true" className="text-[#777F79]">·</span>
                <span>Abuja, FCT, Nigeria</span>
              </div>

              <h1
                className="font-heading font-extrabold text-[#F5F5F0] tracking-tight leading-[1.12]"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', textWrap: 'balance' }}
              >
                Find Your Place in Abuja.
              </h1>

              <p className="text-base sm:text-lg text-[#F5F5F0]/90 font-light max-w-xl leading-relaxed">
                Explore residential properties, land opportunities and commercial spaces with Bashir Building Green Estates.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('properties')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] rounded-xl shadow-xl hover:border-[#D0AD55]/60 transition-all flex items-center gap-2"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4 text-[#D0AD55]" />
                </button>
                <button
                  onClick={() => navigateTo('inspection')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#151B18]/90 hover:bg-[#151B18] border border-[#151B18] rounded-xl transition-colors flex items-center gap-2 backdrop-blur-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D0AD55]" />
                  <span>Book an Inspection</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Video Feature Spotlight (5 cols) */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-3xl overflow-hidden bg-[#151B18]/70 border border-[#D0AD55]/30 backdrop-blur-xl shadow-2xl p-3 sm:p-4 space-y-3">
                {/* Video Frame */}
                <div className="relative aspect-[9/13] max-h-[420px] w-full rounded-2xl overflow-hidden bg-[#080D0B] border border-[#151B18] flex items-center justify-center">
                  <video
                    id="hero-feature-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  >
                    <source src="/assets/aistudio/VID-20261029-WA0085_1d0fb0bc.mp4" type="video/mp4" />
                  </video>

                  {/* Gradient Scrim on Video Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D0B] via-transparent to-transparent pointer-events-none" />

                  {/* Top Live Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#123D2B]">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      <span>Official Development Preview</span>
                    </span>

                    {/* Sound / Unmute Control */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const vid = document.getElementById('hero-feature-video') as HTMLVideoElement;
                        if (vid) {
                          vid.muted = !vid.muted;
                        }
                      }}
                      className="p-1.5 rounded-lg bg-[#080D0B]/80 text-[#D0AD55] hover:text-[#F5F5F0] border border-[#151B18] backdrop-blur-md text-[10px] font-semibold transition-colors flex items-center gap-1"
                      title="Toggle sound"
                    >
                      <span>Audio</span>
                    </button>
                  </div>

                  {/* Bottom Video Card Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-1 pointer-events-auto">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading font-bold text-sm text-[#F5F5F0] drop-shadow">
                        Kaura District Development
                      </span>
                      <span className="font-mono font-bold text-xs text-[#D0AD55] drop-shadow">
                        ₦60,000,000
                      </span>
                    </div>
                    <p className="text-[11px] text-[#F5F5F0]/80 line-clamp-1 drop-shadow">
                      400 SQM Plot · Approved 5-Bed Detached Duplex Design
                    </p>
                    <div className="pt-1 flex gap-2">
                      <button
                        onClick={() => navigateTo('property-detail', 'bge-kaura-plot-400sqm')}
                        className="flex-1 py-1.5 px-3 text-[11px] font-bold text-[#080D0B] bg-[#D0AD55] hover:bg-[#deb963] rounded-lg transition-colors text-center"
                      >
                        View Kaura Plot Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtext under video */}
                <div className="flex items-center justify-between text-[11px] text-[#777F79] px-1">
                  <span>Authentic drone & 3D site footage</span>
                  <span className="text-[#D0AD55] font-mono">Abuja, FCT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Search Interface */}
          <div className="mt-14 w-full max-w-5xl bg-[#151B18]/95 backdrop-blur-md border border-[#151B18] rounded-2xl p-5 shadow-2xl">
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              {/* Location */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D0AD55]" />
                  <span>District / Location</span>
                </label>
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                >
                  <option value="All">All Abuja Districts</option>
                  <option value="Gwarimpa">Gwarimpa (3rd Avenue)</option>
                  <option value="Galadimawa">Galadimawa</option>
                  <option value="Katampe">Katampe Main</option>
                  <option value="Gaduwa">Gaduwa District</option>
                  <option value="Maitama">Maitama Main</option>
                  <option value="Kaura">Kaura District</option>
                  <option value="Dawaki">Dawaki</option>
                </select>
              </div>

              {/* Property Type */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#D0AD55]" />
                  <span>Property Type</span>
                </label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value as any)}
                  className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                >
                  <option value="All">All Categories</option>
                  <option value="Residential">Houses & Duplexes</option>
                  <option value="Land">Land & Plots</option>
                  <option value="Commercial">Commercial Properties</option>
                </select>
              </div>

              {/* Price Bracket */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[#D0AD55]" />
                  <span>Budget Range</span>
                </label>
                <select
                  value={searchPriceRange}
                  onChange={(e) => setSearchPriceRange(e.target.value)}
                  className="w-full bg-[#080D0B] border border-[#151B18] rounded-lg px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                >
                  <option value="All">Any Price</option>
                  <option value="under-100m">Under ₦100,000,000</option>
                  <option value="100m-500m">₦100M – ₦500,000,000</option>
                  <option value="above-500m">Above ₦500,000,000</option>
                </select>
              </div>

              {/* Search Action Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full h-[42px] flex items-center justify-center gap-2 px-5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] rounded-lg transition-all"
                >
                  <Search className="w-4 h-4 text-[#D0AD55]" />
                  <span>Search Properties</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="relative z-10 w-full border-t border-[#151B18] bg-[#080D0B]/90 backdrop-blur-md py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#777F79]">
            <span className="flex items-center gap-2 text-[#F5F5F0]">
              <ShieldCheck className="w-4 h-4 text-[#D0AD55]" />
              <span>Direct Property Verification in Abuja</span>
            </span>
            <span className="flex items-center gap-2 text-[#F5F5F0]">
              <FileCheck className="w-4 h-4 text-[#D0AD55]" />
              <span>Transparent Title Documentation</span>
            </span>
            <span className="flex items-center gap-2 text-[#F5F5F0]">
              <Compass className="w-4 h-4 text-[#D0AD55]" />
              <span>On-Ground Physical Inspections</span>
            </span>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
            <span>Portfolio Segments</span>
            <span aria-hidden="true" className="text-[#777F79]">·</span>
            <span>Abuja Real Estate</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
            Browse by Property Category
          </h2>
          <p className="text-sm text-[#777F79] max-w-xl">
            Select an area of interest to view verified active listings, specifications, and direct inspection options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Houses and Duplexes */}
          <div
            onClick={() => handleCategoryClick('Residential')}
            className="group relative rounded-2xl overflow-hidden border border-[#151B18] bg-[#151B18]/60 p-6 flex flex-col justify-between hover:border-[#123D2B] transition-all cursor-pointer min-h-[220px]"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors">
                Houses and Duplexes
              </h3>
              <p className="text-xs text-[#777F79] leading-relaxed">
                Terrace duplexes and detached luxury family homes across established residential enclaves such as Gwarimpa and Galadimawa.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D0AD55] pt-4">
              <span>View Residential Homes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Land and Plots */}
          <div
            onClick={() => handleCategoryClick('Land')}
            className="group relative rounded-2xl overflow-hidden border border-[#151B18] bg-[#151B18]/60 p-6 flex flex-col justify-between hover:border-[#123D2B] transition-all cursor-pointer min-h-[220px]"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors">
                Land and Plots
              </h3>
              <p className="text-xs text-[#777F79] leading-relaxed">
                Surveyed residential plots and trophy parcels in Katampe Main, Gaduwa, Kaura, and central Maitama with title verification.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D0AD55] pt-4">
              <span>View Land Opportunities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Commercial Properties */}
          <div
            onClick={() => handleCategoryClick('Commercial')}
            className="group relative rounded-2xl overflow-hidden border border-[#151B18] bg-[#151B18]/60 p-6 flex flex-col justify-between hover:border-[#123D2B] transition-all cursor-pointer min-h-[220px]"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors">
                Commercial Properties
              </h3>
              <p className="text-xs text-[#777F79] leading-relaxed">
                Retail shops and commercial developments positioned along active business arteries with high pedestrian accessibility.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D0AD55] pt-4">
              <span>View Commercial Spaces</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
              <span>Curated Inventory</span>
              <span aria-hidden="true" className="text-[#777F79]">·</span>
              <span>Active Abuja Listings</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
              Featured Properties
            </h2>
            <p className="text-sm text-[#777F79] max-w-xl">
              Verified residential properties, land parcels, and commercial spaces currently available for inspection in Abuja.
            </p>
          </div>

          <button
            onClick={() => navigateTo('properties')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] bg-[#151B18] hover:bg-[#123D2B] border border-[#151B18] rounded-lg transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All ({publishedProperties.length})</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D0AD55]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((property) => (
            <BgePropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Why Choose B.G.E. (Honest & Restrained Editorial Content) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#151B18]/60 border border-[#151B18] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
                <span>Executive Leadership</span>
                <span aria-hidden="true" className="text-[#777F79]">·</span>
                <span>The B.G.E Approach</span>
              </div>

              {/* CEO Profile Bar */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#080D0B] border border-[#D0AD55]/40 shadow-lg">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D0AD55] shrink-0 bg-[#080D0B]">
                  <img
                    src="/assets/aistudio/BGE_CEO_portrait_extracted_51d35c5f.png"
                    alt="Bashir — Founder & C.E.O"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D0AD55]">
                    Founder & C.E.O
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#F5F5F0]">Bashir</h4>
                  <p className="text-[11px] text-[#777F79]">Bashir Building Green Estates, Abuja</p>
                </div>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight leading-tight">
                Authentic Property Representation in the Capital City
              </h2>
              <p className="text-xs sm:text-sm text-[#777F79] leading-relaxed">
                Bashir Building Green Estates operates with a clear mandate under the direct leadership of Bashir: provide genuine property opportunities in Abuja with thorough on-ground diligence and straightforward communication.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D0AD55] hover:underline"
                >
                  <span>Read C.E.O mandate & company profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#080D0B] border border-[#151B18] space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#123D2B] text-[#D0AD55] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                  Direct Verification
                </h4>
                <p className="text-xs text-[#777F79] leading-relaxed">
                  We verify access conditions, infrastructure reality (such as tarred vs. untarred roads), and actual property boundaries directly with owners.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#080D0B] border border-[#151B18] space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#123D2B] text-[#D0AD55] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                  Accurate Title Disclosures
                </h4>
                <p className="text-xs text-[#777F79] leading-relaxed">
                  We distinguish clearly between stated advertising claims and independently confirmed Certificates of Occupancy (C of O).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#080D0B] border border-[#151B18] space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#123D2B] text-[#D0AD55] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                  Physical Inspections
                </h4>
                <p className="text-xs text-[#777F79] leading-relaxed">
                  We facilitate coordinated on-site viewings with our team so clients can inspect building finishes, pool conditions, and surroundings firsthand.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#080D0B] border border-[#151B18] space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#123D2B] text-[#D0AD55] flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                  Transparent Agency Terms
                </h4>
                <p className="text-xs text-[#777F79] leading-relaxed">
                  A transparent 5% professional fee structure is disclosed upfront, ensuring complete clarity without hidden charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Discovery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
            <span>Abuja Geography</span>
            <span aria-hidden="true" className="text-[#777F79]">·</span>
            <span>Key Districts</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
            Explore Properties by District
          </h2>
          <p className="text-sm text-[#777F79] max-w-xl">
            Only locations represented by our current or pending inventory are featured, ensuring factual information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bgeLocations.map((loc) => {
            const count = publishedProperties.filter((p) => p.district === loc.name).length;
            return (
              <div
                key={loc.name}
                onClick={() => handleLocationClick(loc.name)}
                className="p-5 rounded-2xl bg-[#151B18]/50 border border-[#151B18] hover:border-[#123D2B] hover:bg-[#151B18] transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-heading font-bold text-base text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors">
                      {loc.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#777F79]">
                      {count > 0 ? `${count} Active` : 'In Verification'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#777F79] leading-relaxed line-clamp-2">
                    {loc.description}
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-[#D0AD55] flex items-center gap-1">
                  <span>Explore District</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Official Catalog & Guide Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CatalogGuideSection />
      </section>

      {/* Inspection CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#123D2B] to-[#080D0B] border border-[#123D2B] p-8 sm:p-14 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#F5F5F0] tracking-tight">
              Found a Property You Like?
            </h2>
            <p className="text-sm sm:text-base text-[#F5F5F0]/90 leading-relaxed font-light">
              Contact our team to enquire about availability and arrange a property inspection.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('inspection')}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080D0B] bg-[#D0AD55] hover:bg-[#deb963] rounded-lg transition-colors flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-[#080D0B]" />
              <span>Book an Inspection</span>
            </button>
            <a
              href={whatsAppInspectionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#F5F5F0]/20 rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
