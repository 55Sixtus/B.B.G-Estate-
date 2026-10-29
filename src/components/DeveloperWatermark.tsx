import React from 'react';
import { Code2, Phone, Sparkles } from 'lucide-react';

export const DeveloperWatermark: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#123D2B] via-[#080D0B] to-[#123D2B] text-[#F5F5F0] border-2 border-[#D0AD55] shadow-2xl text-xs font-semibold tracking-wide animate-in fade-in slide-in-from-bottom-3 duration-500">
      <span className="relative flex h-3 w-3 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
      </span>

      <div className="flex items-center gap-2">
        <Code2 className="w-4 h-4 text-[#D0AD55]" />
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-[#D0AD55] font-bold">
            Official Developer Watermark
          </span>
          <span className="text-xs font-bold text-[#F5F5F0]">
            Sixtus Tech Hub <span className="text-[#D0AD55]">|</span> 08130678052
          </span>
        </div>
      </div>

      <a
        href="tel:08130678052"
        className="ml-2 px-2.5 py-1 rounded-lg bg-[#D0AD55] hover:bg-[#e2bd64] text-[#080D0B] text-[11px] font-bold transition-colors flex items-center gap-1 shadow-md"
        title="Contact Developer Sixtus Tech Hub"
      >
        <Phone className="w-3 h-3" />
        <span>Call</span>
      </a>
    </div>
  );
};
