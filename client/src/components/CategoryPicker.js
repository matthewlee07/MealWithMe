import React, { useState, useEffect } from "react";
import superagent from "superagent";

export default function CategoryPicker(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div>
      <input
        className="search-category"
        type="text"
        list="fruits"
        onChange={e => props.chooseCategory(e.target.value)}
        placeholder="French, Japanese..."
      />
      <datalist id="fruits">
        {categories.map(cat => (
          <option key={cat.alias} value={cat.title} />
        ))}
      </datalist>
    </div>
  );
}

function getCategories() {
  const result = superagent
    .get("http://localhost:3000/categories")
    .then(res => res.body);
  return result;
}
