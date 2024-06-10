/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();

describe('Dashboard Search Engine', () => {

    it('Company search', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {
            cy.fixture('TestData').then((data) => {
                dashboardPage.selectentities(data.Entitycompany);
                dashboardPage.setsearchinput(data.Companyone, data.Companytwo, data.Companythree);    
            });
        });

        Cypress.config('isLoggedIn', true);
    });

    it('Geography search', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {
            cy.fixture('TestData').then((data) => {
                dashboardPage.selectentities(data.Entitygeography);
                dashboardPage.setsearchinput(data.Geographyone, data.Geographytwo, data.Geographythree);    
            });
        });

        Cypress.config('isLoggedIn', true);
    });

    it('Role search', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {
            cy.fixture('TestData').then((data) => {
                dashboardPage.selectentities(data.Entityrole);
                dashboardPage.setsearchinput(data.Roleone, data.Roletwo, data.Rolethree);    
            });
        });

        Cypress.config('isLoggedIn', true);
    });

});
