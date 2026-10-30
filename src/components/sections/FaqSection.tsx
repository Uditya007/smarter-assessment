"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { faqList, FaqItem } from "@/config/faq.config";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Students & Parents", "Teachers & Schools", "Technical & Security"];

  const filteredFaqs = faqList.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#070914] border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-purple-900/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Got Questions? We’ve Got Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Everything you need to know about Smarter Assessment’s AI diagnostics, curriculum alignment, and institutional deployment.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. trial, WhatsApp, CBSE, grading)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Try a different keyword or reset filters.
            </div>
          ) : (
            filteredFaqs.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#0E1328] border-purple-500/50 shadow-lg shadow-purple-950/30"
                      : "bg-[#090D1C]/90 border-slate-800/90 hover:border-slate-700 hover:bg-[#0D1226]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-purple-400/80">
                        Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 bg-purple-900/50 text-purple-200 border-purple-500/50" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      <p className="mt-3">{item.answer}</p>

                      {item.highlight && (
                        <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-700/40 text-purple-200 text-xs font-medium">
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>Key takeaway: {item.highlight}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
