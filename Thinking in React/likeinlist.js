// Render a list
// Every item in the list should have a like button.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/likeinlist.js

import { React, useState } from "react";
import "./styles.css";

export default function LikeInList() {
  var list = ["first", "second", "third", "fourth"];
  return (
    <div className="todoitem">
      {list.map((val) => (
        <div>
          <p>{val}</p>
          <i class="fas fa-heart"></i>
        </div>
      ))}
    </div>
    
  );
}

