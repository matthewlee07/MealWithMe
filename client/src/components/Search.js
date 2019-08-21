import React, { useState } from "react";

function handleFormSubmit({ onLocationChanged, location }) {
  return e => {
    e.preventDefault();
    onLocationChanged(location);
  };
}

export default function Search(props) {
  const [location, changeLocation] = useState("");

  return (
    <form onSubmit={handleFormSubmit({ ...props, location })}>
      <h1>Search location</h1>
      <input
        onChange={e => changeLocation(e.target.value)}
        type="text"
        name="location"
        className="search-location"
      />
    </form>
  );
}

// Currying
// function add(number1, number2) {
//   return number1 + number2;
// }

// function addC(number1) {
//   return number2 => number1 + number2;
// }
// add(1,2)
// addC(1,2)

// Class
// constructor(props, context) {
//     super(props, context);
//     this.state = {
//       location: ""
//     };
//   }
//   changeLocation = location => {
//     this.setState({ location });
//   };
// VS Hooks
// // const [location, changeLocation] = useState("");
