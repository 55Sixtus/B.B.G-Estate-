import React, { useState } from 'react';

interface BgeLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official B.G.E Brand Logo Component
 * Uses the supplied official BGE brand emblem:
 * /assets/aistudio/BGE_brand_logo_extracted_ee535074.png
 */
export const BgeLogo: React.FC<BgeLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: { dimension: 40, textClass: 'text-sm', subClass: 'text-[9px]' },
    md: { dimension: 50, textClass: 'text-base', subClass: 'text-[10px]' },
    lg: { dimension: 68, textClass: 'text-xl', subClass: 'text-xs' },
    xl: { dimension: 88, textClass: 'text-2xl', subClass: 'text-sm' },
  };

  const current = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center gap-3 group ${className}`}
      title="Bashir Building Green Estates (B.G.E) — High Performing Real Estate Development"
    >
      {/* Emblem Frame */}
      <div
        className="relative shrink-0 rounded-full flex items-center justify-center overflow-hidden border border-[#D0AD55]/50 shadow-md bg-[#080D0B] p-0.5 group-hover:border-[#D0AD55] transition-colors"
        style={{ width: current.dimension, height: current.dimension }}
      >
        {!imgError ? (
          <img
            src="/assets/aistudio/BGE_brand_logo_extracted_ee535074.png"
            alt="Bashir Building Green Estates Official Brand Logo"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center rounded-full scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[#123D2B] flex items-center justify-center font-heading font-extrabold text-[#D0AD55] text-xs">
            B.G.E
          </div>
        )}
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-heading font-extrabold tracking-tight text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors ${current.textClass}`}>
              Bashir Building Green Estates
            </span>
          </div>
          <span className={`text-[#D0AD55] font-medium tracking-wide uppercase ${current.subClass}`}>
            High Performing Real Estate Development · Abuja
          </span>
        </div>
      )}
    </div>
  );
};
