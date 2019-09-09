import React from "react";

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
