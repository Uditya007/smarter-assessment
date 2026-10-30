"use client";

import React, { useState } from "react";
import { X, UserCircle, GraduationCap, Users, Heart, School, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { UserRole } from "@/types";

interface LoginDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (role: UserRole) => void;
}

export function LoginDemoModal({ isOpen, onClose, onLoginSuccess }: LoginDemoModalProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [email, setEmail] = useState("student.demo@smarter.edu");
  const [password, setPassword] = useState("••••••••••••");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const roleProfiles: Record<
    UserRole,
    { title: string; defaultEmail: string; icon: React.ElementType; note: string; color: string }
  > = {
    student: {
      title: "Student Portal",
      defaultEmail: "rohit.sharma@cbse10.smarter.edu",
      icon: GraduationCap,
      note: "Class 10 CBSE Student • Practice & Diagnostic Reports",
      color: "text-purple-400 border-purple-500",
    },
    teacher: {
      title: "Teacher Portal",
      defaultEmail: "sunita.kapoor@faculty.smarter.edu",
      icon: Users,
      note: "Science Faculty • Class Diagnostics & Automated Grading",
      color: "text-sky-400 border-sky-500",
    },
    parent: {
      title: "Parent Portal",
      defaultEmail: "anita.patel@parents.smarter.edu",
      icon: Heart,
      note: "Parent of Aarav • Grade 8 Progress & Weekly Updates",
      color: "text-pink-400 border-pink-500",
    },
    school_admin: {
      title: "School Admin",
      defaultEmail: "principal@international.smarter.edu",
      icon: School,
      note: "School Leadership • Institution-Wide Analytics & Scheduling",
      color: "text-amber-400 border-amber-500",
    },
  };

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setEmail(roleProfiles[role].defaultEmail);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess(selectedRole);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0D1226] border border-purple-500/40 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center mx-auto mb-3 text-purple-300">
            <UserCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">Log In to Smarter Assessment Portal</h3>
          <p className="text-xs text-slate-300 mt-1">
            Choose your role to preview the authenticated dashboard experience.
          </p>
        </div>

        {/* Role Selection Tabs */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {(["student", "teacher", "parent", "school_admin"] as UserRole[]).map((r) => {
            const Icon = roleProfiles[r].icon;
            const isSelected = selectedRole === r;
            return (
              <button
                key={r}
                type="button"
                onClick={() => handleRoleSelect(r)}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs font-semibold ${
                  isSelected
                    ? "bg-purple-950/80 border-purple-500 text-white shadow-md shadow-purple-950/50"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-amber-300" : "text-slate-400"}`} />
                <span className="capitalize">{r === "school_admin" ? "School Admin" : r}</span>
              </button>
            );
          })}
        </div>

        {/* Role description note */}
        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{roleProfiles[selectedRole].note}</span>
        </div>

        <form onSubmit={handleLogin} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Account Email / Institutional ID
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-base sm:text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex justify-between items-center text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-400" />
              Pre-filled demonstration credentials
            </span>
            <span className="text-purple-400 hover:underline cursor-pointer">Help?</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-[0.99] disabled:opacity-75"
          >
            {isSubmitting ? (
              <span>Authenticating Session...</span>
            ) : (
              <>
                <span>Enter {roleProfiles[selectedRole].title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
