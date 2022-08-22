
/// <reference types ="Cypress" />
describe("test the contact us via the uni using udemy course mocha class 10",()=>{
it.only("1-Login Successfully with correct credentials",()=>{
cy.visit("https://www.jobtrain.co.uk/ybscareers/client/")
cy.wait(10000)
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
});




it("2-Login Failed if both email and password are incorrect",()=>{
//skip multiple - test cases consecutively because site would be locked after 3 attempts
cy.visit("https://test.jobtrain.co.uk/beta/client/")
cy.get('#inputEmail').type('jtadmin_new12')
cy.get('#inputPassword').type('21ClientT@21')
cy.get('.form-signin > .btn').click();
cy.contains('Invalid Username or Password')
});
it("3-Login Failed if user login with blank fields",()=>{
//skip multiple test cases because site would be locked after 3 attempts
cy.visit("https://test.jobtrain.co.uk/beta/client/")
cy.reload()
//here i use xpath,  add command index.js suppot and run command as well
cy.xpath('/html/body/app-root/app-login/div/form/button').click()
//cy.get('button[class="btn btn-lg btn-primary btn-block btn_login"]').click()  //creating xpath using renorax
cy.contains('Invalid Username or Password')
});
//new tab handle later
// it("4-Forgot Password",() =>{
// cy.visit("https://test.jobtrain.co.uk/beta/client/")
// cy.get('.f_password').click()
// // ///cy.contains(' Reset Password ')
// window.close()
//  });
it("5-Login Failed-if email/passowrd is incorrect",()=>{
cy.visit("https://test.jobtrain.co.uk/beta/client/")
cy.get("input[id='inputEmail']").type('email')
cy.get('button[class="btn btn-lg btn-primary btn-block btn_login"]').click()  //creating xpath using renorax chrome extension
//cy.contains('Invalid Username or Password')
//below using assertion style which is assertion style
cy.get('#MainContent_diverror').should('have.text', 'Invalid Username or Password')
});
//to check assertion passed or not using chai jquery
it("6-Login successfully with chai assertion attribute", ()=>{
cy.visit("https://test.jobtrain.co.uk/beta/client/")
cy.get('#inputEmail').type('jtadmin_new')
cy.get('.text-muted').contains('© 1998 - 2021 Jobtrain Ltd. All rights reserved.')
cy.get('#inputPassword').type('21ClientT@')
cy.get('input').invoke('attr','placeholder').should('contain','Username','Password' )
cy.get('.form-signin > .btn').click();
});
it("7-Homne Page Redirection after Login", ()=>{
cy.visit("https://test.jobtrain.co.uk/beta/client/")
cy.get('#inputEmail').type('jtadmin_new')
cy.get('#inputPassword').type('21ClientT@')
cy.get('.form-signin > .btn').click()
cy.get('h1').should('contain','Hi JT Admin')
console.log("its non cypress commmand");
cy.log("This one is the Cypress command")

});
it("8-Verify the Dashboard table headings", ()=>{
    cy.visit("https://test.jobtrain.co.uk/beta/client/")
    cy.get('#inputEmail').type('jtadmin_new')
    cy.get('#inputPassword').type('21ClientT@')
    cy.get('.form-signin > .btn').click()
    cy.wait(4000)
    cy.get('.card-header').contains('Time to... ')
    cy.get('.card-header').contains('Recruitment funnel')
    cy.get('.card-header').contains('Diversity Report')
    cy.get('.card-header').contains('Candidate Source Report')
    cy.get('.card-header').contains('Bottle Neck Report')
    //cy.get('.card-7 > .card-header > .pull-left').contains('Recruitment Calendar') using chain commnad
    cy.get('.card-7').contains('Recruitment Calendar')
    cy.get('.custom_control_check').contains('Booked Interviews')
   
})
});