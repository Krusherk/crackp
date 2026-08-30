import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectArtifact } from "@/components/work/ProjectArtifact";
import { art } from "@/data/site";

export function WorkSection() {
  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32">
      <img
        src={art.mountainBg}
        alt=""
        className="pixel parallax-far pointer-events-none absolute -right-10 top-24 h-[62vh] w-auto opacity-[0.22] mix-blend-multiply [mask-image:linear-gradient(90deg,transparent,black_18%)]"
        aria-hidden
      />
      <img
        src={art.book}
        alt=""
        className="pixel parallax-mid pointer-events-none absolute left-6 top-32 hidden h-24 w-24 opacity-70 drop-shadow-[0_18px_28px_rgba(39,55,46,0.12)] md:block lg:left-16"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[78rem] px-6 md:px-10 lg:px-16">
        <SectionHeader
          kicker="Current build"
          title="Lumma"
          lede="The only project I am putting up front right now. Better one real build than five placeholder cards."
        />

        <div className="mt-14">
          {projects.map((project) => (
            <ProjectArtifact key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
