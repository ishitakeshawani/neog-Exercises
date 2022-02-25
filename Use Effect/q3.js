// There's a working wishlist in this. However, the wishlist is not saved after it is updated. Use useEffect() and localStorage API to save this data to localStorage.
// Add a console log as well to print data updated every time this effect is run.
// CB link - https://codesandbox.io/s/wishlist-exercise-forked-iizv30?file=/src/App.jsx

import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles.css";

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
    console.log("data updated");
  }, [wishList]);

  useEffect(() => {
    console.log(localStorage.getItem("wishlist"));
  }, [wishList]);

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">wishing well</h1>
      <div className="app-body">
        <WishList />
      </div>
    </div>
  );
}

