import React, { useState } from 'react';
import { X, ExternalLink, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface GuideItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  tag: string;
  highlights: string[];
}

export const catalogGuides: GuideItem[] = [
  {
    id: 'guide-1',
    title: 'B.G.E Official Business Profile & Catalog Header',
    caption: 'Official WhatsApp Business registration under +234 811 295 8241, featuring C.E.O Bashir and the verified B.G.E medallion emblem.',
    image: '/assets/aistudio/Screenshot_20261029-134742_6a437dc2.png',
    tag: 'Business Profile',
    highlights: [
      'Official line: +234 811 295 8241',
      'Market Research Consultant & Developer credentials',
      'Direct access to active product catalog'
    ],
  },
  {
    id: 'guide-2',
    title: 'Verified Business Operations & Social Channels',
    caption: 'Registered corporate details, 24-hour enquiry operations, 2,369 Instagram followers (@bashir_bge), and 731 Facebook community members.',
    image: '/assets/aistudio/Screenshot_20261029-134713_65796819.png',
    tag: 'Verified Operations',
    highlights: [
      'Operating in Abuja, FCT, Nigeria',
      'Instagram: @bashir_bge (2,369 Followers)',
      'Facebook: BGE Property Holding (731 Likes)',
      'bgepropertyholding@gmail.com'
    ],
  },
  {
    id: 'guide-3',
    title: 'Official WhatsApp Product Price Index',
    caption: 'Real-time catalog pricing index showing active Abuja inventory: Gwarimpa 3rd Ave, Sun City Galadimawa, Katampe Extension, and Makarios land.',
    image: '/assets/aistudio/Screenshot_20261029-134539_e7fe7de4.png',
    tag: 'Price Index',
    highlights: [
      'Gwarimpa 3rd Ave: ₦149M – ₦150,000,000',
      'Sun City Galadimawa Luxury Home: ₦350,000,000',
      'Katampe Extension 6-Bed Duplex: ₦450,000,000',
      'Makarios 500 SQM: ₦150,000,000'
    ],
  },
  {
    id: 'guide-4',
    title: 'Promotional Location & Title Documentation Flyers',
    caption: 'Original promotional flyers detailing NICON Junction Katampe Main (₦40M with FCDA approval) and Dawaki Commercial Plaza (5 massive shops).',
    image: '/assets/aistudio/Screenshot_20261029-134524_9f71302d.png',
    tag: 'Location Flyers',
    highlights: [
      'Katampe Main from NICON Junction: 450 SQM, 5-Bed Duplex + BQ (₦40M)',
      'Dawaki Commercial Plaza: 5 Massive Shops (Flyer: ₦160M)',
      'Gwarimpa 3rd Ave behind Zenith Bank (C of O, 18-month payment plan)'
    ],
  },
];

interface CatalogGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const CatalogGuideModal: React.FC<CatalogGuideModalProps> = ({
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIdx, setCurrentIdx] = useState(initialIndex);

  if (!isOpen) return null;

  const current = catalogGuides[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % catalogGuides.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + catalogGuides.length) % catalogGuides.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#080D0B] border border-[#151B18] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#151B18] bg-[#151B18]/60">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#D0AD55] font-bold">
              Guide {currentIdx + 1} of {catalogGuides.length}
            </span>
            <span className="text-[#777F79]">·</span>
            <span className="text-xs text-[#F5F5F0] font-medium truncate max-w-xs sm:max-w-md">
              {current.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/c/2348112958241"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123D2B] text-xs font-semibold text-[#F5F5F0] hover:bg-[#18523A] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Open Catalog</span>
              <ExternalLink className="w-3 h-3 text-[#777F79]" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-[#777F79] hover:text-[#F5F5F0] bg-[#151B18] rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Image Preview with professional status bar crop */}
            <div className="md:col-span-7 relative rounded-2xl overflow-hidden bg-neutral-950 border border-[#151B18] flex items-center justify-center max-h-[500px] aspect-[9/14]">
              <div className="relative w-full h-full overflow-hidden bg-neutral-950">
                <img
                  src={current.image}
                  alt={current.title}
                  className="absolute -top-10 left-0 right-0 w-full h-[calc(100%+40px)] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Prev / Next Floating Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080D0B]/80 text-[#D0AD55] border border-[#151B18] hover:bg-[#123D2B] transition-colors shadow-lg z-20"
                aria-label="Previous guide image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080D0B]/80 text-[#D0AD55] border border-[#151B18] hover:bg-[#123D2B] transition-colors shadow-lg z-20"
                aria-label="Next guide image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Guide Explanatory Details */}
            <div className="md:col-span-5 space-y-4 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D0AD55] bg-[#123D2B]/80 px-2.5 py-1 rounded border border-[#123D2B]">
                {current.tag}
              </span>

              <h3 className="font-heading font-bold text-lg text-[#F5F5F0] leading-snug">
                {current.title}
              </h3>

              <p className="text-[#777F79] leading-relaxed">
                {current.caption}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#151B18]">
                <p className="font-semibold text-[#F5F5F0]">Key Verified Guide Data:</p>
                <div className="space-y-1.5">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#777F79]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D0AD55] shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <a
                  href="https://wa.me/c/2348112958241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-xl transition-colors flex items-center justify-center gap-2 border border-[#123D2B]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Verify on WhatsApp Catalog</span>
                </a>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip with status bar crop */}
          <div className="flex gap-3 overflow-x-auto pt-2 border-t border-[#151B18]">
            {catalogGuides.map((g, idx) => (
              <button
                key={g.id}
                onClick={() => setCurrentIdx(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all bg-neutral-950 ${
                  currentIdx === idx ? 'border-[#D0AD55] opacity-100 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="absolute -top-3 left-0 right-0 w-full h-[calc(100%+12px)] object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute bottom-1 right-1 text-[9px] font-mono text-white bg-black/80 px-1 rounded z-10">
                  #{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
