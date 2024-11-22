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

      it('services subnav', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          let fname = 'subnav_services_' + device + '_' + orientation
          cy.get('[data-cy="services-nav-item"] > div').invoke('attr', 'style', 'visibility: visible;')
          cy.get('[data-cy="services-nav-item"] > div > ul').invoke('attr', 'style', 'visibility: visible; opacity: 1;')
          cy.wait(200)
          cy.compareSnapshot(fname)
        })
      })

      it('about subnav', () => {
        cy.get('#toast-close-button').click().wait(clickWaitTime).then(() => {
          let fname = 'subnav_about_' + device + '_' + orientation
          cy.get('[data-cy="about-nav-item"] > div').invoke('attr', 'style', 'visibility: visible;')
          cy.get('[data-cy="about-nav-item"] > div > ul').invoke('attr', 'style', 'visibility: visible; opacity: 1;')
          cy.wait(200)
          cy.compareSnapshot(fname)
        })
      })
    })
  })
})
