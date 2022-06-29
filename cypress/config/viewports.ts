type Viewport = {
  name: string;
  size: Cypress.ViewportPreset;
};

const mobileViewport: Viewport = {
  name: "phone",
  size: "iphone-xr",
};

const desktopViewport: Viewport = {
  name: "desktop",
  size: "macbook-15",
};

const getViewports = () => {
  if (Cypress.env("VIEWPORTS") === "mobile") return [mobileViewport];
  if (Cypress.env("VIEWPORTS") === "desktop") return [desktopViewport];
  else return [mobileViewport, desktopViewport];
};

export const viewports: Viewport[] = getViewports();
