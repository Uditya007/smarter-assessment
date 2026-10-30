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
      color: "text-sky-400",
      subjects: ["Mathematics", "Science", "Social Science", "English"],
    },
    {
      code: "ICSE",
      name: "Indian Certificate of Secondary Education",
      grades: "Grades 6 to 10",
      desc: "In-depth conceptual rigor, multi-step problem solving, and analytical clarity across sciences and math.",
      icon: Award,
      color: "text-purple-400",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    },
    {
      code: "IGCSE",
      name: "Cambridge Assessment International",
      grades: "Lower Secondary & IGCSE",
      desc: "Global inquiry, investigative problem solving, and criterion-based evaluations across Core & Extended syllabi.",
      icon: Compass,
      color: "text-emerald-400",
      subjects: ["Extended Math", "Combined Sciences", "Physics", "Chemistry"],
    },
  ];

  return (
    <section id="curriculum" className="py-16 md:py-20 bg-[#090D1E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Curriculum Coverage</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Designed Around Your Academic Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Every practice quiz and diagnostic test is calibrated to your exact board syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {boards.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.code}
                className="p-6 rounded-2xl bg-[#0D1226] border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${b.color}`} />
                    </div>
                    <span className="text-xs font-bold text-slate-400">{b.grades}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{b.code}</h3>
                  <div className="text-[11px] font-medium text-slate-400 mb-3">{b.name}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{b.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/70">
                  {b.subjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto text-[11px] text-slate-400">
          Independent educational platform aligned with official curriculum benchmarks. Not formally affiliated with examination boards.
        </div>
      </div>
    </section>
  );
}
