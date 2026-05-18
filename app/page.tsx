import { JoinDiscord } from "@/components/join-discord";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Dacoder · a small workshop for open-source software",
  description:
    "Davide Ghiotto's notebook of open-source projects, YouTube episodes, and community work. Currently shipping Pulse HR, an open-source people-first HR platform.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Dacoder · a small workshop for open-source software",
    description:
      "Open source, collaborative, community-driven. Pulse HR MVP just released. Projects, videos, and a Discord room for builders.",
  },
};

const entries = [
  {
    num: "01",
    href: "/youtube",
    label: "YouTube",
    note: "Channel goals, episodes, recaps.",
  },
  {
    num: "02",
    href: "/projects",
    label: "Projects",
    note: "Open source and collaborative work.",
  },
  {
    num: "03",
    href: "/community",
    label: "Community",
    note: "Contributions, rewards, reputation.",
  },
  {
    num: "04",
    href: "/roadmap",
    label: "Roadmap",
    note: "What is next, in the open.",
  },
  {
    num: "05",
    href: "/contact",
    label: "Contact",
    note: "Email, socials, signals.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24 md:pt-24">
      {/* Header. Asymmetric: type left, photo right. */}
      <section className="grid grid-cols-[1fr_auto] gap-8 items-start mb-16">
        <div className="reveal" style={{ ["--d" as string]: "60ms" }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle pulse-dot" />
            Notebook, est. 2025
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
            Dacoder is a{" "}
            <span className="display-italic">small workshop</span> for open
            source, collaborative software.
          </h1>
        </div>
        <Image
          src="/profile-pic.png"
          alt="Davide Ghiotto, creator of Dacoder"
          width={88}
          height={88}
          priority
          className="rounded-sm grayscale contrast-110 hover:grayscale-0 transition-[filter] duration-700 reveal"
          style={{ ["--d" as string]: "180ms" }}
        />
      </section>

      {/* Featured project banner — Pulse HR */}
      <section
        aria-labelledby="featured-pulse-hr"
        className="relative my-16 border-y border-rule py-10 reveal"
        style={{ ["--d" as string]: "220ms" }}
      >
        <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            Now shipping · MVP released
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Featured project · May 2026
          </span>
        </div>

        <h2
          id="featured-pulse-hr"
          className="font-display text-5xl md:text-6xl tracking-tight leading-[0.98] mb-3"
        >
          <span className="display-italic">Pulse HR</span> — software for
          people, not headcount.
        </h2>

        <p className="text-[17px] leading-relaxed text-foreground/85 max-w-[62ch] text-pretty mb-4">
          An open-source HR platform built around the people half of HR:
          async status log, growth, kudos, wellbeing, workload check-ins.
          Deliberately leaves payroll, timesheets and recruiting to other
          tools. Source-available today under FSL-1.1-MIT, converts to MIT
          after two years.
        </p>

        <ul className="font-mono text-[11px] text-muted-foreground flex flex-wrap gap-x-4 gap-y-1.5 mb-7">
          <li>Status Log</li>
          <li>·</li>
          <li>Growth</li>
          <li>·</li>
          <li>Kudos</li>
          <li>·</li>
          <li>Moments</li>
          <li>·</li>
          <li>Workload check-in</li>
          <li>·</li>
          <li>People Insights</li>
        </ul>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
          <a
            href="https://app.pulsehr.it"
            target="_blank"
            rel="noopener noreferrer"
            className="link-grow inline-flex items-baseline gap-1 font-display text-xl tracking-tight text-foreground"
          >
            Open the app
            <ArrowUpRight className="h-4 w-4 self-center" aria-hidden />
          </a>
          <a
            href="https://pulsehr.it"
            target="_blank"
            rel="noopener noreferrer"
            className="link-grow inline-flex items-baseline gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            pulsehr.it
            <ArrowUpRight className="h-3.5 w-3.5 self-center" aria-hidden />
          </a>
          <a
            href="https://github.com/davide97g/pulse-hr"
            target="_blank"
            rel="noopener noreferrer"
            className="link-grow inline-flex items-baseline gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            Source on GitHub
            <ArrowUpRight className="h-3.5 w-3.5 self-center" aria-hidden />
          </a>
          <a
            href="https://feedback.pulsehr.it"
            target="_blank"
            rel="noopener noreferrer"
            className="link-grow inline-flex items-baseline gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            Feedback board
            <ArrowUpRight className="h-3.5 w-3.5 self-center" aria-hidden />
          </a>
        </div>
      </section>

      {/* Manifesto */}
      <section
        className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-6 gap-y-3 mb-20 reveal"
        style={{ ["--d" as string]: "320ms" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-2">
          ¶ Intent
        </p>
        <div className="space-y-4 text-[17px] leading-relaxed text-pretty max-w-[62ch] text-foreground/85">
          <p>
            Davide Ghiotto, writing code in public. Projects shipped together,
            videos made for the curious, a small rewards system for the people
            who show up.
          </p>
          <p className="text-muted-foreground">
            Not a studio. Not a course. A continuous, public notebook.
          </p>
          <JoinDiscord className="pt-2" />
        </div>
      </section>

      {/* Index list — replaces the card grid */}
      <section>
        <header className="flex items-baseline justify-between border-b border-rule pb-3 mb-2">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Index
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/70">
            {entries.length} sections
          </span>
        </header>
        <ul>
          {entries.map((e, i) => (
            <li
              key={e.href}
              className="reveal border-b border-rule last:border-b-0"
              style={{ ["--d" as string]: `${420 + i * 70}ms` }}
            >
              <Link
                href={e.href}
                className="group grid grid-cols-[36px_1fr_auto] items-baseline gap-6 py-6 md:py-7"
              >
                <span className="font-mono text-xs text-muted-foreground/80 group-hover:text-accent transition-colors">
                  {e.num}
                </span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight inline-block link-grow">
                    {e.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground max-w-[42ch]">
                    {e.note}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground -translate-x-1 opacity-60 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-foreground transition-all"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
