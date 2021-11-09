describe('Working with inputs', () => {
    it('should visit webpage', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some Invalid Name', { delay: 50 })
    })

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some invalid password', { delay: 50 })
    })

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('should submit the form', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })
})