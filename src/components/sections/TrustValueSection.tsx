import React from "react";
import { Sliders, Zap, LineChart, Users2 } from "lucide-react";

export function TrustValueSection() {
  const valueProps = [
    {
      title: "Personalized Practice",
      description: "Questions tailored to each student’s unique learning needs.",
      icon: Sliders,
      color: "text-purple-400",
    },
    {
      title: "Instant Feedback",
      description: "Understand mistakes and learn the correct concepts immediately.",
      icon: Zap,
      color: "text-sky-400",
    },
    {
      title: "Measurable Progress",
      description: "Track accuracy, study speed, and academic improvement.",
      icon: LineChart,
      color: "text-emerald-400",
    },
    {
      title: "Connected Learning",
      description: "Keep students, teachers, and parents aligned with shared insights.",
      icon: Users2,
      color: "text-amber-400",
    },
  ];

  return (
    <section className="py-12 bg-[#090D1C] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0D1226] border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-5 h-5 ${prop.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{prop.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{prop.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
