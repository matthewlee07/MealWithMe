import React from "react";
import "./InterestItem.css";

const InterestItem = ({ interest }) => {
  const { minSeats, maxSeats, datetime } = interest;
  return (
    <li className="interest-item">
      <span>{datetime}</span>
      <div>
        <span>{minSeats}</span> out of <span>{maxSeats}</span> seats
      </div>
    </li>
  );
};

export default InterestItem;
