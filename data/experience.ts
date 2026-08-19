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
    role: "Resident Hacker",
    guild: "100xDevs Hacker House",
    tenure: "Sep 2025 – Mar 2026",
    place: "Noida",
    notes: [
      "Prototyped and shipped 5+ full-stack products end-to-end — system design, data modeling, CI/CD, observability, and real-user feedback loops.",
      "Engineered a simulated crypto CFD trading engine as an event-driven microservices system through Redis Streams and MongoDB snapshots.",
      "Architected an AI RAG knowledge workspace with worker-based ingestion over Redis Streams, KEDA autoscaling on stream lag, and embeddings in PostgreSQL/pgvector.",
      "Built a real-time collaborative whiteboard with a custom canvas loop, WebSocket rooms, delta-sync, and command-log undo/redo at 60 FPS.",
      "Designed a sandboxed code execution engine with containerized isolation and a job-queue orchestrator for AI code-interpreter workflows.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Redis Streams",
      "Postgres",
      "MongoDB",
      "Qdrant",
      "k3s",
      "KEDA",
    ],
  },
  {
    number: "02",
    role: "Full-Stack Engineer",
    guild: "TripAbhi",
    tenure: "Contract · Sep 2025 – Jan 2026",
    place: "Remote",
    notes: [
      "Took TripAbhi from zero to a working MVP in about three months, owning the organizer dashboard, data model, and deployment pipeline.",
      "Designed a Trip Template + Trip Cohorts model so organizers could manage dozens of departures without duplicating data.",
      "Built a custom database abstraction over Firebase/Firestore to enforce ACID-like transactional guarantees on a NoSQL store.",
    ],
    tech: ["TypeScript", "Firebase", "Next.js", "React Query"],
  },
  {
    number: "03",
    role: "Software Engineer",
    guild: "Yielda",
    href: "https://yielda.co.uk",
    tenure: "Contract · May 2025 – Aug 2025",
    place: "Remote",
    notes: [
      "Joined at idea stage and helped ship the first public website in a few weeks, from Figma-level sketches to a live deploy.",
      "Designed a composable page system so new views and experiments could be assembled from existing blocks.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    number: "04",
    role: "Full-Stack Engineer Intern",
    guild: "Redbird",
    href: "https://redbirdtab.com",
    tenure: "Internship · Dec 2024 – Apr 2025",
    place: "Remote",
    notes: [
      "Acted as sole full-stack maintainer for several months across POS, web, and mobile.",
      "Shipped a POS appointment module with Google Calendar that helped onboard 5 new business clients.",
      "Extended a React + Django REST stack with Tinybird analytics so ops could read daily sales without engineering.",
    ],
    tech: ["Python", "React", "Django REST", "PostgreSQL"],
  },
];
