import deviceArray from '../support/viewport.js'

deviceArray.forEach((size) => {
  describe('viewport: ' + size.model, () => {
    before(() => {
      cy.viewport(size.width, size.height)
    })

    beforeEach(() => {
      cy.visit('/')
    })

    it('getter', () => {
      cy.getViewport().then(viewport => {
        cy.task('log', 'viewportWidth: ' + viewport.width)
      })
    })
  })
})
