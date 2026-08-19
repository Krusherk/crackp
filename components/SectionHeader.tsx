import { cn } from "@/lib/cn";

export function SectionHeader({
  kicker,
  title,
  lede,
  align = "left",
  invert = false,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  align?: "left" | "center" | "right";
  invert?: boolean;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
      )}
    >
      {kicker && (
        <p className={cn("pixel-label mb-6", invert ? "text-paper/70" : "text-muted")}>
          {kicker}
        </p>
      )}
      <h2
        className={cn(
          "display text-[clamp(3.4rem,8vw,7.5rem)]",
          invert ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "italic-lede mt-6 max-w-xl text-[1.2rem] leading-relaxed md:text-[1.35rem]",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            invert ? "text-paper/80" : "text-ink-soft",
          )}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
