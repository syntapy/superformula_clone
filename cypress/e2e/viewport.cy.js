describe('viewport', () => {
  it('getter', () => {
    cy.viewport(780, 500)
    cy.visit('/')
    cy.getViewport().then(viewport => {
      expect(viewport.width).to.eq(780)
      expect(viewport.height).to.eq(500)
    })
  })
})
