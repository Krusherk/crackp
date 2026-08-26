"use client";

import { useEffect, useRef, useState } from "react";

const TRACK_SRC = "/audio/ssstik.io_1787785115484.mp3";

export function MusicControl() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => stop();
  }, []);

  function stop() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  }

  async function start() {
    const audio = audioRef.current ?? new Audio(TRACK_SRC);
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.55;
    await audio.play();
  }

  async function toggle() {
    if (on) {
      stop();
      setOn(false);
      return;
    }
    try {
      await start();
      setOn(true);
    } catch {
      setOn(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Pause music" : "Play music"}
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
