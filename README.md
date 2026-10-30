# Smarter Assessment — Premium AI EdTech & SaaS Platform

> **Better Learning. Stronger Outcomes.**  
> *"Every Child Can Excel With the Right Guidance."*

An AI-powered learning and diagnostic assessment platform engineered for students in **CBSE**, **ICSE**, and **Cambridge IGCSE** curricula, alongside comprehensive dashboards for teachers, parents, and school administrators.

---

## 🚀 Live Demo & Development

```bash
# Navigate to the project directory
cd /Users/Uditya/.gemini/antigravity/scratch/smaxter-assessment

# Install dependencies (if not already installed)
npm install

# Start the development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🎨 Visual Identity & Design System

* **Brand Aesthetics:** Deep navy (`#070913`, `#0A0E22`) and royal purple (`#1E1B4B`, `#2E1065`) with electric blue (`#38BDF8`, `#2563EB`) and violet gradient accents.
* **Typography:** `Plus Jakarta Sans` with high legibility and tabular numerals for analytics.
* **Conversion CTAs:** Vibrant amber/yellow highlights (`#FBBF24`, `#F59E0B`) for primary actions (*"Book a Demo"*, *"Start Free Trial"*).
* **Depth & Glassmorphism:** Ambient glow blurs, rounded 2xl/3xl cards, subtle border highlights, and interactive hover feedback.
* **Responsive Breakpoints:** Fully optimized for Mobile (< 640px), Tablet (768px), Laptop (1024px), and Desktop (1280px+).

---

## 🧩 Key Architecture & Included Sections

1. **Website Header & Sticky Navbar:**
   - Smarter Assessment custom SVG brand badge with AI delta symbol.
   - Smooth navigation links: *Home, For Students, For Teachers, For Parents, For Schools, Features, Pricing*.
   - Quick action buttons: *Log In* (interactive role preview) and *Book a Demo* (primary CTA).
   - Clean mobile slide-out drawer menu with hotline indicators.

2. **Hero Section:**
   - Main headline with highlighted **"Excel"** gradient and underline flair.
   - Three benefit indicators: *Personalized Learning*, *Instant AI Feedback*, and *Data-Driven Improvement*.
   - Multi-layered product visualization featuring live academic session metrics, interactive subject toggles (Math / Science), dynamic SVG trajectory chart, and real-time AI assistant feedback.

3. **Trust & Value Proposition:**
   - *"Smarter Learning. Better Outcomes."*
   - Four core pedagogical pillars: *Personalized Practice*, *Instant Feedback*, *Measurable Progress*, *Connected Learning*.
   - Strictly free of fake customer numbers or artificial statistics.

4. **How It Works (The Smarter Learning Loop):**
   - 4-step interactive process:
     1. **Assess:** Chapter-wise quizzes and timed test simulations.
     2. **Analyze:** AI error matrix and sub-topic misconception diagnosis.
     3. **Improve:** Step-by-step reasoning and adaptive remedial drills.
     4. **Track Progress:** Longitudinal trajectories for students, teachers, and parents.

5. **Core Platform Capabilities (6-Feature Grid):**
   - **Feature 1:** AI-Powered Assessment (MCQs, objective items, configurable subjective rubrics).
   - **Feature 2:** Comprehensive Question Bank (CBSE/ICSE/IGCSE chapter repositories).
   - **Feature 3:** Personalized Learning (Adaptive gap remediation and priority queue).
   - **Feature 4:** Performance Analytics (Accuracy tracking, speed metrics, quadrant breakdown).
   - **Feature 5:** Parent & Teacher Dashboards (Gradebooks, PTM reports, weekly milestones).
   - **Feature 6:** WhatsApp Notifications (Configurable institutional integration for test alerts and homework).

6. **Dedicated Stakeholder Portals:**
   - **For Students:** *"Study Smarter. Prepare Better. Achieve More."* with subject progress cards, chapter accuracy, and practice drills.
   - **For Teachers:** *"Less Time Evaluating. More Time Teaching."* with class gradebook, score distributions, and struggling student alerts.
   - **For Parents:** *"Stay Connected to Your Child’s Learning Journey."* with reassuring health score, strengths, and weekend revision focus.

7. **School & Institutional Solutions:**
   - Multi-campus dashboards, exam scheduling, teacher access management, and SIS/LMS compatibility.
   - Embedded School Demo Booking Form collecting school name, contact person, work email, phone number, student volume, curriculum, and custom requirements.
   - Client-side persistence and booking reference generation (`SMX-XXXXXX`).

8. **Curriculum Alignment:**
   - Detailed modules for **CBSE** (Grades 6–12), **ICSE** (Grades 6–10), and **Cambridge IGCSE** (Lower Secondary & IGCSE).
   - Clear academic disclaimer ensuring integrity and intellectual property compliance.

9. **Interactive Product Dashboard Preview:**
   - Fully interactive SaaS demonstration with role switcher (*Student View*, *Teacher View*, *Parent View*).
   - 7 Functional sidebar views: *Overview*, *My Subjects*, *Practice Tests*, *Assessments*, *Performance*, *Recommendations*, and *Settings*.

10. **Configurable Pricing Section:**
    - Monthly Plan: ₹500 per student/month.
    - Annual Plan: ₹3,000 per student/year (Recommended • 50% Savings).
    - 15-day complimentary trial notice.
    - Central configuration at `src/config/pricing.config.ts`.
    - Institutional custom solution CTA.

11. **Principles Section:**
    - *"Designed Around Better Learning"* emphasizing clearer insights, focused practice, automated grading, and connected support.

12. **FAQ Accordion:**
    - All 12 required questions answered accurately with category filters and real-time search.

13. **Contact & Direct Inquiries:**
    - Verified brochure contact number: **+91 8970809090**.
    - Pre-configured WhatsApp direct advisory chat.
    - Inquiries form with reference tracking and celebratory feedback.

14. **Compliance & Legal Modals:**
    - Complete modals for *Student Data Protection & Safety Protocol*, *Privacy Policy*, and *Terms of Service*.
    - Dynamic copyright notice updating automatically.

---

## ⚙️ Configuration Files

- `src/config/site.config.ts` — Brand identity, official contact phone (`+91 8970809090`), WhatsApp parameters, curriculum metadata.
- `src/config/pricing.config.ts` — Plan names, prices, features, tax disclaimers, trial offer notes.
- `src/config/faq.config.ts` — Complete repository of categorized questions and highlighted answers.
