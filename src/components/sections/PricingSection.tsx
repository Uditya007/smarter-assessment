"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Building2, HelpCircle, ShieldCheck } from "lucide-react";
import { pricingConfig, PricingPlan } from "@/config/pricing.config";

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onContactSchool: () => void;
}

export function PricingSection({ onSelectPlan, onContactSchool }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  const monthlyPlan = pricingConfig.plans.find((p) => p.id === "monthly") || pricingConfig.plans[0];
  const annualPlan = pricingConfig.plans.find((p) => p.id === "annual") || pricingConfig.plans[1];

  return (
    <section id="pricing" className="py-24 bg-[#070914] border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-purple-900/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Transparent Student &amp; School Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {pricingConfig.headline}
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            {pricingConfig.subheadline}
          </p>

          {/* 15-Day Trial Callout Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs font-medium shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{pricingConfig.trialNotice}</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          {/* PLAN 1: Monthly Plan */}
          <div className="relative rounded-2xl bg-[#0D1226]/90 border border-slate-800/90 p-7 sm:p-8 flex flex-col transition-all duration-300 hover:border-slate-700 hover:shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {monthlyPlan.badge}
                </span>
                <h3 className="text-2xl font-black text-white mt-0.5">{monthlyPlan.name}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {monthlyPlan.description}
            </p>

            {/* Price display */}
            <div className="mb-6 pb-6 border-b border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {monthlyPlan.currency}{monthlyPlan.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-400">
                  {monthlyPlan.billingPeriod}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {monthlyPlan.periodDescription}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-8 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Plan Inclusions
              </span>
              {monthlyPlan.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                      feat.included
                        ? "bg-purple-900/40 text-purple-300 border border-purple-500/30"
                        : "bg-slate-800/40 text-slate-400 border border-slate-700"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                  <span
                    className={`text-xs ${
                      feat.included ? "text-slate-200 font-medium" : "text-slate-400 line-through"
                    }`}
                  >
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => onSelectPlan(monthlyPlan)}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/40 transition-all flex items-center justify-center gap-2"
            >
              <span>{monthlyPlan.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {monthlyPlan.trialNote && (
              <div className="text-center text-[11px] text-purple-300 mt-2 font-medium">
                {monthlyPlan.trialNote}
              </div>
            )}
          </div>

          {/* PLAN 2: Annual Plan (Recommended) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#121833] via-[#0E1428] to-[#0A0E22] border-2 border-purple-500 p-6 sm:p-8 flex flex-col shadow-2xl shadow-purple-950/60 md:scale-[1.02]">
            {/* Top Ribbon Badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              {annualPlan.badge}
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Recommended Value
                </span>
                <h3 className="text-2xl font-black text-white mt-0.5">{annualPlan.name}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {annualPlan.description}
            </p>

            {/* Price display */}
            <div className="mb-6 pb-6 border-b border-purple-900/50">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {annualPlan.currency}{annualPlan.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {annualPlan.billingPeriod}
                </span>
              </div>
              <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                {annualPlan.savingsNote} • {annualPlan.periodDescription}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-8 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                Everything in Monthly, Plus:
              </span>
              {annualPlan.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-200 font-medium">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => onSelectPlan(annualPlan)}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/40 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>{annualPlan.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {annualPlan.trialNote && (
              <div className="text-center text-[11px] text-amber-300 mt-2 font-medium">
                {annualPlan.trialNote}
              </div>
            )}
          </div>
        </div>

        {/* Institutional Pricing Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1126] border border-purple-500/30 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-12 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0">
              <Building2 className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {pricingConfig.institutionalCTA.headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                {pricingConfig.institutionalCTA.subheadline}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onContactSchool}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/40 transition-colors whitespace-nowrap flex-shrink-0"
          >
            {pricingConfig.institutionalCTA.buttonText}
          </button>
        </div>

        {/* Pricing Transparency & Statutory Tax Notes */}
        <div className="max-w-4xl mx-auto space-y-2 text-center text-xs text-slate-400">
          <p>
            <strong>Brochure Schedule Note:</strong> {pricingConfig.disclaimer}
          </p>
          <p>
            <strong>Taxes &amp; Inclusions:</strong> {pricingConfig.taxNote}
          </p>
        </div>
      </div>
    </section>
  );
}
