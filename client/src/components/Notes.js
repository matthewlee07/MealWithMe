import React from "react";

export default function Notes() {
  return (
    <ul className="notes">
      <li>
        Interest list seems dependent on userID, doesn't allow for other users
        (via incognito) to add onto interest list
      </li>
      <li>if user is joined on interest list, changes to "leave"</li>
      <li>
        interest list should only shows next 3 upcoming dates. paginate for more
        dates
      </li>
      <li>interest list should update min/max seats</li>
      <li>100% seats taken should remove join option for interest list</li>
      <li>pagination for more restaurants</li>
      <li>search Yelp via keyword ie McDonald's</li>
      <li>cache nyc restaurants... loading is forever</li>
      <li>spinner for waiting on API response</li>
      <li>click on $$$ should stay color, not disappear</li>
      <li>double click $$$ filter should clear price filter</li>
      <li>handleError for invalid Category</li>
      <li>handle empty restaurant return</li>
    </ul>
  );
}
