import { art, site } from "@/data/site";
import { PixelSparkle } from "@/components/PixelSparkle";

const contacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: `@${site.githubHandle}`, href: site.github },
  { label: "X", value: `@${site.xHandle}`, href: site.x },
  { label: "Project", value: "lumma.xyz", href: site.lumma },
];

export function CampSection() {
  return (
    <section id="camp" className="relative isolate min-h-[82dvh] overflow-hidden text-[var(--paper)]">
      <img
        src={art.lifeBg}
        alt="Pixel-art waterfall hidden in a forest gorge"
        className="pixel absolute inset-0 h-full w-full object-cover"
      />
      <div className="world-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,18,0.48),rgba(6,12,18,0.68))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--paper)] to-transparent" />

      <PixelSparkle className="absolute left-[18%] top-[22%]" delay="0.3s" />
      <PixelSparkle kind="plus" className="absolute right-[22%] top-[30%]" delay="1.1s" size={5} />
      <PixelSparkle
        kind="diamond"
        className="sparkle-blink absolute right-[30%] top-[16%]"
        delay="0.8s"
      />

      <div className="relative z-10 mx-auto flex min-h-[82dvh] max-w-[78rem] flex-col justify-center px-6 py-28 md:px-10 lg:px-16">
        <p className="pixel-label text-paper/70">Contact</p>
        <h2 className="display mt-5 text-[clamp(3.4rem,8vw,7.2rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
          Say Hi
        </h2>
        <p className="italic-lede mt-6 max-w-lg text-[1.3rem] text-paper/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
          For backend work, product ideas, or something weird that needs to ship clean.
        </p>

        <div className="mt-14 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <dl className="grid max-w-2xl gap-5 sm:grid-cols-2">
            {contacts.map((c) => (
              <div key={c.label} className="border-t border-white/20 pt-4">
                <dt className="pixel-label text-paper/55">{c.label}</dt>
                <dd className="mt-2">
                  <a
                    href={c.href}
                    className="font-[family-name:var(--font-pixel)] text-xl text-paper underline decoration-white/20 underline-offset-4 transition-opacity hover:opacity-80"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="relative flex flex-col items-center sm:items-start lg:items-center">
            <img
              src={art.campfire}
              alt=""
              className="pixel h-28 w-28 animate-[fire-pulse_3.6s_ease-in-out_infinite] lg:h-36 lg:w-36"
              style={{ filter: "drop-shadow(0 0 22px rgba(240,97,4,0.55))" }}
            />
            <p className="pixel-label mt-3 text-paper/70">Online</p>
            {site.resume ? (
              <a
                href={site.resume}
                className="mt-8 rounded-full border border-white/30 px-5 py-2 font-[family-name:var(--font-pixel)] text-[0.8rem] uppercase text-paper/90 transition-colors hover:bg-white/10"
              >
                View Resume
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-16 font-[family-name:var(--font-pixel)] text-[0.72rem] uppercase text-paper/55">
          Crack · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
