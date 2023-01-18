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

const count = [0]

const increment = () => {
  count[0]++
}

Cypress.Commands.add('incrementViewportChanged', increment)


const getCount = () => {
  cy.task('log', 'count: ' + count[0])
}

function setViewport (width, height) {
  //cy.viewport(width, height)
  Cypress.config('viewportWidth', width)
  Cypress.config('viewportHeight', height)
}

Cypress.Commands.add('setViewport', setViewport)

Cypress.Commands.add('getViewportChangedCount', getCount)

Cypress.on('viewport:changed', (newValue) => {
  Cypress.config('viewportWidth', newValue.viewportWidth)
  Cypress.config('viewportHeight', newValue.viewportHeight)
  increment()
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
