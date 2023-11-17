const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    timeout: 5000,
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/e2e/**/*.ts',
    pageLoadTimeout: 6000
  },
  files: [
      "./cypress/cypress/support/common_helper.ts"
  ]
})


