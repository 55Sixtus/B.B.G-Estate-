import React, { useState } from 'react';
import { marketInsights } from '../data/properties';
import { MarketInsight } from '../types';
import { TrendingUp, BarChart3, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const MarketInsights: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<MarketInsight>(marketInsights[0]);

  return (
    <section id="market" className="py-20 bg-neutral-900/30 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-400">
              <span>Quarterly Intelligence</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Ultra-Prime Index</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 tracking-tight">
              Micro-Market Valuation Dynamics
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              Confidential deed registry and off-market closing analytics for Southern California’s premier residential enclaves.
            </p>
          </div>
        </div>

        {/* Intelligence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketInsights.map((item) => {
            const isSelected = selectedInsight.neighborhood === item.neighborhood;
            return (
              <div
                key={item.neighborhood}
                onClick={() => setSelectedInsight(item)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
                  isSelected
                    ? 'bg-neutral-900 border-amber-400/80 shadow-xl'
                    : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs text-neutral-400">
                    <span>{item.region}</span>
                    <span className="text-emerald-400 font-mono font-medium">{item.yoyAppreciation}</span>
                  </div>
                  <h3 className="font-serif text-lg text-neutral-100">{item.neighborhood}</h3>
                </div>

                <div className="space-y-2 py-3 border-y border-neutral-800/80 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Benchmark Rate</span>
                    <span className="font-mono text-neutral-200 font-semibold tabular-nums">
                      ${item.avgPriceSqFt.toLocaleString()} / sq ft
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Median Enclave Sale</span>
                    <span className="font-mono text-neutral-200 font-semibold tabular-nums">
                      {item.medianPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Liquidity Horizon</span>
                    <span className="font-mono text-neutral-200 tabular-nums">
                      {item.avgDaysOnMarket} Days
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400 text-[11px]">
                    Condition: <strong className="text-amber-300 font-medium">{item.marketPace}</strong>
                  </span>
                  <span className="text-amber-400/90 text-[11px] flex items-center gap-0.5 hover:underline">
                    View Enclave <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Analysis Box for Selected Enclave */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400">
              <BarChart3 className="w-4 h-4" />
              <span>Advisory Commentary: {selectedInsight.neighborhood}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Current inventory in {selectedInsight.neighborhood} remains tightly constrained by multi-generational ownership and strict municipal building codes. Over 65% of Q3 transactions occurred off-market via private representation.
            </p>
          </div>
          <a
            href="#advisory"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Consult Enclave Director
          </a>
        </div>
      </div>
    </section>
  );
};
