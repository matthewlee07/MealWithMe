import React, { useState } from "react";

import "./App.css";
import Restaurant from "./components/Restaurants";
import Search from "./components/Search";

function App(props) {
  const [search, searchChanged] = useState({
    location: "",
    category: ""
  });

  return (
    <div className="App">
      <header className="App-header">Meal With Me</header>
      <main>
        <Search onSearchChanged={searchChanged} />
        <Restaurant search={search} />
      </main>
    </div>
  );
}

export default App;
