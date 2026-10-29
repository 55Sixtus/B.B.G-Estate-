import React from 'react';
import { useBge } from '../context/BgeContext';
import { ArrowLeft, ShieldCheck, Scale, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { navigateTo } = useBge();

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs">
      {/* Breadcrumb Navigation */}
      <button
        onClick={() => {
          navigateTo('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-1.5 text-xs text-[#777F79] hover:text-[#F5F5F0] transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 text-[#D0AD55] group-hover:-translate-x-0.5 transition-transform" />
        <span>Return to Home</span>
      </button>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
          <Scale className="w-4 h-4 text-[#D0AD55]" />
          <span>Legal Terms & Advisory</span>
          <span aria-hidden="true" className="text-[#777F79]">·</span>
          <span>Abuja, FCT, Nigeria</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F5F5F0] tracking-tight">
          Terms of Use & Real Estate Standards
        </h1>
        <p className="text-[#777F79] text-xs leading-relaxed max-w-2xl">
          Effective October 2026. Standard real estate engagement guidelines and legal terms governing property enquiries, inspections, and transactions with Bashir Building Green Estates (B.G.E).
        </p>
      </div>

      {/* Main Content Box */}
      <div className="space-y-8 bg-[#151B18]/70 border border-[#151B18] rounded-3xl p-6 sm:p-10 leading-relaxed text-[#777F79]">
        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D0AD55]" />
            <span>1. Scope of Real Estate Development & Marketing</span>
          </h2>
          <p>
            Bashir Building Green Estates (B.G.E) provides real estate development, property advisory, and marketing services in Abuja, Federal Capital Territory, Nigeria. All information published on this website, including property photographs, dimensions, and location highlights, is published in good faith based on direct inspection and verified vendor disclosures.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D0AD55]" />
            <span>2. Professional Agency Fee (5%)</span>
          </h2>
          <p>
            In accordance with professional real estate practice in the Federal Republic of Nigeria, a standard <strong className="text-[#F5F5F0]">5% professional agency/consultancy fee</strong> is payable by the buyer or client upon the successful conclusion and financial closure of any property sale or land acquisition brokered through Bashir Building Green Estates, unless a different agreement is formally executed in writing prior to closing.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D0AD55]" />
            <span>3. Physical Site Inspections & Protocols</span>
          </h2>
          <p>
            We mandate that all prospective buyers or their designated legal representatives conduct a physical site inspection prior to financial commitment. Physical inspections across Abuja (including Katampe, Gwarimpa, Galadimawa, Kaura, Dawaki, and Maitama) are scheduled with B.G.E representatives to ensure boundary markers, access roads, and neighbourhood infrastructure correspond to descriptions.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#D0AD55]" />
            <span>4. Pricing & Title Documentation Search</span>
          </h2>
          <p>
            All prices are quoted in Nigerian Naira (₦). While B.G.E makes every effort to state verified title statuses (such as Certificate of Occupancy, Right of Occupancy, or FCDA Building Approvals), purchasers are advised to conduct formal title registry searches at the Abuja Geographic Information Systems (AGIS) or relevant land registry as part of their standard closing due diligence.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#D0AD55]" />
            <span>5. Governing Law & Jurisdiction</span>
          </h2>
          <p>
            These terms and any property advisory engagement entered into with Bashir Building Green Estates shall be governed by and construed in accordance with the Laws of the Federal Republic of Nigeria. Any disputes arising in connection with these terms shall fall under the competent courts of the Federal Capital Territory, Abuja.
          </p>
        </section>
      </div>
    </div>
  );
};
