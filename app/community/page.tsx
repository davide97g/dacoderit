import { JoinDiscord } from "@/components/join-discord";

const principles = [
  {
    h: "Show up",
    p: "Reputation is built by being there. A merged PR, a useful question, a recorded bug.",
  },
  {
    h: "Credit travels",
    p: "Contributions are public, attributable, and counted. The more you give, the more visible you become.",
  },
  {
    h: "Rewards, not points",
    p: "Tangible thanks for the people who carry weight. Early access, calls, swag, paid bounties when possible.",
  },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24">
      <header className="mb-12 reveal" style={{ ["--d" as string]: "40ms" }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          03 · Community
        </p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-balance mb-6">
          A room of <span className="display-italic">builders</span>, not an
          audience.
        </h1>
        <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[58ch]">
          Dacoder is small on purpose. Open source means real names, real
          changes, real conversations. The community piece is the point, not
          the funnel.
        </p>
      </header>

      <section
        className="mb-16 reveal"
        style={{ ["--d" as string]: "160ms" }}
      >
        <JoinDiscord />
      </section>

      <section className="mb-20">
        <header className="flex items-baseline justify-between border-b border-rule pb-3 mb-8">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Principles
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground/70">
            in draft
          </span>
        </header>
        <ol>
          {principles.map((p, i) => (
            <li
              key={p.h}
              className="grid grid-cols-[40px_1fr] gap-x-6 py-7 border-b border-rule last:border-b-0 reveal"
              style={{ ["--d" as string]: `${260 + i * 80}ms` }}
            >
              <span className="font-mono text-[11px] text-muted-foreground/80 pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-2">
                  {p.h}
                </h3>
                <p className="text-[16px] leading-relaxed text-foreground/80 max-w-[58ch] text-pretty">
                  {p.p}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <article className="border-t border-rule pt-6">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Contributions
          </h3>
          <p className="text-[15px] leading-relaxed text-foreground/75 max-w-[40ch] text-pretty">
            A live ledger of contributions lands here once the rewards system
            ships. For now, the action is on{" "}
            <a
              href="https://github.com/davide97g"
              target="_blank"
              rel="noopener noreferrer"
              className="link-grow text-foreground"
            >
              GitHub
            </a>
            .
          </p>
        </article>
        <article className="border-t border-rule pt-6">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Rewards
          </h3>
          <p className="text-[15px] leading-relaxed text-foreground/75 max-w-[40ch] text-pretty">
            The shape of the rewards system is being figured out in the open.
            Follow{" "}
            <a
              href="/roadmap"
              className="link-grow text-foreground"
            >
              the roadmap
            </a>{" "}
            for status.
          </p>
        </article>
      </section>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Page in draft · revisions visible in commits
      </p>
    </div>
  );
}
