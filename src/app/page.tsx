"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustValueSection } from "@/components/sections/TrustValueSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PersonaSections } from "@/components/sections/PersonaSections";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { InteractiveDashboardPreview } from "@/components/sections/InteractiveDashboardPreview";
import { PricingSection } from "@/components/sections/PricingSection";
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
    const el = document.getElementById("demo-preview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070913] dark:text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white transition-colors duration-200">
      {/* 1. Website Header with Sticky Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} onOpenLogin={handleOpenLogin} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onStartTrial={() => handleStartTrial("15-Day Subject Trial")}
          onBookDemo={handleOpenDemo}
        />

        {/* 3. Value Proposition Strip */}
        <TrustValueSection />

        {/* 4. Core Capabilities (6 Features Grid) */}
        <FeaturesSection />

        {/* 5. Built for Everyone (4 Roles: Students, Teachers, Parents, Schools) */}
        <PersonaSections
          onOpenDemo={handleOpenDemo}
          onOpenTrial={() => handleStartTrial("15-Day Subject Trial")}
        />

        {/* 6. How It Works (The 4-Step Learning Loop) */}
        <HowItWorksSection />

        {/* 7. Curriculum Alignment (CBSE, ICSE, IGCSE) */}
        <CurriculumSection />

        {/* 8. Interactive Product Dashboard Preview */}
        <InteractiveDashboardPreview />

        {/* 9. Pricing Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onContactSchool={handleOpenDemo}
        />

        {/* 10. FAQ Accordion */}
        <FaqSection />

        {/* 11. Contact & Demonstration Booking */}
        <ContactDemoSection />
      </main>

      {/* 12. Footer */}
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
