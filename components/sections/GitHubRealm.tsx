import { repositories } from "@/data/repositories";
import { SectionHeader } from "@/components/SectionHeader";
import { ContributionGraph } from "@/components/github/ContributionGraph";
import { RepositoryCard } from "@/components/github/RepositoryCard";
import { art } from "@/data/site";

export function GitHubRealm() {
  return (
    <section id="github" className="relative overflow-hidden section-pad">
      <img
        src={art.fallsPortrait}
        alt=""
        aria-hidden
        className="pixel parallax-far pointer-events-none absolute -left-20 bottom-0 h-[55vh] w-auto opacity-[0.14] mix-blend-multiply"
      />
      <div className="relative mx-auto max-w-[78rem] px-6 md:px-10 lg:px-16">
        <SectionHeader
          kicker="Another clearing"
          title="GitHub Realm"
          lede="The public notes for Lumma and whatever else leaves camp."
        />

        <div className="glass-paper mt-16 p-6 md:p-10">
          <p className="pixel-label mb-6 text-muted">Contributions</p>
          <ContributionGraph />
        </div>

        <p className="pixel-label mt-20 text-muted">Pinned repositories</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.number} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
