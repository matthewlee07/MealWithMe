import "./Restaurants.css";
import React, { Fragment, useState, useEffect } from "react";
import superagent from "superagent";

export default function Restaurant(props) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants(props).then(setRestaurants);
  }, [props.search]);

  const restaurantsView = restaurants.map((restaurant, index) => (
    <li className="restaurant float-left p-2" key={index}>
      <div className="image-container">
        <img src={restaurant.image_url} />
      </div>
      <span>{restaurant.name}</span>
    </li>
  ));
  return (
    <Fragment>
      <h1>
        The best restaurants in{" "}
        {props.search.location.charAt(0).toUpperCase() +
          props.search.location.slice(1) || "NYC"}
      </h1>
      <ul className="restaurant-container">{restaurantsView}</ul>
    </Fragment>
  );
  // }
}
// https://github.com/visionmedia/superagent
function getRestaurants({ search: { location, category } }) {
  if (location === null || location.length === 0) {
    location = "LA";
  }
  const result = superagent
    .get("http://localhost:3000")
    .query({ location, category })
    .then(res => res.body);
  return result;
}
