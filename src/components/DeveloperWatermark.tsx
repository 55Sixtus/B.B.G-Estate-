import React from 'react';
import { useBge } from '../context/BgeContext';
import { Code2, Phone, Sun, Moon } from 'lucide-react';

export const DeveloperWatermark: React.FC = () => {
  const { theme, toggleTheme } = useBge();

  return (
    <div className="fixed md:bottom-6 md:left-6 top-24 left-4 md:top-auto z-40 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-[#080D0B] via-[#123D2B] to-[#080D0B] text-[#F5F5F0] border-2 border-[#D0AD55] shadow-2xl text-xs font-semibold tracking-wide backdrop-blur-md animate-in fade-in duration-500 hover:border-amber-400 transition-all">
      <div className="w-8 h-8 rounded-xl bg-[#123D2B] border border-[#D0AD55]/40 flex items-center justify-center text-[#D0AD55] shrink-0 shadow-inner">
        <Code2 className="w-4 h-4" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest text-[#D0AD55] font-bold">
            Verified Developer
          </span>
        </div>
        <span className="text-xs font-extrabold text-[#F5F5F0] tracking-tight">
          Sixtus Tech Hub <span className="text-[#D0AD55]">|</span> 08130678052
        </span>
      </div>

      <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
        <a
          href="tel:08130678052"
          className="px-2.5 py-1.5 rounded-xl bg-[#D0AD55] hover:bg-[#e2bd64] text-[#080D0B] text-xs font-bold transition-colors flex items-center gap-1 shadow-md shrink-0"
          title="Call Developer Sixtus Tech Hub"
        >
          <Phone className="w-3 h-3" />
          <span className="hidden sm:inline">Call</span>
        </a>

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-amber-400 transition-colors flex items-center gap-1"
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          aria-label="Toggle Light and Dark Mode"
        >
          {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
