import React, { Fragment } from "react";

export default function PricePicker({ handlePriceButton }) {
  const prices = ["$", "$$", "$$$", "$$$$"];

  const buttons = prices.map(price => (
    <button
      key={price}
      type="submit"
      onClick={e => handlePriceButton(e.target.innerText)}
      className={`price-picker-${price}`}
    >
      {price}
    </button>
  ));
  return <Fragment>{buttons}</Fragment>;
}
