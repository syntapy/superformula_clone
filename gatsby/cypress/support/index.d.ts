/// <reference types="cypress" />

// cypress/support/index.d.ts
declare namespace Cypress {
  interface Chainable {
    pa11yWithDefaultSettings(overwriteOptions?: Pa11yOptions): void;
  }
}
