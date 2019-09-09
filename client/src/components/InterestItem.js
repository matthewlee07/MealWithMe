import React from "react";
import "./InterestItem.css";

const InterestItem = ({ interest }) => {
  const { min_seats, max_seats, datetime } = interest;
  return (
    <li className="interest-item">
      <span>{datetime}</span>
      <div>
        <span>{min_seats}</span> out of <span>{max_seats}</span> seats
      </div>
    </li>
  );
};

export default InterestItem;
