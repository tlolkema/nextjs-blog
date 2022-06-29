describe("sample spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });

  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });

  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
    cy.wait(5000);
  });

  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });
});
