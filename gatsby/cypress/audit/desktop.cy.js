import { desktop, waitTime, clickWaitTime, errorThreshold } from '../support/utils.js'

desktop.devices.forEach((device) => {
  desktop.orientationList.forEach((orientation) => {
    describe('desktop audit: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
      })

      it('page audit', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          cy.pa11y()
        })
      })
    })
  })
})
