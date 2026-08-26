import { art } from "@/data/site";
import { technologies } from "@/data/technologies";
import { SectionHeader } from "@/components/SectionHeader";

export function BackpackSection() {
  return (
    <section id="backpack" className="relative overflow-hidden py-20 md:py-28">
      <img
        src={art.mountainBg}
        alt=""
        className="pixel parallax-far pointer-events-none absolute -right-16 top-12 h-[34vh] w-auto opacity-[0.1] mix-blend-multiply [mask-image:linear-gradient(90deg,transparent,black_24%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[78rem] px-6 md:px-10 lg:px-16">
        <SectionHeader
          kicker="Stack"
          title="Usual Tools"
          lede="Common app stack. Backend first, frontend capable, learning Rust and DevOps in public."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[15rem_1fr]">
          <div className="relative flex items-center justify-center lg:items-start">
            <img
              src={art.backpack}
              alt="Pixel-art hiking backpack"
              className="pixel w-[min(54vw,13rem)] drop-shadow-[0_18px_30px_rgba(39,55,46,0.12)]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((group) => (
              <article
                key={group.id}
                className="border border-[var(--hairline)] bg-white/20 p-5 backdrop-blur-sm"
                style={{ borderRadius: 8 }}
              >
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline)] pb-4">
                  <h3 className="display text-2xl leading-none">{group.label}</h3>
                  <span className="pixel-label text-muted">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span className="stamp bg-[var(--paper)]/70">{item.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/65">
                  {group.fieldNote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
