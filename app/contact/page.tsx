"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

// This would typically be a server action in a separate file
async function submitContactForm(
  prevState: {
    success: boolean;
    message: string;
  } | null,
  formData: FormData
) {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate form data
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required" };
  }

  // In a real app, you would send this data to your backend
  console.log("Form submitted:", { name, email, message });

  return {
    success: true,
    message: "Thanks for your message! I'll get back to you soon.",
  };
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full gap-2" disabled={pending}>
      {pending ? (
        <>Processing...</>
      ) : (
        <>
          <Send className="h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, null);

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/username" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/username" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/username",
    },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
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

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>
              <SubmitButton />

              {state && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    state.success
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {state.message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connect With Me</CardTitle>
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
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              I typically respond within 24-48 hours.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
