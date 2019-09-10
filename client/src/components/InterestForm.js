import React from "react";

const InterestForm = ({
  YELP_ID,
  minSeats,
  handleMinSeats,
  maxSeats,
  handleMaxSeats,
  datetime,
  handleDatetime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="interest-form">
      {/* <span>{YELP_ID}</span> */}
      {/* <select>
        {Array.from({ length: 11 }).map((opt, i) => (
          <option
            key={i}
          >
            {i + 2}
          </option>
        ))}
      </select> */}
      <div className="interest-input-seats">
        <input
          type="number"
          name="minSeats"
          placeholder="2"
          value={minSeats}
          onChange={handleMinSeats}
        />
        <span> to </span>
        <input
          type="number"
          name="maxSeats"
          placeholder="10"
          value={maxSeats}
          onChange={handleMaxSeats}
        />
        <span> seats. </span>
      </div>
      <div className="interest-input-datetime">
        <span>On </span>
        <input
          type="string"
          name="datetime"
          placeholder="12/12 12:12"
          value={datetime}
          onChange={handleDatetime}
        />
      </div>
      {/* TODO: change to dropdown, 2-12 people, use a calendar library */}
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default InterestForm;
