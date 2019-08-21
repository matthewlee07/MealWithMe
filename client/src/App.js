import React from "react";

import "./App.css";
import Restaurant from "./components/Restaurants";

function App() {
  return (
    <div className="App">
      <header className="App-header">Meal With Me</header>
      <main>
        <Restaurant />
      </main>
    </div>
  );
}

export default App;
