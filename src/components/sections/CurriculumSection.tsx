import React from "react";
import { BookOpen, Award, Compass, CheckCircle2, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function CurriculumSection() {
  const curricula = [
    {
      code: "CBSE",
      fullName: "Central Board of Secondary Education",
      grades: "Grades 6 to 12",
      badge: "National Standard",
      description:
        "Structured around NCERT conceptual frameworks, competency-based question styles, and board examination patterns.",
      accent: "from-blue-600 to-indigo-600",
      badgeColor: "bg-blue-950/70 border-blue-500/40 text-blue-300",
      icon: BookOpen,
      features: [
        "Complete NCERT textbook & exemplar coverage",
        "Competency-focused case-study problem sets",
        "Term 1 & Term 2 exam simulations",
        "Fine-grained formula & theorem retention drills",
      ],
      subjectsCovered: ["Mathematics", "Science (Physics, Chem, Bio)", "Social Science", "English"],
    },
    {
      code: "ICSE",
      fullName: "Indian Certificate of Secondary Education",
      grades: "Grades 6 to 10",
      badge: "Concept Intensive",
      description:
        "Tailored for in-depth conceptual rigor, detailed multi-step problem solving, and analytical clarity across sciences and humanities.",
      accent: "from-purple-600 to-violet-600",
      badgeColor: "bg-purple-950/70 border-purple-500/40 text-purple-300",
      icon: Award,
      features: [
        "In-depth application questions across Physics, Chemistry, Biology",
        "Rigorous step-by-step mathematical reasoning steps",
        "Comprehensive chapter-by-chapter analytical question sets",
        "Specimen paper blueprints & previous year trend diagnostics",
      ],
      subjectsCovered: ["Mathematics", "Physics", "Chemistry", "Biology", "English Literature & Lang"],
    },
    {
      code: "IGCSE",
      fullName: "Cambridge Assessment International Education",
      grades: "Lower Secondary & IGCSE (Grades 6 to 10)",
      badge: "International Standard",
      description:
        "Engineered for global inquiry, scientific investigation, and criterion-based problem solving across Core and Extended syllabi.",
      accent: "from-sky-600 to-teal-600",
      badgeColor: "bg-sky-950/70 border-sky-500/40 text-sky-300",
      icon: Compass,
      features: [
        "Aligned with Cambridge Core & Extended syllabus benchmarks",
        "Investigative problem solving & experimental reasoning",
        "Cognitive domain tagging (Knowledge, Application, Analysis)",
        "Structured past-paper style assessment formats",
      ],
      subjectsCovered: ["Extended Math", "Combined / Co-ordinated Sciences", "Physics", "Chemistry", "Biology"],
    },
  ];

  return (
    <section id="curriculum" className="py-24 bg-[#090D1F] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-purple-950/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>Academic Syllabus Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed Around Your Academic Curriculum.
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Every question, explanation, and diagnostic rubric in Smarter Assessment is calibrated to the specific learning objectives of major academic boards.
          </p>
        </div>

        {/* 3 Curriculum Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {curricula.map((curr) => {
            const Icon = curr.icon;
            return (
              <div
                key={curr.code}
                className="group relative rounded-2xl bg-[#0D1226]/90 border border-slate-800/90 hover:border-purple-500/40 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/40"
              >
                {/* Header: Code & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {curr.code}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium block">
                        {curr.grades}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${curr.badgeColor}`}>
                    {curr.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-purple-300 mb-2">
                  {curr.fullName}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {curr.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Curriculum Inclusions
                  </span>
                  {curr.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Subjects pill row */}
                <div className="mt-auto pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Enrolled Subjects
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {curr.subjectsCovered.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-900 border border-slate-700/80 text-slate-300 font-medium"
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

        {/* Academic Integrity & Non-Affiliation Transparency Banner */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Curricular Alignment Notice:</strong> Smarter Assessment is an independent educational technology platform designed to support students and schools following CBSE, ICSE, and IGCSE syllabi. The platform is not officially affiliated with, certified by, or endorsed by the CBSE, CISCE, or Cambridge Assessment International authorities. All board names and curriculum titles are the intellectual property of their respective governing bodies and are referenced strictly for educational descriptive purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
