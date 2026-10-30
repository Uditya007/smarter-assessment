"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, UserCircle, Phone, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site.config";

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLogin: () => void;
}

export function Navbar({ onOpenDemo, onOpenLogin }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["home", "features", "students", "teachers", "parents", "schools", "pricing"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "For Students", href: "#students", id: "students" },
    { label: "For Teachers", href: "#teachers", id: "teachers" },
    { label: "For Parents", href: "#parents", id: "parents" },
    { label: "For Schools", href: "#schools", id: "schools" },
    { label: "Features", href: "#features", id: "features" },
    { label: "Pricing", href: "#pricing", id: "pricing" },
  ];

  return (
    <>
      {/* Top micro-bar for institutional reliability and phone helpline */}
      <div className="bg-[#090C16] border-b border-purple-900/30 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-purple-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              CBSE • ICSE • IGCSE Curriculum Assessment Engine
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">15-Day Single Subject Trial Available</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>Advisory Desk: <strong className="text-white font-semibold">{siteConfig.contact.displayPhone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070913]/90 backdrop-blur-md border-b border-purple-500/20 shadow-xl shadow-black/40 py-3"
            : "bg-transparent py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/30 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenLogin}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg border border-slate-700/60 transition-all duration-200"
              >
                <UserCircle className="w-4 h-4 text-purple-400" />
                <span>Log In</span>
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-lg shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenDemo}
                className="px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
              >
                Demo
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm -z-10 lg:hidden animate-in fade-in duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="lg:hidden bg-[#0A0D1B]/98 border-b border-purple-900/50 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-purple-950/40 border border-transparent hover:border-purple-800/40 active:bg-purple-900/60 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400 opacity-60" />
                  </Link>
                ))}

                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenLogin();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 active:scale-[0.99] transition-transform"
                  >
                    <UserCircle className="w-4 h-4 text-purple-400" />
                    <span>Log In to Portal</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenDemo();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-md active:scale-[0.99] transition-transform"
                  >
                    <span>Book a School Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Advisory: <strong className="text-white">{siteConfig.contact.displayPhone}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
