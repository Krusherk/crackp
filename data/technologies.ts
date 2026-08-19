export type TechCategory = {
  id: string;
  label: string;
  fieldNote: string;
  items: { name: string; note: string }[];
};

export const technologies: TechCategory[] = [
  {
    id: "backend",
    label: "Backend & APIs",
    fieldNote: "The tools that carry the expedition.",
    items: [
      { name: "Node.js", note: "The camp stove. Always packed." },
      { name: "Express", note: "Thin trails between services." },
      { name: "tRPC", note: "End-to-end types, no ceremony." },
      { name: "Django REST Framework", note: "When Python keeps the watch." },
      { name: "Firebase", note: "A spare tent for fast MVPs." },
      { name: "OpenAI SDK", note: "The compass for agentic work." },
    ],
  },
  {
    id: "systems",
    label: "System Design",
    fieldNote: "How the map is drawn before the trail is walked.",
    items: [
      { name: "Event-driven architecture", note: "Work that travels as messages." },
      { name: "CQRS", note: "Reads and writes on separate ridges." },
      { name: "Microservices", note: "Small camps, shared radio." },
      { name: "REST APIs", note: "The common tongue of the trail." },
      { name: "WebSockets", note: "A live fire between clients." },
      { name: "Monorepos", note: "One pack, many pockets." },
    ],
  },
  {
    id: "data",
    label: "Databases & Caching",
    fieldNote: "Where memory is kept, and where it is allowed to fade.",
    items: [
      { name: "PostgreSQL", note: "The stone foundation." },
      { name: "MongoDB", note: "Flexible ledgers for snapshots." },
      { name: "Qdrant", note: "A library of vectors." },
      { name: "Redis", note: "The quickest cache by the fire." },
      { name: "Redis Streams", note: "A river of events." },
      { name: "Prisma", note: "Typed paths into SQL." },
      { name: "Drizzle", note: "SQL close to the metal." },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    fieldNote: "How the camp scales when the weather turns.",
    items: [
      { name: "Docker", note: "Identical tents, anywhere." },
      { name: "Kubernetes", note: "A full orchestration grove." },
      { name: "k3s", note: "The same grove, on one machine." },
      { name: "KEDA", note: "Scale when the stream lags." },
      { name: "CI/CD", note: "A trail that rebuilds itself." },
      { name: "Vercel", note: "Front-of-house, quickly pitched." },
      { name: "AWS", note: "The distant range of cloud." },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    fieldNote: "The journal pages the traveler actually sees.",
    items: [
      { name: "React", note: "The grain of the page." },
      { name: "Next.js", note: "Routes as chapters." },
      { name: "Vite", note: "A fast spark for prototypes." },
      { name: "React Query", note: "Server state, kept honest." },
      { name: "Zustand", note: "A small pouch of client state." },
      { name: "Tailwind CSS", note: "Utility stitches." },
      { name: "shadcn/ui", note: "Parts, not a costume." },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    fieldNote: "The dialects spoken at camp.",
    items: [
      { name: "TypeScript", note: "The native tongue." },
      { name: "JavaScript", note: "The older trail." },
      { name: "Python", note: "For science, scripts, and DRF." },
    ],
  },
];
