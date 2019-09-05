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
  it("returns correct price", () => {
    const search = {
      location: "NYC",
      price: "$$$"
    };
    cy.server();
    cy.route(
      `http://localhost:3000/?location=${search.location}&price=${search.price}`,
      [
        {
          name: `Lux Restaurant`,
          image_url: "https://placekitten.com/600/600"
        }
      ]
    );
    cy.visit("http://localhost:3001");
    cy.get(".location").type(`${search.location}`);
    cy.contains(search.price).click();
    cy.contains(`Lux Restaurant`);
  });
  it("starts interest list", () => {
    cy.server();
    cy.route(`http://localhost:3000/*`, [
      {
        name: "A not interesting restaurant",
        image_url: "https://placekitten.com/1600/1600"
      }
    ]);
    cy.visit("http://localhost:3001");

    cy.get(".interest-form .number-of-people").type("5");
    cy.get(".interest-form .date").type("2030-01-01");
    cy.get(".interest-form .create-interest").click();
  });
});
