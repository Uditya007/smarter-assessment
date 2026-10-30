export interface FaqItem {
  id: string;
  category: "General" | "Students & Parents" | "Teachers & Schools" | "Technical & Security";
  question: string;
  answer: string;
  highlight?: string;
}

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Smarter Assessment?",
    answer:
      "Smarter Assessment is an AI-powered educational technology platform engineered to elevate student performance through intelligent diagnostic assessments, personalized chapter practice, instant corrective feedback, and deep academic analytics. It unites students, teachers, parents, and school administrators in a cohesive learning ecosystem.",
    highlight: "AI-powered diagnostic and practice platform for K-12 education.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "How does AI-powered assessment work?",
    answer:
      "When a student answers questions, the platform's diagnostic engine analyzes not just whether the answer is right or wrong, but the underlying cognitive pathway, time taken, and error pattern. It pinpoints specific conceptual misconceptions, delivers instant step-by-step reasoning explanations, and dynamically generates practice problems tailored to fill the student's unique knowledge gaps.",
    highlight: "Cognitive error diagnosis and adaptive practice generation.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Which curricula does the platform support?",
    answer:
      "Smarter Assessment is designed around CBSE (Central Board of Secondary Education), ICSE (Indian Certificate of Secondary Education), and Cambridge IGCSE curricula. Content, question formats, and learning objectives are structured to align directly with the prescribed syllabi and exam patterns of each respective board.",
    highlight: "Full alignment with CBSE, ICSE, and IGCSE syllabus standards.",
  },
  {
    id: "faq-4",
    category: "Students & Parents",
    question: "Can students practice chapter-wise?",
    answer:
      "Yes. Smarter Assessment features an extensive chapter-wise question bank. Students can select any subject and chapter, choose their desired practice mode or difficulty level, attempt targeted quizzes, and receive immediate concept-level clarity before moving on to subsequent topics.",
    highlight: "Granular chapter and sub-topic level practice drills.",
  },
  {
    id: "faq-5",
    category: "Teachers & Schools",
    question: "How can teachers track student performance?",
    answer:
      "Teachers gain access to a dedicated dashboard that provides real-time class summaries, score distribution histograms, chapter-level accuracy metrics, and automated alerts highlighting students who require additional support. This saves hours of manual grading while making parent-teacher conferences data-backed and actionable.",
    highlight: "Automated grading, class summaries, and struggling student alerts.",
  },
  {
    id: "faq-6",
    category: "Students & Parents",
    question: "How can parents monitor academic progress?",
    answer:
      "Parents have a dedicated, easy-to-understand parent dashboard that displays their child's overall performance score, subject-by-subject accuracy, recent assessment outcomes, strengths, and areas requiring revision. Parents stay informed about learning trends without needing to decipher complex academic jargon.",
    highlight: "Simple, transparent progress summaries and revision recommendations.",
  },
  {
    id: "faq-7",
    category: "Technical & Security",
    question: "Does the platform support subjective answers?",
    answer:
      "Objective questions (such as MCQs, numerical responses, and fill-in-the-blanks) are evaluated instantaneously. Support for subjective-answer evaluation is an advanced capability that can be enabled and configured based on institutional tier requirements and scoring rubric settings.",
    highlight: "Instant objective evaluation; configurable subjective rubrics.",
  },
  {
    id: "faq-8",
    category: "Technical & Security",
    question: "Is WhatsApp integration available?",
    answer:
      "WhatsApp notifications for test results, homework alerts, attendance updates, and school announcements are designed as a configurable integration. Where enabled by the school or institutional setup with compliant messaging gateways, parents and students can receive key academic alerts directly on their phones.",
    highlight: "Available as a configurable institutional messaging integration.",
  },
  {
    id: "faq-9",
    category: "General",
    question: "Is a free trial available?",
    answer:
      "Yes! Individual students and parents can get started with an advertised 15-day complimentary trial for one chosen subject (subject to confirmation of the current promotional offer). Schools can also request a comprehensive guided pilot demonstration for their academic faculty.",
    highlight: "15-day single-subject trial for students; customized pilots for schools.",
  },
  {
    id: "faq-10",
    category: "Teachers & Schools",
    question: "How can a school request a demonstration?",
    answer:
      "Schools, principals, and academic coordinators can schedule a personalized walkthrough by submitting the 'Book a School Demo' form on this website or by calling our institutional desk at +91 8970809090. Our academic specialists will demonstrate classroom analytics, exam scheduling, and workflow integration.",
    highlight: "Submit the demo request form or call +91 8970809090 directly.",
  },
  {
    id: "faq-11",
    category: "Technical & Security",
    question: "How is student information protected?",
    answer:
      "We treat student privacy with the highest institutional diligence. Student data is encrypted in transit and at rest, strictly isolated through role-based access controls, and never sold, monetized, or shared with unauthorized third parties. Only verified teachers, authorized school administrators, and verified parents have access to a student's academic records.",
    highlight: "Strict role-based isolation, encrypted data, and zero commercial tracking.",
  },
  {
    id: "faq-12",
    category: "Technical & Security",
    question: "What devices can students use?",
    answer:
      "Smarter Assessment is fully responsive and cloud-based. Students can access the platform on modern web browsers across desktop computers, laptops, iPads, Android tablets, and smartphones without requiring proprietary hardware.",
    highlight: "Runs seamlessly on Desktops, Laptops, Tablets, and Smartphones.",
  },
];
