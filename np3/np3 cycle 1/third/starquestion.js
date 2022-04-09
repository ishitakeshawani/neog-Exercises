// **Problem:** Add Todos on click of submit button. On clicking any of the todos, it has to be marked. i.e -> completed todos become incomplete and vice versa.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/ToDo.js

import { React, useState } from "react";
import uuid from "react-uuid";

export const ToDo = () => {
  const [toDo, setToDo] = useState();
  const [toDoList, setToDoList] = useState([]);

  const addTODo = () => {
    setToDoList([
      ...toDoList,
      {
        toDo: toDo,
        id: uuid(),
        complete: false
      }
    ]);
    setToDo("");
  };

  const completeToDo = (id) => {
    const value = toDoList.map((val) =>
      val.id === id ? { ...val, complete: !val.complete } : { ...val }
    );
    setToDoList(value);
  };

  return (
    <div>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} />
      <button onClick={addTODo}>add</button>
      {toDoList &&
        toDoList.map((val) => {
          return (
            <div
              style={{ textDecoration: val.complete ? "line-through" : "none" }}
              onClick={() => completeToDo(val.id)}
            >
              {val.toDo}
            </div>
          );
        })}
    </div>
  );
};
