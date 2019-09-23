import React, { useState, useEffect } from "react";
import "./Interest.css";
import Form from "./InterestForm";
import List from "./InterestList";
import superagent from "superagent";

const DEFAULT_MIN_SEAT = "2";
const DEFAULT_MAX_SEAT = "2";
const DEFAULT_DATE = new Date().toISOString();

const Interest = ({ YELP_ID, initialInterests }) => {
  const [interests, setInterests] = useState(initialInterests || []);
  const [clientInterests, setClientInterests] = useState([]);
  const [min_seats, setMin_seats] = useState(DEFAULT_MIN_SEAT);
  const [max_seats, setMax_seats] = useState(DEFAULT_MAX_SEAT);
  const [datetime, setDatetime] = useState(DEFAULT_DATE);

  useEffect(() => {
    if (clientInterests.length > 0) {
      superagent
        .post(`http://localhost:3000/interests`)
        .send({
          yelp_id: YELP_ID,
          interests: clientInterests
        })
        .then(res => {
          setInterests(res.body);
        })
        .finally(() => {
          setClientInterests([]);
        });
    }
  }, [clientInterests]);

  const handleMin_seats = e => {
    setMin_seats(e.target.value);
  };
  const handleMax_seats = e => {
    setMax_seats(e.target.value);
  };
  const handleDatetime = e => {
    setDatetime(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const singleInterest = {
      min_seats,
      max_seats,
      datetime
    };

    setClientInterests([...clientInterests, singleInterest]);
    setMin_seats(DEFAULT_MIN_SEAT);
    setMax_seats(DEFAULT_MAX_SEAT);
    setDatetime(DEFAULT_DATE);
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
          min_seats={min_seats}
          handleMin_seats={handleMin_seats}
          max_seats={max_seats}
          handleMax_seats={handleMax_seats}
          datetime={datetime}
          handleDatetime={handleDatetime}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Interest;
