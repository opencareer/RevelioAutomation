/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import '../support/commands';

const loginPage = new Login();

describe('Signup', () => {

    it('New user Signup', () => {
        loginPage.clickfreeTrial();
        cy.fixture('Credentials').then((unregisterUserdata) => {
            loginPage.setUserEmail(unregisterUserdata.Email);
            loginPage.clickSignup();
            loginPage.setname(unregisterUserdata.Name);
            loginPage.setcompanyname(unregisterUserdata.CompanyName);
            loginPage.setjobtitle(unregisterUserdata.JobTitle);
            loginPage.clickcontinue();
            cy.contains('Great, someone from our team will reach out shortly!').should('be.visible');
            Cypress.config('isLoggedIn', false);
        });
    });

    it('Blank Signup', () => {
        loginPage.clickfreeTrial();
        loginPage.clickSignup();
        cy.contains('Email is required').should('be.visible');
        Cypress.config('isLoggedIn', false);
    });

});

