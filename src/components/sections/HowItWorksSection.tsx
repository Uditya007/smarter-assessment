import React from "react";
import { BookCheck, Cpu, Sparkles, TrendingUp } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Assess",
      desc: "Students take chapter-wise quizzes or mock tests aligned with CBSE, ICSE, or IGCSE.",
      icon: BookCheck,
      color: "text-purple-400",
    },
    {
      num: "02",
      title: "Analyze",
      desc: "AI evaluates answers instantaneously, pinpointing knowledge gaps and misconceptions.",
      icon: Cpu,
      color: "text-sky-400",
    },
    {
      num: "03",
      title: "Improve",
      desc: "Receive step-by-step reasoning explanations and targeted remedial practice drills.",
      icon: Sparkles,
      color: "text-amber-400",
    },
    {
      num: "04",
      title: "Track Progress",
      desc: "Students, teachers, and parents review real-time mastery growth and progress reports.",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">The Smarter Learning Loop</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            A simple, intelligent four-step cycle that turns everyday assessment into measurable academic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="p-6 rounded-2xl bg-[#0D1226] border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500">STEP {st.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Icon className={`w-4 h-4 ${st.color}`} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
