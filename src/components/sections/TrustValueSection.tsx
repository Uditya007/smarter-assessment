import React from "react";
import { Sliders, Zap, LineChart, Users2 } from "lucide-react";

export function TrustValueSection() {
  const valueProps = [
    {
      title: "Personalized Practice",
      description: "Questions tailored to each student’s learning needs.",
      icon: Sliders,
      accent: "text-purple-400 group-hover:text-purple-300",
      border: "hover:border-purple-500/40",
      badge: "Adaptive",
    },
    {
      title: "Instant Feedback",
      description: "Understand mistakes and learn the correct concepts immediately.",
      icon: Zap,
      accent: "text-sky-400 group-hover:text-sky-300",
      border: "hover:border-sky-500/40",
      badge: "Real-Time",
    },
    {
      title: "Measurable Progress",
      description: "Track performance, accuracy, and academic improvement.",
      icon: LineChart,
      accent: "text-emerald-400 group-hover:text-emerald-300",
      border: "hover:border-emerald-500/40",
      badge: "Analytics",
    },
    {
      title: "Connected Learning",
      description: "Keep students, teachers, and parents informed.",
      icon: Users2,
      accent: "text-amber-400 group-hover:text-amber-300",
      border: "hover:border-amber-500/40",
      badge: "Collaborative",
    },
  ];

  return (
    <section className="py-14 bg-[#090D1C] border-y border-slate-800/80 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-purple-900/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Core Educational Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Smarter Learning. Better Outcomes.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Structured pedagogical methodology engineered to replace rote memorization with verified conceptual understanding.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className={`group relative p-6 rounded-2xl bg-[#0D1226]/80 border border-slate-800/90 ${prop.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-colors group-hover:bg-slate-800">
                    <Icon className={`w-6 h-6 ${prop.accent} transition-colors`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {prop.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
                  {prop.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-slate-300">
                  <span>Pedagogical Standard 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
