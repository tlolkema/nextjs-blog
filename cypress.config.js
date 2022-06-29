const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://nextjs-blog-tlolkema.vercel.app",
    video: false,
  },
});
