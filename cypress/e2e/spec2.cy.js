describe("sample spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });

  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
    cy.wait(4000);
  });

  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });

  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });
});
