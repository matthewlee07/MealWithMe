import React, { Fragment, useState, useEffect } from "react";
import "./Restaurants.css";
import superagent from "superagent";
import Interest from "./Interest";

function renderRestaurantCategories(restaurant) {
  const categories = restaurant.category || [];
  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <li className="category" key={index}>
          {category.title || "?Category"}
        </li>
      ))}
    </ul>
  );
}

function renderRestaurantAddress(restaurant) {
  const location = restaurant.location || {
    address: "?Address",
    zip_code: "?Zip Code"
  };
  return (
    <li className="address">
      {location.address1}. {location.zip_code}
    </li>
  );
}

export default function Restaurant({ search }) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants(search).then(setRestaurants);
  }, [search]);

  const restaurantsView = restaurants.map((restaurant, index) => (
    <li className="restaurant-container" key={index}>
      <img src={restaurant.image_url} alt={restaurant.name} className="image" />
      <ul className="restaurant-information">
        <li className="name">{restaurant.name || "?Name"}</li>
        <ol>
          <li className="rating">{restaurant.rating || "?Rating"}/5 </li>
          <li className="review_count">
            in {restaurant.review_count || "?Number of"} reviews
          </li>
        </ol>
        <ol>
          <li className="price">{restaurant.price || "?Price"}</li>
          <span>.</span>
          {renderRestaurantCategories(restaurant)}
        </ol>
        {renderRestaurantAddress(restaurant)}
      </ul>
      <Interest
        YELP_ID={restaurants[index].id}
        initialInterests={restaurants[index].interests}
      />
    </li>
  ));

  return (
    <Fragment>
      <h1 className="title">
        Popular Restaurants in {search.location || "NYC"}
      </h1>
      <ul>{restaurantsView}</ul>
    </Fragment>
  );
}

const isPresent = value => value !== null && value.length > 0;

function getRestaurants({ location, category, price }) {
  if (!isPresent(location)) {
    location = "NYC";
  }
  const query = { location };
  if (isPresent(price)) {
    query["price"] = price;
  }
  if (isPresent(category)) {
    query["category"] = category;
  }
  const result = superagent
    .get("http://localhost:3000")
    .query(query)
    .then(res => res.body);
  return result;
}
