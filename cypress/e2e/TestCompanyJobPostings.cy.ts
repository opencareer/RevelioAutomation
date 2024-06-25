/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Company from "../PageClass/Companyobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companyjobpostingsPage = new Company();

describe('Company Jobpostings', () => {

    it('Disable, select and Remove an entity', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company', 'Job Postings');
            companyjobpostingsPage.clickmongoDB();
            companyjobpostingsPage.disableworkdaybtn();   
            companyjobpostingsPage.removesnowflake(); 
            
            
        });
      
    });

    it('Add entity via search filter and dropdown', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company', 'Job Postings');
            companyjobpostingsPage.clickmongoDB();
            companyjobpostingsPage.disableworkdaybtn();   
            companyjobpostingsPage.removesnowflake(); 
            companyjobpostingsPage.clickcompanyindustrybtn();
            companyjobpostingsPage.setfiltersearchtxt('Wipro Ltd.');
            companyjobpostingsPage.checkwipro();
            companyjobpostingsPage.clickupdatebutton();
            companyjobpostingsPage.clickcompanyindustrybtn();
            companyjobpostingsPage.clickarrow();  
            companyjobpostingsPage.check00NATION();
            companyjobpostingsPage.clickupdatebutton(); 
            
            
        });
      
    });

    it('Verify more than 6 company validation message', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company', 'Job Postings');
            companyjobpostingsPage.clickmongoDB();
            companyjobpostingsPage.clickcompanyindustrybtn();
            companyjobpostingsPage.setfiltersearchtxt('Wipro Ltd.');
            companyjobpostingsPage.checkwipro();
            companyjobpostingsPage.clickupdatebutton();
            companyjobpostingsPage.clickcompanyindustrybtn();
            companyjobpostingsPage.clickarrow();  
            companyjobpostingsPage.check00NATION();
            companyjobpostingsPage.clickupdatebutton(); 
            cy.contains('You can only choose up to 6 Companies/Industries at a time!').should('be.visible'); 
            
        });
      
    });

    it('Verify At least 1 entity must be active validation', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company', 'Job Postings');
            companyjobpostingsPage.disableworkdaybtn();   
            companyjobpostingsPage.removesnowflake(); 
            cy.contains('At least 1 entity must be active').should('be.visible');
            
            
        });
      
    });

    it('Add Role and Seniority filter', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.navigateTo('Company', 'Job Postings'); 
            companyjobpostingsPage.clickmongoDB();
            companyjobpostingsPage.clickfileter();
            companyjobpostingsPage.clickrole();
            companyjobpostingsPage.clickengineering();
            companyjobpostingsPage.clickupdatebutton();
            companyjobpostingsPage.clickfileter();
            companyjobpostingsPage.clickseniority();
            companyjobpostingsPage.clickentrylevel();
            companyjobpostingsPage.clickupdatebutton();
 
                 
        });
      
    });

});