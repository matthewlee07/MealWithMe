import React from "react";

import "./App.css";
import RestaurantView from "./components/Restaurants";

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
