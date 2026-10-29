import React, { useState } from 'react';
import { catalogGuides, CatalogGuideModal } from './CatalogGuideModal';
import { MessageCircle, ExternalLink, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

interface CatalogGuideSectionProps {
  title?: string;
  subtitle?: string;
}

export const CatalogGuideSection: React.FC<CatalogGuideSectionProps> = ({
  title = 'Official WhatsApp Catalog & Information Guides',
  subtitle = 'Authentic records from our WhatsApp Business catalog (+234 811 295 8241), featuring verified listing flyers, prices, and corporate registration in Abuja.',
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const openGuide = (idx: number) => {
    setSelectedIdx(idx);
    setModalOpen(true);
  };

  return (
    <section className="rounded-3xl bg-[#151B18]/70 border border-[#151B18] p-6 sm:p-10 space-y-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
            <ShieldCheck className="w-4 h-4" />
            <span>Due Diligence Archive</span>
            <span aria-hidden="true" className="text-[#777F79]">·</span>
            <span>Abuja Real Estate Guides</span>
          </div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F0] tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-[#777F79] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/c/2348112958241"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-lg transition-colors flex items-center gap-2 border border-[#123D2B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Open WhatsApp Catalog</span>
            <ExternalLink className="w-3 h-3 text-[#777F79]" />
          </a>
        </div>
      </div>

      {/* 4 Images Cards Grid with Professional Cropping (No phone status bars) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {catalogGuides.map((guide, idx) => (
          <div
            key={guide.id}
            onClick={() => openGuide(idx)}
            className="group rounded-2xl overflow-hidden bg-[#080D0B] border border-[#151B18] hover:border-[#D0AD55]/60 transition-all cursor-pointer flex flex-col justify-between shadow-lg"
          >
            {/* Screenshot Thumbnail Frame with top status-bar crop */}
            <div className="relative aspect-[9/13] max-h-68 w-full overflow-hidden bg-neutral-950 flex items-center justify-center p-2">
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-950">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="absolute -top-8 left-0 right-0 w-full h-[calc(100%+32px)] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#080D0B] via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D0AD55] bg-[#080D0B]/90 backdrop-blur-md px-2 py-0.5 rounded border border-[#151B18]">
                  {guide.tag}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 z-20">
                <span className="p-2.5 rounded-full bg-[#123D2B] text-[#D0AD55] shadow-lg border border-[#D0AD55]/40">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 space-y-2 border-t border-[#151B18] flex-1 flex flex-col justify-between text-xs">
              <div>
                <h4 className="font-heading font-semibold text-xs text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors line-clamp-1">
                  {guide.title}
                </h4>
                <p className="text-[11px] text-[#777F79] line-clamp-2 mt-1 leading-relaxed">
                  {guide.caption}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-semibold text-[#D0AD55] flex items-center gap-1">
                <span>Inspect Guide</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <CatalogGuideModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialIndex={selectedIdx}
      />
    </section>
  );
};
