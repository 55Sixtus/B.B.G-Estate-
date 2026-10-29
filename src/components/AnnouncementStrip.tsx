import React from 'react';
import { ShieldCheck, Phone, MessageCircle, Sparkles } from 'lucide-react';

export const AnnouncementStrip: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#080D0B] via-[#123D2B] to-[#080D0B] text-[#F5F5F0] py-2.5 px-4 border-b border-[#D0AD55]/20 text-xs shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D0AD55]/20 text-[#D0AD55] border border-[#D0AD55]/40 shrink-0">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="font-heading font-medium tracking-wide text-[#F5F5F0]">
            <strong className="text-[#D0AD55] font-semibold">Bashir Building Green Estates (B.G.E)</strong>
            <span className="hidden sm:inline"> · Official Abuja Luxury Real Estate Portfolio & Verified C of O Developments</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-[#F5F5F0]/90">
          <a
            href="tel:+2348112958241"
            className="flex items-center gap-1.5 hover:text-[#D0AD55] transition-colors font-mono bg-black/30 px-2.5 py-1 rounded-md border border-white/5"
          >
            <Phone className="w-3.5 h-3.5 text-[#D0AD55]" />
            <span>+234 811 295 8241</span>
          </a>
          <a
            href="https://wa.me/2348112958241"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#D0AD55] transition-colors bg-[#123D2B] px-2.5 py-1 rounded-md border border-[#D0AD55]/30 text-[#F5F5F0]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="font-semibold">WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
