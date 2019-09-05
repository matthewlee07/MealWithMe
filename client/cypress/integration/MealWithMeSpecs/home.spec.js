describe("Home page", () => {
  it("returns some restaurants", () => {
    cy.visit("http://localhost:3001");
    cy.get(".restaurant-container")
      .its("length")
      .should("greaterThan", 1);
  });
  it("returns queried location and category", () => {
    const search = {
      location: "NYC",
      category: "Italian"
    };
    cy.server();
    cy.route(
      `http://localhost:3000/?location=${search.location}&category=${search.category}`,
      [
        {
          name: `${search.location} ${search.category}`,
          image_url: "https://placekitten.com/600/600"
        }
      ]
    );
    cy.visit("http://localhost:3001");
    cy.get(".location").type(`${search.location}`);
    cy.get(".category-picker")
      .type(`${search.category}`)
      .type("{enter}");
    cy.contains(`Popular Restaurants in ${search.location}`);
    // cy.contains(`${search.category.toLocaleLowerCase()} in ${search.location}`);
  });
  it("has required elements", () => {
    cy.visit("http://localhost:3001");
    cy.get(".name");
    cy.get(".rating");
    cy.get(".review_count");
    cy.get(".price");
    cy.get(".category");
    cy.get(".address");
  });
  it("applies price filter", () => {
    const search = {
      location: "NYC",
      price: "$$$"
    };
    cy.visit("http://localhost:3001");
    cy.get(".location").type(`${search.location}`);
    cy.get(".price-3").click();
  });
});
