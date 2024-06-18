import { mobile, waitTime, animationWaitTime, clickWaitTime, isDesktopMenuOnMobile } from '../support/utils.js'

mobile.devices.forEach((device) => {
  mobile.orientationList.forEach((orientation) => {
    describe('mobile audit: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
      })

      it('navbar expanded audit', () => {
        if (!isDesktopMenuOnMobile(device, orientation)) {
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
})
