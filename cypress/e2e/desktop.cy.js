/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.viewport(1280, 720)
    cy.visit('/')
  })

  it('top screenshot', () => {
  })

  /*it('make sure fails on navbar style change', () => {
    // Change css on navbar
    // Get first child of header
    const nav = cy.get('header > div')
    nav.should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.compareSnapshot('navbar')

    // Change height of navbar
    nav.invoke('css', 'height', '4rem')
    //cy.compareSnapshot('navbar')
  })*/

  /*it('2nd from top screenshot', () => {
    cy.scrollTo(720)
    cy.compareSnapshot('2nd from top')
  })

  it('3rd from top screenshot', () => {
    cy.scrollTo(720*2)
    cy.compareSnapshot('3rd from top')
  })*/
})
