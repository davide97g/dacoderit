import { JoinDiscord } from "@/components/join-discord";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dacoder · a small workshop for open-source software",
  description:
    "Davide Ghiotto's notebook of open-source projects, YouTube episodes, and community work. Building software in public, one collaboration at a time.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Dacoder · a small workshop for open-source software",
    description:
      "Open source, collaborative, community-driven. Projects, videos, and a Discord room for builders.",
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
      <section className="grid grid-cols-[1fr_auto] gap-8 items-start mb-20">
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
          alt="Davide"
          width={88}
          height={88}
          priority
          className="rounded-sm grayscale contrast-110 hover:grayscale-0 transition-[filter] duration-700 reveal"
          style={{ ["--d" as string]: "180ms" }}
        />
      </section>

      {/* Manifesto */}
      <section
        className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-6 gap-y-3 mb-20 reveal"
        style={{ ["--d" as string]: "260ms" }}
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
              style={{ ["--d" as string]: `${360 + i * 70}ms` }}
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
