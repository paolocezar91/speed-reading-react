"use client";

import { useState } from "react";
import ReadingPane from "./components/reading-pane";
import { TextPane } from "./components/text-pane";

export default function Home() {
  const [phrase, setPhrase] = useState(
    "This book is largely concerned with Hobbits, and from its pages a reader may discover much of their character and a little of their history. Further information will also be found in the selection from the Red Book of Westmarch that has already been published, under the title of The Hobbit. That story was derived from the earlier chapters of the Red Book, composed by Bilbo himself, the first Hobbit to become famous in the world at large, and called by him There and Back Again, since they told of his journey into the East and his return: an adventure which later involved all the Hobbits in the great events of that Age that are here related. Many, however, may wish to know more about this remarkable people from the outset, while some may not possess the earlier book. For such readers a few notes on the more important points are here collected from Hobbit-lore, and the first adventure is briefly recalled.",
  );

  return (
    <div className="flex min-h-screen items-start py-12 justify-center bg-zinc-50 font-sans dark:bg-background gap-4">
      <div className="flex flex-col h-full md:w-150 w-80 mx-auto">
        <div className="w-full mb-4 pb-4 mb-4">
          <p className="text-lg">
            <strong>RSVP (Rapid Serial Visual Presentation)</strong> to help you
            read faster with better comprehension. By eliminating eye movement
            and highlighting the{" "}
            <strong>Optimal Recognition Point (ORP)</strong> of each word, you
            can train your brain to process text more efficiently.
          </p>
        </div>
        <ReadingPane phrase={phrase} />
        <TextPane value={phrase} onChange={setPhrase} />
        <div className="w-full">
          <h1 className="text-2xl bold mb-2 border-b-2">How RSVP Works</h1>
          <ul className="list-decimal pl-6">
            <li>
              Presenting words one at a time in a fixed position, eliminating
              the need for your eyes to move across text
            </li>
            <li>
              Highlighting the Optimal Recognition Point (ORP) of each word
              (typically near 30% of the word length) to guide your focus
            </li>
            <li>
              Training your brain to recognize words quickly without the need
              for saccades (rapid eye movements)
            </li>
            <li>
              Reducing cognitive load by removing the need to track line
              positions and page layout Try adjusting the speed slider to find
              your comfortable reading speed. Most people can comfortably read
              at 300-400 WPM using this technique with a little practice, and
              some can reach speeds of 600-800 WPM with training.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
