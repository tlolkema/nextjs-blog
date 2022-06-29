describe("sample spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
  });

  it("fails", () => {
    cy.visit();
  });
});
