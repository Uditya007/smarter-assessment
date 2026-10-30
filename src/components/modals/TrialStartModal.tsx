"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, Loader2, BookOpen } from "lucide-react";
import confetti from "canvas-confetti";

interface TrialStartModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanName?: string;
}

export function TrialStartModal({ isOpen, onClose, defaultPlanName = "15-Day Subject Trial" }: TrialStartModalProps) {
  const [formData, setFormData] = useState({
    parentStudentName: "",
    email: "",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0D1226] border border-purple-500/40 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {activated ? (
          <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">15-Day Trial Activated!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4 leading-relaxed">
              Welcome to Smarter Assessment, <strong className="text-white">{formData.parentStudentName}</strong>! Your 15-day complimentary access for{" "}
              <strong className="text-amber-300">{formData.subject} ({formData.curriculum} {formData.grade})</strong> is ready.
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300 mb-6">
              Trial Passcode: <strong className="text-amber-400">{trialId}</strong>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
            >
              Start Diagnostic Quiz Now
            </button>
          </div>
        ) : (
          <form onSubmit={handleStart} className="space-y-4">
            <div className="flex items-center gap-1.5 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Complimentary Access Offer</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Start Your 15-Day Free Trial
            </h3>
            <p className="text-xs text-slate-300">
              Experience AI-guided assessments and personalized practice for one chosen subject. No credit card required upfront.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Student or Parent Full Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.parentStudentName}
                onChange={(e) => setFormData({ ...formData, parentStudentName: e.target.value })}
                placeholder="e.g. Rohit Sharma"
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Mobile Number <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Curriculum</label>
                <select
                  value={formData.curriculum}
                  onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="IGCSE">IGCSE</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Grade</label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Trial Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Configuring Single Subject Sandbox...</span>
                </>
              ) : (
                <>
                  <span>Activate 15-Day Free Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <div className="text-center text-[10px] text-slate-400">
              * Subject to confirmation of the active promotional brochure offer. No automatic charges.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
