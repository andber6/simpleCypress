describe('Working with inputs', () => {
    it('should visit webpage', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Some Invalid Name', { delay: 50 })
    })

    it('should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some invalid password', { delay: 50 })
    })

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('should submit the form', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })
})