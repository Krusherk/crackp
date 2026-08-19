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
    name: "lumma",
    subtitle: "Stablecoin finance on Arc",
    description:
      "The public camp for Lumma — bridge, swap, balances, payroll, and yield, built native to Arc with USDC as gas.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/Krusherk/lumma",
    variant: "preview",
    icon: "book",
  },
];
