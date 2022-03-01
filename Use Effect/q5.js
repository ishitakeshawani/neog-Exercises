// Load Data on page render
// CB link - https://codesandbox.io/s/load-products-forked-jed5nv?file=/src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const {
          data: { products }
        } = await axios.get("/api/products");
        setLoader(false);
        setData(products);
        setError("");
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      {loader && <div>Loading..wait please</div>}
      <div style={{ color: "white" }}>{error}</div>
      {data.map((val) => (
        <div className="card product-card" key={val.id}>
          <div className="card-padding">
            <img className="product-img" src={val.image} alt="" />
            <div className="product-card-title bold-font-weight">
              {val.name}
            </div>
            <div className="card-mrp">
              <span className="gray-color">MRP:</span> {val.price}
            </div>
            <div className="rating small-fontsize">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="product-card-footer pink-color">
            <i className="far fa-heart card-footer-icon"></i>
            <button className="btn card-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
