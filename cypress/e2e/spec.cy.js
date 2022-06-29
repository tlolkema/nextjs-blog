describe("sample spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Skills").click();
    cy.wait(2000);
  });
});
