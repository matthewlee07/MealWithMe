import React from "react";
import { shallow, mount, render } from "enzyme";

import Search from "./Search";

// Enzyme installation https://airbnb.io/enzyme/docs/installation/index.html
// https://airbnb.io/enzyme/docs/guides/jest.html
describe("it works", () => {
  it("restaurant", () => {
    shallow(<Search />);
  });
});
