"use client";

import React, { useState } from "react";
import { GraduationCap, Users, Heart, School, CheckCircle2, ArrowRight } from "lucide-react";

interface PersonaSectionsProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export function PersonaSections({ onOpenDemo, onOpenTrial }: PersonaSectionsProps) {
  const [activeTab, setActiveTab] = useState<"students" | "teachers" | "parents" | "schools">("students");

  const personas = {
    students: {
      title: "For Students",
      headline: "Study Smarter. Prepare Better. Achieve More.",
      desc: "Stop memorizing without context. Practice chapter-by-chapter, understand mistakes with step-by-step reasoning, and focus on concepts that need improvement.",
      icon: GraduationCap,
      color: "text-purple-600 dark:text-purple-400",
      ctaText: "Start Student Free Trial",
      action: onOpenTrial,
      highlights: [
        "Chapter-wise practice drills for CBSE, ICSE & IGCSE",
        "Instant step-by-step explanations for every error",
        "Personalized revision queue before school examinations",
        "Timed board exam simulation tests",
      ],
      previewStats: [
        { label: "Practice Accuracy", val: "94.2%" },
        { label: "Chapters Mastered", val: "13 / 14" },
        { label: "Feedback Speed", val: "Instant" },
      ],
    },
    teachers: {
      title: "For Teachers",
      headline: "Less Time Evaluating. More Time Teaching.",
      desc: "Automate grading for objective tests, spot struggling students before unit exams, and access data-backed reports for meaningful parent-teacher meetings.",
      icon: Users,
      color: "text-sky-600 dark:text-sky-400",
      ctaText: "Request Teacher Walkthrough",
      action: onOpenDemo,
      highlights: [
        "100% automated evaluation for MCQs & objective items",
        "Class accuracy histograms and score distribution tables",
        "Automated alerts identifying students needing intervention",
        "1-click export of student performance dossiers for PTMs",
      ],
      previewStats: [
        { label: "Grading Hours Saved", val: "15 hrs/mo" },
        { label: "Class Average", val: "82.4%" },
        { label: "Students Monitored", val: "38 Active" },
      ],
    },
    parents: {
      title: "For Parents",
      headline: "Stay Connected to Your Child’s Learning Journey.",
      desc: "Understand your child's academic performance with clear, jargon-free progress summaries, identified strengths, and specific weekend revision suggestions.",
      icon: Heart,
      color: "text-pink-600 dark:text-pink-400",
      ctaText: "Explore Parent Insights",
      action: onOpenTrial,
      highlights: [
        "Simplified weekly academic summaries on mobile",
        "Real-time visibility into completed tests and quiz scores",
        "Targeted concept recommendations for upcoming school exams",
        "Direct communication options with class teachers",
      ],
      previewStats: [
        { label: "Weekly Growth", val: "+8.5%" },
        { label: "Parent Confidence", val: "Clear View" },
        { label: "Revision Focus", val: "2 Topics" },
      ],
    },
    schools: {
      title: "For Schools",
      headline: "An Intelligent Assessment Platform Built for Modern Schools.",
      desc: "Empower academic coordinators and school principals with centralized performance metrics, standard exam scheduling, and unified teacher-parent communication.",
      icon: School,
      color: "text-amber-600 dark:text-amber-400",
      ctaText: "Book an Institutional Demo",
      action: onOpenDemo,
      highlights: [
        "School-wide cohort analytics across CBSE, ICSE & IGCSE",
        "Standardized exam scheduling & question bank publishing",
        "Granular role-based permissions for faculty and HODs",
        "Dedicated onboarding, teacher training, and ongoing support",
      ],
      previewStats: [
        { label: "Faculty Onboarding", val: "< 48 Hours" },
        { label: "Curricula Supported", val: "CBSE / ICSE / IGCSE" },
        { label: "Support", val: "Dedicated Account Mgr" },
      ],
    },
  };

  const current = personas[activeTab];
  const Icon = current.icon;

  return (
    <section id="stakeholders" className="py-16 md:py-20 bg-slate-100/60 dark:bg-[#070913] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Tailored Solutions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 transition-colors">
            Built for the Entire Learning Community
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            Select a role to see how Smarter Assessment serves each stakeholder.
          </p>
        </div>

        {/* 4 Clean Tabs */}
        <div className="flex items-center justify-center gap-2 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-xl mx-auto mb-10 overflow-x-auto shadow-xs transition-colors">
          {(["students", "teachers", "parents", "schools"] as const).map((tabKey) => {
            const tab = personas[tabKey];
            const TabIcon = tab.icon;
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                type="button"
                onClick={() => setActiveTab(tabKey)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-1 justify-center ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stakeholder Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-purple-500/30 max-w-4xl mx-auto shadow-xl transition-colors duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                <Icon className={`w-4 h-4 ${current.color}`} />
                <span>{current.title}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug transition-colors">
                {current.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors">
                {current.desc}
              </p>

              <div className="space-y-2.5 mb-6">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-200">{h}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={current.action}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md"
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Column: Key Stats Card */}
            <div className="md:col-span-5 bg-slate-50 dark:bg-[#090D1C] rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-3 transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Role Highlights
              </span>
              {current.previewStats.map((st, i) => (
                <div key={i} className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-none transition-colors">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{st.label}</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white mt-0.5 block transition-colors">{st.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
