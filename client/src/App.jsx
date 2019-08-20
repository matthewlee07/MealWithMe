import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class RestaurantView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    fetch("http://localhost:3000")
      .then(response => response.json())
      .then(json => {
        this.setState({ restaurants: json });
      });
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

function App() {
  return (
    <div className="App">
      <header className="App-header">Meal With Me</header>
      <main>
        <RestaurantView />
      </main>
    </div>
  );
}

export default App;
