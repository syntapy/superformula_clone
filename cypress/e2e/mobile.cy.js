import { mobile, waitTime } from '../support/utils.js'

mobile.devices.forEach((device) => {
  mobile.orientationList.forEach((orientation) => {
    describe('mobile tests: ' + device + ' (' + orientation + ')', () => {
      beforeEach(() => {
        cy.viewport(device, orientation)
        cy.visit('/')
        cy.wait(waitTime)
      })

      xit('page', () => {
        const sections = cy.get('section')
        sections.should('have.length', 6)

        // get 2nd section
        const div = sections.eq(1).get('div')
        const img_top = div.eq(0).get('img').eq(0)
        const img_bottom = div.eq(0).get('img').eq(1)

        // without this sometimes they don't show up in the screenshot
        img_top.should('be.visible')
        img_bottom.should('be.visible')

        // wait for rendering to finish
        cy.wait(waitTime)

        //cy.compareSnapshot('page_mobile_' + device + '_' + orientation)
      })

      xit('navbar non-expanded', () => {
        const header = cy.get('header')
        const nav = cy.get('header nav')
        nav.should('be.visible')
        const svg = header.get('svg')
        if (orientation === 'landscape' && ['iphone-x', 'iphone-xr', 'samsung-note9', 'samsung-s10'].includes(device)) {
          svg.should('not.be.visible')
        } else {
          svg.should('be.visible')
        }
      })
    })
  })
})
