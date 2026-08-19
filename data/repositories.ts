export type Repository = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  variant: "plain" | "icon" | "preview";
  icon?: "backpack" | "campfire" | "diamond" | "book" | "script" | "plant";
};

export const repositories: Repository[] = [
  {
    number: "01",
    name: "Biscuit",
    subtitle: "The AI RAG App",
    description:
      "A Google Drive RAG application, built in 21 hours. k3s scales pods on a single VM; Redis metrics feed KEDA to decide when ingesting workloads should wake.",
    language: "TypeScript",
    stars: 2,
    url: "https://github.com/hrshtdotme",
    variant: "preview",
    icon: "book",
  },
  {
    number: "02",
    name: "Opex",
    subtitle: "Perpetuals Trading Platform",
    description:
      "A low-latency trading application focused on fast, reliable order execution and real-time market data.",
    language: "TypeScript",
    stars: 6,
    url: "https://github.com/hrshtdotme/Opex-Perpetuals-Trading-Platform",
    variant: "plain",
  },
  {
    number: "03",
    name: "Arctic",
    subtitle: "Support Agent",
    description:
      "An AI-powered support assistant combining structured knowledge with intelligent search, suggested replies, and automation.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/hrshtdotme/Arctic-Support-Agent",
    variant: "icon",
    icon: "diamond",
  },
  {
    number: "04",
    name: "Creo",
    subtitle: "Collaborative Whiteboard App",
    description:
      "A collaborative whiteboard for sharing ideas and teaching through scribbles.",
    language: "TypeScript",
    stars: 8,
    url: "https://github.com/hrshtdotme",
    variant: "plain",
  },
  {
    number: "05",
    name: "Mini E2B",
    subtitle: "Sandboxing App",
    description:
      "A lightweight sandbox runner inspired by E2B for executing untrusted Node.js code in isolated environments.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/hrshtdotme",
    variant: "icon",
    icon: "script",
  },
  {
    number: "06",
    name: "The Index",
    subtitle: "AI RAG App",
    description:
      "A backend-only AI RAG application designed to process different resource types and make them searchable.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/hrshtdotme/The-Index-AI-Rag-App",
    variant: "icon",
    icon: "plant",
  },
];
