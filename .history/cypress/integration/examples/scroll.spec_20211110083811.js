describe('Scroll on the page', () => {
    it('should scroll down and up on the page', () => {
        cy.visit('http://devexpress.github.io/testcafe/example/')
        cy.wait(3000)
        cy.get('#submit-button').scrollIntoView()
    })
})