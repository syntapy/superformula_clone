const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer(cypressConfig) {
      return {
        port: 1234,
        close: () => {},
      }
    },
    specPattern: 'src/components/__tests__/**/*.cy.ts',
  }
})
