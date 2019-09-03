import React, { useState } from "react";
import "./App.css";
import Restaurant from "./components/Restaurants";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState({
    location: "",
    category: "",
    price: "",
    rating: "",
    review_count: "",
    url: ""
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal With Me</h1>
      </header>
      <main>
        <span className="search">
          <Search onSetSearch={setSearch} />
        </span>
        <Restaurant search={search} />
      </main>
    </div>
  );
}

export default App;
