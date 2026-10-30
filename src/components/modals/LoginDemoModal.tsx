"use client";

import React, { useState } from "react";
import { X, UserCircle, Shield, CheckCircle2, ArrowRight, GraduationCap, Users, Heart, School, Lock } from "lucide-react";
import { UserRole } from "@/types";

interface LoginDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (role: UserRole) => void;
}

export function LoginDemoModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: LoginDemoModalProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [email, setEmail] = useState("rohit.sharma@student.smarter.edu");
  const [password, setPassword] = useState("••••••••••••");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const roleProfiles: Record<
    UserRole,
    { title: string; defaultEmail: string; icon: any; note: string; color: string }
  > = {
    student: {
      title: "Student Portal",
      defaultEmail: "rohit.sharma@student.smarter.edu",
      icon: GraduationCap,
      note: "Class 10 CBSE • Mathematics & Science Focus",
      color: "text-purple-600 dark:text-purple-400 border-purple-500",
    },
    teacher: {
      title: "Teacher Portal",
      defaultEmail: "sunita.kapoor@faculty.smarter.edu",
      icon: Users,
      note: "Science Faculty • Class Diagnostics & Automated Grading",
      color: "text-sky-600 dark:text-sky-400 border-sky-500",
    },
    parent: {
      title: "Parent Portal",
      defaultEmail: "anita.patel@parents.smarter.edu",
      icon: Heart,
      note: "Parent of Aarav • Grade 8 Progress & Weekly Updates",
      color: "text-pink-600 dark:text-pink-400 border-pink-500",
    },
    school_admin: {
      title: "School Admin",
      defaultEmail: "principal@international.smarter.edu",
      icon: School,
      note: "School Leadership • Institution-Wide Analytics & Scheduling",
      color: "text-amber-600 dark:text-amber-400 border-amber-500",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0D1226] border border-slate-200 dark:border-purple-500/40 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden transition-colors duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-500/40 text-purple-700 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-2">
            <Lock className="w-3 h-3 text-amber-500 dark:text-amber-400" />
            <span>Interactive Demo Sandbox</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">Sign In to Smarter Assessment</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Choose a persona below to explore its live role dashboard.
          </p>
        </div>

        {/* Role Selector Grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {(["student", "teacher", "parent", "school_admin"] as UserRole[]).map((role) => {
            const prof = roleProfiles[role];
            const RoleIcon = prof.icon;
            const isSelected = selectedRole === role;
            return (
              <button
                key={role}
                type="button"
                onClick={() => handleRoleSelect(role)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-purple-50 dark:bg-purple-950/50 border-purple-500 shadow-sm"
                    : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <RoleIcon className={`w-4 h-4 ${isSelected ? "text-purple-600 dark:text-purple-400" : "text-slate-400"}`} />
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{prof.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Hint */}
        <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 mb-5 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span>{roleProfiles[selectedRole].note}</span>
        </div>

        {/* Mock Form */}
        <form onSubmit={handleLogin} className="space-y-3.5">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Account Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Sandbox Auto-Filled</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 flex items-center justify-center gap-1.5 transition-all disabled:opacity-50 mt-4"
          >
            {isSubmitting ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Launch {roleProfiles[selectedRole].title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 mt-4">
          Demo sandbox • No real credentials required
        </p>
      </div>
    </div>
  );
}
