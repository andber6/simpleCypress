describe('Write / Read Data to JSON / Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "André", age: 22 })
    })
})