/// <reference types="Cypress" />
describe("Checks that bbr_id in url is used", () => {
  it("Enteres address", () => {
    //  Goes to page and enters address
    cy.visit("localhost:3000?unadr_bbrid=40eb1f85-9c53-4581-e044-0003ba298018");
    cy.get("address", { timeout: 40000 }).contains("Kjærmarken");
  });
});
