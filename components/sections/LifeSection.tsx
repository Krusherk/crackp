import { art } from "@/data/site";
import { PixelSparkle } from "@/components/PixelSparkle";

const paths = [
  { href: "#work", title: "Open Work" },
  { href: "#backpack", title: "Read Stack" },
  { href: "#camp", title: "Contact" },
];

const status = ["Lumma", "Python", "TypeScript", "Rust next"];

export function LifeSection() {
  return (
    <section
      id="life"
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#16304a] text-[var(--paper)]"
    >
      <div className="absolute inset-[-4%] life-scene">
        <img
          src={art.lifeBg}
          alt="Pixel-art waterfall hidden in a forest gorge"
          className="pixel h-full w-full object-cover"
        />
      </div>
      <div className="world-vignette absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/35 via-black/10 to-transparent md:h-40 md:from-black/20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 bg-gradient-to-b from-transparent to-[var(--paper)] md:h-16" />

      <PixelSparkle className="absolute left-[12%] top-[18%]" delay="0.4s" />
      <PixelSparkle kind="plus" className="absolute right-[18%] top-[28%]" delay="1.2s" size={5} />
      <PixelSparkle
        kind="diamond"
        className="sparkle-blink absolute right-[10%] top-[14%]"
        delay="0.2s"
        size={7}
      />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[78rem] content-center gap-10 px-6 py-24 md:px-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-16">
        <div className="reveal max-w-3xl">
          <p className="pixel-label text-paper/80">Portfolio · save file 01</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(4rem,10vw,8.5rem)] text-paper [text-shadow:0_2px_24px_rgba(10,20,16,0.45)]">
            Crack builds backend things.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.15rem] leading-relaxed text-paper/90 md:text-[1.35rem] [text-shadow:0_1px_12px_rgba(10,20,16,0.4)]">
            Currently working on Lumma, writing mostly Python and TypeScript, and getting better at Rust, deploys, and the parts of software users never see.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {paths.map((p) => (
              <a key={p.title} href={p.href} className="hero-link">
                {p.title}
                <span aria-hidden>→</span>
              </a>
            ))}
          </div>
        </div>

        <aside className="glass-world reveal reveal-d2 relative overflow-hidden p-5 text-paper lg:self-end">
          <img
            src={art.book}
            alt=""
            className="pixel absolute right-5 top-5 h-14 w-14 opacity-85"
            aria-hidden
          />
          <p className="pixel-label text-paper/65">Now</p>
          <ul className="mt-16 space-y-3">
            {status.map((item) => (
              <li key={item} className="flex items-center gap-3 border-t border-white/15 pt-3">
                <span className="h-2 w-2 bg-peach" />
                <span className="text-[1.05rem] text-paper/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-paper/70">
            Short site. Real links. No essay wall.
          </p>
        </aside>
      </div>
    </section>
  );
}
