import { mobile } from '../support/viewport.js'

//mobile.devices.forEach((device) => {
const device = 'iphone-3';
const orientationList = ['portrait']
  orientationList.forEach((orientation) => {
    describe('mobile tests: ' + device + ' (' + orientation + ')', () => {
      before(() => {
        cy.viewport(device, orientation)
        //cy.task('log', 'viewport: ' + device + ' (' + orientation + ')')
      })

      beforeEach(() => {
        cy.visit('/')
        cy.wait(300)
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
        cy.wait(300)

        cy.compareSnapshot('page_mobile_' + device + '_' + orientation)
      })

      it('navbar non-expanded', () => {
        cy.get('nav').should('be.visible')
        cy.screenshot()
        //const nav = cy.get('header nav')
        //nav.should('be.visible')
        //const svg = nav.get('svg')
        //cy.screenshot()
        //const height = nav.invoke('height')
        //cy.then(() => {
        //  cy.log(height)
        //})
        //cy.task('log', nav.invoke('width'))
        //if (orientation === 'portrait') {
        //  //svg.should('be.visible')
        //  //cy.screenshot('test_navbar_non-expanded_' + device + '_' + orientation)
        //  //nav.compareSnapshot('navbar_mobile_nonexpanded_' + device + '_' + orientation)
        //} else {
        //  //cy.screenshot('test_navbar_non-expanded_' + device + '_' + orientation)
        //  //svg.should('not.be.visible')
        //  //nav.compareSnapshot('navbar_mobile_' + device + '_' + orientation)
        //}
      })
    })
  })
//})
