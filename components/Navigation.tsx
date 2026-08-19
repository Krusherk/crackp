"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navItems, type NavId } from "@/data/site";
import { MusicControl } from "@/components/MusicControl";
import { cn } from "@/lib/cn";

const sectionToNav: Record<string, NavId> = {
  life: "life",
  work: "work",
  wows: "wows",
  backpack: "info",
  github: "info",
  camp: "info",
};

export function Navigation() {
  const [active, setActive] = useState<NavId>("life");
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState({ left: 8, width: 86 });

  useEffect(() => {
    const ids = ["life", "work", "wows", "backpack", "github", "camp"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.id;
        setActive(sectionToNav[id] ?? "life");
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = btnRefs.current[active];
    const wrap = wrapRef.current;
    if (!el || !wrap) return;
    const wrapBox = wrap.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    setPill({ left: box.left - wrapBox.left, width: box.width });
  }, [active]);

  return (
    <nav
      aria-label="World"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(1.1rem,env(safe-area-inset-bottom))]"
    >
      <div className="nav-shell pointer-events-auto flex max-w-[min(100%,42rem)] items-center gap-1 rounded-full px-2 py-1.5 pl-2 pr-1.5">
        <div ref={wrapRef} className="relative flex min-w-0 items-center overflow-x-auto">
          <span
            className="nav-pill"
            style={{ left: pill.left, width: pill.width }}
            aria-hidden
          />
          {navItems.map((item) => {
            const isActive = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id === "info" ? "backpack" : item.id}`}
                ref={(node) => {
                  btnRefs.current[item.id] = node;
                }}
                className={cn(
                  "relative z-10 whitespace-nowrap rounded-full px-4 py-2.5 font-[family-name:var(--font-fraunces)] text-[0.95rem] tracking-[-0.01em] transition-colors duration-500",
                  isActive ? "text-[var(--paper)]" : "text-ink/80 hover:text-ink",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <span aria-hidden className="mx-1 h-5 w-px bg-ink/15" />
        <MusicControl />
      </div>
    </nav>
  );
}
