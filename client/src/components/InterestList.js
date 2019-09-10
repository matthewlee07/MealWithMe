import React from "react";
import Item from "./InterestItem";

const InterestList = ({ interests }) => {
  return (
    <>
      <ul className="interest-list">
        {interests.map((interest, index) => {
          return <Item key={index} interest={interest} />;
        })}
      </ul>
    </>
  );
};

export default InterestList;
