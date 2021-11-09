describe('Device Tests', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
})