import { audit_devices, waitTime, animationWaitTime, clickWaitTime, isDesktopMenuOnMobile } from '../support/utils.js'

const orientation = 'portrait'
audit_devices.devices.forEach((device) => {
  describe('audit: ' + device + ' (' + orientation + ')', () => {
    beforeEach(() => {
      cy.viewport(device, orientation)
      cy.visit('/')
      cy.wait(waitTime)
    })

    it('navbar expanded audit', () => {
      if (device === 'iphone-6') {
        cy.get('[data-cy="chilidog-svg"]').click().wait(animationWaitTime).then(() => {
          cy.pa11y()
        })
      }
    })

    it('page screenshot', () => {
      cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
        cy.pa11y()
      })
    })
  })
})
