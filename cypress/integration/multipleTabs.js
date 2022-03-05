/// <reference types="cypress" />

describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');
    });

    it.only("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    });
})
