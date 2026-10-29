import React, { useState } from 'react';
import { BgeProperty } from '../types/bge';
import { useBge } from '../context/BgeContext';
import { MessageCircle, Eye, FileCheck, MapPin, Bed, Maximize2, ShieldAlert } from 'lucide-react';

interface BgePropertyCardProps {
  property: BgeProperty;
}

export const BgePropertyCard: React.FC<BgePropertyCardProps> = ({ property }) => {
  const { navigateTo, generatePropertyWhatsAppLink } = useBge();
  const [imgError, setImgError] = useState(false);

  const whatsAppLink = generatePropertyWhatsAppLink(property);

  return (
    <article className="group bg-[#151B18]/60 border border-[#151B18] rounded-2xl overflow-hidden hover:border-[#123D2B] transition-all duration-300 flex flex-col justify-between hover:shadow-xl">
      {/* Media Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080D0B]">
        {!imgError ? (
          <img
            src={property.image}
            alt={property.title}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
            onClick={() => navigateTo('property-detail', property.slug)}
          />
        ) : (
          <div
            onClick={() => navigateTo('property-detail', property.slug)}
            className="w-full h-full flex flex-col items-center justify-center bg-[#151B18] p-6 text-center cursor-pointer"
          >
            <span className="font-heading font-semibold text-sm text-[#F5F5F0]">{property.title}</span>
            <span className="text-xs text-[#777F79] mt-1">{property.location}</span>
          </div>
        )}

        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D0B] via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
          {/* Category Tag */}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#123D2B]">
            {property.category}
          </span>

          {/* District Tag */}
          <span className="text-[11px] font-medium text-[#D0AD55] bg-[#080D0B]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#151B18]">
            {property.district}
          </span>
        </div>

        {/* Bottom Price Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <p className="font-heading font-bold text-lg sm:text-xl text-[#F5F5F0] tabular-nums drop-shadow-md">
            {property.formattedPrice}
          </p>
          {property.titleConfirmed && (
            <span className="text-[10px] font-medium text-[#25D366] bg-[#080D0B]/90 px-2 py-0.5 rounded border border-[#151B18] flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-[#25D366]" />
              <span>Verified C of O</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location with MapPin */}
          <div className="flex items-center gap-1.5 text-xs text-[#777F79]">
            <MapPin className="w-3.5 h-3.5 text-[#D0AD55] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => navigateTo('property-detail', property.slug)}
            className="font-heading font-semibold text-base text-[#F5F5F0] hover:text-[#D0AD55] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {property.title}
          </h3>

          {/* Property type description */}
          <p className="text-xs text-[#777F79] line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Specifications Strip (Bedrooms or Land Size, when known) */}
        <div className="pt-3 border-t border-[#151B18] flex items-center justify-between text-xs text-[#777F79]">
          <div className="flex items-center gap-3">
            {property.bedrooms !== undefined && (
              <span className="flex items-center gap-1 font-medium text-[#F5F5F0]">
                <Bed className="w-3.5 h-3.5 text-[#D0AD55]" />
                <span>{property.bedrooms} Bedrooms</span>
              </span>
            )}
            {property.landSizeSqm !== undefined && (
              <span className="flex items-center gap-1 font-medium text-[#F5F5F0]">
                <Maximize2 className="w-3.5 h-3.5 text-[#D0AD55]" />
                <span>{property.landSizeSqm.toLocaleString()} SQM Plot</span>
              </span>
            )}
            {property.builtAreaSqm !== undefined && (
              <span className="flex items-center gap-1 font-medium text-[#F5F5F0]">
                <Maximize2 className="w-3.5 h-3.5 text-[#D0AD55]" />
                <span>{property.builtAreaSqm} SQM Area</span>
              </span>
            )}
            {property.bedrooms === undefined &&
              property.landSizeSqm === undefined &&
              property.builtAreaSqm === undefined && (
                <span className="text-xs text-[#777F79]">{property.propertyTypeDescription}</span>
              )}
          </div>
        </div>

        {/* Disclosures note preview if untarred road or maintenance */}
        {property.importantNotes && (
          <div className="p-2 rounded-lg bg-[#080D0B] border border-[#151B18] text-[10px] text-[#777F79] flex items-start gap-1.5">
            <ShieldAlert className="w-3 h-3 text-[#D0AD55] shrink-0 mt-0.5" />
            <span className="line-clamp-1">{property.importantNotes}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => navigateTo('property-detail', property.slug)}
            className="w-full py-2.5 px-3 text-xs font-semibold text-[#F5F5F0] bg-[#151B18] hover:bg-[#123D2B] rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-[#151B18]"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 text-xs font-semibold text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-[#123D2B]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
};
