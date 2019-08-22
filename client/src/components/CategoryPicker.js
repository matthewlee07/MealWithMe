import React, { useState, useEffect } from "react";
import superagent from "superagent";

function handleCategoryChange(event, categories, chooseCategory) {
  const category = categories.find(x => x.title === event.target.value);
  if (category !== undefined && category !== null) {
    chooseCategory(category.alias);
  }
}

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
        onChange={event =>
          handleCategoryChange(event, categories, props.chooseCategory)
        }
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
