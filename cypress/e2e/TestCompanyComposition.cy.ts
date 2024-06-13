/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Company from "../PageClass/Companyobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companycompositionPage = new Company();

describe('Company composition', () => {

    it('Disable and Remove an entity', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clickcompositionmenubutton();  
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
            dashboardPage.clickcompositionmenubutton();  
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
            dashboardPage.clickcompositionmenubutton();  
            companycompositionPage.clickcompanyindustrybtn();
            companycompositionPage.clickarrow();  
            companycompositionPage.check00NATION();
            companycompositionPage.clickupdatebutton(); 
        });

        Cypress.config('isLoggedIn', true);
    });

    it('Verify more than 6 company validation message', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clickcompositionmenubutton();  
            companycompositionPage.clickcompanyindustrybtn();
            companycompositionPage.clickarrow();  
            companycompositionPage.check00NATION();
            companycompositionPage.clickupdatebutton(); 
            companycompositionPage.clickcompanyindustrybtn();
            companycompositionPage.setfiltersearchtxt('Wipro Ltd.');
            companycompositionPage.checkwipro();
            companycompositionPage.clickupdatebutton();
            cy.contains('You can only choose up to 6 Companies/Industries at a time!').should('be.visible');

        });

        Cypress.config('isLoggedIn', true);

    });

    it('Add Gender filter for companies', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clickcompositionmenubutton();  
            companycompositionPage.clickcompanyindustrybtn();
            companycompositionPage.clickarrow();  
            companycompositionPage.check00NATION();
            companycompositionPage.clickupdatebutton(); 
            companycompositionPage.clickfilter();
            companycompositionPage.clickgender();
            companycompositionPage.selectgender();
            companycompositionPage.clickaddfilter();            

        });

        Cypress.config('isLoggedIn', true);

    });

    it('Overtime template and change the role to sales and seniority to manage', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clickcompositionmenubutton();  
            companycompositionPage.clickovertime();
            companycompositionPage.clickroledropdown();
            companycompositionPage.selectsalefromdropdown();   
            companycompositionPage.clicksenioritydropdown();
            companycompositionPage.selectmanagerfromdropdown();      

        });

    });

});
