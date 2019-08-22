import React, { useState } from "react";

import "./App.css";
import Restaurant from "./components/Restaurants";
import Search from "./components/Search";

function App(props) {
  const [search, setSearch] = useState({
    location: "",
    category: "",
    price: "",
    rating: "",
    url: "",
    location: ""
  });

  return (
    <div className="App">
      {/* <header className="App-header">Meal With Me</header> */}
      <main>
        <Search onSetSearch={setSearch} />
        <Restaurant search={search} />
      </main>
    </div>
  );
}

export default App;
