import React, { Fragment, useState, useEffect } from "react";
import superagent from "superagent";

export default function Restaurant(props) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants(props).then(setRestaurants);
  }, [props.search]);

  const restaurantsView = restaurants.map((restaurant, index) => (
    <li className="restaurant" key={index}>
      <span>{restaurant.name}</span>
      <img src={restaurant.image_url} />
    </li>
  ));
  return (
    <Fragment>
      <h1>The best restaurants in {props.search.location}</h1>
      <ul>{restaurantsView}</ul>
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
