export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  recommended?: boolean;
  price: number;
  currency: string;
  billingPeriod: string;
  periodDescription: string;
  savingsNote?: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
    tooltip?: string;
  }>;
  ctaText: string;
  ctaAction: "trial" | "demo" | "checkout";
  trialNote?: string;
}

export interface PricingConfig {
  headline: string;
  subheadline: string;
  disclaimer: string;
  taxNote: string;
  trialNotice: string;
  plans: PricingPlan[];
  institutionalCTA: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };
}

export const pricingConfig: PricingConfig = {
  headline: "Start Learning Smarter Today.",
  subheadline:
    "Flexible plans for individual learners, families, and academic cohorts. Experience AI-guided assessment with our 15-day subject trial.",
  disclaimer:
    "Pricing details are sourced from the Smarter Assessment brochure schedule. Final pricing and plan inclusions are subject to commercial confirmation at launch.",
  taxNote:
    "All stated prices are exclusive of applicable statutory taxes (e.g., GST) unless explicitly stated otherwise in the formal enrollment agreement.",
  trialNotice:
    "Includes a 15-day complimentary trial for one chosen subject upon registration, subject to confirmation of the active onboarding offer.",
  plans: [
    {
      id: "monthly",
      name: "Monthly Plan",
      badge: "Flexible Billing",
      recommended: false,
      price: 500,
      currency: "₹",
      billingPeriod: "/ student / month",
      periodDescription: "Billed monthly. Cancel anytime before the next renewal cycle.",
      description:
        "Ideal for focused exam sprints, term revisions, or trying out individual subject modules.",
      features: [
        { text: "Access to standard learning & assessment modules", included: true },
        { text: "Chapter-wise objective practice & instant feedback", included: true },
        { text: "Personalized error explanations & revision tips", included: true },
        { text: "Essential performance insights & accuracy charts", included: true },
        { text: "Parent progress overview via web dashboard", included: true },
        { text: "Standard email and ticketing support", included: true },
        { text: "Institutional exam scheduling & multi-class sync", included: false },
        { text: "Customized school curriculum mappings", included: false },
      ],
      ctaText: "Get Started",
      ctaAction: "trial",
      trialNote: "Start with 15-day single subject trial",
    },
    {
      id: "annual",
      name: "Annual Plan",
      badge: "Most Popular • 50% Savings",
      recommended: true,
      price: 3000,
      currency: "₹",
      billingPeriod: "/ student / year",
      periodDescription: "Effective ₹250/month, billed annually (Standard value ₹6,000/year).",
      savingsNote: "Save ₹3,000 compared to monthly billing",
      description:
        "Our complete academic year companion for continuous mastery, board preparation, and holistic growth.",
      features: [
        { text: "Unrestricted access to all enrolled subject modules", included: true },
        { text: "Full chapter-wise question banks & adaptive practice", included: true },
        { text: "AI diagnostic engine with granular concept gap alerts", included: true },
        { text: "Continuous learning trajectory & trend analytics", included: true },
        { text: "Comprehensive parent & student performance summaries", included: true },
        { text: "Priority academic & technical support helpline", included: true },
        { text: "Exam readiness diagnostics for Term 1, 2 & Finals", included: true },
        { text: "Configurable communication updates (where supported)", included: true },
      ],
      ctaText: "Start Your Free Trial",
      ctaAction: "trial",
      trialNote: "15-day trial included • No credit card required upfront",
    },
  ],
  institutionalCTA: {
    headline: "Looking for a School-Wide Solution?",
    subheadline:
      "Empower your entire faculty with automated evaluation, batch diagnostics, custom test papers, and unified parent reporting.",
    buttonText: "Request School Pricing & Demo",
  },
};
