"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, Heart, Sparkles, MessageCircle, ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
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
    <footer className="bg-[#05070F] text-slate-400 border-t border-purple-900/30 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" withTagline={true} />
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mt-3">
              Smarter Assessment is an AI-powered educational technology platform engineered to empower CBSE, ICSE, and IGCSE students through diagnostic assessments, adaptive practice, instant feedback, and connected academic analytics.
            </p>

            {/* Direct Helpline Badge */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Advisory Helpline &amp; Demonstrations
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-white hover:text-purple-300 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-300 hover:text-white">{siteConfig.contact.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Product & Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Core AI Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-white transition-colors">
                  Curriculum Alignment
                </Link>
              </li>
              <li>
                <Link href="#demo-preview" className="hover:text-white transition-colors">
                  Interactive SaaS Demo
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Student &amp; School Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Stakeholder Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stakeholder Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#students" className="hover:text-white transition-colors">
                  For Students (CBSE / ICSE / IGCSE)
                </Link>
              </li>
              <li>
                <Link href="#teachers" className="hover:text-white transition-colors">
                  For Teachers &amp; Faculty
                </Link>
              </li>
              <li>
                <Link href="#parents" className="hover:text-white transition-colors">
                  For Parents &amp; Families
                </Link>
              </li>
              <li>
                <Link href="#schools" className="hover:text-white transition-colors">
                  For Schools &amp; Institutions
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onBookDemo}
                  className="text-left text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Schedule Institutional Pilot &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Student Safety & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Trust &amp; Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenSafety}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Student Data &amp; Safety</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-400 block pt-1">
                  Role-based data segregation • Zero commercial advertising
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Back to Top */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            &copy; {currentYear} <strong>Smarter Assessment</strong>. All rights reserved. Better Learning. Stronger Outcomes.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
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
