const sizes = ['iphone-6', 'ipad-2', 'iphone-x', 'samsung-s10', [1920, 1080]]

function setSize(size) {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
}

sizes.forEach((size) => {
    describe("navbar - " + size, () => {
        beforeEach(() => {
            setSize(size)
            cy.task("log", 'beforeEach on size: ' + size)
            cy.eyesOpen({
                appName: "superformula mobile",
                testName: Cypress.currentTest.title,
            })
        })

        it("whole page", () => {
            cy.task("log", 'whole page on size: ' + size)
            cy.visit("/")
            cy.eyesCheckWindow({
                tag: Cypress.currentTest.title,
                target: 'window',
                fully: true
            })
        })

        it("navbar", () => {
            cy.task("log", 'navbar on size: ' + size)
            setSize(size)
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
            cy.task("log", 'afterEach on size: ' + size)
            cy.task("log", '\n')
            cy.eyesClose()
        })
    })
})
