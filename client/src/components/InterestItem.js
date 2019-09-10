import React from "react";

const InterestItem = ({ interest }) => {
  const { minSeats, maxSeats, datetime } = interest;
  return (
    <li className="interest-item">
      <span>{minSeats}</span> / <span>{maxSeats}</span> seats on
      <span>{datetime}</span>
      <button type="submit" className="submit">
        Join
      </button>
    </li>
  );
};

export default InterestItem;
