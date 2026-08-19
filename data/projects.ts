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
    slug: "biscuit",
    title: "Biscuit",
    subtitle: "The Drive RAG",
    description:
      "A chat-based ReAct agent that understands a Google Drive, syncing files into Qdrant so questions can travel across documents, the web, and scraped pages as one expedition.",
    highlights: [
      "Drive Sync Worker",
      "KEDA Autoscaling on k3s",
      "ReAct-style Retrieval Agent",
    ],
    technologies: ["TypeScript", "k3s", "Redis", "KEDA", "Qdrant"],
    github: "https://github.com/hrshtdotme",
    featured: true,
    layout: "full",
    visual: "rag",
  },
  {
    number: "02",
    slug: "opex",
    title: "Opex",
    subtitle: "Perpetuals Trading Platform",
    description:
      "A low-latency crypto perpetuals simulator with a live order book, leverage, liquidations, and portfolio PnL that updates as the market breathes.",
    highlights: [
      "CQRS Read Models",
      "Redis Streams",
      "Snapshot-based Recovery",
    ],
    technologies: ["TypeScript", "Redis Streams", "MongoDB", "WebSockets"],
    github: "https://github.com/hrshtdotme/Opex-Perpetuals-Trading-Platform",
    live: "https://opex.hrsht.me",
    featured: true,
    layout: "wide",
    visual: "trading",
  },
  {
    number: "03",
    slug: "creo",
    title: "Creo",
    subtitle: "Collaborative Whiteboard",
    description:
      "A real-time whiteboard for sharing ideas and teaching through scribbles, built around a custom canvas engine instead of the React DOM.",
    highlights: [
      "Delta Sync Protocol",
      "Undo/Redo Command Log",
      "Custom Canvas Rendering Loop",
    ],
    technologies: ["TypeScript", "WebSockets", "Canvas", "Vite"],
    github: "https://github.com/hrshtdotme",
    layout: "compact",
    visual: "canvas",
  },
  {
    number: "04",
    slug: "arctic",
    title: "Arctic",
    subtitle: "Support Agent",
    description:
      "An AI-powered support assistant combining structured knowledge with intelligent search, suggested replies, and a custom tool-runner that talks to live store data.",
    highlights: [
      "Tool-calling LLM Agent",
      "Event Sourcing",
      "Knowledge-base Search",
    ],
    technologies: ["TypeScript", "OpenAI SDK", "Postgres", "tRPC"],
    github: "https://github.com/hrshtdotme/Arctic-Support-Agent",
    live: "https://arctic.hrsht.me",
    layout: "compact",
    visual: "agent",
  },
  {
    number: "05",
    slug: "mini-e2b",
    title: "Mini E2B",
    subtitle: "Sandboxing App",
    description:
      "A lightweight sandbox runner inspired by E2B, for executing untrusted Node.js in isolated environments with time and memory limits.",
    highlights: [
      "Containerized Isolation",
      "Job-queue Orchestrator",
      "Time/Memory Limits",
    ],
    technologies: ["TypeScript", "Docker", "Node.js"],
    github: "https://github.com/hrshtdotme",
    layout: "compact",
    visual: "sandbox",
  },
  {
    number: "06",
    slug: "the-index",
    title: "The Index",
    subtitle: "AI RAG App",
    description:
      "A backend-only RAG application designed to process different resource types and make them searchable — a quiet archive with a loud retrieval path.",
    highlights: [
      "Multi-resource Ingestion",
      "Vector Search",
      "Backend-only Architecture",
    ],
    technologies: ["TypeScript", "Qdrant", "Redis", "PostgreSQL"],
    github: "https://github.com/hrshtdotme/The-Index-AI-Rag-App",
    layout: "compact",
    visual: "index",
  },
];
