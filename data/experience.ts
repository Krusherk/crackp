export type Quest = {
  number: string;
  role: string;
  guild: string;
  href?: string;
  tenure: string;
  place: string;
  notes: string[];
  tech: string[];
};

export const quests: Quest[] = [
  {
    number: "01",
    role: "Founder",
    guild: "Lumma",
    href: "https://lumma.xyz",
    tenure: "2026 – present",
    place: "Indie · Arc Network",
    notes: [
      "Founded Lumma, a stablecoin finance app native to Arc — one interface for bridge, swap, balances, cross-border send, and yield.",
      "Chose Arc because USDC is gas, finality is sub-second, and CCTP v2 is a primitive instead of a workaround.",
      "Shipping in public: landing at lumma.xyz, docs at docs.lumma.xyz, testnet preview live.",
      "Keeping the product non-custodial. The camp never holds the gold.",
    ],
    tech: ["TypeScript", "React", "Vite", "Arc", "CCTP v2", "Privy", "Python", "Rust"],
  },
];
