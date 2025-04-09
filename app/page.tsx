import { ArrowRight, Code, Mail, Map, Users, Youtube } from "lucide-react";
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
  return (
    <Link
      href={href}
      className="group block p-6 border rounded-lg hover:bg-accent transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {label}
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h2>
          <p className="text-muted-foreground">{description}</p>
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

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <div className="container max-w-4xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Frontend & Web Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building beautiful, responsive, and accessible web experiences
          </p>
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
