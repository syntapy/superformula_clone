// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

export const count = [0]

export const increment = () => {
  count[0]++
}

Cypress.on('viewport:changed', (newValue) => {
  Cypress.config('viewportWidth', newValue.viewportWidth)
  Cypress.config('viewportHeight', newValue.viewportHeight)
  increment()
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
