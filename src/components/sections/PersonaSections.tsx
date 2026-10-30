"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BrainCircuit,
  Users,
  Clock,
  Award,
  Sparkles,
  Heart,
  ShieldCheck,
  FileSpreadsheet,
  HelpCircle,
} from "lucide-react";

interface PersonaSectionsProps {
  onExploreStudents: () => void;
  onExploreTeachers: () => void;
  onExploreParents: () => void;
}

export function PersonaSections({
  onExploreStudents,
  onExploreTeachers,
  onExploreParents,
}: PersonaSectionsProps) {
  // Student mock subject selector
  const [selectedStudentSubject, setSelectedStudentSubject] = useState<"math" | "chem" | "phys">("math");

  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* 8. DEDICATED SECTION FOR STUDENTS */}
      {/* ======================================================== */}
      <section id="students" className="py-24 bg-[#070913] border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-4">
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Empowering Student Learners</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Study Smarter. Prepare Better. Achieve More.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Move past memorizing answers without context. Smarter Assessment gives you personalized chapter drills, instant explanations for mistakes, and clear visibility into what to practice next.
              </p>

              {/* Student Workflow Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Practice by chapter:</strong> Deep-dive into specific syllabus units at your own pace.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Prepare for exams:</strong> Simulate real board test formats with adaptive timing.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Understand mistakes:</strong> Step-by-step reasoning ensures concepts stick.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Personalized guidance:</strong> Receive smart revision recommendations daily.
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onExploreStudents}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 hover:scale-[1.02] transition-all"
              >
                <span>Explore Student Learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Attractive Student Dashboard Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#0E1325] border border-purple-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl relative">
                {/* Header */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                      Student Dashboard Mockup
                    </div>
                    <h4 className="text-base font-bold text-white">Hi, Rohit! Grade 10 CBSE</h4>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-700/60 text-xs">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-200 font-semibold">Overall Mastery: 91%</span>
                  </div>
                </div>

                {/* Subject Cards Grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  <button
                    type="button"
                    onClick={() => setSelectedStudentSubject("math")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStudentSubject === "math"
                        ? "bg-purple-950/70 border-purple-500 shadow-md"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">Mathematics</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-purple-300 font-semibold">94%</span>
                      <span className="text-[9px] text-slate-400">12/14 Ch</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full w-[94%]" />
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedStudentSubject("phys")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStudentSubject === "phys"
                        ? "bg-sky-950/70 border-sky-500 shadow-md"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">Physics</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-sky-300 font-semibold">89%</span>
                      <span className="text-[9px] text-slate-400">9/11 Ch</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-sky-500 h-full rounded-full w-[89%]" />
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedStudentSubject("chem")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStudentSubject === "chem"
                        ? "bg-emerald-950/70 border-emerald-500 shadow-md"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">Chemistry</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-emerald-300 font-semibold">88%</span>
                      <span className="text-[9px] text-slate-400">8/10 Ch</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-[88%]" />
                    </div>
                  </button>
                </div>

                {/* Chapter Progress & Recent Assessments */}
                <div className="space-y-3 mb-4">
                  <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span>Recent Chapter Assessments</span>
                    <span className="text-[11px] text-purple-400 font-medium">View All (18)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">
                        {selectedStudentSubject === "math"
                          ? "Chapter 4: Quadratic Equations"
                          : selectedStudentSubject === "phys"
                          ? "Chapter 10: Light - Reflection & Refraction"
                          : "Chapter 1: Chemical Reactions & Equations"}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span>15 Questions attempted</span>
                        <span>•</span>
                        <span className="text-emerald-400 font-medium">93% Accuracy</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                      Mastered
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">
                        {selectedStudentSubject === "math"
                          ? "Chapter 5: Arithmetic Progressions"
                          : selectedStudentSubject === "phys"
                          ? "Chapter 12: Electricity & Circuits"
                          : "Chapter 2: Acids, Bases and Salts"}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span>12 Questions attempted</span>
                        <span>•</span>
                        <span className="text-amber-400 font-medium">78% Accuracy</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
                      Needs Practice
                    </span>
                  </div>
                </div>

                {/* Recommended Practice Bar */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">Recommended Practice Drill</span>
                      <span className="text-[10px] text-purple-200">
                        {selectedStudentSubject === "math"
                          ? "5 problems on Sum of n Terms (AP)"
                          : selectedStudentSubject === "phys"
                          ? "4 questions on Ohm's Law and Resistivity"
                          : "4 questions on pH Scale & Neutralization"}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onExploreStudents}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                  >
                    Start Drill
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. DEDICATED SECTION FOR TEACHERS */}
      {/* ======================================================== */}
      <section id="teachers" className="py-24 bg-[#0A0E22] border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Teacher Visual Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-[#0D1226] border border-sky-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl relative">
                {/* Header */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                      Teacher Gradebook &amp; Analytics
                    </div>
                    <h4 className="text-base font-bold text-white">Class 10-A • Mathematics</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-sky-950 text-sky-300 border border-sky-800 text-xs font-bold">
                    38 Enrolled Students
                  </span>
                </div>

                {/* Score Distribution & Class Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">Class Average</span>
                    <span className="text-base sm:text-lg font-black text-white">82.4%</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold block truncate">+3.1% term</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">Assessments</span>
                    <span className="text-base sm:text-lg font-black text-sky-400">14 Tests</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">100% Auto</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">Needs Help</span>
                    <span className="text-base sm:text-lg font-black text-amber-400">5 Students</span>
                    <span className="text-[9px] sm:text-[10px] text-amber-300 font-bold block truncate">Alerts active</span>
                  </div>
                </div>

                {/* Class Performance Table Mockup */}
                <div className="bg-slate-900/90 rounded-xl border border-slate-800 overflow-x-auto mb-4">
                  <div className="min-w-[280px]">
                    <div className="px-3.5 py-2.5 bg-slate-800/60 border-b border-slate-800 flex justify-between text-[11px] font-bold text-slate-300">
                      <span>Student Name</span>
                      <div className="flex gap-6 sm:gap-8">
                        <span>Accuracy</span>
                        <span>Status</span>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-800/80 text-xs">
                      <div className="px-3.5 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-purple-900/60 text-purple-300 font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                            AK
                          </span>
                          <span className="text-slate-200 font-medium truncate max-w-[120px] sm:max-w-none">Ananya Kumar</span>
                        </div>
                        <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
                          <span className="text-emerald-400 font-bold">96%</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">Top Tier</span>
                        </div>
                      </div>

                      <div className="px-3.5 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-sky-900/60 text-sky-300 font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                            RS
                          </span>
                          <span className="text-slate-200 font-medium truncate max-w-[120px] sm:max-w-none">Rohit Sharma</span>
                        </div>
                        <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
                          <span className="text-sky-400 font-bold">91%</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300">Proficient</span>
                        </div>
                      </div>

                      <div className="px-3.5 py-2.5 flex items-center justify-between bg-amber-950/20">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-900/60 text-amber-300 font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                            VS
                          </span>
                          <span className="text-slate-200 font-medium truncate max-w-[120px] sm:max-w-none">Vikram Singh</span>
                        </div>
                        <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
                          <span className="text-amber-400 font-bold">64%</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 flex items-center gap-1">
                            <AlertCircle className="w-2.5 h-2.5" /> Needs Remediation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Footer */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <FileSpreadsheet className="w-4 h-4 text-sky-400" />
                    <span>Generate PTM Academic Dossier in 1 Click</span>
                  </div>
                  <span className="text-sky-400 font-bold cursor-pointer hover:underline">
                    Export PDF
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-500/40 text-sky-300 text-xs font-semibold mb-4">
                <Users className="w-4 h-4 text-sky-400" />
                <span>Productivity Tools for Educators</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Less Time Evaluating. More Time Teaching.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Say goodbye to spending weekend nights grading repetitive MCQs. Smarter Assessment gives teachers automated evaluation, rich chapter analytics, and instant visibility into which students need extra attention.
              </p>

              <div className="space-y-3.5 mb-8 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-900/40 border border-sky-500/40 flex items-center justify-center text-sky-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Automated MCQ &amp; objective evaluation:</strong> Tests graded immediately with detailed error breakdowns.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-900/40 border border-sky-500/40 flex items-center justify-center text-sky-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Configurable answer evaluation:</strong> Apply custom scoring schemes and subjective rubrics where enabled.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-900/40 border border-sky-500/40 flex items-center justify-center text-sky-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Identify learning gaps instantly:</strong> Spot struggling students before unit exams, not after.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-900/40 border border-sky-500/40 flex items-center justify-center text-sky-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Prepared for Parent-Teacher Meetings:</strong> Share objective, evidence-based performance reports with parents.
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onExploreTeachers}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 shadow-md shadow-sky-600/20 hover:scale-[1.02] transition-all"
              >
                <span>Discover Teacher Tools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. DEDICATED SECTION FOR PARENTS */}
      {/* ======================================================== */}
      <section id="parents" className="py-24 bg-[#080B1A] border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-4">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>Parent Peace of Mind</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Stay Connected to Your Child’s Learning Journey.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Understand your child's academic growth without tension or guesswork. Our parent dashboard presents clear, jargon-free progress summaries, strengths, and specific areas where gentle guidance will help most.
              </p>

              <div className="space-y-3.5 mb-8 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Simple progress summaries:</strong> Easy-to-read charts show overall academic trajectory.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Subject-wise clarity:</strong> Know exactly how your child is performing in Math, Science, and English.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Targeted revision focus:</strong> Know where your child needs help without hiring multiple tutors.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Supported notifications:</strong> Receive test reports and milestone alerts directly via preferred channels.
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onExploreParents}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 shadow-md shadow-purple-600/20 hover:scale-[1.02] transition-all"
              >
                <span>Discover Parent Insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Parent Dashboard Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#0D1226] border border-purple-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl relative">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-pink-400">
                      Parent Companion View
                    </div>
                    <h4 className="text-base font-bold text-white">Aarav's Learning Journey</h4>
                  </div>
                  <span className="text-xs text-slate-400">Grade 8 • ICSE</span>
                </div>

                {/* Overall Health Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-slate-900 border border-purple-500/30 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Academic Health Score</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-white">88 / 100</span>
                      <span className="text-xs font-bold text-emerald-400">Excellent Growth</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      +5.4% improvement over the past 3 weeks
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-full border-4 border-purple-500/30 border-t-purple-400 flex items-center justify-center font-bold text-sm text-purple-200">
                    88%
                  </div>
                </div>

                {/* Strengths & Weaknesses Split */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Key Strengths</span>
                    </div>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li>• Linear Equations (96%)</li>
                      <li>• Force &amp; Pressure (94%)</li>
                      <li>• Grammar Syntax (91%)</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Recommended Revision</span>
                    </div>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li>• Fractions &amp; Decimals (72%)</li>
                      <li>• Chemical Bonding basics</li>
                      <li>• Practice 15 mins this weekend</li>
                    </ul>
                  </div>
                </div>

                {/* Recent Assessment Summary */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">Latest Assessment Completed</span>
                    <span className="text-[10px] text-slate-400">Yesterday, 6:30 PM</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Mathematics: <strong>Fractions &amp; Mixed Numbers</strong> — Scored 17/20 (85%). Completed in 18 minutes with high focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
