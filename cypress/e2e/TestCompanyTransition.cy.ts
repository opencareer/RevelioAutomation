/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Company from "../PageClass/Companyobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard();
const companytransitionPage = new Company();

describe('Company transition', () => {

    it('Select and Remove an entity', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clickmongoDB();
            companytransitionPage.removesnowflake();
            
        });
      
    });

    it('Add entity via search filter', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clickcompanyindustrybtn();
            companytransitionPage.setfiltersearchtxt('Wipro Ltd.');
            companytransitionPage.checkwipro();
            companytransitionPage.clickupdatebutton();
            
        });

    });

    it('Add entity via dropdown', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clickcompanyindustrybtn();
            companytransitionPage.clickarrow();  
            companytransitionPage.check00NATION();
            companytransitionPage.clickupdatebutton(); 
        });

    });

    it('Verify more than 6 company validation message', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();   
            companytransitionPage.clickcompanyindustrybtn();
            companytransitionPage.clickarrow();  
            companytransitionPage.check00NATION();
            companytransitionPage.clickupdatebutton(); 
            companytransitionPage.clickcompanyindustrybtn();
            companytransitionPage.setfiltersearchtxt('Wipro Ltd.');
            companytransitionPage.checkwipro();
            companytransitionPage.clickupdatebutton();
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
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clickmongoDB();
            companytransitionPage.clickmongoDB();
            cy.contains('At least 1 entity must be active').should('be.visible');
            
        });
      
    });

    it('Add Gender and Education filter', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clickfilter();
            companytransitionPage.clicktransitiongender();
            companytransitionPage.selectgender();
            companytransitionPage.clickaddfilter(); 
            companytransitionPage.clickfilter();
            companytransitionPage.clicktransitioneducation();
            companytransitionPage.selecteducation();
            companytransitionPage.clickaddfilter(); 
            
            
        });
      
    });

    it('Change transition card pagination to max and navigate to Outflow', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clicktransitionpaginatio();
            companytransitionPage.selecttransitionpagination();
            companytransitionPage.clickoutflowbtn();
            
            
        });
      
    });

    it('Navigate to outflow and change the pagination change company add one filter', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickcompanymenubutton();
            dashboardPage.clicktransitionmenubutton();  
            companytransitionPage.clickoutflowbtn();
            companytransitionPage.clicktransitionpaginatio();
            companytransitionPage.selecttransitionpagination();
            companytransitionPage.clickmongoDB();
            companytransitionPage.clickfilter();
            companytransitionPage.clicktransitioneducation();
            companytransitionPage.selecteducation();
            companytransitionPage.clickaddfilter(); 

            
            
        });
      
    });

    

});
