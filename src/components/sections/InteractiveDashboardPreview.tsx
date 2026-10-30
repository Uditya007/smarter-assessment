"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  FileCheck2,
  ClipboardList,
  LineChart,
  Sparkles,
  Settings,
  Bell,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Filter,
  Play,
  Award,
  ChevronRight,
  UserCircle2,
} from "lucide-react";

export function InteractiveDashboardPreview() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "subjects" | "practice" | "assessments" | "performance" | "recommendations" | "settings"
  >("overview");

  // Perspective toggle
  const [perspective, setPerspective] = useState<"student" | "teacher" | "parent">("student");

  // Mock quiz filter
  const [subjectFilter, setSubjectFilter] = useState<"all" | "math" | "science">("all");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "subjects", label: "My Subjects", icon: BookOpen },
    { id: "practice", label: "Practice Tests", icon: FileCheck2 },
    { id: "assessments", label: "Assessments", icon: ClipboardList },
    { id: "performance", label: "Performance", icon: LineChart },
    { id: "recommendations", label: "Recommendations", icon: Sparkles },
    { id: "settings", label: "Settings", icon: Settings },
  ] as const;

  return (
    <section id="demo-preview" className="py-24 bg-slate-100/70 dark:bg-[#060812] border-t border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-200">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-purple-500/10 dark:bg-purple-900/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-300 text-xs font-semibold mb-3 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
            <span>Interactive SaaS Interface Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
            Experience the Smarter Assessment Platform
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed transition-colors">
            Click through real product workflows below. Designed for speed, clarity, and instant diagnostic feedback.
          </p>
        </div>

        {/* Demo Disclaimer & Perspective Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none mb-6 transition-colors">
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-600/40 text-[11px] font-bold">
              Demonstration Mode
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Sample academic data for demonstration only.
            </span>
            <span className="text-[10px] text-slate-400 sm:hidden">
              Sample Data
            </span>
          </div>

          {/* Perspective Pills */}
          <div className="flex items-center justify-between gap-1 bg-slate-100 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold px-2 hidden sm:inline">Role:</span>
            <button
              type="button"
              onClick={() => {
                setPerspective("student");
                setActiveTab("overview");
              }}
              className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                perspective === "student"
                  ? "bg-purple-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => {
                setPerspective("teacher");
                setActiveTab("overview");
              }}
              className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                perspective === "teacher"
                  ? "bg-sky-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Teacher
            </button>
            <button
              type="button"
              onClick={() => {
                setPerspective("parent");
                setActiveTab("overview");
              }}
              className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                perspective === "parent"
                  ? "bg-pink-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Parent
            </button>
          </div>
        </div>

        {/* The SaaS Dashboard Frame */}
        <div className="rounded-2xl border border-slate-700/80 bg-[#0A0E20] shadow-2xl overflow-hidden">
          {/* Dashboard Application Header */}
          <div className="bg-[#0D1228] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                https://app.smarterassessment.com/{perspective}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  readOnly
                  value="Search chapters, formulas, concepts..."
                  className="bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1 text-[11px] text-slate-400 w-64 focus:outline-none cursor-default"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  <span className="w-2 h-2 rounded-full bg-amber-400 absolute -top-0.5 -right-0.5" />
                </div>
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-[10px]">
                    {perspective === "student" ? "RS" : perspective === "teacher" ? "SK" : "AP"}
                  </div>
                  <span className="font-semibold text-slate-200 text-xs hidden sm:inline">
                    {perspective === "student"
                      ? "Rohit Sharma (Class 10)"
                      : perspective === "teacher"
                      ? "Ms. Sunita Kapoor (Faculty)"
                      : "Anita Patel (Parent)"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Tab Bar (Horizontal Scrollable Strip on Mobile Screens) */}
          <div className="md:hidden bg-[#090D1C] border-b border-slate-800 p-2 overflow-x-auto scrollbar-none flex items-center gap-1.5">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-sm"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800/80"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* SaaS Interface Body: Desktop Sidebar + Main Workspace */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            {/* Desktop Sidebar (Hidden on mobile to save vertical scrolling) */}
            <div className="hidden md:flex md:col-span-3 lg:col-span-2 bg-[#090D1C] border-r border-slate-800/90 p-3 sm:p-4 flex-col justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                  Platform Menu
                </div>
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-purple-600/30 text-white border border-purple-500/50 shadow-sm"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-purple-300" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sidebar bottom indicator */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] mt-6">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI Engine Online</span>
                </div>
                <p className="text-slate-400 text-[10px] leading-tight">
                  Diagnostic latency: &lt; 200ms
                </p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-1 md:col-span-9 lg:col-span-10 p-3.5 sm:p-6 lg:p-7 bg-[#0A0E22] overflow-y-auto max-h-[640px]">
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Welcome Message */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Welcome back,{" "}
                        {perspective === "student"
                          ? "Rohit"
                          : perspective === "teacher"
                          ? "Ms. Kapoor"
                          : "Anita"}
                        ! 👋
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {perspective === "student"
                          ? "Here is your academic mastery overview for CBSE Class 10 Term 2."
                          : perspective === "teacher"
                          ? "Class 9 Science diagnostic overview • 38 students evaluated."
                          : "Monitoring Aarav's academic journey • Grade 8 ICSE."}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-purple-300">
                        Term 2 Target: &gt;95%
                      </span>
                    </div>
                  </div>

                  {/* Primary Performance Score Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">
                        Overall Performance Score
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-black text-white">94.2%</span>
                        <span className="text-xs font-bold text-emerald-400">+5.8%</span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">Top Decile Standing</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">
                        Accuracy Percentage
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-black text-sky-400">89.4%</span>
                        <span className="text-xs font-bold text-sky-400">Stable</span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">Based on 480 questions</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">
                        Assessments Completed
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-black text-amber-400">28</span>
                        <span className="text-xs text-slate-400">/ 32</span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">87.5% Curriculum Pacing</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">
                        Average Response Speed
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-black text-purple-300">42s</span>
                        <span className="text-xs font-bold text-emerald-400">Fast</span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">Optimal Exam Pacing</span>
                    </div>
                  </div>

                  {/* Subject-Wise Progress & Learning Trajectory Chart */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Subject Progress Bars */}
                    <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Subject-Wise Mastery
                      </h4>
                      <div className="space-y-3.5">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-semibold text-white">Mathematics</span>
                            <span className="font-bold text-purple-300">95% (13/14 Chapters)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full w-[95%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-semibold text-white">Physics</span>
                            <span className="font-bold text-sky-300">91% (10/11 Chapters)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-sky-500 to-blue-500 h-full rounded-full w-[91%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-semibold text-white">Chemistry</span>
                            <span className="font-bold text-emerald-300">89% (9/10 Chapters)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full w-[89%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-semibold text-white">Biology</span>
                            <span className="font-bold text-pink-300">88% (8/9 Chapters)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full w-[88%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Progress Trajectory Graph */}
                    <div className="lg:col-span-7 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Learning Progress Trajectory
                        </h4>
                        <span className="text-[11px] text-emerald-400 font-semibold">+14.2% since Term 1</span>
                      </div>

                      <div className="h-36 w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 350 100" preserveAspectRatio="none">
                          <line x1="0" y1="25" x2="350" y2="25" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
                          <line x1="0" y1="60" x2="350" y2="60" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
                          <line x1="0" y1="90" x2="350" y2="90" stroke="#334155" strokeDasharray="3 3" strokeOpacity="0.4" />
                          
                          <path
                            d="M 10,85 Q 70,75 120,55 T 230,35 T 340,15 L 340,95 L 10,95 Z"
                            fill="url(#progressGrad)"
                            opacity="0.35"
                          />
                          <path
                            d="M 10,85 Q 70,75 120,55 T 230,35 T 340,15"
                            fill="none"
                            stroke="#A855F7"
                            strokeWidth="3"
                          />
                          <circle cx="10" cy="85" r="3.5" fill="#A855F7" />
                          <circle cx="120" cy="55" r="3.5" fill="#A855F7" />
                          <circle cx="230" cy="35" r="3.5" fill="#A855F7" />
                          <circle cx="340" cy="15" r="4.5" fill="#FBBF24" stroke="#FFF" strokeWidth="2" />
                          
                          <defs>
                            <linearGradient id="progressGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                        <span>Jul Diagnostic</span>
                        <span>Aug Unit 1</span>
                        <span>Sep Mid-Term</span>
                        <span className="text-amber-300 font-bold">Latest Pre-Board (94%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Practice & Areas Requiring Improvement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Recommended Practice */}
                    <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/40">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-2">
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>AI Recommended Practice (Priority Queue)</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug mb-3">
                        Practicing these 2 specific sub-topics will push your overall accuracy over 92%:
                      </p>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-white block">Arithmetic Progression: nth Term Word Problems</span>
                            <span className="text-[10px] text-slate-400">Estimated duration: 8 mins</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveTab("practice")}
                            className="px-2.5 py-1 rounded bg-purple-600 text-white font-bold text-[11px] hover:bg-purple-500"
                          >
                            Practice
                          </button>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-white block">Ray Optics: Sign Convention in Convex Lenses</span>
                            <span className="text-[10px] text-slate-400">Estimated duration: 6 mins</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveTab("practice")}
                            className="px-2.5 py-1 rounded bg-sky-600 text-white font-bold text-[11px] hover:bg-sky-500"
                          >
                            Practice
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Areas Requiring Improvement */}
                    <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-2">
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                        <span>Diagnostic Gaps Requiring Attention</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug mb-3">
                        Cognitive error analysis flagged these specific misconceptions from recent quizzes:
                      </p>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                          <div className="flex justify-between font-semibold text-white">
                            <span>Negative Sign in Quadratic Formula</span>
                            <span className="text-amber-400">3 Missed</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            Misidentifying -(-b) when b is already a negative coefficient.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                          <div className="flex justify-between font-semibold text-white">
                            <span>Unit Conversion in Electric Power (kW vs W)</span>
                            <span className="text-amber-400">2 Missed</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            Calculation error when expressing commercial electrical energy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Assessments Table */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <h4 className="font-bold text-white">Recent Assessments Log</h4>
                      <button
                        type="button"
                        onClick={() => setActiveTab("assessments")}
                        className="text-purple-400 font-semibold text-[11px] hover:underline"
                      >
                        View Full History &rarr;
                      </button>
                    </div>

                    <div className="divide-y divide-slate-800 text-xs">
                      <div className="py-2.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">CBSE Class 10 Pre-Board Diagnostic</span>
                          <span className="text-[11px] text-slate-400">Mathematics • 20 Questions</span>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-emerald-400 font-bold">19 / 20 (95%)</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold">
                            Completed
                          </span>
                        </div>
                      </div>

                      <div className="py-2.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">Light: Reflection &amp; Refraction Chapter Test</span>
                          <span className="text-[11px] text-slate-400">Physics • 15 Questions</span>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-sky-400 font-bold">13 / 15 (86.7%)</span>
                          <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-bold">
                            Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: MY SUBJECTS */}
              {activeTab === "subjects" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">Enrolled Subjects &amp; Syllabus</h3>
                      <p className="text-xs text-slate-400">CBSE Class 10 • Academic Year 2026-27</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Mathematics",
                        chapters: 14,
                        completed: 13,
                        accuracy: "94.8%",
                        color: "border-purple-500/40",
                        topics: ["Real Numbers", "Polynomials", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Circles", "Statistics"],
                      },
                      {
                        name: "Physics",
                        chapters: 11,
                        completed: 10,
                        accuracy: "91.2%",
                        color: "border-sky-500/40",
                        topics: ["Light - Reflection", "Refraction & Lenses", "Human Eye & Colourful World", "Electricity", "Magnetic Effects of Electric Current"],
                      },
                      {
                        name: "Chemistry",
                        chapters: 10,
                        completed: 9,
                        accuracy: "89.5%",
                        color: "border-emerald-500/40",
                        topics: ["Chemical Reactions", "Acids, Bases & Salts", "Metals & Non-metals", "Carbon and its Compounds", "Periodic Classification"],
                      },
                      {
                        name: "Biology",
                        chapters: 9,
                        completed: 8,
                        accuracy: "88.0%",
                        color: "border-pink-500/40",
                        topics: ["Life Processes", "Control and Coordination", "How do Organisms Reproduce?", "Heredity and Evolution", "Our Environment"],
                      },
                    ].map((subj, i) => (
                      <div key={i} className={`p-4 rounded-xl bg-slate-900/90 border ${subj.color}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base font-bold text-white">{subj.name}</h4>
                          <span className="text-xs font-bold text-purple-300">{subj.accuracy} Avg</span>
                        </div>
                        <div className="text-xs text-slate-400 mb-3">
                          {subj.completed} of {subj.chapters} Chapters Mastered
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {subj.topics.slice(0, 4).map((top, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {top}
                            </span>
                          ))}
                          <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300">
                            +{subj.topics.length - 4} more
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveTab("practice")}
                          className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
                        >
                          View Chapter Tests
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: PRACTICE TESTS */}
              {activeTab === "practice" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">Adaptive Practice Tests</h3>
                      <p className="text-xs text-slate-400">Select chapter drills or timed board simulations</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <h4 className="text-sm font-bold text-white mb-2">Active Drill Preview</h4>
                    <div className="p-4 rounded-lg bg-[#070A14] border border-slate-800 text-xs text-slate-200 mb-3">
                      <div className="text-purple-300 font-bold mb-1">Question 1 of 5 (Quadratic Equations):</div>
                      <p className="text-sm">
                        "Find the discriminant of the quadratic equation 2x² - 4x + 3 = 0, and hence find the nature of its roots."
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">A) D = -8, Real and equal</div>
                      <div className="p-2.5 rounded bg-purple-950/80 border border-purple-500 text-purple-200 font-bold">B) D = -8, No real roots (Correct)</div>
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">C) D = 8, Two distinct real roots</div>
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">D) D = 0, One real root</div>
                    </div>
                    <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300">
                      <strong>AI Explanation:</strong> D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D &lt; 0, the equation has no real roots. Instant diagnostic confirmed.
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: ASSESSMENTS */}
              {activeTab === "assessments" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">Completed Assessments Dossier</h3>
                      <p className="text-xs text-slate-400">Official term diagnostics &amp; teacher-assigned quizzes</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {[
                      { name: "Full Syllabus Math Mock Examination", score: "76 / 80 (95.0%)", time: "1h 48m", date: "Oct 28, 2026", status: "Verified Grade A+" },
                      { name: "Physics Optics & Wave Theory Unit Diagnostic", score: "28 / 30 (93.3%)", time: "38m", date: "Oct 24, 2026", status: "Verified Grade A+" },
                      { name: "Chemistry Organic & Carbon Compounds Test", score: "22 / 25 (88.0%)", time: "32m", date: "Oct 19, 2026", status: "Verified Grade A" },
                      { name: "Biology Life Processes Comprehensive", score: "27 / 30 (90.0%)", time: "35m", date: "Oct 14, 2026", status: "Verified Grade A+" },
                    ].map((ass, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">{ass.name}</div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-3 mt-0.5">
                            <span>{ass.date}</span>
                            <span>•</span>
                            <span>Time taken: {ass.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-emerald-400">{ass.score}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
                            {ass.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: PERFORMANCE */}
              {activeTab === "performance" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">Granular Performance Analytics</h3>
                      <p className="text-xs text-slate-400">Accuracy, speed, and concept retention indices</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-xs text-slate-400">Total Practice Questions</span>
                      <div className="text-2xl font-bold text-white mt-1">1,248</div>
                      <span className="text-[10px] text-emerald-400">Across 4 subjects</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-xs text-slate-400">Average Daily Study Time</span>
                      <div className="text-2xl font-bold text-sky-400">42 mins</div>
                      <span className="text-[10px] text-slate-400">Consistent streak</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-xs text-slate-400">Board Exam Readiness</span>
                      <div className="text-2xl font-bold text-amber-400">96.4%</div>
                      <span className="text-[10px] text-amber-300 font-bold">Excellent preparation</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: RECOMMENDATIONS */}
              {activeTab === "recommendations" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">AI Learning Recommendations</h3>
                      <p className="text-xs text-slate-400">Dynamic personalized guidance based on recent assessment data</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900 border border-purple-500/30">
                    <div className="flex items-start gap-3">
                      <BrainCircuit className="w-5 h-5 text-amber-300 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Today's Academic Priority</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Your mastery of <strong>Algebraic Identities</strong> is strong (95%), but your response time on <strong>Word Problems on Linear Equations</strong> is 1.4x standard pacing. Complete a 7-minute targeted sprint to build calculation speed.
                        </p>
                        <button
                          type="button"
                          onClick={() => setActiveTab("practice")}
                          className="mt-3 px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
                        >
                          Start Pacing Sprint
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: SETTINGS */}
              {activeTab === "settings" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">Account &amp; Study Settings</h3>
                      <p className="text-xs text-slate-400">Preferences, curriculum configuration, and notifications</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">Active Curriculum</span>
                        <span className="text-slate-400 text-[11px]">CBSE • Class 10 (2026-27 Board Specification)</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-purple-900/60 text-purple-200 border border-purple-700/50 text-[11px]">
                        Active
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">Instant Diagnostic Feedback Mode</span>
                        <span className="text-slate-400 text-[11px]">Show step-by-step explanations immediately after each question</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold">
                        Enabled
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">WhatsApp Notification Integration</span>
                        <span className="text-slate-400 text-[11px]">Receive assessment reports and reminders via supported institutional gateway</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-bold">
                        Configured by School
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
