import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      return: {
        port: 8000,
        close: () => {},
      }
    },
    indexHtmlFile: "./cypress/support/compnent-index.html",
    supportFile: "./cypress/support/component.ts",
    specPattern: "./src/components/__tests__/**/*.spec.tsx",
  }
});
