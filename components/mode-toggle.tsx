"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex items-center w-11 h-5 rounded-full border border-rule bg-muted transition-colors hover:border-foreground/40"
    >
      {/* Static side glyphs — hint at both states */}
      <Sun
        className="absolute left-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 text-muted-foreground/60"
        aria-hidden
      />
      <Moon
        className="absolute right-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 text-muted-foreground/60"
        aria-hidden
      />

      {/* Sliding knob with active icon */}
      <span
        className="absolute top-1/2 -translate-y-1/2 h-[18px] w-[18px] rounded-full bg-foreground shadow-sm transition-[left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center"
        style={{
          left: isDark ? "calc(100% - 19px)" : "1px",
        }}
      >
        <Sun
          className={`absolute h-2.5 w-2.5 text-background transition-all duration-300 ${
            isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
          aria-hidden
        />
        <Moon
          className={`absolute h-2.5 w-2.5 text-background transition-all duration-300 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
          aria-hidden
        />
      </span>

      <span className="sr-only">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
    </button>
  );
}
