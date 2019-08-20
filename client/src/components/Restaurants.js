import React, { Component } from "react";

export default class RestaurantView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    getRestaurants().then(restaurants => this.setState({ restaurants }));
  }
  render() {
    const restaurants = this.state.restaurants.map((restaurant, index) => (
      <li className="restaurant" key={index}>
        <span>{restaurant.name}</span>
        <img src={restaurant.image_url} />
      </li>
    ));
    // //debugger;
    return <ul>{restaurants}</ul>;
  }
}

function getRestaurants() {
  return fetch("http://localhost:3000").then(response => response.json());
}
