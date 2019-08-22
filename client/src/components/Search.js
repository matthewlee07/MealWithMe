import "./Search.css";
import React, { useState } from "react";
import CategoryPicker from "./CategoryPicker";

function handleFormSubmit({ onSetSearch, data }) {
  return e => {
    e.preventDefault();
    onSetSearch(data);
  };
}

export default function Search({ onSetSearch }) {
  const [location, changeLocation] = useState("");
  const [category, chooseCategory] = useState("");

  return (
    <form
      onSubmit={handleFormSubmit({
        onSetSearch,
        data: { location, category }
      })}
    >
      <div className="container center box mt-4">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-test ">Find</span>
            <CategoryPicker chooseCategory={chooseCategory} />
            <span className="input-group-test ">Near</span>
            <input
              onChange={e => changeLocation(e.target.value)}
              type="text"
              name="location"
              className="search-location"
              placeholder="address, neighborhood, city, state or zip"
            />
          </div>
        </div>
      </div>

      <input type="submit" value="Search" hidden />
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
