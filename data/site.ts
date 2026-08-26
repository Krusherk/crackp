export const site = {
  name: "Crack",
  fullName: "Crack",
  title: "Crack — Backend engineer",
  description:
    "Backend-focused builder working with Python, TypeScript, Rust, and practical product systems.",
  email: "qowiyy@lumma.xyz",
  github: "https://github.com/Krusherk",
  githubHandle: "Krusherk",
  linkedin: "",
  x: "https://x.com/0xqowiyy",
  xHandle: "0xqowiyy",
  lumma: "https://lumma.xyz",
  lummaX: "https://x.com/lummaxyz",
  resume: "",
  url: "https://crack.is-a.dev",
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
  { id: "life", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export type NavId = (typeof navItems)[number]["id"];
