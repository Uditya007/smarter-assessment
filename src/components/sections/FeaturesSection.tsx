import React from "react";
import { Brain, Database, Target, BarChart3, Users, MessageSquare } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Assessment",
      desc: "Instant evaluation for MCQs and objective questions with step-by-step reasoning explanations.",
      icon: Brain,
      color: "text-purple-400",
      tags: ["Instant Marking", "Reasoning Explanations", "Configurable Rubrics"],
    },
    {
      title: "Comprehensive Question Bank",
      desc: "Extensive chapter-wise practice questions tailored for CBSE, ICSE, and Cambridge IGCSE syllabi.",
      icon: Database,
      color: "text-sky-400",
      tags: ["Chapter-Wise", "Multiple Formats", "Adjustable Difficulty"],
    },
    {
      title: "Personalized Learning",
      desc: "Identifies knowledge gaps automatically and serves targeted remedial practice drills.",
      icon: Target,
      color: "text-emerald-400",
      tags: ["Gap Diagnosis", "Adaptive Drills", "Revision Queue"],
    },
    {
      title: "Performance Analytics",
      desc: "Transforms raw test scores into clear charts on accuracy, topic mastery, and question pacing.",
      icon: BarChart3,
      color: "text-amber-400",
      tags: ["Accuracy Tracking", "Speed Diagnostics", "Longitudinal Trends"],
    },
    {
      title: "Teacher & Parent Dashboards",
      desc: "Role-specific portals giving educators class diagnostics and parents simple weekly summaries.",
      icon: Users,
      color: "text-pink-400",
      tags: ["Class Gradebook", "Parent Updates", "PTM Reports"],
    },
    {
      title: "Instant Notifications",
      desc: "Supported messaging integrations for test results, homework reminders, and announcements.",
      icon: MessageSquare,
      color: "text-indigo-400",
      tags: ["Test Results", "Homework Alerts", "Configurable Setup"],
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-[#090D1E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Core Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Everything Needed to Excel
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Powerful AI diagnostics and curriculum tools engineered for students, educators, and schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1226] border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${feat.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{feat.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/70">
                  {feat.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
