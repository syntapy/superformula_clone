import deviceArray from '../support/viewport.js'

deviceArray.forEach((size) => {
  describe('example to-do app', () => {
    before(() => {
      cy.viewport(size.width, size.height)
    })

    beforeEach(() => {
      cy.visit('/')
    })

    it('top screenshot', () => {
      //cy.screenshot()
    })
  })
})
