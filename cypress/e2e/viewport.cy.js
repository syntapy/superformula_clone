describe('viewport can change', () => {
  it('a', () => {
    cy.visit('/')
    cy.task('log', 'HELOO')
    const vpWidth = Cypress.config('viewportWidth')
    const vpHeight = Cypress.config('viewportHeight')
    expect(vpWidth).to.not.be.undefined
    cy.viewport(vpWidth+100, vpHeight+100)
    cy.task('log', `viewportWidth: ${Cypress.config('viewportWidth')}`)
    const vpWidthNew = Cypress.config('viewportWidth')
    const vpHeightNew = Cypress.config('viewportHeight')

    expect(vpWidthNew).to.equal(vpWidth+100)
    expect(vpHeightNew).to.equal(vpHeight+100)
    cy.viewport(vpWidth, vpHeight)
    cy.task('log', `viewportWidth: ${Cypress.config('viewportWidth')}`)
  })
})
