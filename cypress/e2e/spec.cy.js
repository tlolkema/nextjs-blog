import { getViewports } from "../config/viewports";

const viewports = getViewports();

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
