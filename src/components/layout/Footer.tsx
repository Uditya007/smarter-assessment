"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, ArrowUp } from "lucide-react";
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
    <footer className="bg-slate-100 dark:bg-[#05070F] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-purple-900/30 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
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
                className="text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors">{siteConfig.contact.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white transition-colors">Platform Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#home" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Core AI Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Curriculum Alignment
                </Link>
              </li>
              <li>
                <Link href="#demo-preview" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Interactive SaaS Demo
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Student &amp; School Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-slate-950 dark:hover:text-white transition-colors">
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
                <Link href="#stakeholders" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  CBSE / ICSE / IGCSE Students
                </Link>
              </li>
              <li>
                <Link href="#stakeholders" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Teachers &amp; Academic Evaluators
                </Link>
              </li>
              <li>
                <Link href="#stakeholders" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Parents Progress Monitoring
                </Link>
              </li>
              <li>
                <Link href="#stakeholders" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Schools &amp; Academic Coordinators
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onBookDemo}
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-500 font-semibold transition-colors"
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
                  className="hover:text-slate-950 dark:hover:text-white text-left transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-slate-950 dark:hover:text-white text-left transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSafety}
                  className="hover:text-slate-950 dark:hover:text-white text-left transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Student Data Security</span>
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                Curriculum designations (CBSE, ICSE, Cambridge IGCSE) are reference standards for learning alignment.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Actions */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs transition-colors">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-slate-500 dark:text-slate-400">
              © {currentYear} Smarter Assessment. Better Learning. Stronger Outcomes. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Theme Switcher in Footer */}
            <ThemeToggle showLabel={true} />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white shadow-xs transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
