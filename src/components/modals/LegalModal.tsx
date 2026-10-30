"use client";

import React from "react";
import { X, ShieldCheck, FileText, Lock } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | "safety";

interface LegalModalProps {
  isOpen: boolean;
  type: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen) return null;

  const contentMap = {
    safety: {
      title: "Student Data Protection & Safety Protocol",
      icon: ShieldCheck,
      badge: "Institutional Security Standard",
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            At <strong>Smarter Assessment</strong>, protecting student privacy—especially regarding minors—is our foundational design principle. Our architectural standards enforce strict data minimization, cryptographic storage, and absolute isolation between institutional cohorts.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">1. Role-Based Access Isolation</h4>
          <p>
            Students can only access their own practice drills and assessments. Parents can only access records associated with their verified children. Teachers can only access academic summaries for students enrolled in their assigned classes. School administrators hold cohort-level reporting rights without commercial data leakage.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">2. Zero Commercial Monetization or Advertising</h4>
          <p>
            We strictly do not sell, license, rent, or trade student performance data, behavioral interaction patterns, or personal contact information to any advertising network, third-party broker, or commercial partner.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">3. Cryptographic Storage &amp; Secure Transmission</h4>
          <p>
            All academic responses, diagnostic marks, and personal identification records are encrypted in transit using TLS 1.3 and at rest utilizing AES-256 standard encryption.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">4. Parental Rights &amp; Data Deletion</h4>
          <p>
            Parents and schools retain complete ownership of student records. Authorized administrators or parents may request the permanent export or deletion of diagnostic historical records at any time.
          </p>
        </div>
      ),
    },
    privacy: {
      title: "Privacy Policy",
      icon: Lock,
      badge: "Regulatory Compliance",
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            This Privacy Policy describes how Smarter Assessment collects, maintains, and safeguards information gathered through our web platform and diagnostic services.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">1. Information We Collect</h4>
          <p>
            We collect account registration data (name, school email, phone number, and curriculum preference) and academic telemetry (quiz attempts, response timestamps, accuracy rates, and error taxonomy) solely to provide diagnostic analysis and personalized practice recommendations.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">2. Permitted Purpose of Data Usage</h4>
          <p>
            All collected information is used strictly to power educational assessments, deliver teacher evaluation summaries, inform parents, and calibrate question difficulty.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">3. Third-Party Integrations</h4>
          <p>
            Where schools configure institutional WhatsApp messaging or external student information systems (SIS), data is exchanged only across secure, authenticated API pathways approved by school administration.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      icon: FileText,
      badge: "Service Agreement",
      body: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            By accessing or subscribing to the Smarter Assessment platform, you agree to these Terms of Service.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">1. Educational Intended Use</h4>
          <p>
            Smarter Assessment is designed as an academic evaluation and practice tool. Content is aligned to CBSE, ICSE, and IGCSE syllabus standards to assist learning and evaluation. It is not an accredited examination board and does not confer official certificates.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">2. Subscription &amp; Free Trial Terms</h4>
          <p>
            Promotional 15-day single subject trials are provided subject to confirmation of the active onboarding offer. Monthly and Annual subscription fees are structured per the official commercial agreement, exclusive of statutory taxes unless stated otherwise.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">3. Academic Integrity</h4>
          <p>
            Users agree not to extract, crawl, reverse-engineer, or commercially redistribute Smarter Assessment question banks, diagnostic algorithms, or proprietary assessment blueprints.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0D1226] border border-purple-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
              {current.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">{current.title}</h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex-1">{current.body}</div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
