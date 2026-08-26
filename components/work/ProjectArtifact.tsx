import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { cn } from "@/lib/cn";

export function ProjectArtifact({ project }: { project: Project }) {
  const isFull = project.layout === "full";
  const isWide = project.layout === "wide" || isFull;

  return (
    <article
      className={cn(
        "group grid items-end gap-8 md:gap-12",
        isWide ? "md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" : "grid-cols-1",
        project.layout === "wide" && "md:grid-cols-[1.1fr_0.9fr]",
      )}
    >
      <div className={cn(isWide && "md:pb-6", project.layout === "wide" && "md:order-2")}>
        <p className="pixel-label text-muted">{project.number}</p>
        <h3 className="display mt-4 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92] tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="italic-lede mt-2 text-xl">{project.subtitle}</p>
        <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
          {project.description}
        </p>
        <ul className="mt-5 space-y-1">
          {project.highlights.map((h) => (
            <li key={h} className="mono text-[0.62rem] text-olive">
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="stamp">
              {t}
            </span>
          ))}
        </div>
        {(project.github || project.live) && (
          <div className="mt-7 flex flex-wrap gap-6 font-[family-name:var(--font-ibm)] text-[0.68rem] uppercase tracking-[0.16em]">
            {project.github && (
              <a
                href={project.github}
                className="text-ink/70 transition-colors hover:text-olive"
                target="_blank"
                rel="noreferrer"
              >
                Repository →
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="text-ink/70 transition-colors hover:text-olive"
                target="_blank"
                rel="noreferrer"
              >
                Live site →
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className={cn(
          "artifact-photo",
          isFull ? "min-h-[22rem] md:min-h-[28rem]" : "min-h-[16rem] md:min-h-[20rem]",
        )}
      >
        <ProjectVisual visual={project.visual} title={project.title} />
        <PixelCorners />
      </div>
    </article>
  );
}

function PixelCorners() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-3">
      <i className="absolute left-0 top-0 h-2 w-2 border-l border-t border-white/50" />
      <i className="absolute right-0 top-0 h-2 w-2 border-r border-t border-white/50" />
      <i className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/50" />
      <i className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/50" />
    </span>
  );
}
