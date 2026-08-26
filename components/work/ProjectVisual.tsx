import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

export function ProjectVisual({
  visual,
  title,
}: {
  visual: Project["visual"];
  title: string;
}) {
  return (
    <div className={cn("visual relative h-full min-h-[16rem] overflow-hidden", tones[visual])}>
      <div className="absolute inset-0 opacity-40" style={grid} />
      {visual === "rag" && <RagSketch />}
      {visual === "trading" && <TradeSketch />}
      {visual === "canvas" && <CanvasSketch />}
      {visual === "agent" && <AgentSketch />}
      {visual === "sandbox" && <SandboxSketch />}
      {visual === "index" && <IndexSketch />}
      <span className="pixel-label absolute bottom-4 left-4 text-[0.6rem] text-paper/70">
        {title}
      </span>
    </div>
  );
}

const tones: Record<Project["visual"], string> = {
  rag: "bg-[#2a3a2e]",
  trading: "bg-[#1f2a24]",
  canvas: "bg-[#3a342c]",
  agent: "bg-[#2e3340]",
  sandbox: "bg-[#243028]",
  index: "bg-[#35362b]",
};

const grid = {
  backgroundImage:
    "linear-gradient(rgba(243,243,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243,243,233,0.06) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

function RagSketch() {
  return (
    <div className="absolute inset-8 flex flex-col gap-3 font-[family-name:var(--font-ibm)] text-[10px] tracking-wider text-paper/80">
      <span className="text-peach">PORTFOLIO · PIXEL UI</span>
      <div className="h-px w-2/3 bg-paper/20" />
      {["hero.tsx", "work-card.tsx", "stack-panel.tsx"].map((f, i) => (
        <div key={f} className="flex items-center gap-3" style={{ opacity: 1 - i * 0.18 }}>
          <span className="inline-block h-1.5 w-1.5 bg-olive" />
          <span>{f}</span>
          <span className="ml-auto text-paper/40">→ page</span>
        </div>
      ))}
      <div className="mt-auto max-w-[16rem] rounded-sm border border-white/15 p-3 text-[11px] leading-relaxed text-paper/70">
        fast scan, clear links, no resume wall
      </div>
    </div>
  );
}

function TradeSketch() {
  const bars = [40, 62, 48, 80, 55, 70, 44, 90, 60, 75];
  return (
    <div className="absolute inset-0 flex items-end gap-1.5 px-8 pb-10">
      {bars.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            background: i % 3 === 0 ? "#e7a283" : "rgba(243,243,233,0.28)",
          }}
        />
      ))}
      <span className="absolute left-8 top-8 font-[family-name:var(--font-ibm)] text-[10px] tracking-[0.2em] text-paper/60">
        BALANCE · SEND · SWAP
      </span>
    </div>
  );
}

function CanvasSketch() {
  return (
    <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" aria-hidden>
      <path
        d="M40 160 C 90 40, 140 200, 200 90 S 320 40, 360 150"
        fill="none"
        stroke="#e7a283"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 80 L 180 70 L 170 180"
        fill="none"
        stroke="rgba(243,243,233,0.45)"
        strokeWidth="2"
      />
      <circle cx="200" cy="90" r="6" fill="#f3f3e9" />
    </svg>
  );
}

function AgentSketch() {
  return (
    <div className="absolute inset-8 space-y-3 font-[family-name:var(--font-ibm)] text-[10px] tracking-wider text-paper/75">
      <div className="ml-auto w-2/3 rounded-sm bg-white/10 p-3">where is my order?</div>
      <div className="w-3/4 rounded-sm border border-white/15 p-3">
        tracking · order_lookup
        <div className="mt-2 text-peach">shipped · 2 days out</div>
      </div>
      <div className="w-1/2 rounded-sm bg-white/10 p-3">thanks —</div>
    </div>
  );
}

function SandboxSketch() {
  return (
    <div className="absolute inset-8 grid grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-sm border border-white/15 p-3 font-[family-name:var(--font-ibm)] text-[9px] tracking-widest text-paper/60"
        >
          <div className="mb-2 h-1.5 w-1.5 rounded-full bg-olive" />
          BOX {String(i + 1).padStart(2, "0")}
          <div className="mt-3 h-8 border border-dashed border-white/20" />
        </div>
      ))}
    </div>
  );
}

function IndexSketch() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-40 w-28">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-sm border border-white/20 bg-[#f3f3e9]/10"
            style={{ transform: `translate(${i * 10}px, ${-i * 8}px)` }}
          />
        ))}
      </div>
    </div>
  );
}
