import { art } from "@/data/site";
import { PixelSparkle } from "@/components/PixelSparkle";

const paths = [
  { n: "01", href: "#life", title: "The Life", hint: "Where the camp is pitched." },
  { n: "02", href: "#work", title: "The Work", hint: "Artifacts from the trail." },
  { n: "03", href: "#wows", title: "The Wows", hint: "You should check this out." },
];

export function LifeSection() {
  return (
    <section
      id="life"
      className="relative isolate min-h-[100svh] overflow-hidden text-[var(--paper)]"
    >
      <div className="absolute inset-[-4%] life-scene">
        <img
          src={art.lifeBg}
          alt="Pixel-art waterfall hidden in a forest gorge"
          className="pixel h-full w-full object-cover"
        />
      </div>
      <div className="world-vignette absolute inset-0" />

      <PixelSparkle className="absolute left-[12%] top-[18%]" delay="0.4s" />
      <PixelSparkle kind="plus" className="absolute right-[18%] top-[28%]" delay="1.2s" size={5} />
      <PixelSparkle
        kind="diamond"
        className="sparkle-blink absolute right-[10%] top-[14%]"
        delay="0.2s"
        size={7}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[78rem] flex-col justify-between px-6 pb-32 pt-16 md:px-10 lg:px-16">
        <div className="max-w-xl reveal">
          <p className="pixel-label text-paper/70">Save point · 00</p>
          <h1 className="display mt-6 text-[clamp(3.2rem,8vw,7.2rem)] text-paper">
            Hi, I&apos;m Harshit
          </h1>
          <p className="italic-lede mt-5 text-[1.2rem] text-paper/85 md:text-[1.45rem]">
            A backend-focused full-stack developer.
          </p>
        </div>

        <div className="reveal reveal-d2">
          <div className="mb-8 flex items-center gap-5">
            <span className="h-px flex-1 bg-paper/25" />
            <p className="pixel-label text-paper/75">Choose your path</p>
            <span className="h-px flex-1 bg-paper/25" />
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {paths.map((p) => (
              <a
                key={p.n}
                href={p.href}
                className="path-card glass-world group relative flex min-h-[20rem] flex-col overflow-hidden p-6 md:min-h-[24rem] md:p-8"
              >
                <div
                  className="path-bg pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `url(${art.lifeBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    imageRendering: "pixelated",
                    filter: "saturate(0.7)",
                  }}
                />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="pixel-label text-paper/80">{p.n}</span>
                  <span className="path-arrow display text-2xl leading-none text-paper">→</span>
                </div>
                <p className="relative z-10 mt-auto max-w-[12rem] text-sm italic text-paper/70">
                  {p.hint}
                </p>
                <h2 className="path-title display relative z-10 mt-3 self-end text-[clamp(2rem,3.4vw,3.1rem)] text-paper">
                  {p.title}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
