describe('Browser Actionas', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
    })
})