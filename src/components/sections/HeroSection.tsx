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
    <section id="home" className="relative pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#070913] via-[#0B0F1E] to-[#070913]">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-800/20 via-indigo-600/15 to-sky-500/15 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-200 text-xs font-semibold mb-5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI-Powered Learning &amp; Assessment Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.14] mb-5">
              Every Child Can{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-black">
                  Excel
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-amber-400/70" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                  <path d="M2 9C28 2 72 2 98 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              With the Right Guidance.
            </h1>

            {/* Subheadline: Short and punchy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-3">
              Personalized learning, instant AI feedback, and smart assessments that turn academic challenges into measurable progress.
            </p>

            {/* Curriculum alignment tag */}
            <p className="text-xs font-semibold text-sky-400 tracking-wide mb-8">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
              >
                <span>Book a School Demo</span>
              </button>
            </div>

            {/* 3 Straightforward Benefit Indicators */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-5 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="font-semibold text-slate-300">Personalized Drills</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="font-semibold text-slate-300">Instant AI Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-slate-300">Data-Driven Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, uncluttered product preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 rounded-3xl blur-lg opacity-25" />

              <div className="relative bg-[#0E1324] border border-purple-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-white">Live Diagnostic Session</span>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setActiveTab("math")}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                        activeTab === "math" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Math
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("science")}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                        activeTab === "science" ? "bg-sky-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Science
                    </button>
                  </div>
                </div>

                {/* 2 Key Metrics */}
                <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                  <div className="bg-[#141B32] border border-slate-800 rounded-xl p-3">
                    <span className="text-[10px] text-slate-400 block font-medium">Mastery Score</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-white">{activeTab === "math" ? "94%" : "91%"}</span>
                      <span className="text-xs text-emerald-400 font-bold">+6.4%</span>
                    </div>
                  </div>

                  <div className="bg-[#141B32] border border-slate-800 rounded-xl p-3">
                    <span className="text-[10px] text-slate-400 block font-medium">Accuracy Rate</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-sky-400">{activeTab === "math" ? "88.5%" : "86.0%"}</span>
                      <span className="text-xs text-slate-400">High</span>
                    </div>
                  </div>
                </div>

                {/* SVG Progress Graph */}
                <div className="bg-[#141B32] border border-slate-800 rounded-xl p-3 mb-3.5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-300 mb-2">
                    <span>Performance Trajectory</span>
                    <span className="text-emerald-400 font-bold">Past 6 Quizzes</span>
                  </div>
                  <div className="h-20 w-full">
                    <svg className="w-full h-full" viewBox="0 0 300 70">
                      <path
                        d={activeTab === "math" ? "M 10,55 Q 80,45 150,30 T 290,12" : "M 10,52 Q 80,50 150,32 T 290,16"}
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="290" cy={activeTab === "math" ? "12" : "16"} r="4" fill="#FBBF24" />
                    </svg>
                  </div>
                </div>

                {/* AI Feedback Bubble */}
                <div className="bg-purple-950/40 border border-purple-500/30 rounded-xl p-3 text-xs flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 leading-snug">
                    <strong className="text-white">AI Diagnostic:</strong> Great mastery on{" "}
                    <em>{activeTab === "math" ? "Quadratic Equations" : "Electromagnetism"}</em>. Recommended next: 3 rapid practice drills to solidify retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
