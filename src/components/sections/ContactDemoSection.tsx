"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Sparkles,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site.config";

export function ContactDemoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    studentsCount: "100-500",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    // Simulate submission to lead API / storage
    setTimeout(() => {
      const id = `SMX-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(id);

      try {
        const queue = JSON.parse(localStorage.getItem("smarter_inquiries") || "[]");
        queue.push({
          ...formData,
          ticketId: id,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem("smarter_inquiries", JSON.stringify(queue));
      } catch (err) {
        console.warn("Storage err:", err);
      }

      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (e) {
        // Safe fallback
      }
    }, 1100);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#090D1E] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-900/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-900/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Connect With Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build a Better Learning Experience.
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Have questions about curriculum adaptation, teacher training, or pilot trials? Reach out to our academic team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Helplines, WhatsApp & Brochure Desk */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Hotline Card */}
            <div className="p-6 rounded-2xl bg-[#0D1226] border border-slate-800/90 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Brochure Helpline Desk
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-xl font-extrabold text-white hover:text-purple-300 transition-colors"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Speak directly with an EdTech advisor for student enrollment, school institutional packages, or live system demonstrations.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            {/* Email Desk */}
            <div className="p-6 rounded-2xl bg-[#0D1226] border border-slate-800/90 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Academic Inquiries &amp; Partnerships
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-bold text-white hover:text-purple-300 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Send your RFP documents, syllabus inquiries, or bulk institutional pilot requests.
              </p>
            </div>

            {/* Configurable WhatsApp Quick Connect */}
            {siteConfig.contact.isWhatsAppAvailable && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                        Official WhatsApp Desk
                      </span>
                      <span className="text-sm font-bold text-white">Instant Advisory Chat</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Online
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Connect on WhatsApp with our verified academic desk to get immediate trial credentials or share student requirements.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Contact & Inquiries Form */}
          <div className="lg:col-span-7 bg-[#0C1024] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-4">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Our academic coordinator will review your requirements and respond via email or phone promptly.
                </p>
                <div className="inline-block p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300 mb-6">
                  Inquiry Tracking ID: <strong className="text-amber-400">{ticketId}</strong>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        organization: "",
                        studentsCount: "100-500",
                        message: "",
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-white">Send Us a Direct Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Our team provides custom consultations for students, educators, and schools.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/60 text-xs text-rose-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-semibold text-slate-300 mb-1">
                      School, Institution, or Role
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Parent / Delhi Public School"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-students" className="block text-xs font-semibold text-slate-300 mb-1">
                    Number of Students / Children
                  </label>
                  <select
                    id="contact-students"
                    value={formData.studentsCount}
                    onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="1">1 Student (Individual Child)</option>
                    <option value="2-5">2 - 5 Students (Family / Siblings)</option>
                    <option value="50-200">50 - 200 Students (Coaching / Academy)</option>
                    <option value="200-1000">200 - 1,000 Students (School)</option>
                    <option value="1000+">1,000+ Students (Large Institution)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message or Question
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to achieve (e.g. Grade 10 Math preparation, batch pricing, faculty demo)..."
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
