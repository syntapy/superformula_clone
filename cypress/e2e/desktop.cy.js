import { desktop, waitTime } from '../support/utils.js'

desktop.devices.forEach((device) => {
  desktop.orientationList.forEach((orientation) => {
    describe('desktop tests: ' + device + ' (' + orientation + ')', () => {
      before(() => {
        cy.viewport(device, orientation)
      })

      beforeEach(() => {
        cy.visit('/')
      })

      it('page', () => {
        const sections = cy.get('section')
        sections.should('have.length', 6)

        // get 2nd section
        //const div = sections.eq(1).get('div')
        //const img_left = div.eq(0).get('img').eq(0)
        //const img_right = div.eq(0).get('img').eq(1)

        // without this sometimes they don't show up in the screenshot
        //img_left.should('be.visible')
        //img_right.should('be.visible')
        
        // wait for rendering to finish
        //cy.wait(waitTime)

        //const fname = 'page_desktop_' + device + '_' + orientation
        //cy.compareSnapshot(fname)
      })
    })
  })
})
