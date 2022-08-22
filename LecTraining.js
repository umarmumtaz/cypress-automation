/// <reference types ="Cypress" />
describe("test the contact us via the uni using udemy course mocha class 10",()=>{
    it.only("1-Login Successfully with correct credentials",()=>{
    cy.visit("https://www.jobtrain.co.uk/ybscareers/client/")
    cy.wait(1000)
    //cy.document().should('have.property', 'charset').and('eq','UTF-8') //validate the active doc have specific property
    //cy.title().should('include', 'Jobtrain')
     cy.get('.text-muted').contains('© 1998 - 2022 Jobtrain Ltd. All rights reserved.')
    cy.get('#inputEmail').type('ybs')
    cy.get('#inputEmail').should('have.attr','name', 'userName')
    cy.get('#inputPassword').type('21ClientL@')
    cy.get('#inputPassword').should('have.attr','name', 'password')
    cy.get('.form-signin > .btn').click()
    cy.url().should('include', 'Home')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8') //verify the active page or document with this query
   // cy.title().should('eq','Jobtrain')    //same command
    cy.title().should('include','Jobtrain')
    cy.url().should('include', 'Home')
    cy.get('.card-header').contains('Time to...').click() //using chain command to use short code
   cy.get('app-timetoapprovereport > .card > .card-header > .d-inline-block > #RightMenu > .menu-icon > #cap_menu').click()
   cy.get('.timeToApproveDropdown').find('.monthly').click()  //we can also add index that is eq(0) before


})
});