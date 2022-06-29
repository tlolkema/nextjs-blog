const mobileViewport = {
  name: "phone",
  size: "iphone-xr",
};

const desktopViewport = {
  name: "desktop",
  size: "macbook-15",
};

export const getViewports = () => {
  if (Cypress.env("VIEWPORTS") === "mobile") return [mobileViewport];
  if (Cypress.env("VIEWPORTS") === "desktop") return [desktopViewport];
  else return [mobileViewport, desktopViewport];
};
