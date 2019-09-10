import React from "react";

export default function Notes() {
  return (
    <ul className="notes">
      <li>if user is joined on interest list, changes to "leave"</li>
      <li>
        interest list only shows next 3 upcoming dates. paginate for more dates
      </li>
      <li>pagination for more restaurants</li>
      <li>search Yelp via keyword ie McDonald's</li>
      <li>
        homepage should be by existing interest lists, not by popular on yelp
      </li>
      <li>join/leave should have number of people option</li>
      <li>cache restaurants... loading is forever</li>
      <li>spinner for waiting on API response</li>
      <li>double click $$$ filter should clear price filter</li>
      <li>handleError for invalid Category</li>
      <li>handle empty restaurant return</li>
    </ul>
  );
}
