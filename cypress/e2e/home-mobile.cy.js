describe("navbar", () => {
    beforeEach(() => {
        cy.viewport("iphone-6");
        cy.eyesOpen({
            appName: "superformula mobile",
            testName: Cypress.currentTest.title,
        })
    })

    it("should have a navbar", () => {
        cy.visit("/")
    })

    afterEach(() => {
        cy.eyesClose()
    }
