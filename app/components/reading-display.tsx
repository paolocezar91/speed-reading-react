import { useCallback, useMemo } from "react";

export default function ReadingDisplay({
  phraseAsArray,
  currentWordIdx,
}: {
  phraseAsArray: string[];
  currentWordIdx: number;
}) {
  // Highlight middle letter in red, center it in a fixed-width, monospace container
  // Find the max word length in the phrase for centering
  const maxWordLength = useMemo(() => {
    return phraseAsArray.reduce((max, w) => Math.max(max, w.length), 0);
  }, [phraseAsArray]);

  const renderWord = useCallback(
    (word: string) => {
      if (!word) return null;
      const len = word.length;
      const mid = Math.floor((len - 1) / 2);
      // Pad word so that the highlighted letter is always at the center of the max length
      const totalSlots = maxWordLength;
      const centerIdx = Math.floor((totalSlots - 1) / 2);
      const leftPad = Math.max(centerIdx - mid, 0);
      const rightPad = Math.max(totalSlots - (leftPad + len), 0);
      const padded = [
        ...Array(leftPad).fill(" "),
        ...word.split("").map((char, i) => ({ char, isMid: i === mid })),
        ...Array(rightPad).fill(" "),
      ];

      return (
        <span
          className="inline-flex justify-center items-center w-full h-full font-mono text-3xl tracking-widest"
          style={{ minWidth: `${maxWordLength}ch` }}
        >
          {padded.map((item, i) =>
            typeof item === "string" ? (
              <span key={i} className="opacity-0 select-none">
                _
              </span>
            ) : item.isMid ? (
              <span key={i} className="text-blue-700 font-bold">
                {item.char}
              </span>
            ) : (
              <span key={i}>{item.char}</span>
            ),
          )}
        </span>
      );
    },
    [maxWordLength],
  );

  return (
    <div className="border-1 border-solid border-foreground border-2 rounded flex gap-8 items-center p-4">
      <div className="relative w-full flex justify-center items-center h-50 bg-background text-foreground p-12 select-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {renderWord(phraseAsArray[currentWordIdx])}
        </div>
      </div>
    </div>
  );
}
