import React, { useState } from 'react';
import { useBge } from '../context/BgeContext';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const InspectionPage: React.FC = () => {
  const { publishedProperties, selectedProperty, addInspectionBooking, generateInspectionWhatsAppLink } = useBge();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [propertyId, setPropertyId] = useState(selectedProperty?.id || publishedProperties[0]?.id || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);

  const selectedTarget = publishedProperties.find((p) => p.id === propertyId) || publishedProperties[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Valid phone number is required';
    } else if (phoneNumber.trim().length < 8) {
      errs.phoneNumber = 'Please enter a valid telephone number';
    }
    if (!preferredDate) {
      errs.preferredDate = 'Please select a preferred inspection date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const booking = addInspectionBooking({
      fullName,
      phoneNumber,
      email: email.trim() || undefined,
      propertyId: selectedTarget.id,
      propertyTitle: selectedTarget.title,
      propertyLocation: selectedTarget.location,
      preferredDate,
      preferredTime,
      message: message.trim() || undefined,
    });

    setSubmittedBooking(booking);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
    setPreferredDate('');
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title & Context */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
          <span>Schedule On-Site Viewing</span>
          <span aria-hidden="true" className="text-[#777F79]">·</span>
          <span>Abuja, Nigeria</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F5F5F0] tracking-tight">
          Book a Property Inspection
        </h1>
        <p className="text-sm text-[#777F79] max-w-2xl leading-relaxed">
          Request an accompanied on-site inspection for any of our available residential duplexes, land plots, or commercial spaces in Abuja.
        </p>
      </div>

      {!submittedBooking ? (
        <div className="bg-[#151B18]/70 border border-[#151B18] rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          {/* Important Appointment Notice */}
          <div className="p-4 rounded-xl bg-[#080D0B] border border-[#D0AD55]/30 text-xs text-[#777F79] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D0AD55] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#F5F5F0]">Important Note: </strong>
              Submitting this enquiry is a viewing request, not an automatic confirmation. A representative from Bashir Building Green Estates will contact you via telephone or WhatsApp to verify property availability and confirm the final time slot.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-xs">
            {/* Property Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#D0AD55]" />
                <span>Select Property for Inspection *</span>
              </label>
              <select
                value={propertyId}
                onChange={(e) => setPropertyId(e.target.value)}
                className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
              >
                {publishedProperties.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {p.formattedPrice} ({p.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Property Preview Mini-Card */}
            {selectedTarget && (
              <div className="p-4 rounded-xl bg-[#080D0B] border border-[#151B18] flex items-center gap-4">
                <img
                  src={selectedTarget.image}
                  alt={selectedTarget.title}
                  className="w-20 h-16 object-cover rounded-lg shrink-0"
                />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-semibold uppercase text-[#D0AD55] tracking-wider">
                    {selectedTarget.category} · {selectedTarget.district}
                  </span>
                  <p className="font-heading font-semibold text-sm text-[#F5F5F0]">
                    {selectedTarget.title}
                  </p>
                  <p className="text-xs font-mono font-bold text-[#F5F5F0]">
                    {selectedTarget.formattedPrice}
                  </p>
                </div>
              </div>
            )}

            {/* Client Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D0AD55]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ibrahim Abubakar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-[#080D0B] border rounded-xl px-4 py-3 text-xs text-[#F5F5F0] placeholder:text-[#777F79] focus:outline-none ${
                    errors.fullName ? 'border-red-500' : 'border-[#151B18] focus:border-[#123D2B]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D0AD55]" />
                  <span>Phone Number (Call / WhatsApp) *</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +234 800 000 0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`w-full bg-[#080D0B] border rounded-xl px-4 py-3 text-xs text-[#F5F5F0] placeholder:text-[#777F79] focus:outline-none ${
                    errors.phoneNumber ? 'border-red-500' : 'border-[#151B18] focus:border-[#123D2B]'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D0AD55]" />
                  <span>Email Address (Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] placeholder:text-[#777F79] focus:outline-none focus:border-[#123D2B]"
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D0AD55]" />
                    <span>Date *</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className={`w-full bg-[#080D0B] border rounded-xl px-3 py-2.5 text-xs text-[#F5F5F0] focus:outline-none ${
                      errors.preferredDate ? 'border-red-500' : 'border-[#151B18] focus:border-[#123D2B]'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D0AD55]" />
                    <span>Time Window</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-3 py-2.5 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79]">
                Additional Notes or Specific Questions
              </label>
              <textarea
                rows={3}
                placeholder="Mention any specific title inquiries, access preferences, or accompanying surveyors..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] placeholder:text-[#777F79] focus:outline-none focus:border-[#123D2B] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Inspection Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#D0AD55]" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Successful Submission & WhatsApp Handoff */
        <div className="p-8 sm:p-12 rounded-3xl bg-[#151B18] border border-[#123D2B] text-center space-y-6 shadow-2xl">
          <div className="w-14 h-14 rounded-full bg-[#123D2B] text-[#D0AD55] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="font-heading font-extrabold text-2xl text-[#F5F5F0]">
              Inspection Request Prepared
            </h2>
            <p className="text-xs text-[#777F79] leading-relaxed">
              Thank you, <strong className="text-[#F5F5F0]">{submittedBooking.fullName}</strong>. Your inspection enquiry for{' '}
              <strong className="text-[#D0AD55]">{submittedBooking.propertyTitle}</strong> is ready. Because viewing appointments are confirmed directly with our field representatives, tap below to dispatch your booking details via WhatsApp.
            </p>
          </div>

          {/* WhatsApp Handoff CTA */}
          <div className="p-6 rounded-2xl bg-[#080D0B] border border-[#151B18] max-w-md mx-auto space-y-3">
            <p className="font-semibold text-xs text-[#F5F5F0] flex items-center justify-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Instant WhatsApp Handoff</span>
            </p>
            <p className="text-[11px] text-[#777F79] leading-relaxed">
              To expedite your booking immediately, click below to open WhatsApp with your prefilled appointment details sent directly to the B.G.E inspection team.
            </p>
            <a
              href={generateInspectionWhatsAppLink(submittedBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Enquiry via WhatsApp (+234 811 295 8241)</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="text-xs text-[#777F79] hover:text-[#D0AD55] underline transition-colors"
            >
              Submit another inspection enquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
