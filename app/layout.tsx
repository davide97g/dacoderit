import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dacoder — open source, collaborative, community-driven",
  description:
    "Davide Ghiotto's notebook of open-source projects, videos, and community work.",
  metadataBase: new URL("https://dacoder.it"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1a17" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10 min-h-dvh flex flex-col">
            <Navigation />
            <main className="flex-1 w-full">{children}</main>
            <footer className="mx-auto w-full max-w-3xl px-6 py-12 text-xs text-muted-foreground flex items-center justify-between border-t border-rule mt-24">
              <span>© Dacoder · made in Italy</span>
              <a
                href="https://github.com/davide97g"
                target="_blank"
                rel="noopener noreferrer"
                className="link-grow"
              >
                davide97g
              </a>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
