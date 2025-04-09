"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/davide97g" },
    // { icon: Twitter, label: "Twitter", href: "https://twitter.com/username" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/davide-ghiotto/",
    },
    { icon: Mail, label: "Email", href: "mailto:dacoderit@gmail.com" },
  ];

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with me for collaborations, questions, or just to say
          hello
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Social</CardTitle>
            <CardDescription>
              Find me on these platforms and social networks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg border hover:bg-accent transition-colors"
              >
                <link.icon className="h-5 w-5 mr-3" />
                <span>{link.label}</span>
              </a>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
