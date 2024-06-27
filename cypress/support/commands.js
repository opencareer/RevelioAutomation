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
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors or all errors
    // by returning false, Cypress will not fail the test
    return false;
  });

// cypress/support/commands.js
Cypress.Commands.add('logger', (filename, message) => {
    // Define the log file path based on the filename parameter
    const logFilePath = `cypress/logs/${filename}.log`;
  
    // Create or append to the log file
    cy.writeFile(logFilePath, `[${new Date().toISOString()}] ${message}\n`, { flag: 'a+' });
  });
  
  import Login from "../PageClass/Login";
  Cypress.Commands.add('login', (username, password) => {
    const loginPage = new Login();
    loginPage.clickLogin();
    loginPage.setUserEmail(username);
    loginPage.setPassword(password);
    loginPage.clickLoginbtn();
    
});


Cypress.Commands.add('ensureVisible', (cardselector, text, textselector, scrollSelector, maxScroll = 600, 
  scrollIncrement = 100, currentScroll = 0) => {
  if (currentScroll > maxScroll) {
      throw new Error(`${text} not found within ${maxScroll} pixels of scrolling.`);
  }

  cy.get(cardselector).find(scrollSelector).then($el => {
      const scrollHeight = $el[0].scrollHeight;
      const clientHeight = $el[0].clientHeight; 

      if (scrollHeight > clientHeight) {
          cy.get(cardselector).find(scrollSelector).scrollTo(0, currentScroll).then(() => {
              cy.wait(2000);
              cy.get(cardselector).each(($element, index, $list) => {
                  const fetchText = $element.find(textselector).text();

                  if (fetchText.includes(text)) {
                      cy.wrap($element).contains(text).click();
                  } else {
                      cy.ensureVisible(cardselector, text, textselector, scrollSelector, maxScroll, scrollIncrement, currentScroll + scrollIncrement);
                  }
              });
          });
      } else {
          cy.wait(2000);
          cy.get(cardselector).each(($element, index, $list) => {
              const fetchText = $element.find(textselector).text();

              if (fetchText.includes(text)) {
                  cy.wrap($element).contains(text).click();
              }
          });
      }
  });
});

