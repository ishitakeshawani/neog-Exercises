// **Problem:**  Filter list of items using price
// Take 2 inputs from the user. A lower price, and an upper price. List only the products which fall in between the lower and upper price range.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/fourth.js

import { React, useState } from "react";
import { data } from "./fourthdata";

export const Fourth = () => {
  const [lowerLimit, setLowerLimit] = useState();
  const [upperLimit, setUpperLimit] = useState();
  return (
    <div>
      <p>lower limit</p>
      <input onChange={(e) => setLowerLimit(e.target.value)} />
      <p>upper limit</p>
      <input onChange={(e) => setUpperLimit(e.target.value)} />
      {lowerLimit} {upperLimit}
      {data
        .filter(
          (product) =>
            product.price >= lowerLimit && product.price <= upperLimit
        )
        .map((val) => (
          <div>
            {val.item} - {val.price}
          </div>
        ))}
    </div>
  );
};
