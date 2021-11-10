describe('Write / Read Data to JSON / Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "André", age: 22 })
    })

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello World')
    })

    it('should read and verify data from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 22)
    })

    it('should read and verify data from the text file', () => {
        cy.readFile('log.txt').should('eq', 'Hello World')
    })
})