"use client";

import { useState } from "react";
import { art } from "@/data/site";
import { technologies } from "@/data/technologies";
import { SectionHeader } from "@/components/SectionHeader";
import { PixelSparkle } from "@/components/PixelSparkle";
import { cn } from "@/lib/cn";

export function BackpackSection() {
  const [active, setActive] = useState<string | null>(null);
  const [category, setCategory] = useState(technologies[0].id);
  const current = technologies.find((c) => c.id === category) ?? technologies[0];
  const hovered = current.items.find((i) => i.name === active);

  return (
    <section id="backpack" className="relative section-pad">
      <div className="mx-auto max-w-[78rem] px-6 md:px-10 lg:px-16">
        <SectionHeader
          kicker="Inventory"
          title="From the Backpack"
          lede="Python and TypeScript in the main pouch. Rust and DevOps still being packed."
        />

        <div className="mt-6 flex items-baseline justify-between gap-6">
          <h3 className="display text-3xl md:text-4xl">My Backpack</h3>
          <p className="pixel-label hidden text-muted sm:block">Open pack · inspect</p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <PixelSparkle className="absolute left-6 top-8" delay="0.6s" />
            <PixelSparkle
              kind="plus"
              className="absolute right-10 top-16"
              delay="1.4s"
              size={5}
            />
            <PixelSparkle
              kind="diamond"
              className="sparkle-blink absolute bottom-24 left-10"
              delay="0.2s"
            />
            <img
              src={art.backpack}
              alt="Pixel-art hiking backpack"
              className={cn(
                "pixel relative z-10 mx-auto w-[min(100%,22rem)] drop-shadow-[0_18px_30px_rgba(39,55,46,0.12)] transition-transform duration-700",
                active && "translate-y-[-4px]",
              )}
            />
            <p className="italic-lede mt-8 text-center text-[1.05rem] text-ink/70">
              {hovered ? hovered.note : current.fieldNote}
            </p>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {technologies.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setCategory(c.id);
                    setActive(null);
                  }}
                  className={cn(
                    "rounded-full px-3 py-1.5 font-[family-name:var(--font-ibm)] text-[0.62rem] uppercase tracking-[0.14em] transition-colors duration-500",
                    c.id === category
                      ? "bg-olive text-[var(--paper)]"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="inventory-page p-6 md:p-8">
              <div className="mb-6 flex items-end justify-between border-b border-[var(--hairline)] pb-4">
                <h4 className="display text-3xl leading-none">{current.label}</h4>
                <span className="pixel-label text-muted">
                  {String(current.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul>
                {current.items.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      className="tech-row flex w-full items-center gap-3 px-2 py-2.5 text-left"
                      onMouseEnter={() => setActive(item.name)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(item.name)}
                      onBlur={() => setActive(null)}
                    >
                      <span
                        className={cn(
                          "inline-block h-1.5 w-1.5 shrink-0",
                          active === item.name ? "bg-peach" : "bg-olive",
                        )}
                      />
                      <span className="font-[family-name:var(--font-ibm)] text-[0.8rem] tracking-[0.08em] text-ink">
                        {item.name}
                      </span>
                      {active === item.name && (
                        <img
                          src={art.sparklePlus}
                          alt=""
                          width={5}
                          height={5}
                          className="pixel ml-auto"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
