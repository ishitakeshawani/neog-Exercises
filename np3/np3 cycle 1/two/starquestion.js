// Extension of question 02 - after removing an item, show a "undo remove" button. On clicking this button, add back the item that was removed and hide this "undo remove" button.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/third.js

import { React, useState } from "react";
import { data } from "./thirddata";

export const Third = () => {
  const [arr, setArr] = useState(data);
  const [_id, set_Id] = useState(1);
  const [product, setProduct] = useState();
  const remove = (id) => {
    const removedProduct = arr.filter((product) => product.id === id);
    setProduct(removedProduct);
    const val = arr.filter((product) => product.id !== id);
    setArr(val);
  };
  const add = () => {
    const val = [...arr, product[0]];
    setArr(val);
  };
  const removeHandler = (id) => {
    remove(id);
    set_Id(id);
  };

  const isRemoved = (id) => {
    return arr.some((pro) => pro.id === id);
  };
  return (
    <div>
      {arr.map((val) => (
        <div>
          {val.item}
          <button onClick={() => removeHandler(val.id)}>remove</button>
        </div>
      ))}
      {!isRemoved(_id) && <button onClick={() => add()}>undo remove</button>}
    </div>
  );
};
