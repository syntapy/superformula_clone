const cyView = require('cy-view')
const deviceArray = [
  {
    model: 'macbook-11',
    width: 1366,
    height: 768,
  },
  {
    model: 'macbook-13',
    width: 1440,
    height: 900,
  },
  {
    model: 'macbook-16',
    width: 1536,
    height: 960,
  },
]

const urls = ['http://localhost:8000/']

const pageTests = cyView(deviceArray)

pageTests(urls, () => {
  describe('viewport', () => {
    it('getter', () => {
      cy.viewport(780, 500)
      cy.visit('/')
      cy.getViewport().then(viewport => {
        expect(viewport.width).to.eq(780)
        expect(viewport.height).to.eq(500)
      })
      cy.task('log', 'viewport getter')
    })
  })
})
