import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  type: "Open Source" | "Collaborative";
  github: string;
  demo?: string;
};

export default function ProjectsPage() {
  // TODO: fetch this data from github API
  const projects: Project[] = [
    {
      title: "Reputation Ranking System",
      description:
        "A collection of reusable React components with TypeScript support",
      tags: ["JavaScript", "Github API", "Github Actions"],
      type: "Open Source",
      github: "https://github.com/davide97g/reputation-ranking-system",
    },
    {
      title: "Pokèdle",
      description: "Wordle-inspired game based on pokemon to guess",
      tags: ["Typescript", "React", "Node.js", "Stripe API", "Monorepo"],
      type: "Collaborative",
      github: "https://github.com/davide97g/pokedle",
      demo: "https://pokedle.online",
    },
    {
      title: "Chattonapp",
      description: "Run locally your custom chat service with a Raspberry Pi",
      tags: [
        "Typescript",
        "React",
        "Node.js",
        "Websocket",
        "Monorepo",
        "Raspberry Pi",
      ],
      type: "Collaborative",
      github: "https://github.com/davide97g/chattonapp",
    },
  ];

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of open source and collaborative projects
        </p>
        {/* link to notion for all the status updates */}
        <p className="text-sm text-muted-foreground mt-2">
          Check out my{" "}
          <Link
            href="https://twisty-bougon-ada.notion.site/1cf064acf45d8026bb16dd3147f99d07?v=1cf064acf45d80f19439000c7adf15f7&pvs=74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Notion Projects page
          </Link>{" "}
          for all the status updates
        </p>
      </div>

      <div className="grid gap-6 mt-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {project.description}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    project.type === "Open Source" ? "default" : "secondary"
                  }
                >
                  {project.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
