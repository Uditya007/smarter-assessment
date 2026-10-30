"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`inline-flex items-center justify-center p-2 rounded-lg text-slate-400 bg-slate-800/40 border border-slate-700/50 w-9 h-9 ${className}`}
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
        isDark
          ? "bg-slate-900/80 border-slate-700/70 text-slate-200 hover:text-white hover:border-[#106FE2]/50 hover:bg-slate-800"
          : "bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#FE730A] transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#106FE2] transition-transform duration-300 rotate-0 hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="font-semibold text-xs">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
