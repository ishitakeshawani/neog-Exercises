// You have a list of items on the page. Create two buttons to sort them by price, one in asc order, and the other in desc order. 
// **Screenshots**: Initial State, Sorted Asc, Sorted Desc respectively.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/Ninth.js

import { React, useState } from "react";
import { data } from "./data";

export const Ninth = () => {
  const [detail, setDetail] = useState(data);
  const accending = () => {
    const v = [...detail.sort((a, b) => Number(a.price) - Number(b.price))];
    setDetail(v);
  };

  const deccending = () => {
    const v = [...detail.sort((a, b) => b.price - a.price)];
    setDetail(v);
  };

  return (
    <div>
      <button onClick={accending}>accending</button>
      <button onClick={deccending}>decending</button>
      {detail &&
        detail.map((val) => {
          return (
            <div key={val.id}>
              <span>{val.item}</span> - <span>{val.price}</span>
            </div>
          );
        })}
    </div>
  );
};
