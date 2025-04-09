import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "React Component Library",
      description:
        "A collection of reusable React components with TypeScript support",
      tags: ["React", "TypeScript", "CSS"],
      type: "Open Source",
      github: "https://github.com/username/react-components",
      demo: "https://react-components-demo.vercel.app",
    },
    {
      title: "Next.js Blog Template",
      description: "A customizable blog template built with Next.js and MDX",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      type: "Open Source",
      github: "https://github.com/username/nextjs-blog",
      demo: "https://nextjs-blog-template.vercel.app",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "A collaborative project for an e-commerce dashboard with analytics",
      tags: ["React", "Chart.js", "Firebase"],
      type: "Collaborative",
      github: "https://github.com/team/ecommerce-dashboard",
      demo: "https://ecommerce-dashboard.vercel.app",
    },
    {
      title: "Weather App",
      description: "A weather application with location-based forecasts",
      tags: ["JavaScript", "Weather API", "Geolocation"],
      type: "Open Source",
      github: "https://github.com/username/weather-app",
      demo: "https://weather-app-demo.vercel.app",
    },
  ];

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of open source and collaborative projects
        </p>
      </div>

      {/* work in progress page */}
      <p className="text-sm text-background flex items-center bg-amber-300 rounded-md p-4 mb-6 gap-2">
        <TriangleAlert className="inline-block h-4 w-4" />
        This page is a work in progress. I am working hard to improve the
        community section. Stay tuned for updates!
      </p>

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
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
