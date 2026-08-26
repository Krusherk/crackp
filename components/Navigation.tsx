"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navItems, type NavId } from "@/data/site";
import { MusicControl } from "@/components/MusicControl";
import { cn } from "@/lib/cn";

const sectionToNav: Record<string, NavId> = {
  life: "life",
  work: "work",
  backpack: "stack",
  camp: "contact",
};

const navTargets: Record<NavId, string> = {
  life: "life",
  work: "work",
  stack: "backpack",
  contact: "camp",
};

export function Navigation() {
  const [active, setActive] = useState<NavId>("life");
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState({ left: 8, width: 86 });

  useEffect(() => {
    const ids = ["life", "work", "backpack", "camp"];
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
      aria-label="Portfolio"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(1.1rem,env(safe-area-inset-bottom))]"
    >
      <div className="nav-shell pointer-events-auto flex w-full max-w-[min(100%,42rem)] items-center gap-1 rounded-full px-1.5 py-1.5 sm:px-2">
        <div ref={wrapRef} className="relative flex min-w-0 flex-1 items-center overflow-x-auto">
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
                href={`#${navTargets[item.id]}`}
                ref={(node) => {
                  btnRefs.current[item.id] = node;
                }}
                className={cn(
                  "relative z-10 whitespace-nowrap rounded-full px-3 py-2 font-[family-name:var(--font-fraunces)] text-[0.88rem] tracking-[-0.01em] transition-colors duration-500 sm:px-4 sm:py-2.5 sm:text-[0.95rem]",
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
