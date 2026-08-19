import type { Repository } from "@/data/repositories";
import { art } from "@/data/site";
import { cn } from "@/lib/cn";

const icons: Record<NonNullable<Repository["icon"]>, string> = {
  backpack: art.backpack,
  campfire: art.campfire,
  diamond: art.diamond,
  book: art.book,
  script: art.script,
  plant: art.plant,
};

export function RepositoryCard({ repo }: { repo: Repository }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex min-h-[17rem] flex-col border border-[var(--hairline)] p-6 transition-[transform,background] duration-500 md:p-8",
        "hover:-translate-y-0.5 hover:bg-white/25",
        repo.variant === "preview" && "md:col-span-2",
      )}
      style={{ borderRadius: repo.variant === "plain" ? 24 : 28 }}
    >
      <div className="flex items-start justify-between">
        <span className="pixel-label text-muted">{repo.number}</span>
        {repo.icon && (
          <img
            src={icons[repo.icon]}
            alt=""
            className="pixel h-12 w-12 opacity-80 transition-transform duration-500 group-hover:translate-x-0.5"
          />
        )}
      </div>

      <h3 className="display mt-8 text-[2rem] leading-[0.95] md:text-[2.4rem]">{repo.name}</h3>
      <p className="italic-lede mt-1 text-lg">{repo.subtitle}</p>
      <p className="mt-4 max-w-prose text-[0.98rem] leading-relaxed text-ink/70">
        {repo.description}
      </p>

      <div className="mt-auto flex items-end justify-between pt-8 font-[family-name:var(--font-ibm)] text-[0.62rem] uppercase tracking-[0.16em] text-muted">
        <span>{repo.language}</span>
        <span className="transition-transform duration-500 group-hover:translate-x-0.5">
          ★ {repo.stars}
        </span>
      </div>
    </a>
  );
}
