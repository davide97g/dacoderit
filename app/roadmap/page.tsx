import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What is next for Dacoder, in the open. Channel goals, community projects, and open-source releases. Dated when known, honest when not.",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    url: "/roadmap",
    title: "Roadmap · Dacoder",
    description:
      "Channel goals, community projects, and open-source releases. Updated in public.",
  },
};

type Status = "completed" | "in-progress" | "planned";

type RoadmapItem = {
  title: string;
  description: string;
  status: Status;
  timeline: string;
};

const items: RoadmapItem[] = [
  {
    title: "Open the YouTube channel",
    description:
      "Started the channel to share the journey and invite collaborators in.",
    status: "completed",
    timeline: "Apr 2025",
  },
  {
    title: "Feedback & rewards system",
    description:
      "A small system to recognise the people who show up. Building it in the open with a video and the code.",
    status: "in-progress",
    timeline: "Apr 2025",
  },
  {
    title: "Community projects",
    description:
      "A handful of projects to build together. One video per project, end-to-end.",
    status: "planned",
    timeline: "May 2025",
  },
  {
    title: "Open source releases",
    description:
      "Carve standalone libraries out of the workshop. Publish on GitHub, tag, document, ship.",
    status: "planned",
    timeline: "May 2025",
  },
  {
    title: "Pulse HR · MVP release",
    description:
      "Open-source HR platform for the people half of HR: status log, growth, kudos, wellbeing, workload check-ins. App live at app.pulsehr.it, source on GitHub under FSL-1.1-MIT.",
    status: "completed",
    timeline: "May 2026",
  },
  {
    title: "Pulse HR · collect first feedback",
    description:
      "Open the feedback board to real users. Wire up voting power, watch the first cohort use Status Log and Kudos, ship the obvious fixes weekly.",
    status: "in-progress",
    timeline: "Week of May 25, 2026",
  },
];

function StatusGlyph({ status }: { status: Status }) {
  if (status === "completed")
    return (
      <span className="relative block h-3 w-3 rounded-full bg-foreground" aria-hidden>
        <span className="sr-only">completed</span>
      </span>
    );
  if (status === "in-progress")
    return (
      <span className="relative block h-3 w-3 rounded-full border border-accent" aria-hidden>
        <span className="absolute inset-0.5 rounded-full bg-accent pulse-dot" />
        <span className="sr-only">in progress</span>
      </span>
    );
  return (
    <span
      className="block h-3 w-3 rounded-full border border-rule bg-background"
      aria-hidden
    >
      <span className="sr-only">planned</span>
    </span>
  );
}

const statusLabel: Record<Status, string> = {
  completed: "Shipped",
  "in-progress": "In motion",
  planned: "Planned",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24">
      <header className="mb-16 reveal" style={{ ["--d" as string]: "40ms" }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          04 · Roadmap
        </p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02] text-balance mb-6">
          The next few months, in the open.
        </h1>
        <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[58ch]">
          Channel and community goals, side by side. Dated when I know, honest
          when I don&apos;t.
        </p>
      </header>

      <ol className="relative pl-8">
        {/* Vertical rule. 1px structural axis. */}
        <span
          className="absolute top-2 bottom-2 left-[5px] w-px bg-rule"
          aria-hidden
        />
        {items.map((item, i) => (
          <li
            key={item.title}
            className="relative pb-12 last:pb-0 reveal"
            style={{ ["--d" as string]: `${120 + i * 90}ms` }}
          >
            <span className="absolute -left-[27px] top-[6px] flex items-center justify-center bg-background pr-2">
              <StatusGlyph status={item.status} />
            </span>

            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <h2 className="font-display text-2xl md:text-3xl tracking-tight">
                {item.title}
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {item.timeline} · {statusLabel[item.status]}
              </span>
            </div>
            <p className="text-[16px] leading-relaxed text-foreground/80 max-w-[60ch] text-pretty">
              {item.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Drafts and revisions kept in public.
      </p>
    </div>
  );
}
