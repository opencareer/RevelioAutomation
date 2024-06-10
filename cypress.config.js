const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: "https://www.reveliolabs.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
    specPattern: 'cypress/e2e/*.ts'
  },
});
