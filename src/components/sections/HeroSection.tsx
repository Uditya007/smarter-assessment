"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  BrainCircuit,
  CheckCircle2,
  BookOpen,
  Award,
  BarChart3,
  Lightbulb,
} from "lucide-react";

interface HeroSectionProps {
  onStartTrial: () => void;
  onBookDemo: () => void;
}

export function HeroSection({ onStartTrial, onBookDemo }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"math" | "science">("math");

  return (
    <section
      id="home"
      className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070913] via-[#0B0F1E] to-[#070913]"
    >
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-purple-800/25 via-indigo-600/20 to-sky-500/20 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-700/15 blur-[120px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-sky-600/15 blur-[120px] -z-10 pointer-events-none rounded-full" />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-200 text-xs font-semibold shadow-inner mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-sky-300 bg-clip-text text-transparent">
                Next-Gen AI Learning & Assessment Engine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.14] mb-6">
              Every Child Can{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm font-black">
                  Excel
                </span>
                {/* Subtle highlight accent underline */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-amber-400/70"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M2 9C28 2 72 2 98 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              With the Right Guidance.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
              Personalized learning, instant AI feedback, and smart assessments that turn academic challenges into measurable progress.
            </p>

            {/* Supporting Curriculum Text */}
            <p className="text-sm font-medium text-sky-400/95 tracking-wide flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Designed for CBSE, ICSE &amp; IGCSE learners.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onStartTrial}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-purple-500/50 rounded-xl shadow-md backdrop-blur-sm transition-all duration-200"
              >
                <span>Book a School Demo</span>
              </button>
            </div>

            {/* 3 Concise Benefit Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Personalized Learning</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">Adaptive drills per topic</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-300 flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Instant AI Feedback</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">Step-by-step reasoning</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300 flex-shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Data-Driven Growth</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">Measurable academic gains</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Academic Analytics Visualization */}
          <div className="lg:col-span-5 relative">
            {/* Tablet Mockup Wrapper with Depth & Glow */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 rounded-3xl blur-xl opacity-35 animate-pulse -z-10" />

              {/* Tablet Frame */}
              <div className="relative bg-[#0E1324] border border-purple-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/80 backdrop-blur-xl">
                {/* Tablet Top Bar: Status & Subject Switcher */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-3 mb-3.5 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                    <span className="font-semibold text-slate-300 text-xs">Live Session</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-purple-900/50 text-purple-300 border border-purple-700/50 text-[10px]">
                      CBSE Grade 10
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-700/50">
                    <button
                      type="button"
                      onClick={() => setActiveTab("math")}
                      className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors ${
                        activeTab === "math"
                          ? "bg-purple-600 text-white shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Math
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("science")}
                      className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors ${
                        activeTab === "science"
                          ? "bg-sky-600 text-white shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Science
                    </button>
                  </div>
                </div>

                {/* Dashboard Metrics Header */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  <div className="bg-[#141B32] border border-slate-800 rounded-xl p-2.5">
                    <span className="text-[10px] text-slate-400 font-medium block">Overall Score</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl sm:text-2xl font-black text-white">
                        {activeTab === "math" ? "94%" : "91%"}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">+6.4%</span>
                    </div>
                  </div>

                  <div className="bg-[#141B32] border border-slate-800 rounded-xl p-2.5">
                    <span className="text-[10px] text-slate-400 font-medium block">Accuracy Rate</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl sm:text-2xl font-black text-sky-400">
                        {activeTab === "math" ? "88.5%" : "86.0%"}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">high</span>
                    </div>
                  </div>

                  <div className="bg-[#141B32] border border-slate-800 rounded-xl p-2.5">
                    <span className="text-[10px] text-slate-400 font-medium block">Chapters Ready</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl sm:text-2xl font-black text-amber-400">
                        {activeTab === "math" ? "12/14" : "11/13"}
                      </span>
                      <span className="text-[10px] text-slate-400">on track</span>
                    </div>
                  </div>
                </div>

                {/* Realistic SVG Performance Trajectory Chart */}
                <div className="bg-[#141B32] border border-slate-800 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                      <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Weekly Performance Trend</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Past 6 Assessments</span>
                  </div>

                  <div className="h-24 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
                      <line x1="0" y1="75" x2="300" y2="75" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />

                      {/* Area Fill */}
                      <path
                        d={
                          activeTab === "math"
                            ? "M 10,65 Q 60,52 110,42 T 210,24 T 290,12 L 290,75 L 10,75 Z"
                            : "M 10,60 Q 60,58 110,38 T 210,30 T 290,16 L 290,75 L 10,75 Z"
                        }
                        fill="url(#trendFill)"
                        opacity="0.3"
                      />

                      {/* Line */}
                      <path
                        d={
                          activeTab === "math"
                            ? "M 10,65 Q 60,52 110,42 T 210,24 T 290,12"
                            : "M 10,60 Q 60,58 110,38 T 210,30 T 290,16"
                        }
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Data Point Dots */}
                      <circle cx="10" cy={activeTab === "math" ? "65" : "60"} r="3" fill="#818CF8" />
                      <circle cx="110" cy={activeTab === "math" ? "42" : "38"} r="3" fill="#818CF8" />
                      <circle cx="210" cy={activeTab === "math" ? "24" : "30"} r="3" fill="#818CF8" />
                      <circle cx="290" cy={activeTab === "math" ? "12" : "16"} r="4.5" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="2" />

                      <defs>
                        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-400 pt-1">
                    <span>Quiz 1</span>
                    <span>Quiz 2</span>
                    <span>Mid-Term Diagnostic</span>
                    <span>Chapter Test</span>
                    <span className="text-amber-300 font-bold">Latest (94%)</span>
                  </div>
                </div>

                {/* AI Assistant Real-Time Diagnostic Feedback Bubble */}
                <div className="relative bg-gradient-to-r from-purple-950/70 via-indigo-950/60 to-slate-900/90 border border-purple-500/40 rounded-xl p-3 shadow-lg">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                      <BrainCircuit className="w-4 h-4 text-amber-300 animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          Smarter AI Assistant
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-purple-500/20 text-purple-200 border border-purple-400/30">
                            Instant Guidance
                          </span>
                        </span>
                        <span className="text-[10px] text-slate-400">Just now</span>
                      </div>
                      <p className="text-xs text-slate-200 mt-1 leading-snug">
                        {activeTab === "math" ? (
                          <>
                            <strong className="text-emerald-300">Great reasoning!</strong> You solved{" "}
                            <em>Quadratic Equations</em> with 92% accuracy. Let's do 3 rapid practice drills on{" "}
                            <span className="text-amber-300 underline underline-offset-2">Word Problems</span> to lock in full mastery.
                          </>
                        ) : (
                          <>
                            <strong className="text-emerald-300">Concept verified!</strong> Complete mastery on{" "}
                            <em>Electromagnetism</em>. Recommended next: review{" "}
                            <span className="text-sky-300 underline underline-offset-2">Refraction Indices</span> practice drill.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Personalized Practice Recommendation Pill Bar */}
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px]">Recommended Next Step:</span>
                  </div>
                  <button
                    type="button"
                    onClick={onStartTrial}
                    className="text-[11px] font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                  >
                    <span>Launch 5-min Drill</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Floating Badge: Student Engagement */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-slate-900/95 border border-purple-500/40 rounded-xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Confidence Score 9.4/10</div>
                  <div className="text-[10px] text-slate-400">Measured across 18 concepts</div>
                </div>
              </div>

              {/* Floating Badge: Instant AI Marking */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6 bg-slate-900/95 border border-sky-500/40 rounded-xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-400">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Instant Diagnostics</div>
                  <div className="text-[10px] text-slate-400">Sub-second error feedback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
