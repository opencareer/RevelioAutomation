/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import '../support/commands';

const loginPage = new Login();

describe('User Log', () => {

    it('Log in with valid credentials', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            loginPage.clickDashboard();
            cy.url().should('include', '/dashboard').then(() => {
                Cypress.config('isLoggedIn', true);
            });
        });
    });

    it('Log in with invalid credentials', () => {
        cy.fixture('Credentials').then((unregisterUserdata) => {
            cy.login(unregisterUserdata.InvalidEmail, unregisterUserdata.InvalidPassword);
            cy.contains('Failed to authenticate').should('be.visible');
            Cypress.config('isLoggedIn', false);
        });
    });

});
