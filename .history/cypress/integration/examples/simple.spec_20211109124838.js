describe('Browser Actionas', () => {
    it('should load correct url', () => {
        cy.visit('http://example.com/', { timeout: 10000 })
    })
})