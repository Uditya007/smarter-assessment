"use client";

import React from "react";
import Link from "next/link";
import { Phone, ShieldCheck, ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/config/site.config";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSafety: () => void;
  onBookDemo: () => void;
}

export function Footer({
  onOpenPrivacy,
  onOpenTerms,
  onOpenSafety,
  onBookDemo,
}: FooterProps) {
  const [currentYear, setCurrentYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#05070F] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-[#106FE2]/20 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 md:pt-16 md:pb-12">
        {/* ======================================================== */}
        {/* MOBILE VIEW (< md): Compact, Short & Straightforward     */}
        {/* ======================================================== */}
        <div className="md:hidden space-y-4 mb-6">
          {/* Brand header */}
          <div className="flex flex-col items-start gap-2">
            <Logo size="md" withTagline={false} />
            <p className="text-slate-600 dark:text-slate-400 text-xs">
              Better Learning. Stronger Outcomes.
            </p>
          </div>

          {/* Quick contact pill */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-1.5 font-bold text-slate-900 dark:text-white hover:text-[#106FE2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FE730A]" />
              <span>{siteConfig.contact.displayPhone}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-[#106FE2] transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Compact 2-column quick links */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-y border-slate-200 dark:border-slate-800/80 py-3.5">
            <Link href="#features" className="hover:text-[#106FE2] transition-colors">
              Core Features
            </Link>
            <Link href="#how-it-works" className="hover:text-[#106FE2] transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="hover:text-[#106FE2] transition-colors">
              Pricing Plans
            </Link>
            <Link href="#faq" className="hover:text-[#106FE2] transition-colors">
              FAQs
            </Link>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-left hover:text-[#106FE2] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="text-left hover:text-[#106FE2] transition-colors"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={onOpenSafety}
              className="text-left hover:text-[#106FE2] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3 text-[#106FE2]" />
              <span>Data Safety</span>
            </button>
            <button
              type="button"
              onClick={onBookDemo}
              className="text-left text-[#FE730A] font-bold hover:text-[#E56300] transition-colors"
            >
              Book a Demo →
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (>= md): Full Comprehensive Multi-Column    */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" withTagline={true} />
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed max-w-sm mt-3 transition-colors">
              Smarter Assessment is an AI-powered educational technology platform engineered to empower CBSE, ICSE, and IGCSE students through diagnostic assessments, adaptive practice, instant feedback, and connected academic analytics.
            </p>

            {/* Direct Helpline Badge */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Advisory Helpline &amp; Demonstrations
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-slate-900 dark:text-white hover:text-[#106FE2] font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FE730A]" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-700 dark:text-slate-300 hover:text-[#106FE2] transition-colors">{siteConfig.contact.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white transition-colors">Platform Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#home" className="hover:text-[#106FE2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-[#106FE2] transition-colors">
                  Core AI Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#106FE2] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-[#106FE2] transition-colors">
                  Curriculum Alignment
                </Link>
              </li>
              <li>
                <Link href="#demo-preview" className="hover:text-[#106FE2] transition-colors">
                  Interactive SaaS Demo
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#106FE2] transition-colors">
                  Student &amp; School Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#106FE2] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Roles & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white transition-colors">Roles &amp; Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#stakeholders" className="hover:text-[#106FE2] transition-colors">
                  CBSE / ICSE / IGCSE Students
                </Link>
              </li>
              <li>
                <Link href="#stakeholders" className="hover:text-[#106FE2] transition-colors">
                  Teachers &amp; Academic Evaluators
                </Link>
              </li>
              <li>
                <Link href="#stakeholders" className="hover:text-[#106FE2] transition-colors">
                  Parents Progress Monitoring
                </Link>
              </li>
              <li>
                <Link href="#stakeholders" className="hover:text-[#106FE2] transition-colors">
                  Schools &amp; Academic Coordinators
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onBookDemo}
                  className="text-[#FE730A] hover:text-[#E56300] font-semibold transition-colors"
                >
                  Schedule School Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Integrity */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white transition-colors">Safety &amp; Compliance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#106FE2] text-left transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-[#106FE2] text-left transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSafety}
                  className="hover:text-[#106FE2] text-left transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#106FE2]" />
                  <span>Student Data Security</span>
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                Curriculum designations (CBSE, ICSE, Cambridge IGCSE) are reference standards for learning alignment.
              </li>
            </ul>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Bottom Bar: Copyright, Theme Switcher & Back to Top     */}
        {/* ======================================================== */}
        <div className="pt-4 md:pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs transition-colors">
          <p className="text-slate-500 dark:text-slate-400 text-center sm:text-left">
            © {currentYear} Smarter Assessment. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            <ThemeToggle showLabel={true} />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#106FE2] hover:border-[#106FE2]/40 shadow-xs transition-colors text-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#106FE2]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
