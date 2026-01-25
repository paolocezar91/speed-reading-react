"use client";

import { useMemo } from "react";

export function TextPane({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const wordCount = useMemo(() => value.split(" ").length, [value]);

  return (
    <div className="flex flex-col items-end w-full mb-8">
      <label className="flex flex-col w-full" htmlFor="text">
        <span className="text-base font-bold">Your text:</span>
        <textarea
          id="text"
          className="w-full h-full min-h-50 border-2 rounded p-4 font-mono"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      <span>Total {wordCount} word(s)</span>
    </div>
  );
}
