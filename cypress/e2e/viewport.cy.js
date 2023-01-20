import { mobile } from '../support/viewport.js'

if (false) {
mobile.devices.forEach((device) => {
  mobile.orientationList.forEach((orientation) => {
    describe('viewport: ' + device + ' (' + orientation + ')', () => {
      before(() => {
        cy.viewport(device, orientation)
      })

      beforeEach(() => {
        cy.visit('/')
      })

      it('getter', () => {
        cy.getViewport().then(viewport => {
          cy.task('log', 'viewport: ' + viewport.width + 'x' + viewport.height)
        })
      })
    })
  })
})
}
