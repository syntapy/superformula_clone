// @ts-ignore
import { log } from "console"
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
        const width = Cypress.config('viewportWidth')
        const height = Cypress.config('viewportHeight')
        cy.get('[data-cy="chilidog-svg"]').click().wait(animationWaitTime).then(() => {
          cy.lighthouseWithDefaultSettings(
            undefined,
            {
              formFactor: "mobile",
              screenEmulation: {
                width: width,
                height: height,
                mobile: true,
              }
            },
          )
        })
      })
    }

    it('page audit', () => {
      const width = Cypress.config('viewportWidth')
      const height = Cypress.config('viewportHeight')
      let mobile = true
      let formFactor = "mobile"
      if (/desktop-*/.test(device)) {
        mobile = false
        formFactor = "desktop"
      }
      cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
        cy.lighthouseWithDefaultSettings(
          undefined,
          {
            formFactor: formFactor,
            screenEmulation: {
              width: width,
              height: height,
              mobile: mobile,
            }
          },
        )
      })
    })
  })
})
