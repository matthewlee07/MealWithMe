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
    cy.server();
    const search = "columbus";
    // https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies#article
    cy.route(`http://localhost:3000/?location=${search}`, [
      {
        name: "A restaurant from Columbus",
        image_url: "https://placekitten.com/600/600"
      }
    ]);
    cy.visit("http://localhost:3001");

    cy.get(".search-location").type(search);
    cy.get("form").submit();

    // https://docs.cypress.io/api/commands/contains.html#Syntax
    cy.contains(`The best restaurants in ${search}`);
    cy.contains("A restaurant from Columbus");
  });
});
