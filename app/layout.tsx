import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Pixelify_Sans } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MouseWorld } from "@/components/MouseWorld";
import { Navigation } from "@/components/Navigation";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
  display: "swap",
});

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.fullName, url: site.url }],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@hrshtdotme",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibm.variable} ${pixel.variable} h-full`}
    >
      <body className="min-h-full bg-paper text-ink antialiased">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to the work
        </a>
        <MouseWorld />
        <GrainOverlay />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
