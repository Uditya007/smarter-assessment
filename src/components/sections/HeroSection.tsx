"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Zap, Target, TrendingUp, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onStartTrial: () => void;
  onBookDemo: () => void;
}

export function HeroSection({ onStartTrial, onBookDemo }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 dark:from-[#070913] dark:via-[#0A0E22] dark:to-[#070913] transition-colors duration-200">
      {/* Background Glow (Brand Blue & Subtle Orange) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#106FE2]/15 via-blue-600/10 to-[#FE730A]/10 dark:from-[#106FE2]/25 dark:via-blue-800/15 dark:to-[#FE730A]/15 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-[#106FE2]/30 text-[#106FE2] dark:text-blue-300 text-xs font-semibold mb-5 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#FE730A] animate-pulse" />
              <span>AI-Powered Learning &amp; Assessment Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14] mb-5 transition-colors">
              Every Child Can{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#FE730A] to-[#FF8C33] bg-clip-text text-transparent font-black">
                  Excel
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#FE730A]" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
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
            <p className="text-xs font-semibold text-[#106FE2] tracking-wide mb-8">
              Designed for CBSE, ICSE &amp; IGCSE learners.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onStartTrial}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FE730A] hover:bg-[#E56300] rounded-xl shadow-lg shadow-[#FE730A]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-[#106FE2] bg-white hover:bg-blue-50/30 border border-slate-300 shadow-xs dark:text-slate-200 dark:hover:text-white dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-700/80 dark:shadow-none rounded-xl transition-all"
              >
                <span>Book a School Demo</span>
              </button>
            </div>

            {/* 3 Straightforward Benefit Indicators */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-5 border-t border-slate-200 dark:border-slate-800/80 text-xs transition-colors">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#106FE2] flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Personalized Drills</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FE730A] flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Instant AI Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#106FE2] flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Data-Driven Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Product Showcase with Student in Action */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#106FE2] to-[#FE730A] rounded-3xl blur-xl opacity-25 dark:opacity-35" />

              {/* Card Container */}
              <div className="relative bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-[#106FE2]/30 rounded-3xl p-3 sm:p-3.5 shadow-2xl overflow-hidden transition-colors duration-200">
                {/* Real Student Photograph */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/student-learning-app.jpg"
                    alt="Student using Smarter Assessment diagnostic practice app on mobile"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Subtle Dark Vignette at bottom for badge legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#070913]/90 backdrop-blur-md border border-slate-200/80 dark:border-[#106FE2]/40 shadow-lg text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#FE730A] animate-pulse" />
                    <span className="font-bold text-slate-900 dark:text-white">Live Diagnostic Session</span>
                    <span className="text-[10px] font-semibold text-[#106FE2] bg-blue-50 dark:bg-blue-950/70 px-1.5 py-0.5 rounded border border-blue-200 dark:border-[#106FE2]/30">
                      CBSE Grade 5
                    </span>
                  </div>

                  {/* Bottom-Right Floating Glass Badge */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/95 dark:bg-[#070913]/90 backdrop-blur-md border border-slate-200/80 dark:border-[#106FE2]/40 shadow-xl text-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#106FE2] text-white flex items-center justify-center font-black text-xs shadow-xs">
                      94%
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Concept Mastery</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Instant AI Feedback</div>
                    </div>
                  </div>

                  {/* Bottom-Left Floating Pill */}
                  <div className="hidden sm:flex absolute bottom-4 left-4 z-10 items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#FE730A]" />
                    <span>Interactive Student Portal</span>
                  </div>
                </div>

                {/* Under-Image Micro Bar */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#106FE2]" />
                    Adaptive quizzes on phone, tablet &amp; web
                  </span>
                  <span className="text-[11px] font-bold text-[#FE730A]">CBSE • ICSE • IGCSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
