"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
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
    <section id="contact" className="py-16 md:py-20 bg-white dark:bg-[#090D1E] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#106FE2]">Get in Touch</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 transition-colors">
            Let’s Build a Better Learning Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            Schedule a personalized walkthrough or speak directly with an educational advisor.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 dark:bg-[#0C1024] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg dark:shadow-xl transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Advisory Helpline
                </span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-[#106FE2] inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#FE730A]" />
                  <span>{siteConfig.contact.displayPhone}</span>
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Mon – Sat, 9:00 AM – 7:00 PM IST
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#106FE2] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-[#106FE2]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div>
                  Email: <strong className="text-slate-900 dark:text-white">{siteConfig.contact.email}</strong>
                </div>
                <div>
                  Curricula: <span className="text-slate-700 dark:text-slate-300">CBSE • ICSE • Cambridge IGCSE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Callback Request Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#080B1A] p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-200">
              {submitted ? (
                <div className="py-6 text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#106FE2] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Inquiry Received</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-3">
                    An educational coordinator will contact <strong className="text-slate-900 dark:text-white">{formData.phone}</strong> shortly.
                  </p>
                  <span className="text-[11px] font-mono text-[#106FE2] dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded border border-blue-200 dark:border-[#106FE2]/30">
                    Ref ID: {ticketId}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Request an Educational Walkthrough</h4>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Role / Requirement
                    </label>
                    <input
                      type="text"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Parent of Class 9 student / School Coordinator"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#FE730A] hover:bg-[#E56300] shadow-md shadow-[#FE730A]/25 flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Schedule Walkthrough</span>
                      </>
                    )}
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
