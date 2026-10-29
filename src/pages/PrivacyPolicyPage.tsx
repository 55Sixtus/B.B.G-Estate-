import React from 'react';
import { useBge } from '../context/BgeContext';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigateTo } = useBge();

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs">
      {/* Breadcrumb */}
      <button
        onClick={() => navigateTo('home')}
        className="flex items-center gap-1.5 text-xs text-[#777F79] hover:text-[#F5F5F0] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-[#D0AD55]" />
        <span>Return to Home</span>
      </button>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
          <span>Legal & Privacy</span>
          <span aria-hidden="true" className="text-[#777F79]">·</span>
          <span>Nigeria Data Protection Act (NDPA)</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F5F5F0] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-[#777F79] text-xs leading-relaxed">
          Last revised: October 2026. Official privacy policy of Bashir Building Green Estates (B.G.E), operating in Abuja, Federal Capital Territory, Nigeria.
        </p>
      </div>

      <div className="space-y-8 bg-[#151B18]/70 border border-[#151B18] rounded-3xl p-6 sm:p-10 leading-relaxed text-[#777F79]">
        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D0AD55]" />
            <span>1. Information We Collect</span>
          </h2>
          <p>
            When you interact with Bashir Building Green Estates (B.G.E) through our website, property inspection booking forms, telephone calls, or WhatsApp channels, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/90">
            <li>Contact details such as your full name, telephone number, and email address.</li>
            <li>Property interests, including preferred Abuja districts, budget brackets, and accommodation types.</li>
            <li>Inspection preferences, including requested dates, times, and specific title inquiry questions.</li>
            <li>Communications transmitted via our WhatsApp integration or electronic mail.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#D0AD55]" />
            <span>2. Purpose of Data Processing</span>
          </h2>
          <p>
            We process your information strictly for legitimate commercial real estate purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#F5F5F0]/90">
            <li>Coordinating physical on-site inspections of properties in Gwarimpa, Katampe, Galadimawa, Maitama, Gaduwa, and other Abuja sectors.</li>
            <li>Responding directly to property inquiries, availability checks, and price confirmations.</li>
            <li>Preparing transparent agency documentation, land registry search authorizations, and professional fee disclosures.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#D0AD55]" />
            <span>3. Non-Disclosure & Third-Party Protections</span>
          </h2>
          <p>
            Bashir Building Green Estates does not sell, lease, or monetize customer information. Client contact details are shared only with licensed legal practitioners, land surveyors, or verified property principals when necessary to execute an agreed land search, contract of sale, or deed perfection with your explicit consent.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D0AD55]" />
            <span>4. WhatsApp Communications</span>
          </h2>
          <p>
            Our website provides instant WhatsApp handoff links connecting to our official business number (+234 811 295 8241). Messages sent through WhatsApp are governed by WhatsApp’s standard end-to-end encryption and terms of service. You may request to cease communications at any time.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-[#F5F5F0]">
            5. Contact our Data Officer
          </h2>
          <p>
            For any inquiries regarding your personal information, please contact:
          </p>
          <div className="p-4 rounded-xl bg-[#080D0B] border border-[#151B18] space-y-1 text-xs">
            <p className="font-semibold text-[#F5F5F0]">Bashir Building Green Estates (B.G.E)</p>
            <p>Attn: Bashir (Principal)</p>
            <p>Email: <a href="mailto:bgepropertyholding@gmail.com" className="text-[#D0AD55]">bgepropertyholding@gmail.com</a></p>
            <p>Telephone: <a href="tel:+2348112958241" className="text-[#D0AD55] font-mono">+234 811 295 8241</a></p>
            <p>Abuja, Federal Capital Territory, Nigeria</p>
          </div>
        </section>
      </div>
    </div>
  );
};
