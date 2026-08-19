"use client";

import { useMemo, useState } from "react";
import {
  contributionDays,
  contributionTotal,
  monthLabels,
  type DayCell,
} from "@/data/contributions";
import { formatDay, plural } from "@/lib/format";

export function ContributionGraph() {
  const [tip, setTip] = useState<{ cell: DayCell; x: number; y: number } | null>(null);

  const weeks = useMemo(() => {
    const startPad = new Date(`${contributionDays[0].date}T00:00:00Z`).getUTCDay();
    const padded: Array<DayCell | null> = [
      ...Array.from({ length: startPad }, () => null),
      ...contributionDays,
    ];
    const cols: Array<Array<DayCell | null>> = [];
    for (let i = 0; i < padded.length; i += 7) {
      cols.push(padded.slice(i, i + 7));
    }
    return cols;
  }, []);

  return (
    <div className="relative">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <p className="italic-lede text-lg">
          {contributionTotal.toLocaleString()} contributions in the last year
        </p>
        <a
          href="https://github.com/hrshtdotme"
          className="mono text-[0.62rem] text-olive hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          @hrshtdotme
        </a>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="mb-2 flex gap-[3px] pl-6 font-[family-name:var(--font-ibm)] text-[9px] uppercase tracking-[0.14em] text-muted">
          {monthLabels.map((m, i) => (
            <span key={`${m}-${i}`} className="flex-1 min-w-[2.2rem]">
              {m}
            </span>
          ))}
        </div>
        <div className="flex gap-[3px]">
          <div className="flex flex-col justify-between py-0.5 font-[family-name:var(--font-ibm)] text-[8px] uppercase tracking-widest text-muted">
            <span />
            <span>M</span>
            <span />
            <span>W</span>
            <span />
            <span>F</span>
            <span />
          </div>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => {
                const cell = week[di] ?? null;
                if (!cell) {
                  return <span key={di} className="contrib-cell opacity-0" />;
                }
                return (
                  <button
                    key={cell.date}
                    type="button"
                    className="contrib-cell"
                    data-level={cell.level}
                    aria-label={`${plural(cell.count, "contribution")} on ${formatDay(cell.date)}`}
                    onMouseEnter={(e) => {
                      const r = e.currentTarget.getBoundingClientRect();
                      setTip({ cell, x: r.left + r.width / 2, y: r.top });
                    }}
                    onMouseLeave={() => setTip(null)}
                    onFocus={(e) => {
                      const r = e.currentTarget.getBoundingClientRect();
                      setTip({ cell, x: r.left + r.width / 2, y: r.top });
                    }}
                    onBlur={() => setTip(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 font-[family-name:var(--font-ibm)] text-[9px] uppercase tracking-[0.16em] text-muted">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((lvl) => (
          <span key={lvl} className="contrib-cell" data-level={lvl} />
        ))}
        <span>More</span>
      </div>

      {tip && (
        <div
          role="tooltip"
          className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-[120%] rounded-sm border border-[var(--hairline)] bg-[var(--paper)] px-3 py-2 shadow-[0_8px_24px_rgba(39,55,46,0.12)]"
          style={{ left: tip.x, top: tip.y }}
        >
          <p className="font-[family-name:var(--font-ibm)] text-[10px] tracking-[0.08em] text-ink">
            {plural(tip.cell.count, "contribution")}
          </p>
          <p className="mt-0.5 font-[family-name:var(--font-ibm)] text-[9px] uppercase tracking-[0.14em] text-muted">
            {formatDay(tip.cell.date)}
          </p>
        </div>
      )}
    </div>
  );
}
