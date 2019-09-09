import React from "react";

const InterestForm = ({
  minSeats,
  handleMinSeats,
  maxSeats,
  handleMaxSeats,
  datetime,
  handleDatetime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
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
      <span> seats. On </span>
      <input
        type="string"
        name="datetime"
        placeholder="12/12 12:12"
        value={datetime}
        onChange={handleDatetime}
      />
      <hr />
      <p>change to dropdown, 2-12 people, use a calendar library</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InterestForm;
