/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.gt", 5);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
    });
    it.only("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.internal').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 10)
        cy.get('@productThumbnail')
          //  .find('.productcart')
            .invoke('attr', 'width')
            .should('include', '56')
    });
});
