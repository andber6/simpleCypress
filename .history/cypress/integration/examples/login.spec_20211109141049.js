describe('Working with inputs', () => {
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some Invalid Name')
    })

    it('should fill password', () => {
        // TODO
    })

    it('should submit the form', () => {
        // TODO
    })

    it('should display error message', () => {
        // TODO
    })
})