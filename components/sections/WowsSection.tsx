import { questRewards, sideQuests, wows } from "@/data/achievements";
import { SectionHeader } from "@/components/SectionHeader";
import { PixelSparkle } from "@/components/PixelSparkle";

export function WowsSection() {
  return (
    <section id="wows" className="relative section-pad">
      <div className="mx-auto max-w-[78rem] px-6 md:px-10 lg:px-16">
        <div className="relative">
          <PixelSparkle className="absolute -left-4 -top-8" />
          <SectionHeader
            kicker="Level 03"
            title="The Wows"
            lede="Not trophies. The choices that still feel like the point of the trip."
          />
        </div>

        <div className="mt-24 grid gap-y-20 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
          {wows.map((w, i) => (
            <article
              key={w.label}
              className={i === 0 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <p className="display text-[clamp(4.2rem,10vw,8rem)] leading-[0.8] tracking-[-0.04em] text-olive">
                {w.mark}
              </p>
              <p className="pixel-label mt-5 text-muted">{w.label}</p>
              <p className="italic-lede mt-4 max-w-sm text-[1.15rem] leading-relaxed">
                {w.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-36 grid gap-20 md:grid-cols-2">
          <div>
            <p className="pixel-label text-muted">Side quests</p>
            <h3 className="display mt-4 text-4xl md:text-5xl">Detours</h3>
            <ul className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/70">
              {sideQuests.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-peach" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="pixel-label text-muted">Quest rewards</p>
            <h3 className="display mt-4 text-4xl md:text-5xl">Marks</h3>
            <ul className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/70">
              {questRewards.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-olive" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
