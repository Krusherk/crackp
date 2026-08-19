"use client";

import { useEffect, useRef, useState } from "react";
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
      <svg
        width="14"
        height="14"
        viewBox="0 0 12 12"
        className="pixel"
        aria-hidden
        shapeRendering="crispEdges"
      >
        <rect x="8" y="1" width="2" height="6" fill="currentColor" />
        <rect x="7" y="2" width="1" height="1" fill="currentColor" />
        <rect x="6" y="3" width="1" height="1" fill="currentColor" />
        <rect x="3" y="7" width="4" height="3" fill="currentColor" />
        <rect x="2" y="8" width="1" height="2" fill="currentColor" />
      </svg>
      {!on && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[14px] w-px -translate-x-1/2 -translate-y-1/2 rotate-[-32deg] bg-current"
        />
      )}
    </button>
  );
}
