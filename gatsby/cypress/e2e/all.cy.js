import { mobile, desktop, waitTime, errorThreshold } from '../support/utils.js'

function runTests(device, orientation) {
  describe('all screens tests: ' + device + ' (' + orientation + ')', () => {
    beforeEach(() => {
      cy.viewport(device, orientation)
      cy.visit('/')
      cy.wait(waitTime)
    })

    it('has 6 sections', () => {
      const sections = cy.get('section')
      sections.should('have.length', 6)
    })

    it('insight img visibility', () => {
      const img_top = cy.get('[data-cy="insight-img-a"]')
      const img_bottom = cy.get('[data-cy="insight-img-b"]')

      // without this sometimes they don't show up in the screenshot
      img_top.should('be.visible')
      img_bottom.should('be.visible')
    })
  })
}

mobile.devices.forEach((device) => {
  mobile.orientationList.forEach((orientation) => {
    runTests(device, orientation)
  })
})

desktop.devices.forEach((device) => {
  desktop.orientationList.forEach((orientation) => {
    runTests(device, orientation)
  })
})
