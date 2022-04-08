// **Problem:** Here is a list of items. Add a remove button for these items. With every click of the remove button, remove one item from the list.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/third.js

import { React, useState } from "react";
import { data } from "./thirddata";

export const Third = () => {
  const [arr, setArr] = useState(data);
  const remove = (id) => {
    const val = arr.filter((product) => product.id !== id);
    console.log(val);
    setArr(val);
  };
  return (
    <div>
      {arr.map((val) => (
        <div>
          {val.item}
          <button onClick={() => remove(val.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};
