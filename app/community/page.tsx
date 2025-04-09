import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, TriangleAlert, Users } from "lucide-react";

type Contribution = {
  project: string;
  description: string;
  role: string;
  impact: string;
};
type Reward = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function CommunityPage() {
  const contributions: Contribution[] = [
    // {
    //   project: "React",
    //   description: "Contributed to the React documentation and fixed bugs in the core library",
    //   role: "Contributor",
    //   impact: "Improved developer experience for thousands of React developers",
    // },
    // {
    //   project: "Next.js",
    //   description: "Added new features to the Next.js framework and improved performance",
    //   role: "Maintainer",
    //   impact: "Helped improve build times by 15% for large applications",
    // },
    // {
    //   project: "Open Source Design",
    //   description: "Provided design feedback and UI improvements for various open source projects",
    //   role: "Designer",
    //   impact: "Improved accessibility and user experience for multiple projects",
    // },
  ];

  const rewards: Reward[] = [
    // {
    //   title: "GitHub Star",
    //   description: "Recognized as a GitHub Star for contributions to open source",
    //   icon: Star,
    // },
    // {
    //   title: "Community Hero",
    //   description: "Awarded for mentoring new developers in the community",
    //   icon: Heart,
    // },
    // {
    //   title: "Top Contributor",
    //   description: "Recognized as a top contributor to the React ecosystem",
    //   icon: Trophy,
    // },
  ];

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Community</h1>
        <p className="text-xl text-muted-foreground">
          Contributing to the developer community and building reputation
        </p>
      </div>

      {/* work in progress page */}
      <p className="text-sm text-background flex items-center bg-amber-300 rounded-md p-4 mb-6 gap-2">
        <TriangleAlert className="inline-block h-4 w-4" />
        This page is a work in progress. I am working hard to improve the
        community section. Stay tuned for updates!
      </p>

      <div className="mb-12 mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Contributions</h2>
        </div>
        {contributions.length === 0 && (
          <p className="text-muted-foreground">
            No contributions yet. Start contributing to open source projects and
            make a difference!
          </p>
        )}
        <div className="grid gap-6">
          {contributions.map((contribution, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{contribution.project}</CardTitle>
                  <Badge>{contribution.role}</Badge>
                </div>
                <CardDescription>{contribution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {contribution.impact}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-6">
          <Award className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Rewards & Recognition</h2>
        </div>
        {rewards.length === 0 && (
          <p className="text-muted-foreground">
            No rewards yet. Keep contributing to earn recognition!
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {rewards.map((reward, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <reward.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-center">{reward.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">
                  {reward.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
