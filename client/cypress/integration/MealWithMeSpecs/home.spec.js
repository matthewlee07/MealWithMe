/// <reference types="Cypress" />

// https://docs.cypress.io/api/commands/get.html#Syntax

describe("Home page", () => {
  it("returns some search results", () => {
    cy.visit("http://localhost:3001");

    const numberOfRestaurant = cy
      .get(".restaurant")
      .its("length")
      .should("greaterThan", 1);
  });
  it("returns queried city", () => {
    cy.visit("http://localhost:3001");
    cy.get(".search-location").type("columbus, ohio");
    cy.get("form").submit();
    // https://docs.cypress.io/api/commands/contains.html#Syntax
    cy.contains("The best restaurants in columbus, ohio");
  });
});
