import React, { useState } from 'react';
import { Property } from '../types';
import { useBrand } from '../context/BrandContext';
import { Heart, Compass, Eye, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (prop: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const { isSaved, toggleSaveProperty, openTourModal } = useBrand();
  const [imageError, setImageError] = useState(false);
  const saved = isSaved(property.id);

  return (
    <article className="group bg-neutral-900/60 border border-neutral-800/80 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between">
      {/* Media Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
        {!imageError ? (
          <img
            src={property.image}
            alt={property.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
            onClick={() => onSelect(property)}
          />
        ) : (
          <div
            onClick={() => onSelect(property)}
            className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 text-neutral-400 p-6 cursor-pointer"
          >
            <Compass className="w-10 h-10 mb-2 text-amber-400/80" />
            <p className="text-xs font-serif text-neutral-200">{property.title}</p>
          </div>
        )}

        {/* Subtle Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Floating Controls */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
          {/* Unboxed architectural status indicator */}
          <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-200 bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-neutral-800">
            {property.status}
          </span>

          {/* Favorite Save Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleSaveProperty(property.id);
            }}
            aria-label={saved ? 'Remove from favorites' : 'Save residence to shortlist'}
            className="p-2 rounded-full bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 text-neutral-300 hover:text-white hover:scale-110 active:scale-95 transition-all"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                saved ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
              }`}
            />
          </button>
        </div>

        {/* Bottom Media Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-neutral-200 pointer-events-none">
          <p className="font-mono text-lg font-semibold tracking-tight text-white tabular-nums drop-shadow-md">
            {property.formattedPrice}
          </p>
          {property.architect && (
            <span className="text-[11px] text-neutral-300 drop-shadow">
              Arch: {property.architect}
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location & Type (Clean unboxed metadata with · separator) */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>{property.neighborhood}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{property.city}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-amber-300/80">{property.type}</span>
          </div>

          {/* Residence Title */}
          <h3
            onClick={() => onSelect(property)}
            className="font-serif text-lg text-neutral-100 hover:text-amber-200 transition-colors cursor-pointer leading-snug"
          >
            {property.title}
          </h3>

          {/* Architectural tagline */}
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Specifications Strip (Clean unboxed numbers with tabular-nums) */}
        <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="font-mono tabular-nums text-neutral-200 font-medium">
              {property.bedrooms} <span className="text-neutral-400 font-normal">Beds</span>
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="font-mono tabular-nums text-neutral-200 font-medium">
              {property.bathrooms} <span className="text-neutral-400 font-normal">Baths</span>
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="font-mono tabular-nums text-neutral-200 font-medium">
              {property.sqft.toLocaleString()} <span className="text-neutral-400 font-normal">Sq Ft</span>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelect(property)}
            className="w-full py-2 px-3 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700/80 rounded-md transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
          <button
            type="button"
            onClick={() => openTourModal(property)}
            className="w-full py-2 px-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Book Tour</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
