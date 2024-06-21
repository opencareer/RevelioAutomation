/// <reference types="Cypress" />
import Login from "../PageClass/Login";
import Dashboard from "../PageClass/Dashboard";
import Talentdiscovery from "../PageClass/Talentdiscoveryobjects";
import '../support/commands';

const loginPage = new Login();
const dashboardPage = new Dashboard(); 
const talentdiscoveryPage = new Talentdiscovery();



describe('Individual Talent Discovery', () => {

    it('Search for company results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Company');  
            talentdiscoveryPage.setcompany();
            talentdiscoveryPage.selectamazoncompany();
            talentdiscoveryPage.clickaddbutton();

            
        });
      
    });

    it('Search for education results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Education');  
            talentdiscoveryPage.selecteducation('High School');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for ethnicity results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Ethnicity');  
            talentdiscoveryPage.selectethnicity('Black');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for flight risk results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Flight Risk');  
            talentdiscoveryPage.selectflightrisk('Medium');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for gender results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Gender');  
            talentdiscoveryPage.selectgender('Female');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for name results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Name');  
            talentdiscoveryPage.setname('Isar Gangwani');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for prestige results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Prestige');  
            talentdiscoveryPage.selectprestige('Medium');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for remote suitability results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Remote Suitability');  
            talentdiscoveryPage.selectremotesuitability('High');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

    it('Search for role results', () => {
        cy.fixture('Credentials').then((registerUserdata) => {
            cy.login(registerUserdata.Email, registerUserdata.Password);
            Cypress.config('isLoggedIn', true);
        });

        loginPage.clickDashboard();
        cy.url().should('include', '/dashboard').then(() => {    
            dashboardPage.clickindividual();
            dashboardPage.clicktalentdiscoverybtn();
            talentdiscoveryPage.clickfilter(); 
            talentdiscoveryPage.selectfilteroption('Role');  
            talentdiscoveryPage.selectroles('Engineer');
            talentdiscoveryPage.clickaddbutton();
            
        });
      
    });

});