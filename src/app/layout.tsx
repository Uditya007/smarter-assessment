import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smarter Assessment — AI-Powered Learning & Intelligent Academic Assessment",
  description:
    "Better Learning. Stronger Outcomes. Smarter Assessment empowers CBSE, ICSE, and IGCSE students with AI-powered practice, instant diagnostic feedback, and academic analytics for students, teachers, parents, and schools.",
  keywords: [
    "Smarter Assessment",
    "AI EdTech Platform",
    "CBSE Assessment",
    "ICSE Practice Tests",
    "IGCSE AI Learning",
    "Automated Teacher Evaluation",
    "Parent Progress Monitoring",
    "School Assessment System",
  ],
  authors: [{ name: "Smarter Assessment Team" }],
  openGraph: {
    title: "Smarter Assessment — Every Child Can Excel With the Right Guidance",
    description:
      "AI-powered learning, personalized practice, and intelligent assessments that help every student unlock their academic potential.",
    url: "https://smarterassessment.com",
    siteName: "Smarter Assessment",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarter Assessment — Better Learning. Stronger Outcomes.",
    description:
      "AI-powered learning, personalized practice, and intelligent assessments that help every student unlock their academic potential.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-purple-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
