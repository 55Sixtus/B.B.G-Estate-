import React from 'react';
import { useBge } from '../context/BgeContext';
import { BgeLogo } from '../components/BgeLogo';
import { CatalogGuideSection } from '../components/CatalogGuideSection';
import {
  ShieldCheck,
  Compass,
  FileCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Building,
  ArrowRight,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo, generateWhatsAppLink } = useBge();

  const whatsAppLink = generateWhatsAppLink(
    'Hello Bashir Building Green Estates, I would like to learn more about your real estate developments and land acquisition services.'
  );

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
          <span>Company Profile</span>
          <span aria-hidden="true" className="text-[#777F79]">·</span>
          <span>Abuja, Nigeria</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight leading-tight">
          High Performing Real Estate Development in Abuja.
        </h1>
        <p className="text-base sm:text-lg text-[#F5F5F0]/90 font-light leading-relaxed">
          Bashir Building Green Estates (B.G.E) is an Abuja-based real estate development and property advisory business led by Bashir, dedicated to facilitating reliable residential home purchases, verified land acquisitions, and commercial spaces across the Federal Capital Territory.
        </p>
      </div>

      {/* Executive Leadership & Founder's Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl bg-[#151B18]/80 border border-[#D0AD55]/30 shadow-2xl">
        {/* CEO Portrait Column */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
          <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D0AD55]/60 shadow-2xl bg-[#080D0B] group">
            <img
              src="/assets/aistudio/BGE_CEO_portrait_extracted_51d35c5f.png"
              alt="Bashir — Founder & C.E.O of Bashir Building Green Estates"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D0B] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D0AD55] bg-[#080D0B]/90 px-2 py-0.5 rounded border border-[#151B18]">
                Executive Leadership
              </span>
              <p className="font-heading font-extrabold text-base text-[#F5F5F0] drop-shadow-md">
                Bashir
              </p>
              <p className="text-[11px] text-[#777F79] drop-shadow">
                Founder & Chief Executive Officer
              </p>
            </div>
          </div>
          <div className="text-xs text-[#777F79] space-y-1">
            <p className="text-[#F5F5F0] font-semibold">Bashir Building Green Estates (B.G.E)</p>
            <p>Abuja, Federal Capital Territory, Nigeria</p>
          </div>
        </div>

        {/* Founder Narrative & Philosophy */}
        <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-[#777F79] leading-relaxed">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
              <span>Executive Mandate</span>
              <span aria-hidden="true" className="text-[#777F79]">·</span>
              <span>Founder's Statement</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
              "We Build On Ground Reality, Not Speculation."
            </h2>
          </div>

          <p className="italic text-[#F5F5F0]/90 border-l-2 border-[#D0AD55] pl-4 py-1">
            "When clients look for land or homes in Abuja, they deserve absolute transparency. If a road is untarred, or title perfection is in progress, we say so upfront. Trust is our primary currency in every development."
            <span className="block mt-2 font-semibold text-[#D0AD55] not-italic">— Bashir, C.E.O</span>
          </p>

          <p>
            Real estate in the Federal Capital Territory requires precise local knowledge, verifiable title documentation, and truthful representations of site infrastructure. Whether a property features tarred road access, is situated within an ongoing development corridor, or has documentation currently pending verification, our mandate is absolute clarity.
          </p>

          <p>
            We do not publish exaggerated travel claims, unconfirmed title assertions, or placeholder guarantees. Our catalog reflects on-the-ground reality in enclaves such as Gwarimpa, Katampe, Galadimawa, Gaduwa, Kaura, and Maitama.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/2348112958241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-lg transition-colors border border-[#123D2B]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Connect with C.E.O on WhatsApp</span>
            </a>
            <a
              href="tel:+2348112958241"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-[#F5F5F0] bg-[#080D0B] hover:bg-[#151B18] rounded-lg transition-colors border border-[#151B18]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D0AD55]" />
              <span>+234 811 295 8241</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
            Our Operating Commitments
          </h2>
          <p className="text-xs sm:text-sm text-[#777F79] max-w-xl">
            How we approach property representation for buyers, investors, and land developers in Abuja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#151B18]/50 border border-[#151B18] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-base text-[#F5F5F0]">
              Direct Verification
            </h3>
            <p className="text-xs text-[#777F79] leading-relaxed">
              Every property listed undergoes direct review with the owner or representative. If a road is untarred, or a swimming pool requires maintenance, that information is clearly published.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#151B18]/50 border border-[#151B18] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-base text-[#F5F5F0]">
              Title Documentation Truth
            </h3>
            <p className="text-xs text-[#777F79] leading-relaxed">
              We distinguish between stated claims and confirmed Certificates of Occupancy (C of O), guiding purchasers to conduct full land registry search before financial commitment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#151B18]/50 border border-[#151B18] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-base text-[#F5F5F0]">
              On-Site Physical Inspection
            </h3>
            <p className="text-xs text-[#777F79] leading-relaxed">
              We believe there is no substitute for walking the land and examining structural finishes in person. We personally escort clients on scheduled inspections across Abuja.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Fee Disclosure Section */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#151B18] border border-[#123D2B] space-y-3">
        <h3 className="font-heading font-bold text-base text-[#D0AD55] flex items-center gap-2">
          <Building className="w-4 h-4 text-[#D0AD55]" />
          <span>Professional Fee Transparency (5%)</span>
        </h3>
        <p className="text-xs text-[#777F79] leading-relaxed">
          In line with professional real estate standards in Nigeria, a 5% professional agency fee applies to transactions concluded through Bashir Building Green Estates. We disclose this term transparently up front so that buyers, sellers, and developers can calculate their acquisition budgets accurately.
        </p>
      </div>

      {/* Official WhatsApp Business Registration & Catalog Guides */}
      <CatalogGuideSection
        title="Verified WhatsApp Business Registration & Catalog Guides"
        subtitle="Direct records from our verified WhatsApp Business channel (+234 811 295 8241), featuring official operating credentials, company categorization, and active Abuja development flyers."
      />

      {/* Contact & Inspection Direct Action */}
      <div className="rounded-3xl bg-gradient-to-r from-[#123D2B] to-[#080D0B] p-8 sm:p-12 border border-[#123D2B] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h3 className="font-heading font-extrabold text-2xl text-[#F5F5F0]">
            Speak Directly with Bashir & the B.G.E Team
          </h3>
          <p className="text-xs sm:text-sm text-[#F5F5F0]/80">
            Reach out by phone or WhatsApp to discuss current properties or discuss development opportunities in Abuja.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#F5F5F0]/30 rounded-lg transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => navigateTo('inspection')}
            className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080D0B] bg-[#D0AD55] hover:bg-[#deb963] rounded-lg transition-colors flex items-center gap-2"
          >
            <span>Book an Inspection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
