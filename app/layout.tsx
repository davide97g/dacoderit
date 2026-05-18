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

const SITE_URL = "https://dacoder.it";
const SITE_NAME = "Dacoder";
const DEFAULT_TITLE = "Dacoder · open source, collaborative, community-driven";
const DEFAULT_DESCRIPTION =
  "A small workshop for open-source, collaborative software by Davide Ghiotto. Projects, videos, and community work in public.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Dacoder",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Davide Ghiotto", url: "https://github.com/davide97g" }],
  creator: "Davide Ghiotto",
  publisher: "Dacoder",
  generator: "Next.js",
  keywords: [
    "Dacoder",
    "Davide Ghiotto",
    "Pulse HR",
    "pulsehr.it",
    "open source HR",
    "people-first HR",
    "open source",
    "open-source projects",
    "developer community",
    "collaborative coding",
    "indie developer",
    "web development",
    "frontend",
    "TypeScript",
    "React",
    "Next.js",
    "Bun",
    "YouTube developer channel",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/profile-pic.png",
        width: 1024,
        height: 1024,
        alt: "Davide Ghiotto · Dacoder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/profile-pic.png"],
    creator: "@dacoderit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/profile-pic.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1a17" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
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
        <StructuredData />
      </body>
    </html>
  );
}

function StructuredData() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Davide Ghiotto",
    alternateName: "Dacoder",
    url: SITE_URL,
    image: `${SITE_URL}/profile-pic.png`,
    jobTitle: "Software developer",
    worksFor: { "@type": "Organization", name: "Dacoder" },
    nationality: { "@type": "Country", name: "Italy" },
    sameAs: [
      "https://github.com/davide97g",
      "https://www.linkedin.com/in/davide-ghiotto/",
      "https://www.youtube.com/@dacoderit",
      "https://discord.gg/uZ848MKE",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "dacoder.it",
    url: SITE_URL,
    inLanguage: "en",
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@type": "Person",
      name: "Davide Ghiotto",
      url: SITE_URL,
    },
  };

  // Escape `<` so a value containing `</script>` cannot break out of the tag.
  // Inputs are hardcoded server-side constants — no user input — but this
  // hardening keeps the JSON-LD safe by construction.
  const safe = (obj: unknown) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safe(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safe(websiteJsonLd) }}
      />
    </>
  );
}
