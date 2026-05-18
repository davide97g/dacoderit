import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube channel",
  description:
    "The Dacoder YouTube channel: practical web-development sessions, shipping in public, and code you can clone by Sunday evening. Subscribe at @dacoderit.",
  alternates: { canonical: "/youtube" },
  openGraph: {
    url: "/youtube",
    title: "YouTube channel · Dacoder",
    description:
      "Practical web-development sessions, shipping in public. Subscribe at @dacoderit.",
  },
};

type Video = {
  title: string;
  description: string;
  date: string;
  url?: string;
};

const goals = [
  {
    h: "Learn by teaching",
    p: "Frontend and web technology, explained like a practitioner who is still figuring it out. Not lectures, sessions.",
  },
  {
    h: "Inspire shipping",
    p: "Less talking, more publishing. Every video is a project you could clone and run by Sunday evening.",
  },
  {
    h: "Connect the room",
    p: "Comments and Discord pull viewers into the workshop. Some of you end up on the projects page.",
  },
];

const videos: Video[] = [];

export default function YoutubePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24">
      <header className="mb-16 reveal" style={{ ["--d" as string]: "40ms" }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          01 · YouTube channel
        </p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-balance mb-6">
          A channel for the{" "}
          <span className="display-italic">enthusiast</span>, not the expert.
        </h1>
        <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[58ch] mb-8">
          Practical sessions about building things on the web. Shipping in
          public, sharing the code, sometimes getting it wrong on camera.
        </p>
        <a
          href="https://www.youtube.com/@dacoderit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline gap-1.5 font-display text-2xl tracking-tight link-grow text-foreground"
        >
          @dacoderit on YouTube
          <ArrowUpRight className="h-4 w-4 self-center" aria-hidden />
        </a>
      </header>

      <section className="mb-20">
        <header className="flex items-baseline justify-between border-b border-rule pb-3 mb-2">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Channel intent
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/70">
            three notes
          </span>
        </header>
        <ol>
          {goals.map((g, i) => (
            <li
              key={g.h}
              className="grid grid-cols-[40px_1fr] gap-x-6 py-7 border-b border-rule last:border-b-0 reveal"
              style={{ ["--d" as string]: `${180 + i * 80}ms` }}
            >
              <span className="font-mono text-[11px] text-muted-foreground/80 pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-2">
                  {g.h}
                </h3>
                <p className="text-[16px] leading-relaxed text-foreground/80 max-w-[58ch] text-pretty">
                  {g.p}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <header className="flex items-baseline justify-between border-b border-rule pb-3 mb-6">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Recent episodes
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/70">
            {videos.length} archived
          </span>
        </header>

        {videos.length === 0 ? (
          <div className="py-10 max-w-[52ch]">
            <p className="font-display text-2xl tracking-tight leading-snug mb-3">
              The archive opens with episode one.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
              Filming has not started yet. Subscribe to be there when it does,
              or come hang out on Discord in the meantime.
            </p>
          </div>
        ) : (
          <ol>
            {videos.map((v, i) => (
              <li
                key={i}
                className="grid grid-cols-[80px_1fr_auto] items-baseline gap-6 py-7 border-b border-rule last:border-b-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80">
                  {v.date}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-[52ch]">
                    {v.description}
                  </p>
                </div>
                {v.url && (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-grow inline-flex items-baseline gap-0.5 text-sm"
                  >
                    Watch
                    <ArrowUpRight className="h-3.5 w-3.5 self-center" aria-hidden />
                  </a>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
