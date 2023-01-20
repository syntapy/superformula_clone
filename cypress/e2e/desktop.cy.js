import { desktop } from '../support/viewport.js'

desktop.devices.forEach((device) => {
  desktop.orientationList.forEach((orientation) => {
    describe('desktop tests: ' + device + ' (' + orientation + ')', () => {
      before(() => {
        cy.viewport(device, orientation)
      })

      beforeEach(() => {
        cy.visit('/')
      })

      it('top screenshot', () => {
        cy.getViewport().then(viewport => {
          cy.task('log', 'viewport: ' + viewport.width + 'x' + viewport.height)
        })
        cy.screenshot()
      })
    })
  })
})
