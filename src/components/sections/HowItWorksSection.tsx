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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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

          {/* Right: Transparent Phone Mockup + App Store & Play Store Download */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            {/* Phone Mockup with subtle ambient glow */}
            <div className="relative w-full max-w-[240px] sm:max-w-[270px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#106FE2]/20 to-[#FE730A]/20 rounded-full blur-2xl -z-10 transform scale-90" />
              <Image
                src="/images/phone-mockup.png"
                alt="Smarter Assessment mobile app on iOS and Android"
                width={682}
                height={1024}
                priority
                className="w-full h-auto object-contain mx-auto drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Download CTA Block */}
            <div className="mt-6 w-full max-w-sm px-2">
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                Download our app from Play Store and App Store
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                {/* Google Play Store Badge */}
                <a
                  href="#download"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-white border border-slate-800 dark:border-slate-700 shadow-md hover:border-[#FE730A] transition-all group"
                  aria-label="Download from Google Play Store"
                >
                  {/* Google Play Official Logo */}
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.904V2.718c0-.336.216-.644.609-.904z" />
                    <path fill="#34A853" d="M14.851 13.058l2.585 2.586-11.83 6.84c-.454.263-.82.162-.82-.227v-.036l10.065-9.163z" />
                    <path fill="#FBBC05" d="M18.496 14.586l3.633-2.102c1.01-.585 1.01-1.54 0-2.125l-3.633-2.102-2.593 2.593 2.593 2.736z" />
                    <path fill="#EA4335" d="M14.851 10.942L4.786 1.779c0-.389.366-.49.82-.227l11.83 6.84-2.585 2.55z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium leading-none">GET IT ON</div>
                    <div className="text-xs font-bold leading-tight mt-0.5">Google Play</div>
                  </div>
                </a>

                {/* Apple App Store Badge */}
                <a
                  href="#download"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-white border border-slate-800 dark:border-slate-700 shadow-md hover:border-[#106FE2] transition-all group"
                  aria-label="Download from Apple App Store"
                >
                  {/* Apple Official Logo */}
                  <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-.98 1.7-.85 2.73 1 .08 2.02-.48 2.57-1.23z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-medium leading-none">Download on the</div>
                    <div className="text-xs font-bold leading-tight mt-0.5">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
