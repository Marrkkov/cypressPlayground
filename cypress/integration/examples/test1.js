/// <reference types='Cypress' />
//cypress - Spec
describe('Random Test Suite', function() {
    
    it('Test1', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length', 4);
    });

});
