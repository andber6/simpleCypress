class BasePage {
    static loadHomePage() {
        cy.visit('http://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.visit(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}


describe('Abstraction with Classes', () => {
    it('should scroll down and up on the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})