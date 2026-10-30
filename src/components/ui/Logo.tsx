import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light";
  withTagline?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  variant = "dark",
  withTagline = false,
}: LogoProps) {
  // Height & dimensions matching the 3:1 aspect ratio of the official logo
  const sizeStyles = {
    sm: "h-7 w-[84px]",
    md: "h-9 w-[108px] sm:h-10 sm:w-[120px]",
    lg: "h-12 w-[144px]",
    xl: "h-16 w-[192px]",
  };

  const logoSrc = variant === "light" ? "/logo-light.png" : "/logo-dark.png";

  return (
    <Link
      href="#home"
      className={`group inline-flex flex-col items-start justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="Smarter Assessment Home"
    >
      <div className="relative flex items-center">
        {/* Official Smarter Assessment Logo Asset */}
        <div className={`relative ${sizeStyles[size]} transition-transform duration-200 group-hover:scale-[1.02]`}>
          <Image
            src={logoSrc}
            alt="Smarter Assessment"
            fill
            sizes="(max-width: 768px) 120px, 160px"
            priority
            className="object-contain object-left"
          />
        </div>
      </div>

      {withTagline && (
        <span className="text-[11px] font-medium text-slate-400 tracking-wide mt-1.5 pl-0.5">
          Better Learning. Stronger Outcomes.
        </span>
      )}
    </Link>
  );
}
