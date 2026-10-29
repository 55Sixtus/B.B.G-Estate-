import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, Check, RotateCcw, Building, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export const BrandCustomizerModal: React.FC = () => {
  const {
    isCustomizerOpen,
    setIsCustomizerOpen,
    brandSettings,
    updateBrandSettings,
    resetBrandSettings,
  } = useBrand();

  const [formState, setFormState] = useState({ ...brandSettings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isCustomizerOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBrandSettings(formState);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsCustomizerOpen(false);
    }, 1000);
  };

  const handleReset = () => {
    resetBrandSettings();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsCustomizerOpen(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-serif text-lg text-neutral-100">Brand Identity & Details Editor</h3>
              <p className="text-[11px] text-neutral-400">
                Customize with your real estate company information anytime.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6 flex-1 text-xs">
          <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-neutral-200 space-y-1">
            <p className="font-medium text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Brand Customizer</span>
            </p>
            <p className="text-[11px] text-neutral-400">
              Enter any details you already have (brand name, telephone, headquarters address, cities). You can also share them directly in the chat, and we will tailor everything for you!
            </p>
          </div>

          {/* Core Brand Identity */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-neutral-200 border-b border-neutral-900 pb-2">
              Brand Wordmark & Tagline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-neutral-400 font-medium">Brand Name</label>
                <input
                  type="text"
                  required
                  value={formState.brandName}
                  onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-neutral-400 font-medium">Tagline / Motto</label>
                <input
                  type="text"
                  value={formState.tagline}
                  onChange={(e) => setFormState({ ...formState, tagline: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-neutral-400 font-medium">Hero Headline</label>
              <input
                type="text"
                value={formState.heroHeadline}
                onChange={(e) => setFormState({ ...formState, heroHeadline: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1">
              <label className="text-neutral-400 font-medium">Hero Subtitle</label>
              <textarea
                rows={2}
                value={formState.heroSubheadline}
                onChange={(e) => setFormState({ ...formState, heroSubheadline: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-neutral-200 border-b border-neutral-900 pb-2">
              Contact & Representation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-neutral-400 font-medium flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>Direct Telephone</span>
                </label>
                <input
                  type="text"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-neutral-400 font-medium flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-amber-400" />
                  <span>Concierge Email</span>
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-neutral-400 font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>Headquarters Office Address</span>
              </label>
              <input
                type="text"
                value={formState.officeAddress}
                onChange={(e) => setFormState({ ...formState, officeAddress: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-100 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Proof Strip Metrics */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-neutral-200 border-b border-neutral-900 pb-2">
              Track Record Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1">
                <label className="text-neutral-400 font-medium">Volume Closed</label>
                <input
                  type="text"
                  value={formState.volumeClosed}
                  onChange={(e) => setFormState({ ...formState, volumeClosed: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-neutral-100"
                />
              </div>
              <div className="space-y-1">
                <label className="text-neutral-400 font-medium">List/Sale Ratio</label>
                <input
                  type="text"
                  value={formState.listToSaleRatio}
                  onChange={(e) => setFormState({ ...formState, listToSaleRatio: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-neutral-100"
                />
              </div>
              <div className="space-y-1">
                <label className="text-neutral-400 font-medium">Days on Market</label>
                <input
                  type="text"
                  value={formState.daysOnMarket}
                  onChange={(e) => setFormState({ ...formState, daysOnMarket: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-neutral-100"
                />
              </div>
              <div className="space-y-1">
                <label className="text-neutral-400 font-medium">Active Portfolio</label>
                <input
                  type="text"
                  value={formState.exclusiveListingsCount}
                  onChange={(e) => setFormState({ ...formState, exclusiveListingsCount: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-neutral-100"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCustomizerOpen(false)}
                className="px-4 py-2 text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-900" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>Apply Changes</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
