"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";

const links = [
  { href: "/youtube", label: "YouTube", num: "01" },
  { href: "/projects", label: "Projects", num: "02" },
  { href: "/community", label: "Community", num: "03" },
  { href: "/roadmap", label: "Roadmap", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 border-b border-rule">
      <div className="mx-auto w-full max-w-3xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-tight flex items-baseline gap-1.5"
        >
          <span className="display-italic text-xl leading-none">Dacoder</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden sm:inline">
            ·it
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={active}
                className={cn(
                  "link-grow font-sans tracking-tight transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="font-mono text-[10px] mr-1.5 text-muted-foreground/70">
                  {l.num}
                </span>
                {l.label}
              </Link>
            );
          })}
          <ModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1 p-2 -mr-2"
          >
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-transform",
                open && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-transform",
                open && "-translate-y-[5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-rule bg-background">
          <ul className="mx-auto max-w-3xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "flex items-baseline gap-3 py-2",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground/70">
                      {l.num}
                    </span>
                    <span className="font-display text-xl">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
