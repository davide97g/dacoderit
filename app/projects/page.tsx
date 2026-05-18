import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  type: "Open Source" | "Collaborative";
  github: string;
  demo?: string;
  isNew?: boolean;
  year?: string;
  otherLinks?: { label: string; link: string }[];
};

const projects: Project[] = [
  {
    title: "Pokèdle",
    isNew: true,
    year: "2025",
    description:
      "A Wordle-inspired guessing game for Pokémon. Built for the curious afternoon.",
    tags: ["TypeScript", "React", "Node.js", "Stripe", "Monorepo"],
    type: "Collaborative",
    github: "https://github.com/davide97g/pokedle",
    demo: "https://pokedle.online",
    otherLinks: [
      { label: "Product Hunt", link: "https://www.producthunt.com/products/pokedle-2" },
      {
        label: "Medium",
        link: "https://medium.com/@dacoderit/pok%C3%A9dle-find-an-optimal-solution-for-a-pokemon-guessing-game-384b09a819f7",
      },
    ],
  },
  {
    title: "Impact Hub",
    year: "2025",
    description:
      "A reputation ranking system that scores contributors by what they actually ship.",
    tags: ["JavaScript", "GitHub API", "GitHub Actions"],
    type: "Open Source",
    github: "https://github.com/davide97g/reputation-ranking-system",
    demo: "https://impact.dacoder.it",
  },
  {
    title: "Chattonapp",
    year: "2024",
    description:
      "Self-hosted chat that runs on a Raspberry Pi sitting on your desk.",
    tags: ["TypeScript", "React", "Node.js", "WebSocket", "Raspberry Pi"],
    type: "Collaborative",
    github: "https://github.com/davide97g/chattonapp",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24">
      <header
        className="mb-16 reveal"
        style={{ ["--d" as string]: "40ms" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          02 · Index of work
        </p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-balance mb-6">
          Projects, shipped or in motion.
        </h1>
        <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[58ch]">
          A small list, hand-kept. Live status, drafts, and weekly notes live on{" "}
          <Link
            href="https://twisty-bougon-ada.notion.site/1cf064acf45d8026bb16dd3147f99d07?v=1cf064acf45d80f19439000c7adf15f7&pvs=74"
            target="_blank"
            rel="noopener noreferrer"
            className="link-grow text-foreground"
          >
            the Notion board
          </Link>
          .
        </p>
      </header>

      <ol className="border-t border-rule">
        {projects.map((p, i) => (
          <li
            key={p.title}
            className="border-b border-rule reveal"
            style={{ ["--d" as string]: `${120 + i * 90}ms` }}
          >
            <article className="grid grid-cols-[56px_1fr] gap-x-6 py-10">
              <div className="font-mono text-[11px] text-muted-foreground/80 pt-2 leading-none flex flex-col gap-2">
                <span>{String(i + 1).padStart(2, "0")}</span>
                {p.year && <span className="text-muted-foreground/60">{p.year}</span>}
              </div>

              <div>
                <div className="flex items-baseline gap-3 flex-wrap mb-3">
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                    {p.title}
                  </h2>
                  {p.isNew && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                      New
                    </span>
                  )}
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.type}
                  </span>
                </div>

                <p className="text-[17px] leading-relaxed text-foreground/85 max-w-[60ch] mb-5 text-pretty">
                  {p.description}
                </p>

                <ul className="flex flex-wrap gap-x-3 gap-y-1.5 mb-6">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-grow inline-flex items-center gap-1.5"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden />
                    Source
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-grow inline-flex items-center gap-0.5 text-foreground"
                    >
                      Live
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )}
                  {p.otherLinks?.map((l) => (
                    <a
                      key={l.label}
                      href={l.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-grow inline-flex items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        End of list · more in the workshop
      </p>
    </div>
  );
}
