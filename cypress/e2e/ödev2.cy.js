describe('Login olma Testi',function() {
it('birinci hesap',function(){

    cy.login('user888@gmail.com','1234567890');

  /*cy.visit("https://www.edu.goit.global/account/login");
  cy.get('#user_email').type('user888@gmail.com');
  cy.get('#user_password').type('1234567890');
  cy.get('.next-1jphuq5').click();
  */
    cy.wait(1000);
    cy.logout();

})
it('ikinci hesap',function(){

    cy.login('testowyqa@qa.team','QA!automation-1 ');

  /*cy.visit("https://www.edu.goit.global/account/login");
  cy.get('#user_email').type('testowyqa@qa.team');
  cy.get('#user_password').type('QA!automation-1 ');
  cy.get('.next-1jphuq5').click();
  */
    cy.wait(1000);
    cy.logout();

})

})