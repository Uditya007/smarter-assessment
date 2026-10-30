import React from "react";
import { Eye, Target, Zap, Users, Sparkles, CheckCircle2 } from "lucide-react";

export function PrinciplesSection() {
  const principles = [
    {
      title: "Clearer Academic Insights",
      tagline: "Move beyond single percentage scores",
      description:
        "Every assessment is broken down by cognitive domain, syllabus sub-topic, and error category so students and educators know exactly where understanding broke down.",
      icon: Eye,
      accent: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      title: "More Focused Practice",
      tagline: "End the fatigue of repetitive busywork",
      description:
        "Instead of re-solving questions students have already mastered, our diagnostic engine routes study time directly to identified foundational gaps.",
      icon: Target,
      accent: "text-sky-400",
      border: "border-sky-500/30",
    },
    {
      title: "Faster Assessment Workflows",
      tagline: "Eliminate manual grading overhead",
      description:
        "Automated objective marking and configurable subjective rubric evaluation free up faculty hours, allowing teachers to dedicate their energy to high-impact mentoring.",
      icon: Zap,
      accent: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      title: "Better-Informed Learning Support",
      tagline: "Unified context for the whole family",
      description:
        "Parents, teachers, and students look at the same transparent growth trajectory, transforming stressful academic discussions into constructive, data-backed milestones.",
      icon: Users,
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  return (
    <section className="py-24 bg-[#090D1F] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-indigo-950/20 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Pedagogical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed Around Better Learning
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Smarter Assessment is anchored in cognitive educational research, prioritizing genuine mastery, timely diagnostic intervention, and transparent collaboration.
          </p>
        </div>

        {/* 4 Core Pedagogical Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-[#0D1226]/90 border ${p.border} flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${p.accent}`} />
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Principle 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                <div className="text-xs font-semibold text-purple-300 mb-3">{p.tagline}</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-1">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Reviews Framework Notice */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center max-w-2xl mx-auto">
          <span className="text-xs text-slate-400">
            Institutional Feedback Program: Authentic school cohort case studies and verified educator reviews will be published in accordance with institutional data authorization protocols.
          </span>
        </div>
      </div>
    </section>
  );
}
