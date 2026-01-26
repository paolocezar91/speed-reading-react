"use client";

import { Pause, Play, RotateCcw } from "lucide-react";

export function ReadingControls({
  speed,
  setSpeed,
  reset,
  isPlaying,
  togglePlay,
}: {
  speed: number;
  setSpeed: (value: number) => void;
  reset: () => void;
  isPlaying: boolean;
  togglePlay: () => void;
}) {
  const buttonClass =
    "px-2 flex items-center justify-between gap-2 h-12 font-bold rounded border-1 bg-background cursor-pointer active:bg-foreground active:*:text-background active:text-background hover:bg-foreground hover:*:text-background hover:text-background";

  return (
    <div className="flex flex-col items-center gap-y-4 md:flex-row md:items-start md:justify-around md:w-full pt-8">
      <div className="flex gap-3 items-center">
        <button className={`w-22 ${buttonClass}`} onClick={togglePlay}>
          {isPlaying ? (
            <>
              <Pause /> Pause
            </>
          ) : (
            <>
              <Play /> Play
            </>
          )}
        </button>
        <button className={buttonClass} onClick={reset}>
          <RotateCcw /> Reset
        </button>
      </div>

      <label className="flex flex-col w-fit gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">Speed (WPM):</span>
          <input
            className="border-2 rounded-xl px-2 py-4 w-30 h-8"
            type="number"
            value={speed}
            min={100}
            max={1000}
            step={10}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </div>
        <input
          type="range"
          className="w-full accent-blue-700 cursor-pointer"
          value={speed}
          min={100}
          max={1000}
          step={10}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
