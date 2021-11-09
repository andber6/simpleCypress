describe('Browser Actionas', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Website Loaded!')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on poetry category', () => {
        cy.get('a').contains('Poetry').click()
    })
    it('should click on Olio book detail', () => {
        cy.get('a').contains('Olio').click()
    })

    it('should have correct price tag', () => {
        cy.get('.price_color').contains('£23.88')
    })
})