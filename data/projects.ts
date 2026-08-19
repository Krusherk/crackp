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
    subtitle: "Stablecoin finance on Arc",
    description:
      "A stablecoin-first finance app on Circle’s Arc Network. Bridge, swap, see balances across chains, send across borders, and hunt yield — USDC as gas, no wrapped tokens, no waiting on a chain that was built for something else.",
    highlights: [
      "USDC as native gas",
      "CCTP v2 burn-and-mint",
      "Non-custodial by design",
    ],
    technologies: ["TypeScript", "React", "Vite", "Arc", "CCTP v2", "Privy"],
    github: "https://github.com/Krusherk/lumma",
    live: "https://lumma.xyz",
    featured: true,
    layout: "full",
    visual: "trading",
  },
  {
    number: "02",
    slug: "cctp-trail",
    title: "The Bridge",
    subtitle: "Native USDC, chain to chain",
    description:
      "The first module on the trail: move real USDC across 20+ chains through Circle CCTP v2. Burn here, mint there. No pool, no wrap, no synthetic stand-in.",
    highlights: ["CCTP v2", "Sub-second finality on Arc", "Testnet preview"],
    technologies: ["CCTP v2", "Arc", "TypeScript"],
    live: "https://testnet.lumma.xyz",
    featured: true,
    layout: "wide",
    visual: "index",
  },
  {
    number: "03",
    slug: "agent-payroll",
    title: "Agent Payroll",
    subtitle: "Pay machines like a camp pays scouts",
    description:
      "Trustless payouts for agent work: on-chain identity, receipts, and USDC settlement when a job is done. Built toward an economy that does not sleep.",
    highlights: ["On-chain identity", "Job settlement", "USDC rails"],
    technologies: ["TypeScript", "USDC", "Supabase"],
    live: "https://docs.lumma.xyz",
    layout: "compact",
    visual: "agent",
  },
  {
    number: "04",
    slug: "unified-balance",
    title: "One Ledger",
    subtitle: "Every chain, one reading",
    description:
      "A single view of stablecoin holdings across supported chains. The spreadsheet and the network-switcher both stay in the pack.",
    highlights: ["Cross-chain balances", "Stablecoin-first UX"],
    technologies: ["TypeScript", "React", "Privy"],
    live: "https://lumma.xyz",
    layout: "compact",
    visual: "sandbox",
  },
];
