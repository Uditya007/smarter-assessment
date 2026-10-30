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
    <section id="pricing" className="py-16 md:py-20 bg-white dark:bg-[#070914] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Plans &amp; Pricing</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 transition-colors">
            Start Learning Smarter Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            Simple pricing for individual learners and schools. Includes a 15-day complimentary trial for one subject.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Monthly Plan */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#0D1226] border border-slate-200 dark:border-slate-800 shadow-xs dark:shadow-none flex flex-col justify-between transition-colors">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {monthlyPlan.badge}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{monthlyPlan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">₹500</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">/ student / month</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 transition-colors">
                Ideal for term revisions, focused test sprints, or single subject modules.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>Standard learning &amp; assessment modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>Chapter-wise practice &amp; instant feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>Personalized error explanations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>Essential performance insights &amp; accuracy</span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onSelectPlan(monthlyPlan)}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-800 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors"
              >
                Choose Monthly Plan
              </button>
              <span className="text-[11px] text-center block text-slate-500 dark:text-slate-400 mt-2">
                15-day complimentary trial for 1 subject included
              </span>
            </div>
          </div>

          {/* Annual Plan (Recommended - 50% Savings) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-purple-50 via-white to-purple-50/50 dark:from-purple-950/40 dark:via-[#0D1226] dark:to-[#0D1226] border-2 border-amber-400/80 shadow-lg shadow-amber-400/10 flex flex-col justify-between relative transition-colors">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
              Recommended • 50% Savings
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 mb-1">
                {annualPlan.badge}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{annualPlan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">₹3,000</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">/ student / year</span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                Equivalent to ₹250/month (Save ₹3,000 yearly)
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 transition-colors">
                Full-year academic accompaniment with complete chapter drills and board exam prep.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Full-year access to all enrolled subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Priority AI feedback &amp; concept gap diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Full question bank &amp; timed mock simulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Parent progress digests &amp; revision queues</span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onSelectPlan(annualPlan)}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
              >
                Start 15-Day Free Trial
              </button>
              <span className="text-[11px] text-center block text-slate-500 dark:text-slate-400 mt-2">
                No credit card required for trial
              </span>
            </div>
          </div>
        </div>

        {/* School & Institutional Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0D1226] border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300 flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Are you a School or Institution?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 transition-colors">
                We offer custom cohort pricing, dedicated faculty training, and unified school dashboards.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onContactSchool}
            className="px-4 py-2 rounded-xl text-xs font-bold text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-white bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/50 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-500/30 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Request Institutional Quote
          </button>
        </div>
      </div>
    </section>
  );
}
