import { desktop, waitTime, clickWaitTime, errorThreshold } from '../support/utils.js'

desktop.devices.forEach((device) => {
  desktop.orientationList.forEach((orientation) => {
    describe('desktop tests: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
        cy.get('[data-cy="cy-toast-message"]').click().wait(clickWaitTime)
      })

      it('page', () => {
          const fname = 'page_desktop_' + device + '_' + orientation
          cy.compareSnapshot(fname)
      })
    })
  })
})
