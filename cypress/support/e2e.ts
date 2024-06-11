// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

declare global {
  namespace Cypress {
    interface Cypress {
      // Define getter and setter for isLoggedIn
      config(key: 'isLoggedIn'): boolean;
      config(key: 'isLoggedIn', value: boolean): void;
    }
  }
}

beforeEach(() => {
    // Launch the application URL
    cy.visit("/");
});

afterEach(() => {
    // Logic to run after each test
    if (Cypress.config('isLoggedIn')) {
        cy.wait(10000);
        cy.get('.css-18191l7').click();
        cy.wait(2000);
        cy.get('button[id="menu-list-:r1:-menuitem-:r3:"]').click();
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(6000);
    }
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('./commands')