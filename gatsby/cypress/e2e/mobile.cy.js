import { mobile, waitTime, clickWaitTime, animationWaitTime, errorThreshold, isDesktopMenuOnMobile } from '../support/utils.js'

mobile.devices.forEach((device) => {
  mobile.orientationList.forEach((orientation) => {
    describe('mobile tests: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
      })

      it('navbar non-expanded', () => {
        const svg = cy.get('[data-cy="chilidog-svg"]')
        if (isDesktopMenuOnMobile(device, orientation)) {
          svg.should('not.be.visible')
        } else {
          svg.should('be.visible')
        }
      })

      it('navbar expanded', () => {
        if (!isDesktopMenuOnMobile(device, orientation)) {
          cy.get('[data-cy="chilidog-svg"]').click().wait(animationWaitTime).then(() => {
            cy.get('[data-cy="home-nav-mobile"]').should('be.visible')
            cy.get('[data-cy="services-nav-mobile"]').should('be.visible')
            cy.get('[data-cy="work-nav-mobile"]').should('be.visible')
            cy.get('[data-cy="articles-nav-mobile"]').should('be.visible')
            cy.get('[data-cy="contact-nav-mobile"]').should('be.visible')
            cy.get('[data-cy="careers-nav-mobile"]').should('be.visible')

            cy.compareSnapshot('navbar_expanded_' + device + '_' + orientation, {
              errorThreshold: errorThreshold
            })
          })
        }
      })

      it('page screenshot', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          cy.compareSnapshot('page_mobile_' + device + '_' + orientation, {
            errorThreshold: errorThreshold
          })
        })
      })
    })
  })
})
