import React, { useState } from 'react';
import { useBge } from '../context/BgeContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { generateWhatsAppLink, selectedProperty } = useBge();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const defaultMsg =
    'Hello Bashir Building Green Estates, I am reaching out from your website to enquire about available properties in Abuja.';

  const link = generateWhatsAppLink(defaultMsg);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {tooltipVisible && (
        <div className="bg-[#080D0B] border border-[#123D2B] text-[#F5F5F0] p-3 rounded-xl shadow-2xl max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#151B18]">
            <span className="font-semibold text-[#D0AD55]">Chat with B.G.E Team</span>
            <button
              onClick={() => setTooltipVisible(false)}
              className="text-[#777F79] hover:text-[#F5F5F0]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-[#777F79] leading-relaxed">
            Need quick answers on pricing, site visits, or property availability in Abuja? Connect directly on WhatsApp.
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center py-1.5 px-3 bg-[#123D2B] hover:bg-[#18523A] text-[#F5F5F0] font-semibold text-[11px] rounded transition-colors"
          >
            Open WhatsApp (+234 811 295 8241)
          </a>
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipVisible(true)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:scale-105 active:scale-95 transition-all group border-2 border-white/20"
        aria-label="Direct WhatsApp Enquiry"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
