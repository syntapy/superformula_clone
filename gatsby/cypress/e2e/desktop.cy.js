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

      it('nav items visible', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          cy.get('[data-cy="work-nav-item"]').should('be.visible')
          cy.get('[data-cy="services-nav-item"]').should('be.visible')
          cy.get('[data-cy="articles-nav-item"]').should('be.visible')
          cy.get('[data-cy="about-nav-item"]').should('be.visible')
        })
      })

      it('subnav items hover', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          let fname = 'subnav_desktop_services_' + device + '_' + orientation
          cy.get('[data-cy="services-nav-item"]').then($el => {
              $el.css('hover', 'hover')
          }).wait(300)
          cy.compareSnapshot(fname)

          fname = 'subnav_desktop_about_' + device + '_' + orientation
          cy.get('[data-cy="about-nav-item"]').then($el => {
              $el.css('hover', 'hover')
          }).wait(300)
          cy.compareSnapshot(fname)
        })
      })

    })
  })
})
