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
      "The current build: stablecoin movement without making users think about five different crypto chores. Bridge, swap, balances, send, yield.",
    highlights: [
      "One place for money movement",
      "Non-custodial by default",
      "Built like a product, not a demo",
    ],
    technologies: ["TypeScript", "React", "Vite", "Privy"],
    github: "https://github.com/Krusherk/lumma",
    live: "https://lumma.xyz",
    featured: true,
    layout: "full",
    visual: "trading",
  },
];
