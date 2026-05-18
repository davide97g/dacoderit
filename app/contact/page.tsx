"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";

const channels = [
  {
    label: "Email",
    handle: "dacoderit@gmail.com",
    href: "mailto:dacoderit@gmail.com",
    copy: "dacoderit@gmail.com",
  },
  {
    label: "GitHub",
    handle: "@davide97g",
    href: "https://github.com/davide97g",
  },
  {
    label: "LinkedIn",
    handle: "davide-ghiotto",
    href: "https://www.linkedin.com/in/davide-ghiotto/",
  },
  {
    label: "Discord",
    handle: "Join the server",
    href: "https://discord.gg/uZ848MKE",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("dacoderit@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked — fall through, the mailto: still works
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24">
      <header className="mb-16 reveal" style={{ ["--d" as string]: "40ms" }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          05 · Contact
        </p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-balance mb-6">
          Say <span className="display-italic">hello</span>.
        </h1>
        <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[58ch]">
          Open to collaborations, project ideas, kind notes, and honest
          critique. Replies are slower in summer.
        </p>
      </header>

      <ul className="border-t border-rule">
        {channels.map((c, i) => (
          <li
            key={c.label}
            className="border-b border-rule reveal"
            style={{ ["--d" as string]: `${120 + i * 80}ms` }}
          >
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group grid grid-cols-[80px_1fr_auto] items-baseline gap-6 py-7"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 pt-1">
                {c.label}
              </span>
              <span className="font-display text-3xl md:text-4xl tracking-tight inline-block link-grow">
                {c.handle}
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground -translate-x-1 opacity-60 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-foreground transition-all self-center"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={copyEmail}
        className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Copy email address"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
            <span className="text-foreground">Copied to clipboard</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" aria-hidden />
            <span>Copy email instead</span>
          </>
        )}
      </button>
    </div>
  );
}
