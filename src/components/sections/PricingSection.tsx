"use client";

import React from "react";
import { Check, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { pricingConfig, PricingPlan } from "@/config/pricing.config";

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onContactSchool: () => void;
}

export function PricingSection({ onSelectPlan, onContactSchool }: PricingSectionProps) {
  const monthlyPlan = pricingConfig.plans.find((p) => p.id === "monthly") || pricingConfig.plans[0];
  const annualPlan = pricingConfig.plans.find((p) => p.id === "annual") || pricingConfig.plans[1];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-[#070914] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Plans &amp; Pricing</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Start Learning Smarter Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Simple pricing for individual learners and schools. Includes a 15-day complimentary trial for one subject.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Monthly Plan */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1226] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                {monthlyPlan.badge}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{monthlyPlan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold text-white">₹500</span>
                <span className="text-xs text-slate-400">/ student / month</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">
                Ideal for term revisions, focused test sprints, or single subject modules.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Standard learning &amp; assessment modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Chapter-wise practice &amp; instant feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Personalized error explanations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Essential performance insights &amp; accuracy</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan(monthlyPlan)}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Annual Plan (Recommended) */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-[#111630] border-2 border-purple-500 flex flex-col justify-between shadow-xl">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
              Recommended • 50% Savings
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                Full Academic Year
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{annualPlan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold text-white">₹3,000</span>
                <span className="text-xs text-slate-300">/ student / year</span>
              </div>
              <p className="text-[11px] text-emerald-400 font-semibold mb-4">
                Effective ₹250/month (Save ₹3,000 compared to monthly)
              </p>
              <p className="text-xs text-slate-300 mb-6">
                Our complete academic year companion for continuous mastery and board exam prep.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full access to all enrolled subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Complete chapter question banks &amp; adaptive drills</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>AI diagnostic engine with concept gap alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Priority academic &amp; technical support</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan(annualPlan)}
              className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Start 15-Day Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Institutional CTA */}
        <div className="p-5 rounded-xl bg-[#0D1226] border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-6">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-sky-400 flex-shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-sm font-bold text-white">Looking for a School-Wide Solution?</h4>
              <p className="text-xs text-slate-400">Automated faculty evaluation, batch reports &amp; SIS sync.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onContactSchool}
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors whitespace-nowrap"
          >
            Request School Pricing
          </button>
        </div>

        <p className="text-center text-[11px] text-slate-500">
          Prices based on standard brochure schedule. Subject to statutory taxes (GST). No automatic card charges.
        </p>
      </div>
    </section>
  );
}
