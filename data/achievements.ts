export type Wow = {
  mark: string;
  label: string;
  body: string;
};

export const wows: Wow[] = [
  {
    mark: "Lumma",
    label: "Founded",
    body: "Started Lumma and have been shipping since — a live product trail, not a pitch deck left in the rain.",
  },
  {
    mark: "USDC",
    label: "As gas",
    body: "Building on Arc so users never need a second token just to move the first. The unusual choice is the whole point.",
  },
  {
    mark: "solo",
    label: "Indie",
    body: "One founder, the full expedition: product, backend, interface, and the unglamorous work of keeping it non-custodial.",
  },
  {
    mark: "Rust",
    label: "On the belt",
    body: "Learning Rust the way you learn a new knife — slowly, on real wood, not on a tutorial that never leaves the page.",
  },
  {
    mark: "ops",
    label: "The new trail",
    body: "DevOps is a recent path. Docker, deploys, the discipline of packing the same tent twice. Beginner, and moving.",
  },
];

export const sideQuests = [
  "Scouting Rust in the evenings — systems language as a long game, not a costume.",
  "Walking the DevOps trail from the first mile: containers, deploys, the boring reliability that lets a finance app sleep.",
];

export const questRewards = [
  "Lumma is live: lumma.xyz, docs.lumma.xyz, testnet.lumma.xyz.",
  "Chose Arc Network for USDC-as-gas and native CCTP v2 — a chain that matches the product instead of fighting it.",
];
