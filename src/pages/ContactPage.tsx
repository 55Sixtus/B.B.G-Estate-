import React, { useState } from 'react';
import { useBge } from '../context/BgeContext';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Instagram,
  Facebook,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { generateWhatsAppLink } = useBge();

  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [subject, setSubject] = useState('General Property Enquiry');
  const [inquiryText, setInquiryText] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderContact || !inquiryText) return;
    setSent(true);
  };

  const handoffMsg = `Hello Bashir Building Green Estates,
*Name:* ${senderName}
*Contact:* ${senderContact}
*Subject:* ${subject}
*Message:* ${inquiryText}`;

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D0AD55]">
          <span>Direct Communications</span>
          <span aria-hidden="true" className="text-[#777F79]">·</span>
          <span>Abuja, Nigeria</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight">
          Contact Bashir Building Green Estates
        </h1>
        <p className="text-base text-[#777F79] font-light leading-relaxed">
          Connect directly with our property development and acquisition team in Abuja. We are available by telephone, WhatsApp, email, or scheduled in-person consultation.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Telephone */}
        <div className="p-6 rounded-2xl bg-[#151B18]/70 border border-[#151B18] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-[#F5F5F0]">Telephone</h3>
            <p className="text-xs text-[#777F79]">Direct phone call for instant inquiries</p>
          </div>
          <a
            href="tel:+2348112958241"
            className="text-xs font-mono font-bold text-[#F5F5F0] hover:text-[#D0AD55] transition-colors pt-2 block"
          >
            +234 811 295 8241
          </a>
        </div>

        {/* WhatsApp */}
        <div className="p-6 rounded-2xl bg-[#151B18]/70 border border-[#151B18] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-[#F5F5F0]">WhatsApp Line</h3>
            <p className="text-xs text-[#777F79]">Direct messaging & property documents</p>
          </div>
          <a
            href="https://wa.me/2348112958241"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#25D366] hover:underline transition-colors pt-2 block"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* Email */}
        <div className="p-6 rounded-2xl bg-[#151B18]/70 border border-[#151B18] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-[#F5F5F0]">Email Advisory</h3>
            <p className="text-xs text-[#777F79]">Formal proposals & title enquiries</p>
          </div>
          <a
            href="mailto:bgepropertyholding@gmail.com"
            className="text-xs text-[#F5F5F0] hover:text-[#D0AD55] transition-colors truncate pt-2 block"
          >
            bgepropertyholding@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="p-6 rounded-2xl bg-[#151B18]/70 border border-[#151B18] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#123D2B] text-[#D0AD55] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-[#F5F5F0]">Headquarters</h3>
            <p className="text-xs text-[#777F79]">Federal Capital Territory</p>
          </div>
          <span className="text-xs text-[#F5F5F0] pt-2 block">
            Abuja, FCT, Nigeria
          </span>
        </div>
      </div>

      {/* Interactive Contact Form & Social Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form Container (7 cols) */}
        <div className="lg:col-span-7 bg-[#151B18]/70 border border-[#151B18] rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl text-[#F5F5F0]">Send an Online Message</h3>
            <p className="text-xs text-[#777F79]">
              Fill in your inquiry below and optionally handoff to WhatsApp for instantaneous confirmation.
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79]">
                    Phone or Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+234 ... or email"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79]">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B]"
                >
                  <option value="General Property Enquiry">General Property Enquiry</option>
                  <option value="Gwarimpa Terrace Duplex Inquiry">Gwarimpa Terrace Duplex Inquiry</option>
                  <option value="Galadimawa Luxury Home Inquiry">Galadimawa Luxury Home Inquiry</option>
                  <option value="Katampe / Gaduwa / Maitama Land Inquiry">Katampe / Gaduwa / Maitama Land Inquiry</option>
                  <option value="Commercial Properties Inquiry">Commercial Properties Inquiry</option>
                  <option value="Property Owner Representation">Property Owner Seeking Representation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#777F79]">
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for in Abuja..."
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  className="w-full bg-[#080D0B] border border-[#151B18] rounded-xl px-4 py-3 text-xs text-[#F5F5F0] focus:outline-none focus:border-[#123D2B] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] border border-[#123D2B] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4 text-[#D0AD55]" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-[#080D0B] border border-[#123D2B] text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#D0AD55] mx-auto" />
              <div className="space-y-1">
                <h4 className="font-heading font-semibold text-base text-[#F5F5F0]">Inquiry Ready</h4>
                <p className="text-xs text-[#777F79]">
                  Thank you, <strong className="text-[#F5F5F0]">{senderName}</strong>. You can connect right now via WhatsApp to get an immediate reply from our team.
                </p>
              </div>
              <a
                href={generateWhatsAppLink(handoffMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp (+234 811 295 8241)</span>
              </a>
              <div className="pt-2">
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-[#777F79] hover:underline"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Social & Catalog Links */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151B18]/70 border border-[#151B18] space-y-4">
            <h3 className="font-heading font-bold text-base text-[#F5F5F0]">
              Official Digital Channels
            </h3>
            <div className="space-y-3 text-xs">
              <a
                href="https://wa.me/c/2348112958241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080D0B] border border-[#151B18] hover:border-[#123D2B] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-medium text-[#F5F5F0]">WhatsApp Business Catalog</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#777F79]" />
              </a>

              <a
                href="https://instagram.com/bashir_bge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080D0B] border border-[#151B18] hover:border-[#123D2B] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#D0AD55]" />
                  <span className="font-medium text-[#F5F5F0]">Instagram: @bashir_bge</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#777F79]" />
              </a>

              <a
                href="https://www.facebook.com/search/top?q=BGE%20Property%20Holding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080D0B] border border-[#151B18] hover:border-[#123D2B] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span className="font-medium text-[#F5F5F0] group-hover:text-[#D0AD55] transition-colors">
                    Facebook: BGE Property Holding
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#777F79] group-hover:text-[#D0AD55] transition-colors" />
              </a>
            </div>
          </div>

          {/* Direct CEO Consultation Card */}
          <div className="p-5 rounded-3xl bg-[#151B18]/70 border border-[#D0AD55]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D0AD55] shrink-0 bg-[#080D0B] shadow-md">
                <img
                  src="/assets/aistudio/BGE_CEO_portrait_extracted_51d35c5f.png"
                  alt="Bashir — Founder & C.E.O"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D0AD55]">
                  Executive Office
                </span>
                <h4 className="font-heading font-bold text-sm text-[#F5F5F0]">Bashir</h4>
                <p className="text-[11px] text-[#777F79]">Founder & Chief Executive Officer</p>
              </div>
            </div>

            <p className="text-[11px] text-[#777F79] leading-relaxed">
              Seeking confidential high-value land acquisitions or bespoke estate development in Abuja? Connect directly with our Founder.
            </p>

            <a
              href="https://wa.me/2348112958241?text=Hello%20Bashir%2C%20I%20would%20like%20to%20request%20a%20direct%20consultation%20regarding%20property%20development%20in%20Abuja."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#123D2B] hover:bg-[#18523A] rounded-xl transition-colors flex items-center justify-center gap-2 border border-[#123D2B]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Direct WhatsApp with C.E.O</span>
            </a>
          </div>

          {/* Operating Hours & Inspection Notice */}
          <div className="p-6 rounded-3xl bg-[#151B18]/70 border border-[#151B18] space-y-3 text-xs text-[#777F79]">
            <div className="flex items-center gap-2 text-[#D0AD55] font-semibold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Inspection Availability</span>
            </div>
            <p className="leading-relaxed">
              Site inspections are scheduled Monday through Saturday, between 9:00 AM and 5:00 PM. Sunday inspections are arranged by special appointment for out-of-town purchasers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
