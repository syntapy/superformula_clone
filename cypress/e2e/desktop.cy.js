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

      it('header', () => {
        cy.compareSnapshot('a_desktop_' + device + '_' + orientation)
      })
    })
  })
})
