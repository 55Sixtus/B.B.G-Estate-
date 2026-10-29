import React, { useState } from 'react';
import { useBge } from '../context/BgeContext';
import { PublicationStatus } from '../types/bge';
import {
  Shield,
  Eye,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Calendar,
  Lock,
  ArrowRight,
  Database,
  ExternalLink,
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { allProperties, updatePropertyStatus, inspectionBookings, navigateTo } = useBge();

  const [activeTab, setActiveTab] = useState<'listings' | 'inspections' | 'backend-docs'>('listings');
  const [filterStatus, setFilterStatus] = useState<'All' | PublicationStatus>('All');
  const [authUnlocked, setAuthUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  // Simple client-side safeguard to prevent accidental public edits
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'bge2026' || passcode === 'bashir' || passcode === 'admin') {
      setAuthUnlocked(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const filtered = allProperties.filter((p) => {
    if (filterStatus === 'All') return true;
    return p.publicationStatus === filterStatus;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
            <Shield className="w-3.5 h-3.5" />
            <span>Internal Management</span>
            <span aria-hidden="true" className="text-[#777F79]">·</span>
            <span>Listing Verification & Due Diligence</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F5F5F0]">
            B.G.E Listing Manager & Verification Portal
          </h1>
          <p className="text-xs text-[#777F79] max-w-2xl leading-relaxed">
            Central repository for Bashir Building Green Estates. Manage active listings, review draft catalog entries awaiting owner verification, and inspect client booking submissions.
          </p>
        </div>

        <button
          onClick={() => navigateTo('home')}
          className="px-4 py-2 text-xs font-medium text-[#777F79] hover:text-[#F5F5F0] bg-[#151B18] rounded-lg border border-[#151B18] transition-colors self-start sm:self-auto"
        >
          View Public Website
        </button>
      </div>

      {/* Access Gate if not unlocked */}
      {!authUnlocked ? (
        <div className="max-w-md mx-auto my-12 p-8 rounded-3xl bg-[#151B18] border border-[#151B18] text-center space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-lg text-[#F5F5F0]">Restricted Manager Access</h3>
            <p className="text-xs text-[#777F79]">
              Enter access code to manage Abuja inventory, toggle draft statuses, and view client submissions.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              placeholder="Enter passcode (e.g. bge2026)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] placeholder:text-[#777F79] focus:outline-none focus:border-[#123D2B] text-center"
            />
            {authError && (
              <p className="text-[11px] text-red-400">Incorrect passcode. Try 'bge2026'</p>
            )}
            <button
              type="submit"
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-xl transition-colors shadow-lg"
            >
              Unlock Verification Panel
            </button>
          </form>

          <p className="text-[10px] text-[#777F79] border-t border-[#080D0B] pt-4">
            Demo passcode: <span className="font-mono text-[#D0AD55]">bge2026</span>
          </p>
        </div>
      ) : (
        /* Unlocked Management Console */
        <div className="space-y-8">
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-[#151B18] pb-3">
            <button
              onClick={() => setActiveTab('listings')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'listings'
                  ? 'bg-[#123D2B] text-[#F5F5F0]'
                  : 'text-[#777F79] hover:text-[#F5F5F0]'
              }`}
            >
              <FileText className="w-4 h-4 text-[#D0AD55]" />
              <span>All Inventory ({allProperties.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('inspections')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'inspections'
                  ? 'bg-[#123D2B] text-[#F5F5F0]'
                  : 'text-[#777F79] hover:text-[#F5F5F0]'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#D0AD55]" />
              <span>Client Inspection Requests ({inspectionBookings.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('backend-docs')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'backend-docs'
                  ? 'bg-[#123D2B] text-[#F5F5F0]'
                  : 'text-[#777F79] hover:text-[#F5F5F0]'
              }`}
            >
              <Database className="w-4 h-4 text-[#D0AD55]" />
              <span>Backend Architecture & Next Steps</span>
            </button>
          </div>

          {/* Tab 1: Listings & Verification Toggles */}
          {activeTab === 'listings' && (
            <div className="space-y-6">
              {/* Filter by publication status */}
              <div className="flex flex-wrap items-center justify-between gap-4 bg-[#151B18]/70 p-4 rounded-2xl border border-[#151B18]">
                <div className="flex items-center gap-2">
                  <span className="text-[#777F79]">Filter Status:</span>
                  {(['All', 'Published', 'Pending verification', 'Draft'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setFilterStatus(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        filterStatus === st
                          ? 'bg-[#123D2B] text-[#F5F5F0] font-bold border border-[#123D2B]'
                          : 'bg-[#080D0B] text-[#777F79] hover:text-[#F5F5F0] border border-[#151B18]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] font-mono text-[#D0AD55]">
                  Showing {filtered.length} of {allProperties.length} items
                </span>
              </div>

              {/* Listings Table / Cards */}
              <div className="space-y-4">
                {filtered.map((prop) => {
                  const isPublished = prop.publicationStatus === 'Published';
                  const isConflict = Boolean(prop.conflictingInfoNote);

                  return (
                    <div
                      key={prop.id}
                      className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                        isPublished
                          ? 'bg-[#151B18]/50 border-[#151B18]'
                          : 'bg-[#151B18]/80 border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-20 h-16 object-cover rounded-xl shrink-0"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                isPublished
                                  ? 'bg-[#123D2B] text-[#25D366] border border-[#123D2B]'
                                  : 'bg-amber-950/80 text-amber-300 border border-amber-800'
                              }`}
                            >
                              {prop.publicationStatus}
                            </span>
                            <span className="text-xs text-[#777F79]">· {prop.district}</span>
                            <span className="text-xs text-[#777F79]">· {prop.category}</span>
                          </div>

                          <h3 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                            {prop.title}
                          </h3>

                          <p className="font-mono font-bold text-xs text-[#D0AD55]">
                            {prop.formattedPrice}
                          </p>

                          {isConflict && (
                            <p className="text-[11px] text-amber-300 flex items-center gap-1.5 pt-1">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>Owner verification needed: {prop.conflictingInfoNote}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Management Controls */}
                      <div className="flex flex-wrap items-center gap-3 shrink-0">
                        {isPublished ? (
                          <button
                            onClick={() => updatePropertyStatus(prop.id, 'Draft')}
                            className="px-3.5 py-2 rounded-lg bg-[#080D0B] hover:bg-amber-950/60 text-amber-300 border border-amber-800/40 text-xs transition-colors"
                          >
                            Unpublish (Move to Draft)
                          </button>
                        ) : (
                          <button
                            onClick={() => updatePropertyStatus(prop.id, 'Published')}
                            className="px-3.5 py-2 rounded-lg bg-[#123D2B] hover:bg-[#18523A] text-[#F5F5F0] border border-[#123D2B] text-xs font-bold transition-colors flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                            <span>Verify & Publish Publicly</span>
                          </button>
                        )}

                        <button
                          onClick={() => navigateTo('property-detail', prop.slug)}
                          className="px-3 py-2 rounded-lg bg-[#080D0B] hover:bg-[#151B18] text-[#F5F5F0] border border-[#151B18] text-xs transition-colors flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#D0AD55]" />
                          <span>Preview</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Inspection Bookings */}
          {activeTab === 'inspections' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#080D0B] border border-[#151B18] text-xs text-[#777F79]">
                These inspection inquiries were logged through the public booking form in this local session. In production, connect Firebase Firestore or PostgreSQL to sync requests in real time across staff devices.
              </div>

              {inspectionBookings.length > 0 ? (
                <div className="space-y-3">
                  {inspectionBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-5 rounded-2xl bg-[#151B18]/70 border border-[#151B18] space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#080D0B] pb-3">
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                            {b.fullName}
                          </h4>
                          <p className="text-xs text-[#D0AD55] font-mono">{b.phoneNumber}</p>
                          {b.email && <p className="text-[11px] text-[#777F79]">{b.email}</p>}
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-[#777F79]">
                            {new Date(b.createdAt).toLocaleDateString()}
                          </span>
                          <p className="text-xs font-medium text-[#25D366]">Status: {b.status}</p>
                        </div>
                      </div>

                      <div className="text-xs text-[#F5F5F0]/90 space-y-1">
                        <p>
                          <strong className="text-[#777F79]">Target Property: </strong>
                          {b.propertyTitle} ({b.propertyLocation})
                        </p>
                        <p>
                          <strong className="text-[#777F79]">Requested Schedule: </strong>
                          {b.preferredDate} at {b.preferredTime}
                        </p>
                        {b.message && (
                          <p className="pt-1 text-[11px] text-[#777F79] italic">
                            "{b.message}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-[#151B18]/40 border border-[#151B18] rounded-2xl p-8 space-y-3">
                  <Calendar className="w-8 h-8 text-[#777F79] mx-auto" />
                  <p className="text-[#F5F5F0] font-semibold text-sm">No Inspection Requests Recorded Yet</p>
                  <p className="text-xs text-[#777F79]">
                    When clients complete the "Book an Inspection" form, their submissions will be logged here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Backend Architecture Documentation */}
          {activeTab === 'backend-docs' && (
            <div className="p-8 rounded-3xl bg-[#151B18]/70 border border-[#151B18] space-y-6 leading-relaxed">
              <h3 className="font-heading font-bold text-lg text-[#F5F5F0] flex items-center gap-2">
                <Database className="w-5 h-5 text-[#D0AD55]" />
                <span>Production Backend & Multi-Device Persistence Roadmap</span>
              </h3>
              <p className="text-xs text-[#777F79]">
                In this version, the central property data layer (`src/data/bgeProperties.ts`) structures all properties A through I with explicit publication statuses (`Published`, `Pending verification`, `Draft`).
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#080D0B] border border-[#151B18] space-y-1">
                  <h4 className="font-semibold text-[#F5F5F0]">1. Persistent Database Options</h4>
                  <p className="text-[#777F79]">
                    To enable Bashir and agents to edit listings from mobile phones without redeploying code, provision Firebase Firestore or Cloud SQL PostgreSQL.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#080D0B] border border-[#151B18] space-y-1">
                  <h4 className="font-semibold text-[#F5F5F0]">2. Media Storage</h4>
                  <p className="text-[#777F79]">
                    Integrate Google Cloud Storage or Firebase Storage bucket for multi-image uploads directly from phone cameras on site.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#080D0B] border border-[#151B18] space-y-1">
                  <h4 className="font-semibold text-[#F5F5F0]">3. Authentication</h4>
                  <p className="text-[#777F79]">
                    Enforce Firebase Authentication or Google Workspace login to restrict administrative controls strictly to verified company accounts.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
