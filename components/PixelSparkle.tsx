import { art } from "@/data/site";
import { cn } from "@/lib/cn";

type SparkleKind = "star" | "plus" | "diamond";

const src: Record<SparkleKind, string> = {
  star: art.sparkle,
  plus: art.sparklePlus,
  diamond: art.sparkleDiamond,
};

export function PixelSparkle({
  kind = "star",
  className,
  delay = "0s",
  size = 9,
}: {
  kind?: SparkleKind;
  className?: string;
  delay?: string;
  size?: number;
}) {
  return (
    <img
      src={src[kind]}
      alt=""
      width={size}
      height={size}
      className={cn("pixel sparkle pointer-events-none select-none", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    />
  );
}
