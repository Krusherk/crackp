import { projects } from "@/data/projects";
import { quests } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectArtifact } from "@/components/work/ProjectArtifact";
import { art } from "@/data/site";

export function WorkSection() {
  const featured = projects.filter((p) => p.layout !== "compact");
  const rest = projects.filter((p) => p.layout === "compact");

  return (
    <section id="work" className="relative overflow-hidden section-pad">
      <img
        src={art.mountainBg}
        alt=""
        className="pixel parallax-far pointer-events-none absolute -right-24 top-0 h-[70vh] w-auto opacity-[0.18] mix-blend-multiply"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[78rem] px-6 md:px-10 lg:px-16">
        <SectionHeader
          kicker="Field note · 01"
          title="Build Log"
          lede="A selection of some of my finest projects."
        />

        <div className="mt-24 space-y-28 md:mt-32 md:space-y-36">
          {featured.map((project) => (
            <ProjectArtifact key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-28 grid gap-16 md:mt-36 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
          {rest.map((project) => (
            <ProjectArtifact key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-36 md:mt-48">
          <SectionHeader
            kicker="Guilds"
            title="Quest Log"
            lede="My work experience and previous guild affiliations."
          />

          <ol className="mt-20 space-y-20">
            {quests.map((q) => (
              <li
                key={q.number}
                className="grid gap-8 border-t border-[var(--hairline)] pt-10 md:grid-cols-[7rem_1fr]"
              >
                <p className="pixel-label text-muted">{q.number}</p>
                <div>
                  <h3 className="display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.05]">
                    {q.role}
                    <span className="italic-lede text-[0.72em] text-ink-soft">
                      {" "}
                      @{" "}
                      {q.href ? (
                        <a href={q.href} className="underline decoration-hairline underline-offset-4">
                          {q.guild}
                        </a>
                      ) : (
                        q.guild
                      )}
                    </span>
                  </h3>
                  <p className="mono mt-3 text-[0.62rem]">
                    {q.tenure} · {q.place}
                  </p>
                  <ul className="mt-6 max-w-2xl space-y-3 text-[1.02rem] leading-relaxed text-ink-soft">
                    {q.notes.map((n) => (
                      <li key={n} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-olive" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {q.tech.map((t) => (
                      <span key={t} className="stamp">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
