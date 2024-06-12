const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    html: true,
    json: true,
    inline: true
  },
  retries: {
    runMode: 1,
    },
  projectId: "417dui",
  e2e: {
    baseUrl: "https://www.reveliolabs.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    
    },
    specPattern: 'cypress/e2e/*ts'
  },
});
