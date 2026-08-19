export type Wow = {
  mark: string;
  label: string;
  body: string;
};

export const wows: Wow[] = [
  {
    mark: "21",
    label: "Hours",
    body: "Built Biscuit from idea to a working RAG system — ingest, retrieve, and talk — before the next sunrise.",
  },
  {
    mark: "k3s",
    label: "Single VM",
    body: "Scaled ingestion workloads on one machine, treating a lone VM like a careful little cluster.",
  },
  {
    mark: "KEDA",
    label: "Autoscaling",
    body: "Event-driven scale from Redis stream lag, so workers wake only when the river is full.",
  },
  {
    mark: "low",
    label: "Latency",
    body: "Designed real-time trading infrastructure with streams, snapshots, and a matching path that stays quiet under load.",
  },
  {
    mark: "AI",
    label: "Systems",
    body: "Several production-style AI applications: agents, RAG, tool-runners, and sandboxed interpreters.",
  },
];

export const sideQuests = [
  "Started an IoT self-driving car that used accelerometer input as the primary control surface, treating phone motion as the steering wheel.",
  "Co-founded a college IoT Club and served as Vice President, running sessions on microcontrollers and teaching hardware simulation with Wokwi.",
  "Built a C++ rehab game that tracks a face and turns guided neck and back movements into play, then wrote a paper on the approach.",
  "Served as a Coding Hero mentor, delivering a session on DSA strategy — how to approach problems without getting lost in the woods.",
];

export const questRewards = [
  "All India Rank 2,852 of 39,210 in GATE under the Data Science and Artificial Intelligence paper.",
  "Won $200 in the 100xDevs CTF, spinning up 35 VMs to brute-force a hardened API and capture the final flag.",
  "Awarded ₹3,000 by Hitesh Choudhary (Chai & Code) for the most-attended DSA strategy session.",
];
