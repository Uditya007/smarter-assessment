import React from "react";
import { BookOpen, Award, Compass, ShieldCheck } from "lucide-react";

export function CurriculumSection() {
  const boards = [
    {
      code: "CBSE",
      name: "Central Board of Secondary Education",
      grades: "Grades 6 to 12",
      desc: "NCERT-aligned concept mastery, competency-based question styles, and board examination simulation.",
      icon: BookOpen,
      color: "text-sky-600 dark:text-sky-400",
      subjects: ["Mathematics", "Science", "Social Science", "English"],
    },
    {
      code: "ICSE",
      name: "Indian Certificate of Secondary Education",
      grades: "Grades 6 to 10",
      desc: "In-depth conceptual rigor, multi-step problem solving, and analytical clarity across sciences and math.",
      icon: Award,
      color: "text-purple-600 dark:text-purple-400",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    },
    {
      code: "IGCSE",
      name: "Cambridge Assessment International",
      grades: "Lower Secondary & IGCSE",
      desc: "Global inquiry, investigative problem solving, and criterion-based evaluations across Core & Extended syllabi.",
      icon: Compass,
      color: "text-emerald-600 dark:text-emerald-400",
      subjects: ["Extended Math", "Combined Sciences", "Physics", "Chemistry"],
    },
  ];

  return (
    <section id="curriculum" className="py-16 md:py-20 bg-slate-50 dark:bg-[#090D1E] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Curriculum Coverage</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 transition-colors">
            Designed Around Your Academic Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            Every practice quiz and diagnostic test is calibrated to your exact board syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {boards.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.code}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/40 shadow-xs hover:shadow-md dark:shadow-none transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-colors">
                      <Icon className={`w-5 h-5 ${b.color}`} />
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 transition-colors">
                      {b.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 transition-colors">{b.name}</h3>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-3">{b.grades}</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors">{b.desc}</p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Key Subject Modules
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {b.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="max-w-2xl mx-auto text-center p-3.5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2 transition-colors">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span>
            Curriculum names are used solely to indicate syllabus alignment. No official affiliation or endorsement is claimed.
          </span>
        </div>
      </div>
    </section>
  );
}
