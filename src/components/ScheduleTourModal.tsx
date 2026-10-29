import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, Calendar, Clock, Shield, CheckCircle2, User, Phone, Mail } from 'lucide-react';

export const ScheduleTourModal: React.FC = () => {
  const {
    isTourModalOpen,
    setIsTourModalOpen,
    tourTargetProperty,
    brandSettings,
  } = useBrand();

  const [date, setDate] = useState('2026-11-05');
  const [timeSlot, setTimeSlot] = useState('14:00 (Afternoon Light)');
  const [format, setFormat] = useState<'in-person' | 'virtual'>('in-person');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [ndaAgreed, setNdaAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isTourModalOpen) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isTourModalOpen]);

  if (!isTourModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60">
          <div className="space-y-0.5">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              Private Client Concierge
            </span>
            <h3 className="font-serif text-lg text-neutral-100">Schedule Private Showing</h3>
          </div>
          <button
            onClick={() => setIsTourModalOpen(false)}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Target Property Preview */}
              {tourTargetProperty && (
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3.5">
                  <img
                    src={tourTargetProperty.image}
                    alt={tourTargetProperty.title}
                    className="w-16 h-12 object-cover rounded-lg shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-neutral-200 truncate font-serif">
                      {tourTargetProperty.title}
                    </p>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {tourTargetProperty.address}, {tourTargetProperty.neighborhood}
                    </p>
                    <p className="text-[11px] font-mono text-amber-300 font-medium">
                      {tourTargetProperty.formattedPrice}
                    </p>
                  </div>
                </div>
              )}

              {/* Format Selection */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Showing Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormat('in-person')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      format === 'in-person'
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    Private On-Site Escort
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('virtual')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      format === 'virtual'
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    Live 4K Virtual Walkthrough
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Time Window</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="10:00 (Morning Illumination)">10:00 AM (Morning Light)</option>
                    <option value="14:00 (Afternoon Light)">2:00 PM (Afternoon Sun)</option>
                    <option value="17:30 (Sunset Golden Hour)">5:30 PM (Sunset / Twilight)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Primary Guest / Representative Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Harrington / Vance Family Office"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-neutral-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@familyoffice.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-neutral-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Direct Mobile / Signal</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (310) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-neutral-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Special Accommodations / Security Protocols
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Private security escort, helipad clearance, non-disclosure requirements"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-neutral-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* NDA checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="nda"
                  checked={ndaAgreed}
                  onChange={(e) => setNdaAgreed(e.target.checked)}
                  required
                  className="mt-0.5 rounded border-neutral-700 bg-neutral-900 text-amber-400 focus:ring-0"
                />
                <label htmlFor="nda" className="text-[11px] text-neutral-400 leading-snug">
                  I agree to standard confidential showing protocols and acknowledge that property security coordinates all gate entries.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Shield className="w-4 h-4" />
                <span>Confirm Showing Request</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-neutral-100">Showing Coordinates Secured</h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Your private viewing for{' '}
                  <strong className="text-amber-300">{tourTargetProperty?.title}</strong> on{' '}
                  <strong className="text-white">{date}</strong> at{' '}
                  <strong className="text-white">{timeSlot}</strong> has been received by our Managing Principal.
                </p>
                <p className="text-[11px] text-neutral-500 pt-2">
                  A verification confirmation code and gate access protocol will be transmitted to {email}.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsTourModalOpen(false)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
