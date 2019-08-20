/// <reference types="Cypress" />

describe("Home page", () => {
  it("returns some search results", () => {
    cy.visit("http://localhost:3001");

    const numberOfRestaurant = cy
      .get(".restaurant")
      .its("length")
      .should("greaterThan", 1);
  });
});
