import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { useBge } from '../context/BgeContext';
import { SlidersHorizontal, Heart, Menu, X, Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const { brandSettings, openTourModal, savedPropertyIds, setIsCustomizerOpen } = useBrand();
  const { theme, toggleTheme } = useBge();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors ${
      theme === 'light' 
        ? 'bg-white/90 border-neutral-200 text-neutral-900' 
        : 'bg-neutral-950/90 border-neutral-900 text-neutral-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line text element */}
        <a
          href="#hero"
          className="font-serif text-2xl tracking-tight hover:text-amber-600 dark:hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
        >
          {brandSettings.brandName}
        </a>

        {/* Zone 2: 4-5 concise nav links */}
        <nav className={`hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider ${
          theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          <a
            href="#residences"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Residences
          </a>
          <a
            href="#valuation"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Valuation
          </a>
          <a
            href="#market"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Market Intelligence
          </a>
          <a
            href="#calculator"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Financing
          </a>
          <a
            href="#advisory"
            className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Advisory
          </a>
        </nav>

        {/* Zone 3: Actions & Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Light/Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-medium ${
              theme === 'light'
                ? 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-800'
                : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-200'
            }`}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Brighter Light Mode'}
            aria-label="Toggle Light and Dark Mode"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4 text-amber-700" />
                <span className="hidden lg:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden lg:inline">Bright</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsCustomizerOpen(true)}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium border rounded-md transition-colors whitespace-nowrap shrink-0 ${
              theme === 'light'
                ? 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-700'
                : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            title="Edit brand name, contact, and settings"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </button>

          <a
            href="#residences"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium border rounded-md transition-colors whitespace-nowrap shrink-0 ${
              theme === 'light'
                ? 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-700'
                : 'bg-neutral-900/50 hover:bg-neutral-800/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            title="Saved Residences"
          >
            <Heart className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-mono tabular-nums">{savedPropertyIds.length}</span>
          </a>

          <button
            onClick={() => openTourModal()}
            className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Private Showing
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t px-6 py-4 space-y-3 ${
          theme === 'light' ? 'bg-white border-neutral-200' : 'bg-neutral-950 border-neutral-900'
        }`}>
          <a
            href="#residences"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1 font-medium"
          >
            Residences
          </a>
          <a
            href="#valuation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1 font-medium"
          >
            Valuation
          </a>
          <a
            href="#market"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1 font-medium"
          >
            Market Intelligence
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1 font-medium"
          >
            Financing Calculator
          </a>
          <a
            href="#advisory"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1 font-medium"
          >
            Advisory Team
          </a>
        </div>
      )}
    </header>
  );
};
