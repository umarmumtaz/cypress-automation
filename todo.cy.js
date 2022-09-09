/// <reference types ="Cypress" />
describe("test the contact us via the uni using udemy course mocha class 10",()=>{
  it('Login Successfully with correct credentials',()=>{
  cy.visit("https://www.jobtrain.co.uk/ybscareers/client/")
  cy.wait(2000)
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
console.log('My test is finished')   //it shows in the console
cy.log('cypress is used')   //it shows in the cypress logs
})

it('Test Case for call back data', ()=>{
  cy.visit("https://www.jobtrain.co.uk/ybscareers/client/")
  cy.wait(5000).then(() => {
    console.log('this is my test for call abck function for non cypress asynco')
    
    fetch('https://www.jobtrain.co.uk/JT7GateWay/api/')  //to get response of the api in console
    .then((res) => res.json ())
    .then ((data) => {
      console.log(data)
    })
    
it.only('Test the name of the element', () =>{
  cy.visit("https://www.jobtrain.co.uk/ybscareers/client/")
  cy.wait(5000)
  cy.get('#inputEmail').type('ybs')
  cy.get('#inputEmail').should('have.attr','name', 'userName')
  cy.get('#inputPassword').type('21ClientL@')
  cy.get('#inputPassword').should('have.attr','name', 'password')
  cy.get('.form-signin > .btn').click()
  cy.url().should('include', 'Home')


})




    })

  })













});

