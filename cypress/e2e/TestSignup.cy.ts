/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import '../support/commands';

const loginPage = new Login();

describe('Signup', () => {

    it('Signup with already registered user', () => {
        loginPage.clickfreeTrial();
        cy.fixture('Credentials').then((registerUserdata) => {
            loginPage.setUserEmail(registerUserdata.Email);
            loginPage.setname(registerUserdata.Name);
            loginPage.setPassword(registerUserdata.Password);
            loginPage.clickSignup();
            cy.contains('Failed to create user.').should('be.visible');
            Cypress.config('isLoggedIn', false);
        });
    });

    it.only('Blank Signup', () => {
        loginPage.clickfreeTrial();
        loginPage.clickSignup();
        cy.contains('Email is required').should('be.visible');
        cy.contains('Name is required').should('be.visible');
        cy.contains('Password is required').should('be.visible');
        Cypress.config('isLoggedIn', false);
    });

});

