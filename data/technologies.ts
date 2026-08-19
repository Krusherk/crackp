export type TechCategory = {
  id: string;
  label: string;
  fieldNote: string;
  items: { name: string; note: string }[];
};

export const technologies: TechCategory[] = [
  {
    id: "languages",
    label: "Languages",
    fieldNote: "The dialects spoken at camp.",
    items: [
      { name: "Python", note: "The workhorse. Quiet, reliable, packed every trip." },
      { name: "Rust", note: "New iron on the belt. Learning the grain of it." },
      { name: "TypeScript", note: "How Lumma is actually written." },
    ],
  },
  {
    id: "backend",
    label: "Backend & Rails",
    fieldNote: "The tools that move money without theatre.",
    items: [
      { name: "Node.js", note: "When the trail is JavaScript end to end." },
      { name: "Python", note: "Scripts, services, the unglamorous path." },
      { name: "Circle CCTP v2", note: "Burn-and-mint. Real USDC. No wraps." },
      { name: "Supabase", note: "A small lodge for receipts and identity." },
    ],
  },
  {
    id: "chains",
    label: "Chains & Settlement",
    fieldNote: "Where the gold actually lives.",
    items: [
      { name: "Arc Network", note: "Circle’s L1. USDC as gas. Home camp." },
      { name: "USDC", note: "The unit of the expedition." },
      { name: "Privy", note: "Forty wallets, one door." },
      { name: "WalletConnect", note: "The common handshake." },
    ],
  },
  {
    id: "devops",
    label: "DevOps trail",
    fieldNote: "Just starting this path. Honest about the map.",
    items: [
      { name: "Vercel", note: "Where the front of the camp is pitched." },
      { name: "Docker", note: "Learning to pack the same tent every time." },
      { name: "CI/CD", note: "A trail that rebuilds itself — still scouting." },
      { name: "GitHub", note: "The field notes, public." },
    ],
  },
  {
    id: "frontend",
    label: "Interface",
    fieldNote: "The journal pages a traveler actually sees.",
    items: [
      { name: "React", note: "The grain of the page." },
      { name: "Vite", note: "A fast spark for the app layer." },
      { name: "TypeScript", note: "Types on the trail, not after." },
    ],
  },
  {
    id: "systems",
    label: "How it’s drawn",
    fieldNote: "Before a feature is a screen, it is a settlement path.",
    items: [
      { name: "Non-custodial architecture", note: "Never hold the bag." },
      { name: "Cross-chain settlement", note: "Burn here. Mint there." },
      { name: "Stablecoin-first product", note: "Designed for USDC, not for a token that happens to be stable." },
      { name: "Agent payments", note: "Machines that get paid when the job is done." },
    ],
  },
];
