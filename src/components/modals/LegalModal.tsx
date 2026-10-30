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
        <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            At <strong className="text-slate-900 dark:text-white">Smarter Assessment</strong>, protecting student privacy—especially regarding minors—is our foundational design principle. Our architectural standards enforce strict data minimization, cryptographic storage, and absolute isolation between institutional cohorts.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">1. Role-Based Access Isolation</h4>
          <p>
            Students can only access their own practice drills and assessments. Parents can only access records associated with their verified children. Teachers can only access academic summaries for students enrolled in their assigned classes. School administrators hold cohort-level reporting rights without commercial data leakage.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">2. Zero Commercial Monetization or Advertising</h4>
          <p>
            We strictly do not sell, license, rent, or trade student performance data, behavioral interaction patterns, or personal contact information to any advertising network, third-party broker, or commercial partner.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">3. Cryptographic Storage &amp; Secure Transmission</h4>
          <p>
            All academic responses, diagnostic marks, and personal identification records are encrypted in transit using TLS 1.3 and at rest utilizing AES-256 standard encryption.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">4. Parental Rights &amp; Data Deletion</h4>
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
        <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            This Privacy Policy describes how Smarter Assessment collects, maintains, and safeguards information gathered through our web platform and diagnostic services.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">1. Information We Collect</h4>
          <p>
            We collect account profile details (student name, school affiliation, grade level, subject preferences) and academic performance interaction data (answers submitted, response pacing, chapter accuracy).
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">2. How Information is Used</h4>
          <p>
            Collected diagnostic metrics are strictly used to compute knowledge gap analysis, serve adaptive practice questions, and generate educator progress reports. We do not use student submissions to train open public foundation models.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">3. Contact for Privacy Matters</h4>
          <p>
            For privacy inquiries, audit logs, or data erasure requests, please contact our Data Protection Officer at privacy@smarterassessment.com or call +91 8970809090.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      icon: FileText,
      badge: "User & Institutional Agreement",
      body: (
        <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            By accessing or using Smarter Assessment, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">1. Educational Purpose</h4>
          <p>
            Smarter Assessment is designed as an academic assessment, practice, and diagnostic evaluation tool. It is intended to supplement and support accredited school learning.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">2. Subscription &amp; Free Trial Policy</h4>
          <p>
            Every new learner is eligible for a 15-day complimentary trial for one enrolled subject. Subscriptions (Monthly ₹500/student/mo or Annual ₹3,000/student/yr) are billed without hidden cancellation fees.
          </p>

          <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">3. Intellectual Property</h4>
          <p>
            All assessment formats, diagnostic software engines, algorithmic feedback generators, and platform logos are the proprietary property of Smarter Assessment.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-[#106FE2]/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[85vh] flex flex-col transition-colors duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#106FE2]/10 border border-[#106FE2]/25 flex items-center justify-center text-[#106FE2] flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FE730A]">
              {current.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white transition-colors">{current.title}</h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex-1">{current.body}</div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end transition-colors">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#106FE2] hover:bg-[#0D5BC0] text-white font-bold text-xs transition-colors shadow-xs"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
