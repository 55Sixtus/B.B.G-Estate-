/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BgeProvider, useBge } from './context/BgeContext';
import { AnnouncementStrip } from './components/AnnouncementStrip';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DeveloperWatermark } from './components/DeveloperWatermark';

import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { InspectionPage } from './pages/InspectionPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';

function AppContent() {
  const { activePage, theme } = useBge();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans relative transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-[#F5F5F0] text-neutral-950 selection:bg-[#123D2B] selection:text-[#D0AD55]'
          : 'bg-[#0E1612] text-[#F5F5F0] selection:bg-[#123D2B] selection:text-[#D0AD55]'
      }`}
    >
      {/* Bold Background Watermark (Brand Name) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0 opacity-[0.03]">
        <span className="font-serif font-black text-[12vw] tracking-tighter uppercase whitespace-nowrap text-center select-none text-[#123D2B] dark:text-[#D0AD55]">
          BASHIR BUILDING GREEN ESTATES
        </span>
      </div>

      {/* Top Announcement Strip */}
      <div className="relative z-10">
        <AnnouncementStrip />
      </div>

      {/* Main Navigation Bar */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Page Routing */}
      <main className="flex-1 relative z-10">
        {activePage === 'home' && <HomePage />}
        {activePage === 'properties' && <PropertiesPage />}
        {activePage === 'property-detail' && <PropertyDetailPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'inspection' && <InspectionPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'privacy' && <PrivacyPolicyPage />}
        {activePage === 'terms' && <TermsPage />}
        {activePage === 'admin' && <AdminPage />}
      </main>

      {/* Shared Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Developer Watermark Badge */}
      <DeveloperWatermark />
    </div>
  );
}

export default function App() {
  return (
    <BgeProvider>
      <AppContent />
    </BgeProvider>
  );
}
