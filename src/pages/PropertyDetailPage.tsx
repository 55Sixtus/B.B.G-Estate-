import React, { useState, useEffect } from 'react';
import { useBge } from '../context/BgeContext';
import { BgePropertyCard } from '../components/BgePropertyCard';
import {
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  ShieldCheck,
  ShieldAlert,
  FileText,
  CheckCircle2,
  Bed,
  Bath,
  Maximize2,
  ArrowLeft,
  Share2,
  Info,
} from 'lucide-react';

export const PropertyDetailPage: React.FC = () => {
  const { selectedProperty, publishedProperties, navigateTo, generatePropertyWhatsAppLink } = useBge();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);
  const [mediaMode, setMediaMode] = useState<'photo' | 'video'>('photo');

  useEffect(() => {
    setActiveImageIdx(0);
    setMediaMode(selectedProperty?.video ? 'video' : 'photo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProperty]);

  if (!selectedProperty) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4 space-y-4">
        <h2 className="font-heading font-bold text-xl text-[#F5F5F0]">Property Not Found</h2>
        <p className="text-xs text-[#777F79]">The requested listing is unavailable or currently pending verification.</p>
        <button
          onClick={() => navigateTo('properties')}
          className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] rounded-lg"
        >
          Return to Properties
        </button>
      </div>
    );
  }

  const whatsAppLink = generatePropertyWhatsAppLink(selectedProperty);

  const relatedProperties = publishedProperties
    .filter((p) => p.id !== selectedProperty.id && (p.category === selectedProperty.category || p.district === selectedProperty.district))
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Top Breadcrumb & Share */}
      <div className="flex items-center justify-between text-xs text-[#777F79] border-b border-[#151B18] pb-4">
        <button
          onClick={() => navigateTo('properties')}
          className="flex items-center gap-1.5 hover:text-[#F5F5F0] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#D0AD55]" />
          <span>Back to All Properties</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151B18] hover:bg-[#123D2B] text-[#F5F5F0] transition-colors"
            title="Share listing link"
          >
            <Share2 className="w-3.5 h-3.5 text-[#D0AD55]" />
            <span>Share Listing</span>
          </button>
        </div>
      </div>

      {/* Advisory Banner for Unconfirmed/Pending Properties */}
      {selectedProperty.publicationStatus !== 'Published' && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#D0AD55]/10 border border-[#D0AD55]/50 text-xs text-[#D0AD55] flex items-start gap-3.5 shadow-lg">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-[#D0AD55]" />
          <div className="space-y-1">
            <p className="font-bold uppercase tracking-wider text-[#F5F5F0]">
              Notice: Listing Under Verification Review (Unpublished Draft)
            </p>
            <p className="text-[#A6AEA8] leading-relaxed">
              {selectedProperty.conflictingInfoNote ||
                'This listing contains unconfirmed price or title documentation and is kept unpublished pending direct owner reconciliation.'}
            </p>
          </div>
        </div>
      )}

      {/* Main Grid: Gallery & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Gallery & Core Narrative (7 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Visual Display */}
          <div className="space-y-3">
            {/* Media Mode Selector if video is available */}
            {selectedProperty.video && (
              <div className="flex items-center gap-2 pb-1">
                <button
                  type="button"
                  onClick={() => setMediaMode('video')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    mediaMode === 'video'
                      ? 'bg-[#123D2B] text-[#F5F5F0] border border-[#D0AD55]/40'
                      : 'bg-[#151B18] text-[#777F79] hover:text-[#F5F5F0]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Drone Survey & 3D Video</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaMode('photo')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    mediaMode === 'photo'
                      ? 'bg-[#123D2B] text-[#F5F5F0] border border-[#D0AD55]/40'
                      : 'bg-[#151B18] text-[#777F79] hover:text-[#F5F5F0]'
                  }`}
                >
                  <span>Photo Gallery</span>
                </button>
              </div>
            )}

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#080D0B] border border-[#151B18]">
              {mediaMode === 'video' && selectedProperty.video ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={selectedProperty.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={selectedProperty.gallery[activeImageIdx] || selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}

              <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B]/90 px-3 py-1 rounded backdrop-blur-md border border-[#123D2B]">
                  {selectedProperty.category}
                </span>
                <span className="text-xs font-medium text-[#D0AD55] bg-[#080D0B]/80 px-2.5 py-1 rounded backdrop-blur-md border border-[#151B18]">
                  {selectedProperty.district} District
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation for Photos */}
            {mediaMode === 'photo' && selectedProperty.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {selectedProperty.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIdx === idx ? 'border-[#D0AD55]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title and Location */}
          <div className="space-y-3">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F5F5F0] leading-snug">
              {selectedProperty.title}
            </h1>
            <p className="flex items-center gap-2 text-sm text-[#777F79]">
              <MapPin className="w-4 h-4 text-[#D0AD55] shrink-0" />
              <span>{selectedProperty.location}</span>
            </p>
          </div>

          {/* Known Specs Bar (Hiding unknown fields rather than guessing) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#151B18]/70 border border-[#151B18]">
            {selectedProperty.bedrooms !== undefined && (
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#777F79] font-medium block">Bedrooms</span>
                <span className="font-heading font-bold text-lg text-[#F5F5F0] flex items-center gap-1.5 mt-0.5">
                  <Bed className="w-4 h-4 text-[#D0AD55]" />
                  <span>{selectedProperty.bedrooms} Suites</span>
                </span>
              </div>
            )}
            {selectedProperty.bathrooms !== undefined && (
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#777F79] font-medium block">Bathrooms</span>
                <span className="font-heading font-bold text-lg text-[#F5F5F0] flex items-center gap-1.5 mt-0.5">
                  <Bath className="w-4 h-4 text-[#D0AD55]" />
                  <span>{selectedProperty.bathrooms} Baths</span>
                </span>
              </div>
            )}
            {selectedProperty.landSizeSqm !== undefined && (
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#777F79] font-medium block">Plot Area</span>
                <span className="font-heading font-bold text-lg text-[#F5F5F0] flex items-center gap-1.5 mt-0.5">
                  <Maximize2 className="w-4 h-4 text-[#D0AD55]" />
                  <span>{selectedProperty.landSizeSqm.toLocaleString()} SQM</span>
                </span>
              </div>
            )}
            {selectedProperty.builtAreaSqm !== undefined && (
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#777F79] font-medium block">Floor Space</span>
                <span className="font-heading font-bold text-lg text-[#F5F5F0] flex items-center gap-1.5 mt-0.5">
                  <Maximize2 className="w-4 h-4 text-[#D0AD55]" />
                  <span>{selectedProperty.builtAreaSqm} SQM</span>
                </span>
              </div>
            )}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#777F79] font-medium block">Category</span>
              <span className="font-heading font-semibold text-base text-[#F5F5F0] block mt-0.5">
                {selectedProperty.propertyTypeDescription}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-[#F5F5F0]">Property Description</h3>
            <p className="text-sm text-[#F5F5F0]/90 leading-relaxed font-light">
              {selectedProperty.description}
            </p>
          </div>

          {/* Verified Amenities */}
          {selectedProperty.features.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-[#F5F5F0]">Verified Amenities & Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProperty.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#151B18]/50 border border-[#151B18] flex items-start gap-3 text-xs text-[#F5F5F0]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#123D2B] shrink-0 fill-[#D0AD55]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Title & Important Access Disclosures */}
          <div className="p-6 rounded-2xl bg-[#151B18]/70 border border-[#151B18] space-y-4">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#D0AD55] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D0AD55]" />
              <span>Title & Due Diligence Information</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-[#777F79] w-32 shrink-0">Title Document:</span>
                <span className="text-[#F5F5F0] font-medium">
                  {selectedProperty.titleDocument || 'Title documentation pending formal verification'}
                </span>
              </div>

              {selectedProperty.accessNotes && (
                <div className="flex items-start gap-2">
                  <span className="text-[#777F79] w-32 shrink-0">Access Condition:</span>
                  <span className="text-[#F5F5F0]">{selectedProperty.accessNotes}</span>
                </div>
              )}

              {selectedProperty.importantNotes && (
                <div className="mt-3 p-3 rounded-lg bg-[#080D0B] border border-[#D0AD55]/30 text-xs text-[#F5F5F0]/90 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#D0AD55] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-[#D0AD55]">Listing Disclosure: </strong>
                    {selectedProperty.importantNotes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Enquiry Card (4 cols sticky) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151B18] border border-[#151B18] space-y-6 shadow-2xl">
            {/* Price Box */}
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#777F79] font-medium">
                Advertised Asking Price
              </span>
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F5F5F0] tabular-nums">
                {selectedProperty.formattedPrice}
              </p>
              <p className="text-[11px] text-[#777F79]">
                Listed under Bashir Building Green Estates, Abuja FCT
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2 border-t border-[#080D0B]">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => navigateTo('inspection')}
                className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#080D0B] bg-[#D0AD55] hover:bg-[#deb963] rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#080D0B]" />
                <span>Book an Inspection</span>
              </button>

              <a
                href="tel:+2348112958241"
                className="w-full py-3 px-4 text-xs font-semibold text-[#F5F5F0] bg-[#080D0B] hover:bg-[#151B18] border border-[#151B18] rounded-xl transition-colors flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#D0AD55]" />
                <span>Call +234 811 295 8241</span>
              </a>
            </div>

            {/* Direct Agent Representation Notice */}
            <div className="p-4 rounded-2xl bg-[#080D0B] border border-[#151B18] space-y-2 text-xs">
              <p className="font-heading font-semibold text-[#F5F5F0] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D0AD55]" />
                <span>B.G.E Property Advisory</span>
              </p>
              <p className="text-[#777F79] text-[11px] leading-relaxed">
                Direct engagement with Bashir Building Green Estates. Inspections are conducted in person with a representative.
              </p>
              <p className="text-[11px] text-[#777F79] pt-1 border-t border-[#151B18]">
                Professional fee: Standard 5% agency fee applies upon successful transaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Properties */}
      {relatedProperties.length > 0 && (
        <div className="pt-12 border-t border-[#151B18] space-y-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl text-[#F5F5F0]">
              Related Properties in Abuja
            </h3>
            <p className="text-xs text-[#777F79]">
              Explore other verified residential or land opportunities in similar districts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProperties.map((p) => (
              <BgePropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}

      {/* Copied Toast */}
      {copiedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#123D2B] border border-[#D0AD55]/40 text-[#F5F5F0] px-4 py-2 rounded-xl text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#D0AD55]" />
          <span>Listing link copied to clipboard</span>
        </div>
      )}
    </div>
  );
};
