export type ProjectLayout = "full" | "wide" | "compact";

export type Project = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  layout: ProjectLayout;
  visual: "rag" | "trading" | "canvas" | "agent" | "sandbox" | "index";
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "lumma",
    title: "Lumma",
    subtitle: "Stablecoin finance app",
    description:
      "A live product I am building around stablecoin movement: bridge, swap, balances, cross-border send, and yield in one calm interface.",
    highlights: [
      "Product and backend systems",
      "Non-custodial flow",
      "Payments-focused UX",
    ],
    technologies: ["TypeScript", "React", "Vite", "Privy"],
    github: "https://github.com/Krusherk/lumma",
    live: "https://lumma.xyz",
    featured: true,
    layout: "full",
    visual: "trading",
  },
];
