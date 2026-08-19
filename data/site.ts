export const site = {
  name: "Crack",
  fullName: "Crack",
  title: "Crack — Backend engineer & founder of Lumma",
  description:
    "Backend-focused indie founder. Building Lumma, a stablecoin finance app on Arc Network. Python, Rust, and the quiet work of shipping.",
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
  { id: "life", label: "The Life" },
  { id: "work", label: "The Work" },
  { id: "wows", label: "The Wows" },
  { id: "info", label: "The Info" },
] as const;

export type NavId = (typeof navItems)[number]["id"];
