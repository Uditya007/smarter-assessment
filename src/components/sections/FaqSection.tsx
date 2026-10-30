"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqList } from "@/config/faq.config";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#070914] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Common Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Quick answers to key questions about Smarter Assessment.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqList.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0E1328] border-purple-500/50 shadow-md"
                    : "bg-[#090D1C] border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-purple-400/80">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-purple-900/50 text-purple-200" : ""
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p className="mt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
