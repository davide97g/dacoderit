import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Youtube } from "lucide-react";

type IVideo = {
  title: string;
  description: string;
  views: string;
  date: string;
};

export default async function YoutubePage() {
  const videos: IVideo[] = [];
  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Dacoder: YouTube Channel
        </h1>
        <Button variant="default" className="gap-2 mb-4" asChild>
          <a href="https://www.youtube.com/@dacoderit" target="_blank">
            <Youtube className="h-5 w-5" />
            Visit YouTube Channel
          </a>
        </Button>

        <p className="text-xl text-muted-foreground">
          Sharing knowledge and experiences through video tutorials and coding
          sessions
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Channel Goals</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Learn by Teaching</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Share practical knowledge about frontend development and web
                technologies. Not as an expert but as an enthusiast
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inspire</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Motivate developers to start projects on their own</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Build a community of like-minded developers to share ideas and
                collaborate
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Videos</h2>
        {videos.length === 0 && (
          <p className="text-muted-foreground">
            No videos available at the moment. Please check back later!
          </p>
        )}
        <div className="grid gap-6">
          {videos.map((video, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  {video.views} views • {video.date}
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="gap-2 mb-4" asChild>
          <a href="https://www.youtube.com/@dacoderit" target="_blank">
            <Youtube className="h-5 w-5" />
            Visit YouTube Channel
          </a>
        </Button>
      </div>
    </div>
  );
}
