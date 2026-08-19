export const site = {
  name: "Harshit",
  fullName: "Harshit Gupta",
  title: "Harshit — Backend & Full-Stack Developer",
  description:
    "Backend-focused full-stack engineer building scalable systems, AI applications, and beautiful digital experiences.",
  email: "harshit@hrsht.me",
  github: "https://github.com/hrshtdotme",
  githubHandle: "hrshtdotme",
  linkedin: "https://www.linkedin.com/in/hrshtdotme",
  x: "https://x.com/hrshtdotme",
  resume: "/resume.pdf",
  url: "https://hrsht.me",
} as const;

export const art = {
  /** Drop your own pixel-art landscape here. PNG or JPG, any size. */
  lifeBg: "/art/world/life-bg.png",
  mountainBg: "/art/world/mountain-bg.jpg",
  campBg: "/art/world/camp-bg.png",
  fallsPortrait: "/art/world/falls-portrait.jpg",
  backpack: "/art/props/backpack.svg",
  campfire: "/art/props/campfire.svg",
  cat: "/art/props/cat.svg",
  plant: "/art/props/plant.svg",
  book: "/art/props/book.svg",
  diamond: "/art/props/diamond.svg",
  script: "/art/props/script.svg",
  sparkle: "/art/fx/sparkle.svg",
  sparklePlus: "/art/fx/sparkle-plus.svg",
  sparkleDiamond: "/art/fx/sparkle-diamond.svg",
  note: "/art/fx/note.svg",
  grain: "/art/fx/grain.png",
} as const;

export const navItems = [
  { id: "life", label: "The Life" },
  { id: "work", label: "The Work" },
  { id: "wows", label: "The Wows" },
  { id: "info", label: "The Info" },
] as const;

export type NavId = (typeof navItems)[number]["id"];
