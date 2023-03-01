import { mobile, waitTime, errorThreshold } from '../support/utils.js'

mobile.devices.forEach((device) => {
  mobile.orientationList.forEach((orientation) => {
    describe('mobile tests: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
      })

      it('navbar non-expanded', () => {
        const header = cy.get('header')
        const nav = cy.get('header nav')
        nav.should('be.visible')
        const svg = header.get('svg')
        if (orientation === 'landscape' && ['iphone-6+', 'iphone-x', 'iphone-xr', 'samsung-note9', 'samsung-s10'].includes(device)) {
          svg.should('not.be.visible')
        } else {
          svg.should('be.visible')
        }
      })

      it('page screenshot', () => {
        cy.compareSnapshot('page_mobile_' + device + '_' + orientation, {
          errorThreshold: errorThreshold
        })
      })
    })
  })
})
