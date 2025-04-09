import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      title: "Learn Advanced React Patterns",
      description: "Master advanced React patterns like compound components and render props",
      status: "completed",
      timeline: "Q1 2023",
    },
    {
      title: "Build a Component Library",
      description: "Create and publish a reusable component library with documentation",
      status: "in-progress",
      timeline: "Q2 2023",
    },
    {
      title: "Master Next.js App Router",
      description: "Deep dive into Next.js App Router and server components",
      status: "in-progress",
      timeline: "Q3 2023",
    },
    {
      title: "Contribute to Major Open Source Project",
      description: "Become a regular contributor to a major open source project",
      status: "planned",
      timeline: "Q4 2023",
    },
    {
      title: "Learn WebAssembly",
      description: "Explore WebAssembly and its applications in web development",
      status: "planned",
      timeline: "Q1 2024",
    },
    {
      title: "Build AI-powered Developer Tools",
      description: "Create tools that leverage AI to improve developer workflow",
      status: "planned",
      timeline: "Q2 2024",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "planned":
        return <Circle className="h-5 w-5 text-muted-foreground" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "in-progress":
        return (
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
            In Progress
          </Badge>
        )
      case "planned":
        return <Badge variant="outline">Planned</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Roadmap</h1>
        <p className="text-xl text-muted-foreground">My learning journey and future plans in web development</p>
      </div>

      <div className="relative pl-8 border-l-2 border-muted">
        {roadmapItems.map((item, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[25px] bg-background p-1">{getStatusIcon(item.status)}</div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{item.title}</CardTitle>
                  {getStatusBadge(item.status)}
                </div>
                <CardDescription>{item.timeline}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
