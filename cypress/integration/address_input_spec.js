/// <reference types="Cypress" />
describe("Checks that address can be entered", () => {
  it("Enteres address", () => {
    //  Goes to page and enters address
    cy.visit("localhost:3000");
    cy.get("#dawa-autocomplete-input")
      .as("input")
      .type("kjærmarken 103");
    cy.wait(100);

    // Auto complete works
    cy.get(".dawa-autocomplete-suggestions li:first").contains("Kjærmarken");
    cy.get("@input").type("{enter}");

    // Sees loading screen
    cy.get(".water-comes-app-explanation", { timeout: 20000 })
      .get("header")
      .first()
      .as("risk");

    // Check risk can expand
    cy.get("@risk")
      .get(".description")
      .should("be.empty");
    cy.get("@risk").click();

    cy.get("@risk")
      .get(".description")
      .first()
      .should("not.be.empty");

    cy.get(".map-image");
  });
});
