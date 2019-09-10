import React, { useState, useEffect } from "react";
import "./Interest.css";
import Form from "./InterestForm";
import List from "./InterestList";
import superagent from "superagent";

const initialInterests = localStorage.getItem("interests")
  ? JSON.parse(localStorage.getItem("interests"))
  : [];

const Interest = ({ YELP_ID }) => {
  const [interests, setInterests] = useState(initialInterests);
  const [clientInterests, setClientInterests] = useState([]);
  const [minSeats, setMinSeats] = useState(2);
  const [maxSeats, setMaxSeats] = useState(12);
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    if (clientInterests.length > 0) {
      superagent
        .post(`http://localhost:3000/${YELP_ID}/interests`)
        .send(clientInterests)
        .then(res => {
          setInterests(res.body);
          setClientInterests([]);
        });
    }
  }, [clientInterests]);

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

    setClientInterests([...clientInterests, singleInterest]);
    setMinSeats("");
    setMaxSeats("");
    setDatetime("");
  };

  const allInterests = interests.concat(clientInterests);
  return (
    <div className="wrap-collapsible interest-container">
      <input id={YELP_ID} className="toggle" type="checkbox" />
      <label htmlFor={YELP_ID} className="lbl-toggle">
        Meal With Me
      </label>
      <div className="collapsible-content">
        <List interests={allInterests} />
        <Form
          // YELP_ID={YELP_ID}
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
