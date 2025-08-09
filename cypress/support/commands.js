// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Log in komutu
Cypress.Commands.add('login',(email,password)  => {
  cy.visit("https://www.edu.goit.global/account/login");
  cy.get('#user_email').type(email);
  cy.get('#user_password').type(password);
  cy.get('.next-1jphuq5').click();

})

//Log Out komutu
Cypress.Commands.add('logout', () => {
  cy.get('#open-navigation-menu-mobile').click(); 
  cy.get(':nth-child(9) > .next-bve2vl').click();
  cy.get('.next-1jphuq5').should('have.text','Log in').and('be.visible').and ('exist');
});



