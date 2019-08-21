import React, { Component, Fragment } from "react";

export default class Restaurant extends Component {
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
    return (
      <Fragment>
        <h1>The best restaurants in {this.props.searchLocation}</h1>
        <ul>{restaurants}</ul>
      </Fragment>
    );
  }
}
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function getRestaurants() {
  return fetch("http://localhost:3000").then(response => response.json());
}