import React from "react";
import {
  Brain,
  Database,
  Target,
  BarChart3,
  Users,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Layers,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      id: "feature-1",
      number: "01",
      title: "AI-Powered Assessment",
      tagline: "Instant Intelligent Grading & Feedback",
      description:
        "Evaluate student responses, provide instantaneous scores, and deliver relevant step-by-step diagnostic feedback to transform assessment into understanding.",
      icon: Brain,
      accent: "from-purple-500 to-indigo-500",
      badge: "Core AI Engine",
      capabilities: [
        "MCQ evaluation with instant answer keys",
        "Objective question assessment (fill-in-the-blanks, numerical)",
        "Support for subjective-answer evaluation where configured",
        "Step-by-step answer explanations and underlying proofs",
        "Comprehensive diagnostic performance summaries",
      ],
    },
    {
      id: "feature-2",
      number: "02",
      title: "Comprehensive Question Bank",
      tagline: "Curated Across Chapters & Difficulty Levels",
      description:
        "Practice with structured academic questions designed around subjects, chapters, and cognitive difficulty levels for CBSE, ICSE, and IGCSE syllabi.",
      icon: Database,
      accent: "from-blue-500 to-sky-500",
      badge: "Curriculum Aligned",
      capabilities: [
        "Chapter-wise question banks mapped to official syllabus",
        "Multiple question formats (MCQ, Assertion-Reason, Problem sets)",
        "Timed practice tests & chapter mastery quizzes",
        "Homework and teacher-assigned assessments",
        "Adjustable difficulty levels (Foundational, Standard, Advanced)",
        "Rigorous board exam preparation simulations",
      ],
    },
    {
      id: "feature-3",
      number: "03",
      title: "Personalized Learning",
      tagline: "Target Weak Concepts with Precision",
      description:
        "Help students focus specifically on concepts they need to improve, eliminating generic repetition and maximizing study time efficiency.",
      icon: Target,
      accent: "from-emerald-500 to-teal-500",
      badge: "Adaptive Engine",
      capabilities: [
        "Automated identification of conceptual learning gaps",
        "Dynamic recommendation of targeted remedial practice",
        "Smart revision priority queue before school examinations",
        "Fine-grained tracking of concept-level mastery over time",
        "Pacing adaptation based on student retention curves",
      ],
    },
    {
      id: "feature-4",
      number: "04",
      title: "Performance Analytics",
      tagline: "Transform Raw Scores into Actionable Insights",
      description:
        "Transform assessment data into useful academic insights that make learning progress transparent, objective, and trackable.",
      icon: BarChart3,
      accent: "from-indigo-500 to-violet-500",
      badge: "Deep Analytics",
      capabilities: [
        "Continuous accuracy tracking across topics and sub-skills",
        "Chapter-wise performance histograms and comparative benchmarks",
        "Time spent per question to diagnose hesitation vs fluency",
        "Longitudinal progress graphs and mastery trajectories",
        "Clear strength and weakness quadrant analysis",
      ],
    },
    {
      id: "feature-5",
      number: "05",
      title: "Parent & Teacher Dashboards",
      tagline: "Role-Specific Portals for Collaborative Support",
      description:
        "Provide appropriate academic insights to parents and educators so everyone in the student’s support system is aligned and empowered.",
      icon: Users,
      accent: "from-purple-500 to-pink-500",
      badge: "Multi-Stakeholder",
      capabilities: [
        "Student progress reports designed for non-technical parents",
        "Batch and class assessment summaries for teachers",
        "Learning gap identification for targeted interventions",
        "Historical revision and test attempt logs",
        "Data-backed support for meaningful Parent-Teacher Meetings",
      ],
    },
    {
      id: "feature-6",
      number: "06",
      title: "WhatsApp Notifications",
      tagline: "Frictionless Updates via Instant Messaging",
      description:
        "Help schools keep parents effortlessly informed through supported communication integrations directly on their mobile phones.",
      icon: MessageSquare,
      accent: "from-emerald-500 to-green-500",
      badge: "Configurable Integration",
      badgeVariant: "upcoming",
      capabilities: [
        "Instant test results and score notifications (where configured)",
        "Daily or weekly homework and assignment reminders",
        "Attendance updates synchronized with school management",
        "School announcements and examination timetables",
        "Consolidated monthly student performance summaries",
      ],
      notice:
        "Note: WhatsApp notifications are offered as a configurable institutional messaging integration subject to school gateway setup.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#090D1E] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-700/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-sky-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Comprehensive SaaS Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Platform Capabilities
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Engineered to streamline academic evaluation, deliver deep cognitive feedback, and support measurable student improvement.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isConfigurable = feature.badgeVariant === "upcoming";

            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-[#0D1226]/90 border border-slate-800/90 hover:border-purple-500/40 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/40"
              >
                {/* Header Row: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.accent} p-[1.5px] shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0E1428] rounded-[10px] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      isConfigurable
                        ? "bg-amber-950/60 text-amber-300 border-amber-600/40"
                        : "bg-purple-950/70 text-purple-300 border-purple-500/40"
                    }`}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="mb-3">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Capability {feature.number}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400 mt-0.5">
                    {feature.tagline}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Capabilities Bullet Checklist */}
                <div className="mt-auto pt-5 border-t border-slate-800/80 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Features
                  </span>
                  {feature.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-sky-400" />
                      </div>
                      <span className="text-xs text-slate-300 font-medium leading-tight">
                        {cap}
                      </span>
                    </div>
                  ))}

                  {/* Integration disclaimer notice if applicable */}
                  {feature.notice && (
                    <div className="mt-4 p-2.5 rounded-lg bg-amber-950/30 border border-amber-600/30 text-[11px] text-amber-200/90 leading-tight">
                      {feature.notice}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
