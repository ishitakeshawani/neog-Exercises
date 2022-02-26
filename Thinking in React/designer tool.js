// Let user finalise the size of text she would like on the screen. Two buttons + and - both will increase/decrease size by 8px. Show the size on the screen.
// IDEA You can make a small app around this which quickly selects you between fonts.
// Have prefixed sizes. Multiples of 8px.
// Have some selected best fonts.
// Tell which fonts are good for heading. which are good for text.
// Suggest pair of fonts which go together.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/designertool.js

import { useState } from "react";
import "./styles.css";

export default function DesingerTool() {
  const [fontHeight, setFontHeight] = useState(16);
  const fontHeightlist = [8, 16, 24, 32];
  const [fontStyle, setFontStyle] = useState("'Roboto', sans-serif");
  const fontStyleList = [
    { fontStyle: "'Mali', cursive", suggestedFor: "Header" },
    { fontStyle: "'Patrick Hand', cursive", suggestedFor: "Footer" },
    { fontStyle: "'Shizuru', cursive", suggestedFor: "Body" },
    { fontStyle: "'Roboto', sans-serif", suggestedFor: "Default" }
  ];

  return (
    <div>
      <p style={{ fontSize: fontHeight, fontFamily: fontStyle }}>
        lorem epsum {fontHeight}
      </p>
      &nbsp;
      <button onClick={() => setFontHeight(fontHeight + 8)}>+</button> &nbsp;
      <button onClick={() => setFontHeight(fontHeight - 8)}>
        -
      </button> <br /> <br />
      {fontHeightlist.map((val) => (
        <button onClick={() => setFontHeight(val)}>{val}px</button>
      ))}{" "}
      <br /> <br />
      {fontStyleList.map((val) => (
        <button onClick={() => setFontStyle(val.fontStyle)}>
          {val.suggestedFor}
        </button>
      ))}
    </div>
  );
}
