import React from "react";

const InterestItem = ({ interest }) => {
  const { min_seats, max_seats, datetime } = interest;
  return (
    <li className="interest-item">
      <span>
        {min_seats} - {max_seats} seats
      </span>
      <span> {datetime}</span>
      <button type="submit" className="submit join">
        Join
      </button>
    </li>
  );
};

export default InterestItem;
