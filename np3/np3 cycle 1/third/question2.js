// **Problem:** Add a new object to the list of cars and display them on the screen.
// Help: You can take the data object from "data.js" file

import { React, useState } from "react";
import { data } from "./sixthdata";

export const Sixth = () => {
  const [carList, setCardList] = useState([]);

  const addData = () => {
    const newObject = data[Math.floor(Math.random() * data.length)];
    const value = [...carList, newObject];
    setCardList(value);
  };

  return (
    <div>
      <button onClick={() => addData()}>add</button>
      {carList &&
        carList.map((val) => {
          return (
            <div>
              <div>{val.brand}</div>
              <div>{val.model}</div>
              <div>{val.make}</div>
            </div>
          );
        })}
    </div>
  );
};
