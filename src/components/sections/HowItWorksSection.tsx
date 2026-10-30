import React from "react";
import Image from "next/image";
import { BookCheck, Cpu, Sparkles, TrendingUp } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Assess",
      desc: "Students take chapter-wise quizzes or mock tests aligned with CBSE, ICSE, or IGCSE.",
      icon: BookCheck,
      color: "text-[#106FE2]",
    },
    {
      num: "02",
      title: "Analyze",
      desc: "AI evaluates answers instantaneously, pinpointing knowledge gaps and misconceptions.",
      icon: Cpu,
      color: "text-[#FE730A]",
    },
    {
      num: "03",
      title: "Improve",
      desc: "Receive step-by-step reasoning explanations and targeted remedial practice drills.",
      icon: Sparkles,
      color: "text-[#106FE2]",
    },
    {
      num: "04",
      title: "Track Progress",
      desc: "Students, teachers, and parents review real-time mastery growth and progress reports.",
      icon: TrendingUp,
      color: "text-[#FE730A]",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white dark:bg-[#070913] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#106FE2]">The Smarter Learning Loop</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 transition-colors">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            A simple, intelligent four-step cycle that turns everyday assessment into measurable academic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: 4 Steps (2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0D1226] border border-slate-200 dark:border-slate-800 hover:border-[#106FE2]/40 shadow-xs dark:shadow-none transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">STEP {st.num}</span>
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors">
                        <Icon className={`w-4 h-4 ${st.color}`} />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5 transition-colors">{st.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Clean Product Photo with Phone */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-[#106FE2]/25">
                <Image
                  src="/images/smarter-app-phone.jpg"
                  alt="Smarter Assessment mobile learning platform"
                  width={1000}
                  height={667}
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
