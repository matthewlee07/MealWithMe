import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InterestForm = ({
  // YELP_ID,
  min_seats,
  handleMin_seats,
  max_seats,
  handleMax_seats,
  datetime,
  handleDatetime,
  handleSubmit
}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form onSubmit={handleSubmit} className="interest-form">
      {/* <span>{YELP_ID}</span> */}
      <div className="interest-input-seats">
        <select
          className="select-min_seats"
          name="min_seats"
          value={min_seats}
          onChange={handleMin_seats}
        >
          {/* how to map over an array to omit this stupidness? and set default to X value */}
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span> to </span>
        <select
          className="select-max_seats"
          name="max_seats"
          value={max_seats}
          onChange={handleMax_seats}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span> seats. </span>
      </div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        name="datetime"
        value={datetime}
      />
      {/* <div className="interest-input-datetime">
        <span>On </span>
        <input
          type="string"
          name="datetime"
          placeholder="12/12 12:12"
          value={datetime}
          onChange={handleDatetime}
        />
      </div> */}
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default InterestForm;
