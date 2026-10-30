"use client";

import React, { useState } from "react";
import { X, Calendar, CheckCircle2, Loader2, Send, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import confetti from "canvas-confetti";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoBookingModal({ isOpen, onClose }: DemoBookingModalProps) {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    workEmail: "",
    phone: "",
    numberOfStudents: "500-1000",
    curriculum: "CBSE",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const generatedRef = `SMA-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);

      try {
        const stored = JSON.parse(localStorage.getItem("smarter_demo_bookings") || "[]");
        stored.push({
          ...formData,
          bookingRef: generatedRef,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem("smarter_demo_bookings", JSON.stringify(stored));
      } catch (err) {
        console.warn(err);
      }

      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-[#106FE2]/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto transition-colors duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#106FE2]/15 border border-[#106FE2]/30 text-[#106FE2] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Demonstration Requested!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-4">
              Our academic coordinator will reach out to schedule a live demonstration for <strong className="text-slate-900 dark:text-white">{formData.schoolName}</strong> within 24 hours.
            </p>
            <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-[#106FE2] mb-6">
              Reference ID: <strong className="text-[#FE730A]">{bookingRef}</strong>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#FE730A] hover:bg-[#E56300] text-white font-bold text-xs shadow-md transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-[#FE730A] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Institutional Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Book a School Demo</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              See how Smarter Assessment integrates with CBSE, ICSE, and IGCSE classes to save teacher grading hours.
            </p>

            {error && (
              <div className="p-2.5 rounded-lg bg-[#FE730A]/10 border border-[#FE730A]/30 text-xs text-[#FE730A] dark:text-[#FE730A]">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  School / Institution <span className="text-[#FE730A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  placeholder="School Name"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Contact Person <span className="text-[#FE730A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="Name & Designation"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Work Email <span className="text-[#FE730A]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="email@school.edu"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number <span className="text-[#FE730A]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Student Cohort Size
                </label>
                <select
                  value={formData.numberOfStudents}
                  onChange={(e) => setFormData({ ...formData, numberOfStudents: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#106FE2] transition-colors"
                >
                  <option value="100-500">100 - 500 Students</option>
                  <option value="500-1000">500 - 1,000 Students</option>
                  <option value="1000-2500">1,000 - 2,500 Students</option>
                  <option value="2500+">2,500+ Students</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Primary Curriculum
                </label>
                <select
                  value={formData.curriculum}
                  onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#106FE2] transition-colors"
                >
                  <option value="CBSE">CBSE (National)</option>
                  <option value="ICSE">ICSE / ISC</option>
                  <option value="IGCSE">Cambridge IGCSE</option>
                  <option value="Multiple">Multiple Curricula</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Specific Objectives or Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. Seeking automated MCQ evaluation and term progress tracking for Grade 9 & 10."
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#106FE2] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#FE730A] hover:bg-[#E56300] shadow-md shadow-[#FE730A]/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Session...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm School Demo Booking</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Direct Hotline:</span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[#106FE2] font-bold hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#FE730A]" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
