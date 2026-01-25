"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { ReadingControls } from "./reading-controls";
import ReadingDisplay from "./reading-display";
type Status = "playing" | "paused";

export default function ReadingPane({ phrase }: { phrase: string }) {
  // `speed` is words-per-minute (WPM)
  const [speed, setSpeed] = useState(300);
  const [status, setStatus] = useState<Status>("paused");
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const phraseAsArray = useMemo(() => phrase.split(" "), [phrase]);

  // Convert words-per-minute (WPM) to ms per word.
  // msPerWord = 60_000ms / WPM. Clamp to a reasonable minimum.
  const speedToMs = useCallback(
    (wpm: number) => Math.max(40, Math.round(60000 / wpm)),
    [],
  );

  useEffect(() => {
    if (status === "paused" || currentWordIdx >= phraseAsArray.length - 1)
      return;
    const timeout = setTimeout(() => {
      setCurrentWordIdx((idx) =>
        idx < phraseAsArray.length - 1 ? idx + 1 : idx,
      );
    }, speedToMs(speed));
    return () => clearTimeout(timeout);
  }, [currentWordIdx, speed, phraseAsArray.length, status, speedToMs]);

  return (
    <div className="mb-4 border-b-2 pb-8 mb-8">
      <ReadingDisplay
        phraseAsArray={phraseAsArray}
        currentWordIdx={currentWordIdx}
      />
      <ReadingControls
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={status === "playing"}
        togglePlay={() =>
          setStatus((prev) => (prev === "playing" ? "paused" : "playing"))
        }
        reset={() => {
          setStatus("paused");
          setCurrentWordIdx(0);
        }}
      />
    </div>
  );
}
