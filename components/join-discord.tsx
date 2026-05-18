import { ArrowUpRight } from "lucide-react";

export function JoinDiscord({ className = "" }: { className?: string }) {
  return (
    <p className={`text-base text-pretty leading-relaxed ${className}`}>
      <span className="text-muted-foreground">A small Discord exists for </span>
      <span className="display-italic text-foreground">
        builders, learners, lurkers
      </span>
      <span className="text-muted-foreground">. </span>
      <a
        href="https://discord.gg/uZ848MKE"
        target="_blank"
        rel="noopener noreferrer"
        className="link-grow inline-flex items-baseline gap-0.5 text-foreground"
      >
        Join the room
        <ArrowUpRight className="h-3.5 w-3.5 self-center" aria-hidden />
      </a>
      <span className="text-muted-foreground">.</span>
    </p>
  );
}
