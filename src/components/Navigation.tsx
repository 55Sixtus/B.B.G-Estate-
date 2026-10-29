import React, { useState } from 'react';
import { useBge, PageRoute } from '../context/BgeContext';
import { BgeLogo } from './BgeLogo';
import { MessageCircle, Menu, X, CalendarCheck, Shield } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { activePage, navigateTo, generateWhatsAppLink } = useBge();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Properties', page: 'properties' },
    { label: 'About Us', page: 'about' },
    { label: 'Book Inspection', page: 'inspection' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  const whatsAppLink = generateWhatsAppLink(
    'Hello Bashir Building Green Estates (B.G.E), I would like to make an enquiry regarding available properties in Abuja.'
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080D0B]/95 backdrop-blur-md border-b border-[#151B18] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Left: Brand Identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none flex items-center gap-2 group"
          aria-label="Bashir Building Green Estates Home"
        >
          <BgeLogo size="md" />
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#777F79]">
          {navLinks.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`py-1 transition-all border-b-2 ${
                  isActive
                    ? 'text-[#F5F5F0] border-[#123D2B] font-bold'
                    : 'border-transparent hover:text-[#F5F5F0] hover:border-[#D0AD55]/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Admin link (accessible for owner verification & inventory management) */}
          <button
            onClick={() => handleNavClick('admin')}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium rounded border transition-colors ${
              activePage === 'admin'
                ? 'bg-[#123D2B] text-[#D0AD55] border-[#123D2B]'
                : 'text-[#777F79] hover:text-[#F5F5F0] border-[#151B18] bg-[#080D0B]'
            }`}
            title="Listing Manager & Verification Status"
          >
            <Shield className="w-3 h-3 text-[#D0AD55]" />
            <span className="hidden md:inline">Admin Manager</span>
          </button>

          {/* Prominent WhatsApp Enquiry Button */}
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] rounded-lg shadow-sm transition-all hover:border-[#D0AD55]/60 group"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">WhatsApp Enquiry</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#777F79] hover:text-[#F5F5F0] rounded-lg border border-[#151B18] bg-[#151B18]/50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#151B18] bg-[#080D0B] px-6 py-5 space-y-3">
          {navLinks.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                activePage === item.page ? 'text-[#D0AD55] font-semibold' : 'text-[#F5F5F0] hover:text-[#D0AD55]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#151B18] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('admin')}
              className="text-left text-xs text-[#777F79] hover:text-[#D0AD55] flex items-center gap-1.5 py-1"
            >
              <Shield className="w-3.5 h-3.5 text-[#D0AD55]" />
              <span>Admin Listing Status & Verifications</span>
            </button>
            <a
              href="tel:+2348112958241"
              className="text-xs text-[#F5F5F0] hover:text-[#D0AD55] py-1 font-mono"
            >
              Call: +234 811 295 8241
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
