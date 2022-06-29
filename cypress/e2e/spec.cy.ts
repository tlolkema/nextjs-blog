import { viewports } from "../config/viewports";

viewports.forEach((viewport) => {
  describe(`${viewport.name} page`, () => {
    beforeEach(() => {
      cy.viewport(viewport.size);
    });

    it("passes", () => {
      cy.visit("/");
      cy.contains("Skills").click();
      cy.wait(2000);
    });
  });
});
