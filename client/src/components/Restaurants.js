import React, { Fragment, useState, useEffect } from "react";
import "./Restaurants.css";
import superagent from "superagent";

export default function Restaurant(props) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants(props).then(setRestaurants);
  }, [props.search]);

  const restaurantsView = restaurants.map((restaurant, index) => (
    <li className="restaurant-container" key={index}>
      <img src={restaurant.image_url} alt={restaurant.name} className="image" />
      <ul className="restaurant-information">
        <li className="name">{restaurant.name || "?Name"}</li>
        <ol>
          <li className="rating">{restaurant.rating || "?Rating"}/5</li>
          <li className="review_count">
            in {restaurant.review_count || "?Number of"} reviews
          </li>
        </ol>
        <ol>
          <li className="price">{restaurant.price || "?Price"}</li>
          <span>.</span>
          <ul className="categories">
            {restaurant.category.map((category, index) => (
              <li className="category" key={index}>
                {category.title || "?Category"}
              </li>
            ))}
          </ul>
        </ol>
        <li className="address">
          {restaurant.location.address1 || "?Address"}.{" "}
          {restaurant.location.zip_code || "?Zip Code"}
        </li>
      </ul>
    </li>
  ));

  return (
    <Fragment>
      <h1 className="title">
        Popular Restaurants in {props.search.location || "NYC"}
      </h1>
      <ul>{restaurantsView}</ul>
    </Fragment>
  );
}

function getRestaurants({ search: { location, category } }) {
  if (location === null || location.length === 0) {
    location = "NYC";
  }
  const result = superagent
    .get("http://localhost:3000")
    .query({ location, category })
    .then(res => res.body);
  return result;
}
