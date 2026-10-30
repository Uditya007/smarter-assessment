"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, BookOpen, Clock } from "lucide-react";
import confetti from "canvas-confetti";

interface TrialStartModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanName?: string;
}

export function TrialStartModal({
  isOpen,
  onClose,
  defaultPlanName = "15-Day Subject Trial",
}: TrialStartModalProps) {
  const [formData, setFormData] = useState({
    parentStudentName: "",
    phone: "",
    curriculum: "CBSE",
    grade: "Grade 10",
    subject: "Mathematics",
  });

  const [loading, setLoading] = useState(false);
  const [activated, setActivated] = useState(false);
  const [trialId, setTrialId] = useState("");

  if (!isOpen) return null;

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const id = `TRL-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrialId(id);

      try {
        const trials = JSON.parse(localStorage.getItem("smarter_trials") || "[]");
        trials.push({ ...formData, trialId: id, timestamp: new Date().toISOString() });
        localStorage.setItem("smarter_trials", JSON.stringify(trials));
      } catch (err) {
        console.warn(err);
      }

      setLoading(false);
      setActivated(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
        });
      } catch (e) {
        // Safe fallback
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-purple-500/40 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden transition-colors duration-200">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {activated ? (
          <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">15-Day Trial Activated!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-4 leading-relaxed">
              Welcome to Smarter Assessment, <strong className="text-slate-900 dark:text-white">{formData.parentStudentName}</strong>! Your 15-day complimentary access for{" "}
              <strong className="text-amber-600 dark:text-amber-300">{formData.subject} ({formData.curriculum} {formData.grade})</strong> is ready.
            </p>
            <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-purple-700 dark:text-purple-300 mb-6">
              Trial Passcode: <strong className="text-amber-600 dark:text-amber-400">{trialId}</strong>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md"
            >
              Start Diagnostic Quiz Now
            </button>
          </div>
        ) : (
          <form onSubmit={handleStart} className="space-y-4">
            <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Complimentary Access Offer</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Start Your 15-Day Free Trial
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Experience AI-guided assessments and personalized practice for one chosen subject. No credit card required upfront.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Student or Parent Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.parentStudentName}
                onChange={(e) => setFormData({ ...formData, parentStudentName: e.target.value })}
                placeholder="e.g. Rohit Sharma"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                WhatsApp / Mobile Number <span className="text-amber-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Curriculum
                </label>
                <select
                  value={formData.curriculum}
                  onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="IGCSE">Cambridge IGCSE</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Class / Grade
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10 (Board)</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12 (Board)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Trial Subject (15 Days Complimentary)
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-base sm:text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="Mathematics">Mathematics (Complete Chapters)</option>
                <option value="Science / Physics">Science / Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English Literature & Language">English Language & Literature</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Generating Diagnostic Access...</span>
                ) : (
                  <>
                    <span>Activate 15-Day Complimentary Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                Zero auto-debit
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
