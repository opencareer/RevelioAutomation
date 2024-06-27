/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Screener from "../PageClass/Screenerobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companyscreenerPage = new Screener();

describe('Company screener', () => {

    it('Search for headcount results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Headcount');
            companyscreenerPage.setrangeandvalue('is less than', 1000);
            companyscreenerPage.clickadd();

        });
    });

    it('Search for Hiring Rate results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Hiring Rate');
            companyscreenerPage.setrangeandvalue('is between', [0 , 40]);
            companyscreenerPage.clickadd();

        });
    });

    it('Search for attrition Rate results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Attrition Rate');
            companyscreenerPage.setrangeandvalue('is less than', 40);
            companyscreenerPage.clickadd();

        });
    });

    it('Search for growth Rate results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Growth Rate');
            companyscreenerPage.setrangeandvalue('is greater than', 40);
            companyscreenerPage.clickadd();

        });
    });

    it('Search for average salary results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Average Salary');
            companyscreenerPage.setrangeandvalue('is between', [ 1000 , 1500 ]);
            companyscreenerPage.clickadd();

        });
    });

    it('Search for industry results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Industry');
            companyscreenerPage.selectIndustry('Commercial Services');
            companyscreenerPage.clickadd();

        });
    });

    it('Search for multiple filter results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Screener');
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Industry');
            companyscreenerPage.selectIndustry('Commercial Services');
            companyscreenerPage.clickadd();
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Growth Rate');
            companyscreenerPage.setrangeandvalue('is greater than', 40);
            companyscreenerPage.clickadd();
            companyscreenerPage.clickfilter();
            companyscreenerPage.selectscreenerfilteroption('Average Salary');
            companyscreenerPage.setrangeandvalue('is between', [ 0 , 1000 ]);
            companyscreenerPage.clickadd();

        });
    });
});