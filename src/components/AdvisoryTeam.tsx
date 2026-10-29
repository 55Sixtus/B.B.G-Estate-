import React, { useState } from 'react';
import { teamMembers } from '../data/properties';
import { useBrand } from '../context/BrandContext';
import { Mail, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AdvisoryTeam: React.FC = () => {
  const { brandSettings, openTourModal } = useBrand();
  const [selectedAgentEmail, setSelectedAgentEmail] = useState<string | null>(null);

  return (
    <section id="advisory" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-400">
            <span>Private Client Advisory</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Partners & Principals</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 tracking-tight">
            Uncompromising Discretion & Representation
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            Our managing partners represent sovereign family offices, architectural collectors, and institutional custodians with bespoke confidentiality.
          </p>
        </div>
      </div>

      {/* Advisory Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((agent) => (
          <div
            key={agent.id}
            className="group bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
              <img
                src={agent.image}
                alt={agent.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[11px] font-mono text-amber-300">
                  {agent.license}
                </span>
                <h3 className="font-serif text-xl text-neutral-100">{agent.name}</h3>
                <p className="text-xs text-neutral-300">{agent.title}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">2025 Advisory</span>
                  <span className="font-mono text-neutral-200 font-semibold">{agent.volume}</span>
                </div>
                <div className="text-xs text-neutral-400 pt-1">
                  <span className="text-neutral-500 block mb-0.5">Focus:</span>
                  <span>{agent.specialization}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => openTourModal()}
                  className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Initiate Consultation</span>
                </button>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono px-1">
                  <span>{agent.phone}</span>
                  <span className="text-neutral-400">{agent.email}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Press & Architectural Accreditation Bar */}
      <div className="mt-16 pt-10 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
        <div className="space-y-1">
          <p className="font-serif text-lg tracking-wider text-neutral-400">ARCHITECTURAL DIGEST</p>
          <p className="text-[11px] text-neutral-600">Featured Portfolio Firm 2024</p>
        </div>
        <div className="space-y-1">
          <p className="font-serif text-lg tracking-wider text-neutral-400">THE WALL STREET JOURNAL</p>
          <p className="text-[11px] text-neutral-600">Top 10 Ultra-Luxury Brokerage</p>
        </div>
        <div className="space-y-1">
          <p className="font-serif text-lg tracking-wider text-neutral-400">ROBB REPORT</p>
          <p className="text-[11px] text-neutral-600">Estate of the Year Honoree</p>
        </div>
        <div className="space-y-1">
          <p className="font-serif text-lg tracking-wider text-neutral-400">FINANCIAL TIMES</p>
          <p className="text-[11px] text-neutral-600">Private Wealth Housing Index</p>
        </div>
      </div>
    </section>
  );
};
