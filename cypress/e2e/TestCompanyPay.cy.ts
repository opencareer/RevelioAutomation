/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Pay from "../PageClass/Payobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companyPayPage = new Pay;

describe('Company pay', () => {

    it('Search for Role results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Pay');
            companyPayPage.clickfilter();
            companyPayPage.selectsentimentfilteroption('Role');
            companyPayPage.selectroleK7options('Admin');
            companyPayPage.clickarrowbesideK7options('Admin');
            companyPayPage.selectroleK150options('Legal');
            companyPayPage.clickarrowbesidek150options('Legal');
            companyPayPage.selectroleK1500options('Legal Counsel');
            companyPayPage.clickadd();


        });
    });

    it('Search for Seniority results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Pay');
            companyPayPage.clickfilter();
            companyPayPage.selectsentimentfilteroption('Seniority');
            companyPayPage.selectseniority('Director');
            companyPayPage.clickadd();


        });
    });

    it('Search for Geography results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Pay');
            companyPayPage.clickfilter();
            companyPayPage.selectsentimentfilteroption('Geography');
            companyPayPage.selectregion('Southern Asia');
            companyPayPage.clickarrowbesideregionoptions('Southern Asia');
            companyPayPage.selectcountry('India');
            companyPayPage.clickarrowbesidecountryoptions('India');
            companyPayPage.selectarea('Lucknow');
            companyPayPage.clickadd();


        });
    });

    it.only('Search for Date range results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Pay');
            companyPayPage.clickfilter();
            companyPayPage.selectsentimentfilteroption('Date Range');
            companyPayPage.selectdate('Custom');
            companyPayPage.clickadd();
            
        });
    });
    
    


});