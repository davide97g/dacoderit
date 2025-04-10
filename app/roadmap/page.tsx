import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type RoadmapItem = {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  timeline: string;
};

export default function RoadmapPage() {
  const roadmapItems: RoadmapItem[] = [
    {
      title: "Open Youtube Channel",
      description:
        "I started my Youtube channel to share my journey and start collaborating with you.",
      status: "completed",
      timeline: "04/2025",
    },
    {
      title: "Feedback & Rewards System",
      description:
        "A system to reward the most active members of the community. Publishing a video, sharing the code and testing it together.",
      status: "in-progress",
      timeline: "04/2025",
    },
    {
      title: "Community Projects",
      description:
        "A collection of projects to work on together. I will publish a video for each project.",
      status: "planned",
      timeline: "05/2025",
    },
    {
      title: "Open Source Projects",
      description:
        "A collection of open source projects that I will publish on Github.",
      status: "planned",
      timeline: "05/2025",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "planned":
        return <Circle className="h-5 w-5 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "in-progress":
        return (
          <Badge
            variant="secondary"
            className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
          >
            In Progress
          </Badge>
        );
      case "planned":
        return <Badge variant="outline">Planned</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Roadmap</h1>
        <p className="text-xl text-muted-foreground">
          My personal roadmap for the next months. Here you can find both my
          Youtube and Community Projects goals.
        </p>
      </div>

      <div className="relative pl-8 border-l-2 border-muted">
        {roadmapItems.map((item, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[25px] bg-background p-1">
              {getStatusIcon(item.status)}
            </div>
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
  );
}
