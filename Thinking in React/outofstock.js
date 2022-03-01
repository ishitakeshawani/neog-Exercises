// Render a list of items from an array of objects. In that object, have a field outOfStock: true and depending on true/false grey out the out of stock object. Your component card should have this design built in as an additional class.
// CB link - https://codesandbox.io/s/red-meadow-t0rv08?file=/src/outofstock.js

import React from "react";
import "./styles.css";

export default function OutOfStock() {
  const list = [
    { itemname: "cheez", outofstock: true },
    { itemname: "pizza", outofstock: false },
    { itemname: "burger", outofstock: true },
  ];
  return (
    <div className="app">
      {list.map(({ itemname, outofstock }) => (
        <>
          <div class="card product-card">
            <div class="card-padding">
              <img class="product-img" src="https://picsum.photos/200" alt="" />
              <div class="product-card-title bold-font-weight"> {itemname}</div>
              {outofstock && <div className="outofstock">OutOfStock</div>}
              <div class="card-mrp">
                <span class="gray-color">MRP:</span> ₹599
              </div>
              <div class="rating small-fontsize">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
            <div class="product-card-footer pink-color">
              <i class="far fa-heart card-footer-icon"></i>
              <button class="btn card-btn">Add to Cart</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
