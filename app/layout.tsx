import type { Metadata } from "next";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MouseWorld } from "@/components/MouseWorld";
import { Navigation } from "@/components/Navigation";
import { site } from "@/data/site";
import "./globals.css";

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
    creator: "@0xqowiyy",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
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
