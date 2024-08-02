/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand()

//Cypress.on('viewport:changed', (viewport) => {
//  Cypress.config('viewportWidth', viewport.width)
//  Cypress.config('viewportHeight', viewport.height)
//})

Cypress.Commands.add('getViewport', () => {
  return cy.window().then(win => {
    return {width: win.innerWidth, height: win.innerHeight};
  })
})

/// <reference types="cypress" />
/// <reference types="@appsfactory/cypress-audit/packages/lighthouse/commands" />
/// <reference types="@appsfactory/cypress-audit/packages/pa11y/commands" />

import "@appsfactory/cypress-audit/packages/pa11y/commands"
import "@appsfactory/cypress-audit/packages/lighthouse/commands"

Cypress.Commands.add(
  "lighthouseWithDefaultSettings",
  (
    overwriteTresholds: Cypress.LighthouseThresholds = {},
    overwriteFlags: Cypress.LighthouseFlags = {},
    overwriteConfig: Cypress.LighthouseConfig = {}
  ) => {
    cy.lighthouse(
      // Thresholds
      {
        // Add more lighthouse options here for more tests
        accessibility: 100,
        // In case you want to overwrite the default thresholds, you can do it via the overwriteTreshholds parameter
        ...overwriteTresholds,
      },
      // Lighthouse "Flags"
      {
        // Add more lighthouse flags here for more tests
        formFactor: "desktop",

        screenEmulation: {
          width: 1350,
          height: 940,
          mobile: false,
        },
        throttling: {
          rttMs: 40,
          throughputKbps: 11024,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        // In case you want to overwrite the default flags, you can do it via the overwriteFlags parameter
        ...overwriteFlags,
      },
      // Lighthouse "Config"
      {
        // Add more lighthouse config here for more tests
        extends: "lighthouse:default",

        settings: {
          output: "html",
        },
        // In case you want to overwrite the default config, you can do it via the overwriteConfig parameter
        ...overwriteConfig,
      }
    );
  }
);
