"use client";

import { useEffect, useRef, useState } from "react";
import { art } from "@/data/site";

export function MusicControl() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; sources: AudioScheduledSourceNode[] } | null>(
    null,
  );

  useEffect(() => {
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stop() {
    const bundle = nodesRef.current;
    if (bundle) {
      bundle.gain.gain.setTargetAtTime(0, bundle.gain.context.currentTime, 0.08);
      window.setTimeout(() => {
        bundle.sources.forEach((s) => {
          try {
            s.stop();
          } catch {
            /* already stopped */
          }
        });
      }, 400);
      nodesRef.current = null;
    }
  }

  async function start() {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = ctxRef.current ?? new Ctx();
    ctxRef.current = ctx;
    if (ctx.state === "suspended") await ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.035;
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(master);

    const oscA = ctx.createOscillator();
    oscA.type = "sine";
    oscA.frequency.value = 110;
    const oscB = ctx.createOscillator();
    oscB.type = "sine";
    oscB.frequency.value = 164.8;
    const oscGain = ctx.createGain();
    oscGain.gain.value = 0.012;
    oscA.connect(oscGain);
    oscB.connect(oscGain);
    oscGain.connect(master);

    noise.start();
    oscA.start();
    oscB.start();
    master.gain.setTargetAtTime(1, ctx.currentTime, 0.6);
    nodesRef.current = { gain: master, sources: [noise, oscA, oscB] };
  }

  async function toggle() {
    if (on) {
      stop();
      setOn(false);
      return;
    }
    await start();
    setOn(true);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Mute camp ambience" : "Play camp ambience"}
      className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-transform duration-160 ease-out hover:bg-[rgba(82,101,42,0.08)] active:scale-[0.97]"
    >
      <img src={art.note} alt="" width={14} height={14} className="pixel" />
      {!on && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-3 right-2 w-px rotate-[-32deg] bg-ink/50"
        />
      )}
    </button>
  );
}
