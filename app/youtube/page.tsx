import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, ExternalLink } from "lucide-react"

export default function YoutubePage() {
  const videos = [
    {
      title: "Building a Modern Web App",
      description: "Learn how to build a modern web application using Next.js and React",
      views: "12K",
      date: "2 months ago",
    },
    {
      title: "CSS Grid Masterclass",
      description: "Master CSS Grid layout with practical examples",
      views: "8.5K",
      date: "3 months ago",
    },
    {
      title: "React Hooks Deep Dive",
      description: "Understanding React Hooks in depth with real-world examples",
      views: "15K",
      date: "1 month ago",
    },
  ]

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">YouTube Channel</h1>
        <p className="text-xl text-muted-foreground">
          Sharing knowledge and experiences through video tutorials and coding sessions
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Channel Goals</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Educate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Share practical knowledge about frontend development and web technologies</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inspire</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Motivate developers to build better user experiences and accessible websites</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Build a community of like-minded developers to share ideas and collaborate</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Videos</h2>
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
        <Button className="gap-2">
          <Youtube className="h-5 w-5" />
          Visit YouTube Channel
        </Button>
      </div>
    </div>
  )
}
