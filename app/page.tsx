"use client";
import { JoinDiscord } from "@/components/join-discord";
import { ArrowRight, Code, Mail, Map, Users, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// Loading component for Suspense
function LinkCardSkeleton() {
  return (
    <div className="p-6 border rounded-lg animate-pulse">
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-md bg-primary/10">
          <div className="h-5 w-5 bg-primary/20 rounded" />
        </div>
        <div className="w-full">
          <div className="h-6 w-24 bg-muted rounded mb-2" />
          <div className="h-4 w-full bg-muted/50 rounded" />
        </div>
      </div>
    </div>
  );
}

// Link card component
function LinkCard({
  href,
  label,
  description,
  icon: Icon,
}: {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { theme } = useTheme();
  return (
    <Link
      href={href}
      className="group block p-6 border rounded-lg hover:bg-accent transition-colors bg-accent/50"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-md bg-primary/20 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {label}
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h2>
          <p
            className={
              theme == "dark" ? "text-muted-foreground" : "text-foreground/50"
            }
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const links = [
    {
      href: "/youtube",
      label: "YouTube",
      description: "Channel goals and content recap",
      icon: Youtube,
    },
    {
      href: "/projects",
      label: "Projects",
      description: "Open source and collaborative work",
      icon: Code,
    },
    {
      href: "/community",
      label: "Community",
      description: "Contributions, rewards and reputation",
      icon: Users,
    },
    {
      href: "/roadmap",
      label: "Roadmap",
      description: "Future plans and goals",
      icon: Map,
    },
    {
      href: "/contact",
      label: "Contact",
      description: "Get in touch with me",
      icon: Mail,
    },
  ];

  // get theme
  const { theme, systemTheme } = useTheme();

  const backgroundImage =
    (theme === "system" ? systemTheme : theme) === "dark"
      ? "/background-dark.png"
      : "/background.png";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <div
        style={{
          backgroundImage: "url('" + backgroundImage + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="container w-full px-4 py-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Dacoder Project
          </h1>
          <Image
            src={"/profile-pic.png"}
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full border-2 border-primary shadow-lg"
          />
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Open source. Collaborative. Community-driven.
          </p>
          <div className="mt-6 mb-4 mx-auto flex items-center justify-center gap-4">
            <JoinDiscord />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense
            fallback={Array(5)
              .fill(0)
              .map((_, i) => (
                <LinkCardSkeleton key={i} />
              ))}
          >
            {links.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
