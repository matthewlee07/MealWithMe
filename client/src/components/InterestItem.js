import React from "react";

const InterestItem = ({ interest }) => {
  const { minSeats, maxSeats, datetime } = interest;
  return (
    <li className="interest-item">
      <span>
        {minSeats} - {maxSeats} seats
      </span>
      <span> {datetime}</span>
      <button type="submit" className="submit join">
        Join
      </button>
    </li>
  );
};

export default InterestItem;
