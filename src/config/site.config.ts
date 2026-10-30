export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  mainHeadline: string;
  supportingHeadline: string;
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsappNumber: string;
    whatsappMessage: string;
    isWhatsAppAvailable: boolean; // Configurable toggle
  };
  supportedCurricula: Array<{
    code: string;
    name: string;
    grades: string;
    focus: string;
    badge: string;
    highlights: string[];
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Smarter Assessment",
  shortName: "Smarter",
  tagline: "Better Learning. Stronger Outcomes.",
  mainHeadline: "Every Child Can Excel With the Right Guidance.",
  supportingHeadline:
    "AI-powered learning, personalized practice, and intelligent assessments that help every student unlock their academic potential.",
  contact: {
    phone: "+918970809090",
    displayPhone: "+91 8970809090",
    email: "info@smarterassessment.com",
    whatsappNumber: "918970809090",
    whatsappMessage: "Hello Smarter Assessment team, I am interested in learning more about Smarter Assessment for my school/child.",
    isWhatsAppAvailable: true, // Configurable integration toggle
  },
  supportedCurricula: [
    {
      code: "CBSE",
      name: "Central Board of Secondary Education",
      grades: "Grades 6 to 12",
      focus: "NCERT-aligned concept mastery, competency-based questions, and board exam simulation.",
      badge: "National Standard",
      highlights: [
        "Full NCERT chapter coverage & exemplar problems",
        "Competency-focused case-based objective assessments",
        "Targeted revision for Term 1, Term 2, and Final Board exams",
        "Instant diagnosis on weak foundational concepts"
      ],
    },
    {
      code: "ICSE",
      name: "Indian Certificate of Secondary Education",
      grades: "Grades 6 to 10",
      focus: "In-depth conceptual rigor, detailed multi-step problem solving, and analytical clarity.",
      badge: "Concept Intensive",
      highlights: [
        "Deep application-oriented questions across Sciences & Math",
        "Structured step-by-step reasoning guidance",
        "Comprehensive chapter-by-chapter question repositories",
        "High-granularity accuracy and topic breakdown analytics"
      ],
    },
    {
      code: "IGCSE",
      name: "Cambridge Assessment International",
      grades: "Lower Secondary & IGCSE (Grades 6 to 10)",
      focus: "Global investigative inquiry, analytical synthesis, and criterion-based evaluations.",
      badge: "International Standard",
      highlights: [
        "Structured around Core & Extended Cambridge syllabi",
        "Emphasis on scientific reasoning & problem articulation",
        "Adaptive practice tailored to individual pacing",
        "Detailed performance summaries by cognitive domain"
      ],
    },
  ],
  benefits: [
    {
      title: "Personalized Learning",
      description: "AI dynamically identifies knowledge gaps and serves targeted drills.",
      icon: "Sparkles",
    },
    {
      title: "Instant AI Feedback",
      description: "Step-by-step guidance immediately clarifies mistakes without waiting.",
      icon: "Zap",
    },
    {
      title: "Data-Driven Improvement",
      description: "Track accuracy, speed, and chapter mastery over every study session.",
      icon: "TrendingUp",
    },
  ],
};
