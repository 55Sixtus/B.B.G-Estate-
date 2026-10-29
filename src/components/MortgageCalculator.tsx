import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { DollarSign, Percent, Landmark, CheckCircle2 } from 'lucide-react';

export const MortgageCalculator: React.FC = () => {
  const { brandSettings } = useBrand();

  const [homePrice, setHomePrice] = useState(18500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [inquired, setInquired] = useState(false);

  // Calculations
  const downPaymentAmount = Math.round((homePrice * downPaymentPercent) / 100);
  const loanAmount = homePrice - downPaymentAmount;

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPrincipalInterest =
    monthlyInterestRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
          (monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const monthlyPropertyTax = Math.round((homePrice * 0.0115) / 12);
  const monthlyInsurance = Math.round((homePrice * 0.0035) / 12);
  const monthlyHOA = 1850;

  const totalMonthly = Math.round(
    monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA
  );

  const piPercent = Math.round((monthlyPrincipalInterest / totalMonthly) * 100) || 70;
  const taxPercent = Math.round((monthlyPropertyTax / totalMonthly) * 100) || 20;
  const insPercent = Math.round((monthlyInsurance / totalMonthly) * 100) || 7;
  const hoaPercent = 100 - piPercent - taxPercent - insPercent;

  return (
    <section id="calculator" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-400">
            <span>Private Wealth Financing</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Capital Optimization</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 tracking-tight">
            Investment & Residential Financing
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            Simulate liquidity requirements, jumbo mortgage debt structuring, and monthly carry costs for trophy estates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sliders Console */}
        <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
          {/* Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-400 uppercase tracking-wider font-medium">Acquisition Target</span>
              <span className="font-mono text-base font-semibold text-neutral-100 tabular-nums">
                ${homePrice.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="5000000"
              max="50000000"
              step="500000"
              value={homePrice}
              onChange={(e) => setHomePrice(parseInt(e.target.value, 10))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-600 font-mono">
              <span>$5,000,000</span>
              <span>$50,000,000</span>
            </div>
          </div>

          {/* Down Payment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-400 uppercase tracking-wider font-medium">
                Equity Down Payment ({downPaymentPercent}%)
              </span>
              <span className="font-mono text-base font-semibold text-neutral-100 tabular-nums">
                ${downPaymentAmount.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(parseInt(e.target.value, 10))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          {/* Interest Rate & Term */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 uppercase tracking-wider font-medium">Interest Rate</span>
                <span className="font-mono text-base font-semibold text-neutral-100 tabular-nums">
                  {interestRate.toFixed(2)}%
                </span>
              </div>
              <input
                type="range"
                min="4.5"
                max="9.0"
                step="0.125"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium block">
                Financing Term
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLoanTermYears(15)}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    loanTermYears === 15
                      ? 'bg-amber-400 text-neutral-950 border-amber-400'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  15 Years
                </button>
                <button
                  type="button"
                  onClick={() => setLoanTermYears(30)}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    loanTermYears === 30
                      ? 'bg-amber-400 text-neutral-950 border-amber-400'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  30 Years
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Estimated Monthly Carry
            </span>
            <p className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
              ${totalMonthly.toLocaleString()}{' '}
              <span className="text-xs font-normal text-neutral-400">/ month</span>
            </p>
          </div>

          {/* Allocation Bar */}
          <div className="space-y-2">
            <div className="h-2.5 w-full bg-neutral-900 rounded-full overflow-hidden flex">
              <div style={{ width: `${piPercent}%` }} className="bg-amber-400" title="P&I" />
              <div style={{ width: `${taxPercent}%` }} className="bg-emerald-400" title="Taxes" />
              <div style={{ width: `${insPercent}%` }} className="bg-sky-400" title="Insurance" />
              <div style={{ width: `${hoaPercent}%` }} className="bg-purple-400" title="HOA" />
            </div>
          </div>

          {/* Monthly Breakdown items (Clean unboxed tabular-nums) */}
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-neutral-900">
              <span className="text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                Principal & Interest
              </span>
              <span className="font-mono font-medium text-neutral-200 tabular-nums">
                ${Math.round(monthlyPrincipalInterest).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-neutral-900">
              <span className="text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Property Taxes (Est. 1.15%)
              </span>
              <span className="font-mono font-medium text-neutral-200 tabular-nums">
                ${monthlyPropertyTax.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-neutral-900">
              <span className="text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
                Homeowner & Hazard Insurance
              </span>
              <span className="font-mono font-medium text-neutral-200 tabular-nums">
                ${monthlyInsurance.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-neutral-900">
              <span className="text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                HOA & Estate Amenities Reserve
              </span>
              <span className="font-mono font-medium text-neutral-200 tabular-nums">
                ${monthlyHOA.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Private Wealth Lender Consultation */}
          {!inquired ? (
            <button
              onClick={() => setInquired(true)}
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Landmark className="w-4 h-4" />
              <span>Connect with Private Wealth Partner</span>
            </button>
          ) : (
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Private wealth banking introduction initiated.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
