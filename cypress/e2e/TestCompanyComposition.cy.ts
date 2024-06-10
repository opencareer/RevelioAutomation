/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Companycomposition from "../PageClass/CompanyCompositions";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companycompositionPage = new Companycomposition();

describe('Company composition', () => {

    it('Disable and Remove entity', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companycompositionPage.disableworkdaybtn();   
            companycompositionPage.removesnowflake(); 
        });

        Cypress.config('isLoggedIn', true);
    });

    it('Add entity via search filter', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companycompositionPage.clickcompanyindustrybtn();
            companycompositionPage.setfiltersearchtxt('Wipro Ltd.');
            companycompositionPage.checkwipro();
            companycompositionPage.clickupdatebutton();
        });

        Cypress.config('isLoggedIn', true);
    });

    it('Add entity via dropdown', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companycompositionPage.clickcompanyindustrybtn();
            companycompositionPage.clickarrow();  
            companycompositionPage.check00NATION();
            companycompositionPage.clickupdatebutton(); 
        });

        Cypress.config('isLoggedIn', true);
    });

});