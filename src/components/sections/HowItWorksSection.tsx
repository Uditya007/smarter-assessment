"use client";

import React, { useState } from "react";
import { CheckCircle2, Cpu, ArrowRight, BookCheck, TrendingUp, Sparkles, FileText, BarChart4, LucideIcon } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  previewBadge: string;
  accentColor: string;
  borderColor: string;
  iconBg: string;
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StepItem[] = [
    {
      number: "01",
      title: "Assess",
      headline: "Chapter-Wise Quizzes & Practice Tests",
      description:
        "Students take chapter-wise quizzes, practice tests, or scheduled assessments configured to their exact syllabus (CBSE, ICSE, or IGCSE).",
      icon: BookCheck,
      details: [
        "Multiple question formats: MCQs, Assertion-Reason, Numerical response",
        "Configurable difficulty: Foundational, Standard, and Advanced",
        "Untimed practice mode or realistic board exam timer mode",
      ],
      previewBadge: "Step 1: Diagnostic Input",
      accentColor: "from-purple-500 to-indigo-600",
      borderColor: "border-purple-500/50",
      iconBg: "bg-purple-950/80 text-purple-300",
    },
    {
      number: "02",
      title: "Analyze",
      headline: "AI Error Matrix & Gap Identification",
      description:
        "AI evaluates answers and identifies strengths, weaknesses, and knowledge gaps with cognitive precision down to specific sub-topics.",
      icon: Cpu,
      details: [
        "Instant answer verification without manual marking delays",
        "Cognitive misconception classification (calculation vs concept error)",
        "Time-per-question behavioral analytics to spot hesitation",
      ],
      previewBadge: "Step 2: AI Diagnostic Engine",
      accentColor: "from-indigo-500 to-sky-600",
      borderColor: "border-indigo-500/50",
      iconBg: "bg-indigo-950/80 text-indigo-300",
    },
    {
      number: "03",
      title: "Improve",
      headline: "Targeted Explanations & Personalized Practice",
      description:
        "Students receive explanations, recommendations, and targeted practice designed specifically to reinforce concepts they found challenging.",
      icon: Sparkles,
      details: [
        "Step-by-step reasoning guides that clarify the 'Why' behind mistakes",
        "Adaptive 3-to-5 question micro-drills to re-test weak spots",
        "Revision priority queue so study time is never wasted",
      ],
      previewBadge: "Step 3: Adaptive Remediation",
      accentColor: "from-sky-500 to-emerald-600",
      borderColor: "border-sky-500/50",
      iconBg: "bg-sky-950/80 text-sky-300",
    },
    {
      number: "04",
      title: "Track Progress",
      headline: "Unified Performance Trajectory",
      description:
        "Students, teachers, and parents can review performance reports and improvement over time through transparent, actionable dashboards.",
      icon: TrendingUp,
      details: [
        "Cumulative mastery indicators across each chapter & subject",
        "Teacher gradebook summaries with cohort comparative distributions",
        "Reassuring parent summaries highlighting weekly growth milestones",
      ],
      previewBadge: "Step 4: Continuous Growth",
      accentColor: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-500/50",
      iconBg: "bg-amber-950/80 text-amber-300",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#070913] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-purple-900/15 via-indigo-900/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>The Smarter Learning Loop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            A continuous, intelligent cycle that turns everyday assessment into measurable academic mastery.
          </p>
        </div>

        {/* Step Indicator Navigation (Desktop Horizontal Process Flow) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-10 relative">
          {/* Connecting line behind steps */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-800 -translate-y-1/2 -z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`group relative z-10 p-5 rounded-2xl text-left transition-all duration-300 flex flex-col items-start ${
                  isActive
                    ? "bg-[#11172E] border-2 border-purple-500 shadow-xl shadow-purple-950/50 scale-[1.02]"
                    : "bg-[#0C1021]/80 border border-slate-800/90 hover:border-slate-700 hover:bg-[#10152B]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                      isActive
                        ? "bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/40"
                        : "bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      isActive ? "text-purple-300" : "text-slate-400"
                    }`}
                  >
                    STEP {step.number}
                  </span>
                </div>

                <div className="text-lg font-bold text-white mb-1">{step.title}</div>
                <div className="text-xs text-slate-400 line-clamp-2">{step.description}</div>

                {isActive && (
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-sky-400">
                    <span>Active Stage View</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Step Detail Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#0E1428] via-[#111833] to-[#0D1226] border border-purple-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-900/60 border border-purple-500/40 text-purple-200">
                  {steps[activeStep].previewBadge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Phase {activeStep + 1} of 4
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                {steps[activeStep].headline}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              {/* Feature Bullet Points */}
              <div className="space-y-3 mb-6">
                {steps[activeStep].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Next: {steps[(activeStep + 1) % steps.length].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Simulated Output for Current Step */}
            <div className="lg:col-span-5 bg-[#090D1C] rounded-xl border border-slate-800 p-5 shadow-inner">
              {activeStep === 0 && (
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="font-bold text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-400" />
                      Class 10 CBSE Math Diagnostic
                    </span>
                    <span className="text-slate-400 text-[11px]">Question 4/15</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200 font-medium">
                    "If α and β are the zeroes of the quadratic polynomial f(x) = x² - 5x + 6, find the value of α² + β²."
                  </div>
                  <div className="space-y-2">
                    {["A) 13", "B) 25", "C) 19", "D) 12"].map((opt, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg border text-xs font-medium flex items-center justify-between transition-colors ${
                          i === 0
                            ? "bg-purple-950/60 border-purple-500/60 text-purple-200 font-bold"
                            : "bg-slate-900/50 border-slate-800/80 text-slate-400"
                        }`}
                      >
                        <span>{opt}</span>
                        {i === 0 && <span className="text-[10px] text-amber-300">Selected Option</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-[11px] text-slate-400 text-center pt-1">
                    Instant answer verification upon submission
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-sky-400" />
                      Diagnostic Analysis Breakdown
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Evaluated in 0.18s
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                    <span className="text-xs font-bold text-emerald-400 block mb-1">
                      ✓ Correct Answer Confirmed: 13
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Method: α + β = 5, αβ = 6. Identity: (α + β)² - 2αβ = 25 - 12 = 13.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Concept Mastery:</span>
                      <span className="text-white font-bold">Algebraic Identities (92%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Response Speed:</span>
                      <span className="text-emerald-400 font-bold">38s (Pacing: Optimal)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cognitive Domain:</span>
                      <span className="text-purple-300 font-bold">Application &amp; Synthesis</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      Remediation Plan Generated
                    </span>
                    <span className="text-slate-400 text-[10px]">Adaptive Drill</span>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-500/30">
                    <span className="text-xs font-bold text-white">Recommended Practice Drills:</span>
                    <p className="text-[11px] text-purple-200 mt-1">
                      Based on recent assessments, practice 3 questions on <strong>Word Problems on Quadratic Roots</strong> to push mastery from 84% to 95%.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">1. Speed Drill: Sum &amp; Product Relations</span>
                      <span className="text-[10px] text-emerald-400 font-bold">Ready (3 Qs)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">2. Deep Dive: Discriminant Sign Analysis</span>
                      <span className="text-[10px] text-sky-400 font-bold">Ready (4 Qs)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <BarChart4 className="w-4 h-4 text-emerald-400" />
                      Live Stakeholder Trajectory
                    </span>
                    <span className="text-emerald-400 font-bold text-xs">+8.2% Growth</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Student Self-Rating:</span>
                      <span className="text-white font-bold">High Academic Confidence</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-emerald-400 h-2 rounded-full w-[88%]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block">Teacher Summary</span>
                      <strong className="text-white">Ready for Unit Test</strong>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block">Parent Update</span>
                      <strong className="text-white">Consistent Daily Effort</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile View: Stacked process accordion buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4 lg:hidden">
          {steps.map((st, i) => (
            <button
              key={st.number}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`p-2.5 rounded-xl text-left border text-xs font-bold ${
                activeStep === i
                  ? "bg-purple-900/60 border-purple-500 text-white"
                  : "bg-slate-900 border-slate-800 text-slate-400"
              }`}
            >
              Step {st.number}: {st.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
