export type TechCategory = {
  id: string;
  label: string;
  fieldNote: string;
  items: { name: string; note: string }[];
};

export const technologies: TechCategory[] = [
  {
    id: "backend",
    label: "Backend",
    fieldNote: "The main lane: APIs, data, auth, jobs, and the useful boring parts.",
    items: [
      { name: "Python", note: "Services, scripts, automation, and backend logic." },
      { name: "Node.js", note: "APIs and server-side JavaScript when the stack calls for it." },
      { name: "PostgreSQL", note: "The default database choice for serious app work." },
      { name: "Redis", note: "Caching, queues, sessions, and fast temporary state." },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    fieldNote: "Enough interface work to make the product feel clear and usable.",
    items: [
      { name: "React", note: "Component-driven product interfaces." },
      { name: "Next.js", note: "Full-stack React apps, routing, metadata, and deployment." },
      { name: "TypeScript", note: "Typed app code and fewer mystery bugs." },
      { name: "Tailwind CSS", note: "Fast styling without fighting a design system too early." },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    fieldNote: "The practical kit for shipping and maintaining projects.",
    items: [
      { name: "Git", note: "Version control, branches, reviews, and clean history." },
      { name: "Docker", note: "Repeatable local environments and deployable services." },
      { name: "GitHub Actions", note: "Basic CI, checks, and deployment workflows." },
      { name: "Vercel", note: "Simple deploys for polished web surfaces." },
    ],
  },
  {
    id: "learning",
    label: "Learning",
    fieldNote: "Things I am actively getting better at, no fake expert costume.",
    items: [
      { name: "Rust", note: "Systems programming, correctness, and performance thinking." },
      { name: "DevOps", note: "Containers, CI/CD, logs, deployment, and reliability." },
      { name: "System design", note: "Making choices that still make sense later." },
    ],
  },
];
