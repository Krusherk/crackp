import { art, site } from "@/data/site";
import { PixelSparkle } from "@/components/PixelSparkle";

const contacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: `@${site.githubHandle}`, href: site.github },
  { label: "X", value: `@${site.xHandle}`, href: site.x },
  { label: "Lumma", value: "lumma.xyz", href: site.lumma },
];

export function CampSection() {
  return (
    <section id="camp" className="relative isolate overflow-hidden text-[var(--paper)]">
      <img
        src={art.campBg}
        alt="A pixel-art night campsite with a fire and tent"
        className="pixel absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,18,0.28),rgba(15,22,18,0.45))]" />

      <PixelSparkle className="absolute left-[18%] top-[22%]" delay="0.3s" />
      <PixelSparkle kind="plus" className="absolute right-[22%] top-[30%]" delay="1.1s" size={5} />
      <PixelSparkle
        kind="diamond"
        className="sparkle-blink absolute right-[30%] top-[16%]"
        delay="0.8s"
      />

      <div className="relative z-10 mx-auto max-w-[78rem] px-6 pb-40 pt-28 md:px-10 md:pb-44 md:pt-36 lg:px-16">
        <p className="pixel-label text-paper/70">Save point</p>
        <h2 className="display mt-5 text-[clamp(3.4rem,8vw,7.2rem)]">Rest at the Camp</h2>
        <p className="italic-lede mt-6 max-w-lg text-[1.3rem] text-paper/85">
          Let&apos;s build something beautiful together. Reach out.
        </p>

        <div className="mt-16 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <dl className="grid max-w-xl gap-6 sm:grid-cols-2">
            {contacts.map((c) => (
              <div key={c.label} className="border-t border-white/20 pt-4">
                <dt className="pixel-label text-paper/55">{c.label}</dt>
                <dd className="mt-2">
                  <a
                    href={c.href}
                    className="font-[family-name:var(--font-fraunces)] text-xl italic text-paper transition-opacity hover:opacity-80"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="relative flex flex-col items-center">
            <img
              src={art.campfire}
              alt=""
              className="pixel h-40 w-40 animate-[fire-pulse_3.6s_ease-in-out_infinite]"
              style={{ filter: "drop-shadow(0 0 18px rgba(240,97,4,0.45))" }}
            />
            <p className="pixel-label mt-3 text-paper/60">Campfire</p>
            {site.resume ? (
              <a
                href={site.resume}
                className="mt-8 rounded-full border border-white/30 px-5 py-2 font-[family-name:var(--font-ibm)] text-[0.65rem] uppercase tracking-[0.18em] text-paper/90 transition-colors hover:bg-white/10"
              >
                View Resume
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-24 font-[family-name:var(--font-ibm)] text-[0.62rem] uppercase tracking-[0.18em] text-paper/45">
          Designed & built from scratch · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
