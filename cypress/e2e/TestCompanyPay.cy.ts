/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Company from "../PageClass/Companyobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companypayPage = new Company();

describe('Company pay', () => {

    it.only('Disable and Remove an entity', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Pay');
            companypayPage.disableworkdaybtn();   
            companypayPage.removesnowflake(); 
        });

    });

});