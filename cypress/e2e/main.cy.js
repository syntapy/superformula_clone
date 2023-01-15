Cypress.on('viewport:changed', (newViewport) => {
    Cypress.config('viewportWidth', newViewport.viewportWidth)
    Cypress.config('viewportHeight', newViewport.viewportHeight)
})

const devices = ['iphone-6', 'ipad-2', 'iphone-x', 'samsung-s10', 'desktop']
const sizes = devices.map(device => {
    if (device === 'desktop') {
        return [1920, 1080]
    }
    return Cypress._.find(Cypress.config('viewportWidths'), { name: device })
})

function setSize(size) {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
}

describe("ViewportChanges", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("viewport_changes", () => {
        const oldViewportWidth = Cypress.config('viewportWidth')
        const oldViewportHeight = Cypress.config('viewportHeight')
        cy.viewport(1920, 1080)
        Cypress.config('viewportWidth', 1920)
        Cypress.config('viewportHeight', 1080)
        let viewportWidth = Cypress.config('viewportWidth')
        let viewportHeight = Cypress.config('viewportHeight')
        cy.wrap(viewportWidth).should('eq', 1920)
        cy.wrap(viewportHeight).should('eq', 1080)
        cy.viewport(oldViewportWidth, oldViewportHeight)
        Cypress.config('viewportWidth', oldViewportWidth)
        Cypress.config('viewportHeight', oldViewportHeight)
        viewportWidth = Cypress.config('viewportWidth')
        viewportHeight = Cypress.config('viewportHeight')
        cy.wrap(viewportWidth).should('eq', oldViewportWidth)
        cy.wrap(viewportHeight).should('eq', oldViewportHeight)
    })
})

describe("navbar", () => {
    beforeEach(() => {
        //setSize(size)
        //cy.task("log", 'beforeEach on size: ' + size)
        //cy.viewport(1920, 1080)
        //cy.task("log", Cypress._.find(Cypress.config('viewportWidths'), { name: 'iphone-6' }))
        cy.task("log", Cypress.config('viewportWidths'))
        Cypress.config('viewportWidth', 1920)
        Cypress.config('viewportHeight', 1080)
        cy.eyesOpen({
            appName: "superformula mobile",
            testName: Cypress.currentTest.title,
        })
    })

    it("whole page", () => {
        cy.task("log", 'whole page on size')
        const viewportWidth = Cypress.config().viewportWidth
        cy.task("log", "\tviewport width: " + viewportWidth)
        cy.visit("/")
        cy.eyesCheckWindow({
            tag: Cypress.currentTest.title,
            target: 'window',
            fully: true
        })
    })

    it("navbar", () => {
        cy.task("log", 'navbar on size')
        //setSize(size)
        //cy.viewport(768, 400)
        cy.visit("/")
        const navbar = cy.get("nav")
        navbar.should("be.visible")

        const viewportWidth = Cypress.config().viewportWidth
        cy.task("log", "\tviewport width: " + viewportWidth)
        if (viewportWidth < 678) {
            const svg = navbar.queryAll("button")
            //cy.task("log", "svg: " + svg)
        }
    })

    afterEach(() => {
        //cy.task("log", 'afterEach on size: ' + size)
        cy.task("log", '\n')
        cy.eyesClose()
    })
})
