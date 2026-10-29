import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export const ValuationTool: React.FC = () => {
  const { brandSettings } = useBrand();

  const [address, setAddress] = useState('780 Stone Canyon Road, Bel Air, CA');
  const [propertyType, setPropertyType] = useState('Villa');
  const [condition, setCondition] = useState<'museum' | 'renovated' | 'original'>('museum');
  const [sqft, setSqft] = useState(8500);
  const [viewTier, setViewTier] = useState<'panoramic' | 'hills' | 'courtyard'>('panoramic');

  const [showResult, setShowResult] = useState(true);
  const [cmaRequested, setCmaRequested] = useState(false);

  // Dynamic Valuation Algorithm
  const calculateValuation = () => {
    let baseRate = 2200; // Base $/sqft for prime LA luxury
    if (propertyType === 'Penthouse') baseRate = 2700;
    if (propertyType === 'Coastal') baseRate = 3200;
    if (propertyType === 'Modern Estate') baseRate = 2400;

    let conditionMultiplier = 1.0;
    if (condition === 'museum') conditionMultiplier = 1.25;
    if (condition === 'renovated') conditionMultiplier = 1.1;
    if (condition === 'original') conditionMultiplier = 0.9;

    let viewMultiplier = 1.0;
    if (viewTier === 'panoramic') viewMultiplier = 1.2;
    if (viewTier === 'hills') viewMultiplier = 1.08;
    if (viewTier === 'courtyard') viewMultiplier = 0.95;

    const ratePerSqFt = Math.round(baseRate * conditionMultiplier * viewMultiplier);
    const midVal = ratePerSqFt * sqft;
    const lowVal = Math.round(midVal * 0.94);
    const highVal = Math.round(midVal * 1.06);

    return {
      ratePerSqFt,
      midVal,
      lowVal,
      highVal,
    };
  };

  const val = calculateValuation();

  const handleRequestCma = (e: React.FormEvent) => {
    e.preventDefault();
    setCmaRequested(true);
  };

  return (
    <section id="valuation" className="py-20 bg-neutral-900/40 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Interactive Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-400">
                <span>Advisory Valuation</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>Market Intelligence</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 tracking-tight">
                Evaluate Your Sovereign Asset Value
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Leveraging real-time high-net-worth transactional records, private off-market deeds, and architectural pedigree indexing across prime enclaves.
              </p>
            </div>

            {/* Interactive Inputs */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Property Address or Enclave
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="e.g. 1000 Meadow Lane, Montecito"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Residence Archetype
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Villa">Architectural Villa</option>
                    <option value="Modern Estate">Modernist Hillside Estate</option>
                    <option value="Penthouse">Skyline Penthouse</option>
                    <option value="Coastal">Coastal Waterfront</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Condition & Pedigree
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as any)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="museum">Architectural Masterpiece / Pristine</option>
                    <option value="renovated">Contemporary Luxury Renovation</option>
                    <option value="original">Prime Development Opportunity</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex justify-between">
                    <span>Interior Scale</span>
                    <span className="font-mono text-amber-300">{sqft.toLocaleString()} Sq Ft</span>
                  </label>
                  <input
                    type="range"
                    min="3000"
                    max="22000"
                    step="250"
                    value={sqft}
                    onChange={(e) => setSqft(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Topography & Horizon
                  </label>
                  <select
                    value={viewTier}
                    onChange={(e) => setViewTier(e.target.value as any)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="panoramic">Jetliner Ocean & City Horizons</option>
                    <option value="hills">Canyon & Mountain Promontory</option>
                    <option value="courtyard">Private Botanical Courtyard</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Valuation Bracket Card */}
          <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                Indicative Valuation Range
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <p className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  ${(val.lowVal / 1000000).toFixed(1)}M – ${(val.highVal / 1000000).toFixed(1)}M
                </p>
                <span className="text-xs text-neutral-400 font-mono">
                  (Estimated midpoint: ${(val.midVal / 1000000).toFixed(2)}M)
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-800/80">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Benchmark Rate</p>
                <p className="font-mono text-lg font-semibold text-neutral-200 tabular-nums">
                  ${val.ratePerSqFt.toLocaleString()} <span className="text-xs text-neutral-400 font-normal">/ sq ft</span>
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Liquidity Timeline</p>
                <p className="font-mono text-lg font-semibold text-neutral-200 tabular-nums">
                  21–45 Days
                </p>
              </div>
            </div>

            {/* Confidential CMA Request Form */}
            {!cmaRequested ? (
              <form onSubmit={handleRequestCma} className="space-y-4 pt-1">
                <div className="space-y-1">
                  <p className="text-xs text-neutral-300 font-medium">
                    Order Comprehensive Certified Market Valuation
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Includes confidential comparable transactions, buyer pool profiling, and off-market placement strategy.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your confidential email..."
                    className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
                  >
                    <span>Request Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict non-disclosure confidentiality guaranteed by {brandSettings.brandName}.</span>
                </p>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-emerald-200">Advisory Request Received</p>
                  <p className="text-emerald-400/90 text-[11px]">
                    Our managing partner will compile a bespoke Comparative Market Analysis for {address} and contact you within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
