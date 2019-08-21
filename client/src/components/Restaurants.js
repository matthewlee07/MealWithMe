import React, { Component, Fragment } from "react";
import superagent from "superagent";

export default class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    getRestaurants(this.props).then(restaurants =>
      this.setState({ restaurants })
    );
  }
  componentWillReceiveProps(newProps) {
    if (this.props.searchLocation !== newProps.searchLocation) {
      getRestaurants(newProps).then(restaurants =>
        this.setState({ restaurants })
      );
    }
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
// https://github.com/visionmedia/superagent
function getRestaurants({ searchLocation }) {
  if (searchLocation === null || searchLocation.length === 0) {
    searchLocation = "LA";
  }
  const result = superagent
    .get("http://localhost:3000")
    .query({ location: searchLocation })
    .then(res => res.body);
  return result;
}
