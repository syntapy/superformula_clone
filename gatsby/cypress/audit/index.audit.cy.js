import { audit_devices, waitTime, animationWaitTime, clickWaitTime, isDesktopMenuOnMobile } from '../support/utils.js'

const orientation = 'portrait'
audit_devices.devices.forEach((device) => {
  describe('audit: ' + device + ' (' + orientation + ')', () => {
    beforeEach(() => {
      cy.viewport(device, orientation)
      cy.visit('/')
      cy.wait(waitTime)
    })

    if (device === 'iphone-6') {
      it('navbar expanded audit', () => {
        cy.get('[data-cy="chilidog-svg"]').click().wait(animationWaitTime).then(() => {
          cy.lighthouseWithDefaultSettings()
        })
      })
    }

    it('page audit', () => {
      cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
        cy.lighthouseWithDefaultSettings()
      })
    })
  })
})
