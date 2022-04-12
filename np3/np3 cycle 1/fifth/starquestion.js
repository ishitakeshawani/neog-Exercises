// Make a dropdown of the product’s names instead of taking input. 😃
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/Tenth.js

import { React, useState } from "react";
import { data } from "./data";

export const Tenth = () => {
  const [detail, setDetail] = useState(data);
  const [newPrice, setNewPrice] = useState();
  const [id, setId] = useState(data[0].item);

  const changePrice = (id) => {
    const v = detail.map((product) =>
      id === product.item ? { ...product, price: newPrice } : { ...product }
    );
    setDetail(v);
  };

  return (
    <div>
      <select onChange={(e) => setId(e.target.value)} value={id}>
        {detail.map((v) => (
          <option key={v.id} value={v.item}>
            {v.item}
          </option>
        ))}
      </select>
      <input onChange={(e) => setNewPrice(e.target.value)} />
      <button onClick={() => changePrice(id)}>submit</button>
      {detail.map((val) => {
        return (
          <div key={val.id}>
            <span>{val.item}</span> {"=>"} <span>{val.price}</span>
          </div>
        );
      })}
    </div>
  );
};
