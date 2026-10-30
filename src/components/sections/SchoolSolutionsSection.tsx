"use client";

import React, { useState } from "react";
import {
  Building2,
  Calendar,
  Layers,
  Users,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  School,
  Settings2,
  SlidersHorizontal,
  Mail,
  Send,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site.config";

interface SchoolSolutionsProps {
  onBookDemoClick?: () => void;
}

export function SchoolSolutionsSection({ onBookDemoClick }: SchoolSolutionsProps) {
  // Institutional booking form state
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    workEmail: "",
    phone: "",
    numberOfStudents: "500-1000",
    curriculum: "CBSE",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validation
    if (!formData.schoolName.trim()) {
      setErrorMessage("Please enter your school or institution name.");
      return;
    }
    if (!formData.contactPerson.trim()) {
      setErrorMessage("Please enter the contact person's name.");
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes("@")) {
      setErrorMessage("Please provide a valid work or school email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage("Please enter a valid phone number for our advisory team.");
      return;
    }

    setIsSubmitting(true);

    // Simulate secure backend lead processing
    setTimeout(() => {
      const generatedRef = `SMX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);

      // Store in client leads registry (localStorage fallback for demo persistence)
      try {
        const existingLeads = JSON.parse(localStorage.getItem("smarter_school_leads") || "[]");
        existingLeads.push({
          ...formData,
          id: generatedRef,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem("smarter_school_leads", JSON.stringify(existingLeads));
      } catch (err) {
        console.warn("Storage fallback error:", err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe confetti fallback
      }
    }, 1200);
  };

  const capabilities = [
    {
      title: "School-Level Dashboards",
      description: "Unified leadership oversight across all grades, divisions, and faculty departments.",
      icon: School,
    },
    {
      title: "Exam Scheduling & Delivery",
      description: "Coordinate term exams, diagnostic tests, and unit quizzes with flexible timetables.",
      icon: Calendar,
    },
    {
      title: "Assessment Management",
      description: "Centralized repository for past question papers, answer keys, and grading rubrics.",
      icon: Layers,
    },
    {
      title: "Academic Reporting & Transcripts",
      description: "One-click generation of board-aligned academic performance cards and analytics.",
      icon: FileSpreadsheet,
    },
    {
      title: "Teacher Access Management",
      description: "Granular role-based permissions for HODs, class teachers, subject specialists, and coordinators.",
      icon: Users,
    },
    {
      title: "Attendance Integration",
      description: "Synchronize attendance records with academic performance trends where supported.",
      icon: SlidersHorizontal,
    },
    {
      title: "Customizable School Workflows",
      description: "Tailor question difficulty, grading schemes, and report formats to your institution's pedagogy.",
      icon: Settings2,
    },
    {
      title: "Dedicated Onboarding & Support",
      description: "Faculty training sessions, pilot setup assistance, and continuous technical support.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="schools" className="py-24 bg-[#070914] border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-900/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-3">
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Institutional Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            An Intelligent Assessment Platform Built for Modern Schools.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Bring assessments, academic insights, and student progress monitoring into a connected learning experience.
          </p>
        </div>

        {/* Institutional Workflow Integration Explanation */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C1126] via-[#101736] to-[#0C1126] border border-purple-500/30 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                Zero Disruption Implementation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Smarter Assessment Fits Into Your School’s Existing Workflow
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-700">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Full LMS &amp; SIS Compatibility</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-purple-400 font-mono font-bold text-xs mb-1">PHASE 1</div>
              <h4 className="text-sm font-bold text-white mb-2">Curriculum Alignment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We map your school's term schedules, chapter sequences, and assessment rubrics directly into the platform.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-sky-400 font-mono font-bold text-xs mb-1">PHASE 2</div>
              <h4 className="text-sm font-bold text-white mb-2">Faculty Onboarding</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Teachers receive hands-on training on automated grading, test paper generator, and student diagnostic tracking.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-emerald-400 font-mono font-bold text-xs mb-1">PHASE 3</div>
              <h4 className="text-sm font-bold text-white mb-2">Connected Community</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Parents, students, and coordinators access synchronized dashboards, ensuring complete academic transparency.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Institutional Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0D1226]/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-300 mb-3.5">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{cap.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Institutional Demo Booking Form Section */}
        {/* ======================================================== */}
        <div id="demo-form" className="relative rounded-3xl bg-gradient-to-br from-[#0F142D] via-[#11183A] to-[#0A0E23] border border-purple-500/40 p-6 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Pitch & Hotline */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Priority Institutional Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-snug">
                Book a School Demo
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                See how Smarter Assessment can reduce your faculty's evaluation workload while improving student performance across CBSE, ICSE, and IGCSE grades.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom demonstration for Principals, HODs, &amp; Coordinators</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pilot program tailored to your active academic term</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero upfront technical setup or long-term lock-in</span>
                </div>
              </div>

              {/* Direct Hotline */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Direct Institutional Advisory Desk
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-lg font-extrabold text-white hover:text-sky-400 transition-colors mt-0.5 inline-block"
                >
                  {siteConfig.contact.displayPhone}
                </a>
                <div className="text-[11px] text-purple-300 mt-1">
                  Monday to Saturday • 9:00 AM to 7:00 PM IST
                </div>
              </div>
            </div>

            {/* Right: The Demo Form */}
            <div className="lg:col-span-7 bg-[#090D1C] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-inner">
              {isSubmitted ? (
                <div className="py-10 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">School Demo Booked!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-4">
                    Thank you, <strong className="text-white">{formData.contactPerson}</strong>. Our senior academic specialist will connect with <strong className="text-white">{formData.schoolName}</strong> within 24 business hours.
                  </p>
                  <div className="inline-block p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300 mb-6">
                    Booking Reference ID: <strong className="text-amber-400">{bookingRef}</strong>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          schoolName: "",
                          contactPerson: "",
                          workEmail: "",
                          phone: "",
                          numberOfStudents: "500-1000",
                          curriculum: "CBSE",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-4">
                    <h4 className="text-base font-bold text-white">Institutional Demonstration Form</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out your institution details to schedule a tailored walkthrough.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/60 text-xs text-rose-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="schoolName" className="block text-xs font-semibold text-slate-300 mb-1">
                        School / Institution Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="schoolName"
                        type="text"
                        required
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        placeholder="e.g. St. Xavier's International School"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactPerson" className="block text-xs font-semibold text-slate-300 mb-1">
                        Contact Person's Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-300 mb-1">
                        Work / Official Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="workEmail"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="e.g. principal@school.edu.in"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="numberOfStudents" className="block text-xs font-semibold text-slate-300 mb-1">
                        Number of Students
                      </label>
                      <select
                        id="numberOfStudents"
                        value={formData.numberOfStudents}
                        onChange={(e) => setFormData({ ...formData, numberOfStudents: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white focus:outline-none focus:border-purple-500"
                      >
                        <option value="100-300">100 - 300 Students</option>
                        <option value="300-500">300 - 500 Students</option>
                        <option value="500-1000">500 - 1,000 Students</option>
                        <option value="1000-2500">1,000 - 2,500 Students</option>
                        <option value="2500+">2,500+ Students (Multi-Campus)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="curriculum" className="block text-xs font-semibold text-slate-300 mb-1">
                        Primary Curriculum
                      </label>
                      <select
                        id="curriculum"
                        value={formData.curriculum}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            curriculum: e.target.value as "CBSE" | "ICSE" | "IGCSE" | "Multiple / Other",
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white focus:outline-none focus:border-purple-500"
                      >
                        <option value="CBSE">CBSE (Central Board)</option>
                        <option value="ICSE">ICSE (CISCE)</option>
                        <option value="IGCSE">Cambridge IGCSE</option>
                        <option value="Multiple / Other">Multiple Curricula / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1">
                      Message or Specific Requirements (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Interested in term diagnostic testing for Grades 9-10 and teacher training timeline."
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Scheduling Consultation...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit School Demo Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-400 pt-1">
                    Your institutional information is protected under strict privacy protocols. No spam.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
