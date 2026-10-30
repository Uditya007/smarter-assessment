"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site.config";

export function ContactDemoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      const id = `SMX-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(id);
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch (err) {}
    }, 900);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#090D1E] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Get in Touch</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Let’s Build a Better Learning Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Schedule a personalized walkthrough or speak directly with an educational advisor.
          </p>
        </div>

        <div className="rounded-2xl bg-[#0C1024] border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Advisory Helpline
                </span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-xl sm:text-2xl font-black text-white hover:text-purple-300 transition-colors block"
                >
                  {siteConfig.contact.displayPhone}
                </a>
                <span className="text-xs text-slate-400 block mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Email Support
                </span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-slate-200 hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>

              {siteConfig.contact.isWhatsAppAvailable && (
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7 bg-[#080B1A] rounded-xl border border-slate-800/80 p-5 sm:p-6">
              {submitted ? (
                <div className="py-6 text-center animate-in fade-in duration-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-white mb-1">Inquiry Dispatched!</h4>
                  <p className="text-xs text-slate-300 mb-3">Our academic coordinator will connect with you promptly.</p>
                  <span className="text-xs font-mono text-purple-300">Ref: {ticketId}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <h4 className="text-sm font-bold text-white mb-2">Request a Demonstration</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name *"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number *"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Work or Personal Email *"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="School name, curriculum, or requirements (Optional)..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Submit Demo Request</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
