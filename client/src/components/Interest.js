import React, { useState, useEffect } from "react";
import "./Interest.css";
import Form from "./InterestForm";
import List from "./InterestList";

const initialInterests = localStorage.getItem("interests")
  ? JSON.parse(localStorage.getItem("interests"))
  : [];

const Interest = ({ YELP_ID }) => {
  const [interests, setInterests] = useState(initialInterests);
  const [minSeats, setMinSeats] = useState(2);
  const [maxSeats, setMaxSeats] = useState(12);
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    localStorage.setItem("interests", JSON.stringify(interests));
  }, [interests]);

  const handleMinSeats = e => {
    setMinSeats(e.target.value);
  };
  const handleMaxSeats = e => {
    setMaxSeats(e.target.value);
  };
  const handleDatetime = e => {
    setDatetime(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const singleInterest = {
      minSeats,
      maxSeats,
      datetime
    };

    setInterests([...interests, singleInterest]);
    setMinSeats("");
    setMaxSeats("");
    setDatetime("");
  };

  return (
    <div className="wrap-collapsible interest-container">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="lbl-toggle">
        Meal With Me
      </label>
      <div className="collapsible-content">
        <List interests={interests} />
        <Form
          YELP_ID={YELP_ID}
          minSeats={minSeats}
          handleMinSeats={handleMinSeats}
          maxSeats={maxSeats}
          handleMaxSeats={handleMaxSeats}
          datetime={datetime}
          handleDatetime={handleDatetime}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Interest;
