/// <reference types="cypress" />
describe('viewport can change', () => {
  it('a', () => {
    cy.visit('/')
    const vpWidth = Cypress.config('viewportWidth')
    const vpHeight = Cypress.config('viewportHeight')
    expect(vpWidth).to.not.be.undefined
    //cy.setViewport(vpWidth+100, vpHeight+100)
    Cypress.config('viewportWidth', vpWidth+100)
    Cypress.config('viewportHeight', vpHeight+100)
    const vpWidthNew = Cypress.config('viewportWidth')
    const vpHeightNew = Cypress.config('viewportHeight')

    expect(vpWidthNew).to.equal(vpWidth+100)
    expect(vpHeightNew).to.equal(vpHeight+100)

    Cypress.config('viewportWidth', vpWidth)
    Cypress.config('viewportHeight', vpHeight)

    const vpWidthOld = Cypress.config('viewportWidth')
    const vpHeightOld = Cypress.config('viewportHeight')
    expect(vpWidthOld).to.equal(vpWidth)
    expect(vpHeightOld).to.equal(vpHeight)
    //cy.task('log', `viewportWidth: ${Cypress.config('viewportWidth')}`)
    //cy.getViewportChangedCount()
  })

  it('b', () => {
    cy.getViewportChangedCount()
    cy.viewport(1280, 720)
    cy.getViewportChangedCount()
    const viewportWidth = Cypress.config('viewportWidth')
    cy.getViewportChangedCount()
    cy.task('log', `viewportWidth: ${viewportWidth}`)
  })
})
