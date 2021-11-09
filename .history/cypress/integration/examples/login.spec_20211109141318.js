describe('Working with inputs', () => {
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some Invalid Name')
    })

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some invalid password')
    })

    it('should submit the form', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })
})