/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Sentiment from "../PageClass/Sentimentobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companysentimentPage = new Sentiment();

describe('Company sentiments', () => {

    it('Search for Role results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Sentiment');
            companysentimentPage.clickfilter();
            companysentimentPage.selectsentimentfilteroption('Role');
            companysentimentPage.selectroleK7options('Admin');
            companysentimentPage.clickarrowbesideK7options('Admin');
            companysentimentPage.selectroleK150options('Legal');
            companysentimentPage.clickarrowbesidek150options('Legal');
            companysentimentPage.selectroleK1500options('Legal Counsel');
            companysentimentPage.clickadd();


        });
    });

    it('Search for Seniority results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Sentiment');
            companysentimentPage.clickfilter();
            companysentimentPage.selectsentimentfilteroption('Seniority');
            companysentimentPage.selectseniority('Director');
            companysentimentPage.clickadd();


        });
    });

    it('Search for Geography results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Sentiment');
            companysentimentPage.clickfilter();
            companysentimentPage.selectsentimentfilteroption('Geography');
            companysentimentPage.selectregion('Southern Asia');
            companysentimentPage.clickarrowbesideregionoptions('Southern Asia');
            companysentimentPage.selectcountry('India');
            companysentimentPage.clickarrowbesidecountryoptions('India');
            companysentimentPage.selectarea('Lucknow');
            companysentimentPage.clickadd();


        });
    });

    it('Search for Date range results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company','Sentiment');
            companysentimentPage.clickfilter();
            companysentimentPage.selectsentimentfilteroption('Date Range');
            companysentimentPage.selectdate('Custom');
            companysentimentPage.clickadd();
            
        });
    });
    
    


});