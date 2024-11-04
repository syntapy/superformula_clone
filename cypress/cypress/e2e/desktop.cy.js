import { desktop, waitTime, clickWaitTime, errorThreshold } from '../support/utils.js'

desktop.devices.forEach((device) => {
  desktop.orientationList.forEach((orientation) => {
    describe('desktop tests: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
      })

      it('page', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          const fname = 'page_desktop_' + device + '_' + orientation
          cy.compareSnapshot(fname)
        })
      })
    })
  })
})
