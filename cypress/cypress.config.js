const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    timeout: 5000,
    baseUrl: 'https://demo.applitools.com',
    specPattern: 'cypress/e2e/**/*.ts',
    pageLoadTimeout: 60000,
    width: 1920,
    height: 1080
  },
  files: [
      "./cypress/cypress/support/common_helper.ts"
  ]
})


