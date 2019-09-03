import React, { useState, useEffect } from "react";
import "./CategoryPicker.css";
import superagent from "superagent";

function handleCategoryChange(event, categories, setCategory) {
  const category = categories.find(x => x.title === event.target.value);
  if (category !== undefined && category !== null) {
    setCategory(category.alias);
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
        className="category-picker"
        type="text"
        list="categories"
        onChange={event =>
          handleCategoryChange(event, categories, props.setCategory)
        }
        placeholder="French, Japanese..."
      />
      <datalist id="categories">
        {categories.map(category => (
          <option key={category.alias} value={category.title} />
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
