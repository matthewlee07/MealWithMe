import React, { useState } from "react";
import "./Search.css";
import CategoryPicker from "./CategoryPicker";
import PricePicker from "./PricePicker";

function handleFormSubmit({ onSetSearch, data }) {
  return e => {
    e.preventDefault();
    onSetSearch(data);
  };
}

export default function Search({ onSetSearch }) {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form
      onSubmit={handleFormSubmit({
        onSetSearch,
        data: { location, category }
      })}
    >
      <div className="search-container">
        <div className="primary-search">
          <span className="input">Find</span>
          <CategoryPicker setCategory={setCategory} />
          <span className="input">Near</span>
          <input
            type="text"
            className="location"
            onChange={e => setLocation(e.target.value)}
            name="location"
            placeholder="address, neighborhood, city, state or zip"
          />
        </div>
        <div className="secondary-search">
          {/* <PricePicker setPrice={setPrice} /> */}
        </div>
      </div>

      <input type="submit" value="search" hidden />
    </form>
  );
}
