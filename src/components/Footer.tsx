import React from 'react';
import { useBge, PageRoute } from '../context/BgeContext';
import { BgeLogo } from './BgeLogo';
import { PropertyCategory } from '../types/bge';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowUp,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

/**
 * Social Channels Configuration
 * Instagram & Facebook are verified from client business screenshots.
 * TikTok handle was not provided in the client source materials;
 * keeping its configuration explicitly documented and unlinked until verified.
 */
interface SocialChannelConfig {
  id: string;
  name: string;
  handle: string;
  url: string | null;
  status: 'active' | 'pending_verification';
  ariaLabel: string;
  badge?: string;
}

const BGE_SOCIAL_CHANNELS: SocialChannelConfig[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@bashir_bge',
    url: 'https://www.instagram.com/bashir_bge/',
    status: 'active',
    ariaLabel: 'Visit Bashir Building Green Estates on Instagram (@bashir_bge)',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'BGE Property Holding',
    url: 'https://www.facebook.com/search/top?q=BGE%20Property%20Holding',
    status: 'active',
    ariaLabel: 'Visit BGE Property Holding on Facebook',
  },
  {
    id: 'whatsapp-catalog',
    name: 'WhatsApp Catalog',
    handle: '+234 811 295 8241',
    url: 'https://wa.me/c/2348112958241',
    status: 'active',
    ariaLabel: 'Open B.G.E WhatsApp Business Catalog',
    badge: 'Live Catalog',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: 'Pending Client Verification',
    // Client has not provided official TikTok handle in supplied screenshots.
    // Configure with verified URL once provided by client.
    url: null,
    status: 'pending_verification',
    ariaLabel: 'TikTok channel pending client handle verification',
    badge: 'Coming Soon',
  },
];

// SVG Social Icons
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5c0-.988.245-1.49 1.41-1.49H17V2.26C16.36 2.18 15.34 2.1 14.16 2.1c-3.23 0-5.16 1.83-5.16 5.39v2.02H6v3.98h3.198v8.01Z" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.89.14V9.45a6.35 6.35 0 0 0-.89-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.06a8.28 8.28 0 0 0 5.16 1.77V7.38a4.83 4.83 0 0 1-1.4-.69Z" />
  </svg>
);

const WhatsAppBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
  </svg>
);

