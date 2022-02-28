// Write a TODO app
// Add TODOs from input
// Clicking on a TODO should complete it using strikethrough
// Clicking again should remove the strikethrough.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/todo.js

import { React, useState } from "react";
import "./styles.css";

export default function Todo() {
  var [toDoList, settoDoList] = useState([
    { inputText: "hi", complete: false }
  ]);
  var [inputText, setInputText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    settoDoList((prev) => [...prev, { inputText, complete: false }]);
    setInputText("");
  }

  function completeToDo(index, complete) {
    const todos = [...toDoList];
    todos[index].complete = !complete;
    settoDoList(todos);
  }

  return (
    <div className="flex-col">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter todo here"
          value={inputText}
          required
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          add todo
        </button>
      </form>
      <ul>
        {toDoList.map((val, index) => (
          <ToDoItem
            key={index}
            inputText={val.inputText}
            index={index}
            complete={val.complete}
            completeToDo={completeToDo}
          />
        ))}
      </ul>
    </div>
  );
}

function ToDoItem({ inputText, index, completeToDo, complete }) {
  return (
    <div className="todoitem">
      <p style={{ textDecoration: complete ? "line-through" : "" }}>
        {inputText}
      </p>
      <i
        className="far fa-check-circle"
        onClick={() => {
          completeToDo(index, complete);
        }}
      ></i>
    </div>
  );
}
