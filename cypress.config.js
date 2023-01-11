const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  
  e2e: {
    baseUrl: "http://localhost:8000",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
    },
  },
})

require('@applitools/eyes-cypress')(module)
