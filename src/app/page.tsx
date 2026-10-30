"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustValueSection } from "@/components/sections/TrustValueSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PersonaSections } from "@/components/sections/PersonaSections";
import { SchoolSolutionsSection } from "@/components/sections/SchoolSolutionsSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { InteractiveDashboardPreview } from "@/components/sections/InteractiveDashboardPreview";
import { PricingSection } from "@/components/sections/PricingSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactDemoSection } from "@/components/sections/ContactDemoSection";

// Modals
import { DemoBookingModal } from "@/components/modals/DemoBookingModal";
import { LoginDemoModal } from "@/components/modals/LoginDemoModal";
import { TrialStartModal } from "@/components/modals/TrialStartModal";
import { LegalModal, LegalDocType } from "@/components/modals/LegalModal";
import { PricingPlan } from "@/config/pricing.config";
import { UserRole } from "@/types";

export default function HomePage() {
  // Modal states
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState<string>("Annual Plan");
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);

  // Handlers
  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  const handleOpenLogin = () => setIsLoginModalOpen(true);
  const handleCloseLogin = () => setIsLoginModalOpen(false);

  const handleStartTrial = (planName?: string) => {
    setSelectedPlanForTrial(planName || "Annual Plan");
    setIsTrialModalOpen(true);
  };
  const handleCloseTrial = () => setIsTrialModalOpen(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    handleStartTrial(plan.name);
  };

  const handleLoginSuccess = (role: UserRole) => {
    // Scroll to interactive dashboard preview
    const el = document.getElementById("demo-preview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSchoolDemo = () => {
    const el = document.getElementById("schools");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsDemoModalOpen(true);
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* 1. Website Header with Sticky Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} onOpenLogin={handleOpenLogin} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onStartTrial={() => handleStartTrial("15-Day Subject Trial")}
          onBookDemo={handleOpenDemo}
        />

        {/* 3. Trust & Value Proposition */}
        <TrustValueSection />

        {/* 4. How It Works (Interactive 4-Step Process) */}
        <HowItWorksSection />

        {/* 5. Core Platform Features (6 Capabilities Grid) */}
        <FeaturesSection />

        {/* 6. Dedicated Sections for Students, Teachers, and Parents */}
        <PersonaSections
          onExploreStudents={() => handleScrollToSection("demo-preview")}
          onExploreTeachers={() => handleScrollToSection("demo-preview")}
          onExploreParents={() => handleScrollToSection("demo-preview")}
        />

        {/* 7. School & Institutional Solutions + Embedded Lead Form */}
        <SchoolSolutionsSection onBookDemoClick={handleOpenDemo} />

        {/* 8. Curriculum Alignment (CBSE, ICSE, IGCSE) */}
        <CurriculumSection />

        {/* 9. Interactive Product Dashboard Preview (Functional SaaS preview) */}
        <InteractiveDashboardPreview />

        {/* 10. Pricing Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onContactSchool={handleScrollToSchoolDemo}
        />

        {/* 11. Principles Section ("Designed Around Better Learning") */}
        <PrinciplesSection />

        {/* 12. FAQ Section (12 Detailed Questions Accordion) */}
        <FaqSection />

        {/* 13. Contact & Direct Inquiries Section */}
        <ContactDemoSection />
      </main>

      {/* 14. Comprehensive Multi-Column Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType("privacy")}
        onOpenTerms={() => setLegalModalType("terms")}
        onOpenSafety={() => setLegalModalType("safety")}
        onBookDemo={handleOpenDemo}
      />

      {/* Modals & Overlays */}
      <DemoBookingModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
      <LoginDemoModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLogin}
        onLoginSuccess={handleLoginSuccess}
      />
      <TrialStartModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrial}
        defaultPlanName={selectedPlanForTrial}
      />
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType || "safety"}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
