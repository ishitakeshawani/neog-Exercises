// You have a list of items. Each item has an id, a name, and a price. You have to create 2 inputs. One input will take the id, the other will take a price. Use a submit button, to update the price of the id which is provided in the input fields.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/Tenth.js

import { React, useState } from "react";
import { data } from "./data";

export const Tenth = () => {
  const [detail, setDetail] = useState(data);
  const [newPrice, setNewPrice] = useState();
  const [id, setId] = useState();

  const changePrice = (id) => {
    const v = detail.map((product) =>
      Number(id) === Number(product.id)
        ? { ...product, price: newPrice }
        : { ...product }
    );
    setDetail(v);
  };

  return (
    <div>
      <input onChange={(e) => setId(e.target.value)} />
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
