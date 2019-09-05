import React from "react";
import "./PricePicker.css";
function handlePriceButton() {
  console.log("clicked");
}

export default function PricePicker() {
  return (
    <div className="price-picker">
      <button onClick={handlePriceButton} className="price-1">
        $
      </button>
      <button onClick={handlePriceButton} className="price-2">
        $$
      </button>
      <button onClick={handlePriceButton} className="price-3">
        $$$
      </button>
      <button onClick={handlePriceButton} className="price-4">
        $$$$
      </button>
    </div>
  );
  // pass button component $, $$, $$$, $$$$
}
