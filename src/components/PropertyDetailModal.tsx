import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import { useBrand } from '../context/BrandContext';
import {
  X,
  Heart,
  Calendar,
  Share2,
  Download,
  Building,
  CheckCircle2,
  FileText,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const { isSaved, toggleSaveProperty, openTourModal, brandSettings } = useBrand();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'floorplan'>('overview');
  const [downloadToast, setDownloadToast] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setActiveTab('overview');
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [property, onClose]);

  if (!property) return null;

  const saved = isSaved(property.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const handleBrochureDownload = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              {property.type}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs text-neutral-400 font-medium">
              {property.neighborhood}, {property.city}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              title="Copy property link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleSaveProperty(property.id)}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              title={saved ? 'Remove from shortlist' : 'Save to shortlist'}
            >
              <Heart
                className={`w-4 h-4 ${saved ? 'fill-amber-400 text-amber-400' : 'text-neutral-400'}`}
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          {/* Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src={property.gallery[activeImageIndex] || property.image}
                alt={property.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-xs font-mono text-neutral-200 bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-neutral-800">
                  {activeImageIndex + 1} / {property.gallery.length} Views
                </span>
                <span className="text-xs font-mono text-neutral-200 bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-neutral-800">
                  Status: {property.status}
                </span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-amber-400 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title, Pricing & Vital Architectural Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-neutral-100 leading-tight">
                {property.title}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {property.tagline}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
              </div>

              {/* Specs Bar (Tabular Numerals & Zero-Pill) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Bedrooms</p>
                  <p className="font-mono text-lg font-semibold text-neutral-100 tabular-nums">
                    {property.bedrooms} <span className="text-xs text-neutral-400 font-normal">Suites</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Bathrooms</p>
                  <p className="font-mono text-lg font-semibold text-neutral-100 tabular-nums">
                    {property.bathrooms} <span className="text-xs text-neutral-400 font-normal">Baths</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Living Area</p>
                  <p className="font-mono text-lg font-semibold text-neutral-100 tabular-nums">
                    {property.sqft.toLocaleString()} <span className="text-xs text-neutral-400 font-normal">Sq Ft</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Lot Scale</p>
                  <p className="font-mono text-lg font-semibold text-neutral-100 tabular-nums">
                    {property.lotSize}
                  </p>
                </div>
              </div>

              {/* Navigation Tabs within Modal */}
              <div className="flex items-center gap-2 border-b border-neutral-800 pt-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2.5 px-1 text-xs font-medium uppercase tracking-wider transition-colors border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Overview & Architecture
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`pb-2.5 px-1 text-xs font-medium uppercase tracking-wider transition-colors border-b-2 ${
                    activeTab === 'features'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Amenities & Specs ({property.features.length})
                </button>
                <button
                  onClick={() => setActiveTab('floorplan')}
                  className={`pb-2.5 px-1 text-xs font-medium uppercase tracking-wider transition-colors border-b-2 ${
                    activeTab === 'floorplan'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Floor Plan & Spatial Flow
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === 'overview' && (
                <div className="space-y-4 pt-2">
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {property.highlightSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/60 flex flex-col justify-between"
                      >
                        <span className="text-[11px] text-neutral-500 uppercase tracking-wider">{spec.label}</span>
                        <span className="text-xs text-neutral-200 font-medium mt-1">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/60 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'floorplan' && (
                <div className="pt-2 space-y-4">
                  <div className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center space-y-3">
                    <Building className="w-10 h-10 text-amber-400 mx-auto" />
                    <h4 className="font-serif text-lg text-neutral-200">Architectural Cadastral & Spatial Plan</h4>
                    <p className="text-xs text-neutral-400 max-w-md mx-auto">
                      Multi-level spatial zoning featuring segregated primary master wing, dual culinary suites, lower wellness level, and seamless indoor-outdoor sightlines.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleBrochureDownload}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download High-Resolution Blueprints (PDF)</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Action & Valuation Box */}
            <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-6">
              <div className="space-y-1">
                <span className="text-xs text-neutral-400 uppercase tracking-wider">Acquisition Offering</span>
                <p className="font-mono text-3xl font-bold text-white tabular-nums">
                  {property.formattedPrice}
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  Approx. ${Math.round(property.price / property.sqft).toLocaleString()} / sq ft
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-neutral-800">
                <button
                  onClick={() => {
                    onClose();
                    openTourModal(property);
                  }}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Private Showing</span>
                </button>

                <button
                  onClick={handleBrochureDownload}
                  className="w-full py-2.5 px-4 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700/80 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Dossier & Lookbook</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-2 text-xs">
                <p className="font-medium text-neutral-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Advisory Concierge</span>
                </p>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Private showings are coordinated with non-disclosure protection and escorted by a managing partner.
                </p>
                <div className="pt-1 text-neutral-300">
                  <p className="text-[11px]">Phone: <span className="font-mono text-white">{brandSettings.phone}</span></p>
                  <p className="text-[11px]">Inquiries: <span className="text-amber-300">{brandSettings.email}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Toasts */}
        {copiedToast && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 text-neutral-100 px-4 py-2 rounded-lg text-xs font-medium shadow-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Residence link copied to clipboard</span>
          </div>
        )}

        {downloadToast && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 text-neutral-100 px-4 py-2 rounded-lg text-xs font-medium shadow-xl flex items-center gap-2">
            <Download className="w-4 h-4 text-amber-400" />
            <span>Downloading confidential architectural dossier...</span>
          </div>
        )}
      </div>
    </div>
  );
};