export const Footer: React.FC = () => {
  const { navigateTo, setFilters, generateWhatsAppLink } = useBge();

  const handlePageNav = (page: PageRoute) => {
    if (page === 'properties') {
      setFilters((prev) => ({ ...prev, category: 'All' }));
    }
    navigateTo(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryNav = (cat: PropertyCategory) => {
    setFilters((prev) => ({
      ...prev,
      category: cat,
      district: 'All',
      search: '',
    }));
    navigateTo('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const enquiryWhatsAppUrl = generateWhatsAppLink(
    'Hello Bashir Building Green Estates (B.G.E), I would like to discuss my property requirements in Abuja.'
  );

  return (
    <footer className="w-full bg-[#080D0B] text-[#A6AEA8] border-t border-[#151B18] transition-colors relative">
      {/* 1. Refined Enquiry CTA Banner (Full Width, Above Columns) */}
      <div className="w-full border-b border-[#151B18] bg-gradient-to-r from-[#080D0B] via-[#123D2B]/35 to-[#080D0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#123D2B]/40 border border-[#123D2B]/70 shadow-2xl backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#D0AD55]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D0AD55]" />
                <span>Bashir Building Green Estates · Abuja</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
                Your Next Property Opportunity Starts Here.
              </h3>
              <p className="text-xs sm:text-sm text-[#A6AEA8] leading-relaxed">
                Explore available properties or speak with B.G.E. about your property requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => handlePageNav('properties')}
                className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080D0B] bg-[#D0AD55] hover:bg-[#dec06f] rounded-lg transition-colors flex items-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#D0AD55]/50 cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={enquiryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] hover:border-[#D0AD55]/40 rounded-lg transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#123D2B]/50"
              >
                <WhatsAppBrandIcon className="w-4 h-4 text-[#25D366]" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Four-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
            <div className="space-y-3">
              <BgeLogo size="md" />
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#D0AD55] to-transparent" />
            </div>

            <p className="text-xs text-[#A6AEA8] leading-relaxed font-light">
              Discover residential, land and commercial property opportunities with Bashir Building Green Estates in Abuja, Nigeria.
            </p>

            <div className="pt-1 text-[11px] text-[#777F79] space-y-1">
              <p className="font-semibold text-[#F5F5F0]">Bashir Building Green Estates (B.G.E)</p>
              <p>High Performing Real Estate Development</p>
              <p>Primary Market: Abuja, FCT, Nigeria</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-[#F5F5F0] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123D2B]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handlePageNav('home')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('about')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('properties')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>All Properties</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Residential')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>Residential Properties</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Land')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>Land and Plots</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryNav('Commercial')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>Commercial Properties</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('inspection')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>Book an Inspection</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('contact')}
                  className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#123D2B] font-bold">›</span>
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-[#F5F5F0] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123D2B]" />
              <span>Contact Information</span>
            </h4>

            <div className="space-y-3.5 text-xs">
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#151B18] text-[#D0AD55] border border-[#151B18] shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#777F79] block">
                    Phone Enquiries
                  </span>
                  <a
                    href="tel:+2348112958241"
                    className="font-mono text-[#F5F5F0] hover:text-[#D0AD55] transition-colors"
                  >
                    +234 811 295 8241
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#151B18] text-[#25D366] border border-[#151B18] shrink-0 mt-0.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#777F79] block">
                    WhatsApp Direct
                  </span>
                  <a
                    href="https://wa.me/2348112958241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[#F5F5F0] hover:text-[#D0AD55] transition-colors"
                  >
                    +234 811 295 8241
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#151B18] text-[#D0AD55] border border-[#151B18] shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#777F79] block">
                    Official Email
                  </span>
                  <a
                    href="mailto:bgepropertyholding@gmail.com"
                    className="text-[#F5F5F0] hover:text-[#D0AD55] transition-colors break-all"
                  >
                    bgepropertyholding@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#151B18] text-[#D0AD55] border border-[#151B18] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#777F79] block">
                    Business Territory
                  </span>
                  <p className="text-[#F5F5F0] leading-snug">
                    Abuja, Federal Capital Territory, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Connect with B.G.E. */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-[#F5F5F0] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123D2B]" />
              <span>Connect with B.G.E.</span>
            </h4>

            <p className="text-xs text-[#A6AEA8] leading-relaxed">
              Stay informed on verified new listings, commercial spaces, and site developments across Abuja.
            </p>

            <div className="space-y-2.5">
              {BGE_SOCIAL_CHANNELS.map((channel) => {
                const isClickable = channel.status === 'active' && channel.url;

                const renderIcon = () => {
                  switch (channel.id) {
                    case 'instagram':
                      return <InstagramIcon className="w-4 h-4" />;
                    case 'facebook':
                      return <FacebookIcon className="w-4 h-4" />;
                    case 'whatsapp-catalog':
                      return <WhatsAppBrandIcon className="w-4 h-4 text-[#25D366]" />;
                    case 'tiktok':
                      return <TikTokIcon className="w-4 h-4" />;
                    default:
                      return <ExternalLink className="w-4 h-4" />;
                  }
                };

                if (isClickable) {
                  return (
                    <a
                      key={channel.id}
                      href={channel.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={channel.ariaLabel}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-[#151B18]/70 hover:bg-[#123D2B] border border-[#151B18] hover:border-[#D0AD55]/40 transition-all text-xs"
                    >
                      <div className="flex items-center gap-2.5 text-[#F5F5F0]">
                        <span className="text-[#A6AEA8] group-hover:text-[#D0AD55] transition-colors">
                          {renderIcon()}
                        </span>
                        <div>
                          <span className="font-medium block leading-none">{channel.name}</span>
                          <span className="text-[10px] text-[#777F79] font-mono group-hover:text-[#F5F5F0]/80">
                            {channel.handle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {channel.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#D0AD55] bg-[#080D0B] px-1.5 py-0.5 rounded border border-[#151B18]">
                            {channel.badge}
                          </span>
                        )}
                        <ExternalLink className="w-3 h-3 text-[#777F79] group-hover:text-[#D0AD55] transition-colors" />
                      </div>
                    </a>
                  );
                }

                // TikTok or channels pending verification
                return (
                  <div
                    key={channel.id}
                    aria-label={channel.ariaLabel}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#080D0B] border border-[#151B18] text-xs opacity-75"
                  >
                    <div className="flex items-center gap-2.5 text-[#777F79]">
                      <span>{renderIcon()}</span>
                      <div>
                        <span className="font-medium block leading-none text-[#A6AEA8]">{channel.name}</span>
                        <span className="text-[10px] text-[#777F79]">
                          {channel.handle}
                        </span>
                      </div>
                    </div>
                    {channel.badge && (
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-[#777F79] bg-[#151B18] px-1.5 py-0.5 rounded">
                        {channel.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Transparent Professional Fee & Standard Disclaimer */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#151B18]/50 border border-[#151B18] text-[11px] text-[#A6AEA8] space-y-1.5">
          <p className="font-semibold text-[#F5F5F0] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D0AD55] shrink-0" />
            <span>Professional Fee Disclosure & Land Diligence Standard</span>
          </p>
          <p className="leading-relaxed text-[#777F79]">
            A standard 5% professional agency fee applies to concluded transactions handled by Bashir Building Green Estates (B.G.E), unless otherwise agreed in writing. Property titles (such as Certificate of Occupancy, Right of Occupancy, or building approvals) are verified with relevant land registries in Abuja before financial closure.
          </p>
        </div>

        {/* Very Bold Big Font Brand Watermark in Footer */}
        <div className="mt-12 py-8 text-center border-t border-b border-[#151B18] bg-[#080D0B]">
          <h2 className="font-serif font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-widest text-[#D0AD55]/40 select-none">
            BASHIR BUILDING GREEN ESTATES (B.G.E.)
          </h2>
          <p className="text-[11px] uppercase tracking-widest text-[#777F79] mt-2">
            High Performing Real Estate Development · Abuja, FCT, Nigeria
          </p>
        </div>

        {/* 4. Bottom Copyright Bar with Thin Divider */}
        <div className="mt-10 pt-6 border-t border-[#151B18] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777F79]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Bashir Building Green Estates. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => handlePageNav('privacy')}
              className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors focus:outline-none focus:underline cursor-pointer"
            >
              Privacy Policy
            </button>

            <span aria-hidden="true" className="text-[#151B18]">|</span>

            <button
              onClick={() => handlePageNav('terms')}
              className="text-[#A6AEA8] hover:text-[#D0AD55] transition-colors focus:outline-none focus:underline cursor-pointer"
            >
              Terms of Use
            </button>

            <span aria-hidden="true" className="text-[#151B18]">|</span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="group flex items-center gap-1.5 text-[#A6AEA8] hover:text-[#D0AD55] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D0AD55]/40 rounded px-1.5 py-0.5 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
