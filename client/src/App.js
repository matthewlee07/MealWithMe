import React, { Component } from "react";

import "./App.css";
import Restaurant from "./components/Restaurants";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: ""
    };
  }

  onLocationChanged = searchLocation => {
    this.setState({ searchLocation });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Meal With Me</header>
        <main>
          <Search onLocationChanged={this.onLocationChanged} />
          <Restaurant />
        </main>
      </div>
    );
  }
}

export default App;
