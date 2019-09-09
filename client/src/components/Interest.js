import React, { useState } from "react";
import "./Interest.css";
import Form from "./InterestForm";
import List from "./InterestList";

const initialInterests = [
  {
    min_seats: 4,
    max_seats: 8,
    datetime: "12/12 12:12"
  },
  {
    min_seats: 2,
    max_seats: 4,
    datetime: "1/1/2021 11:12"
  },
  {
    min_seats: 20,
    max_seats: 40,
    datetime: "2/20 20:20"
  }
];

const Interest = () => {
  const [interests, setInterests] = useState(initialInterests);

  return (
    <div className="interest">
      <List interests={interests} />
      <Form />
    </div>
  );
};

export default Interest;
