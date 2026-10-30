import React from "react";
import { Brain, Database, Target, BarChart3, Users, MessageSquare } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Assessment",
      desc: "Instant evaluation for MCQs and objective questions with step-by-step reasoning explanations.",
      icon: Brain,
      color: "text-[#106FE2]",
      tags: ["Instant Marking", "Reasoning Explanations", "Configurable Rubrics"],
    },
    {
      title: "Comprehensive Question Bank",
      desc: "Extensive chapter-wise practice questions tailored for CBSE, ICSE, and Cambridge IGCSE syllabi.",
      icon: Database,
      color: "text-[#FE730A]",
      tags: ["Chapter-Wise", "Multiple Formats", "Adjustable Difficulty"],
    },
    {
      title: "Personalized Learning",
      desc: "Identifies knowledge gaps automatically and serves targeted remedial practice drills.",
      icon: Target,
      color: "text-[#106FE2]",
      tags: ["Gap Diagnosis", "Adaptive Drills", "Revision Queue"],
    },
    {
      title: "Performance Analytics",
      desc: "Transforms raw test scores into clear charts on accuracy, topic mastery, and question pacing.",
      icon: BarChart3,
      color: "text-[#FE730A]",
      tags: ["Accuracy Tracking", "Speed Diagnostics", "Longitudinal Trends"],
    },
    {
      title: "Teacher & Parent Dashboards",
      desc: "Role-specific portals giving educators class diagnostics and parents simple weekly summaries.",
      icon: Users,
      color: "text-[#106FE2]",
      tags: ["Class Gradebook", "Parent Updates", "PTM Reports"],
    },
    {
      title: "Instant Notifications",
      desc: "Supported messaging integrations for test results, homework reminders, and announcements.",
      icon: MessageSquare,
      color: "text-[#FE730A]",
      tags: ["Test Results", "Homework Alerts", "Configurable Setup"],
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-slate-50 dark:bg-[#090D1E] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#106FE2]">Core Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 transition-colors">
            Everything Needed to Excel
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            Powerful AI diagnostics and curriculum tools engineered for students, educators, and schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0E1326] border border-slate-200 dark:border-slate-800 hover:border-[#106FE2]/40 shadow-xs hover:shadow-md dark:shadow-none transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 transition-colors">
                    <Icon className={`w-5 h-5 ${feat.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 transition-colors">{feat.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5 transition-colors">{feat.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {feat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      {tag}
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
