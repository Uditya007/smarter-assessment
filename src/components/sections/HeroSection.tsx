"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Zap, Target, TrendingUp, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onStartTrial: () => void;
  onBookDemo: () => void;
}

export function HeroSection({ onStartTrial, onBookDemo }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"math" | "science">("math");

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 dark:from-[#070913] dark:via-[#0B0F1E] dark:to-[#070913] transition-colors duration-200">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-sky-500/10 dark:from-purple-800/20 dark:via-indigo-600/15 dark:to-sky-500/15 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/30 text-purple-900 dark:text-purple-200 text-xs font-semibold mb-5 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>AI-Powered Learning &amp; Assessment Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14] mb-5 transition-colors">
              Every Child Can{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 dark:from-amber-300 dark:via-yellow-400 dark:to-amber-500 bg-clip-text text-transparent font-black">
                  Excel
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-amber-500 dark:text-amber-400/70" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                  <path d="M2 9C28 2 72 2 98 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              With the Right Guidance.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-3 transition-colors">
              Personalized learning, instant AI feedback, and smart assessments that turn academic challenges into measurable progress.
            </p>

            {/* Curriculum alignment tag */}
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wide mb-8">
              Designed for CBSE, ICSE &amp; IGCSE learners.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onStartTrial}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-lg shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs dark:text-slate-200 dark:hover:text-white dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-700/80 dark:shadow-none rounded-xl transition-all"
              >
                <span>Book a School Demo</span>
              </button>
            </div>

            {/* 3 Straightforward Benefit Indicators */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-5 border-t border-slate-200 dark:border-slate-800/80 text-xs transition-colors">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Personalized Drills</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Instant AI Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Data-Driven Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, uncluttered product preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 rounded-3xl blur-lg opacity-20 dark:opacity-25" />

              <div className="relative bg-white dark:bg-[#0E1324] border border-slate-200 dark:border-purple-500/30 rounded-2xl p-4 sm:p-5 shadow-xl dark:shadow-2xl backdrop-blur-xl transition-colors duration-200">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-slate-900 dark:text-white">Live Diagnostic Session</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                    CBSE Class 10
                  </span>
                </div>

                {/* Subject Selector Tabs */}
                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("math")}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      activeTab === "math"
                        ? "bg-purple-600 text-white"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Mathematics
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("science")}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      activeTab === "science"
                        ? "bg-purple-600 text-white"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Science
                  </button>
                </div>

                {/* Score & Progress Metric */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {activeTab === "math" ? "Quadratic Equations Mastery" : "Chemical Reactions & Equations"}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      {activeTab === "math" ? "92% Accuracy" : "88% Accuracy"}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-sky-400 rounded-full"
                      style={{ width: activeTab === "math" ? "92%" : "88%" }}
                    />
                  </div>
                </div>

                {/* AI Instant Feedback Snippet */}
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-purple-900 dark:text-purple-300 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>AI Diagnostic Feedback</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                    {activeTab === "math"
                      ? "Great work on discriminant calculations. Next step: practice word problems involving projectile motion."
                      : "Strong command of balancing redox reactions. Recommended: 5-question drill on exothermic energy diagrams."}
                  </p>
                </div>

                {/* Real-time sync badge */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                    Teacher &amp; Parent synced
                  </span>
                  <span>Instant evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
