import React, { useState, useEffect } from "react";
import "./Interest.css";
import Form from "./InterestForm";
import List from "./InterestList";
import superagent from "superagent";

const Interest = ({ YELP_ID, initialInterests }) => {
  const [interests, setInterests] = useState(initialInterests);
  const [clientInterests, setClientInterests] = useState([]);
  const [min_seats, setMin_seats] = useState(2);
  const [max_seats, setMax_seats] = useState(12);
  const [datetime, setDatetime] = useState("");

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
    setMin_seats("");
    setMax_seats("");
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
