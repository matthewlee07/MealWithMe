import React from "react";

export default function CategoryPicker(props) {
  return (
    <div>
      <input
        className="search-category"
        type="text"
        list="fruits"
        onChange={e => props.chooseCategory(e.target.value)}
      />
      <datalist id="fruits">
        <option value="Apple" />
        <option value="Orange" />
        <option value="Peach" />
        <option value="Melon" />
        <option value="Strawberry" />
      </datalist>
    </div>
  );
}
