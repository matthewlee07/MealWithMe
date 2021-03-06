import React, { useState } from "react";
import "./App.css";
import Restaurant from "./components/Restaurants";
import Search from "./components/Search";
import Notes from "./components/Notes";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const userId = localStorage.getItem("userId");
if (userId === null) {
  const newId = uuidv4();
  localStorage.setItem("userId", newId);
}

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
        <section className="project-name">
          <h1>Meal With Me</h1>
          <h5 className="cta">Feast With New Friends</h5>
        </section>
        <section>
          <p>insert gif of using app...</p>
          <h3>Join an existing party or start your own!</h3>
        </section>
      </header>
      <main>
        <span className="search">
          <Search onSetSearch={setSearch} />
        </span>
        <Restaurant search={search} />
      </main>
      <footer>
        <Notes />
      </footer>
    </div>
  );
}

export default App;
