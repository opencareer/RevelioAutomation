class Dashboard {
    private entitybtn: string = "button[id='menu-button-:r7:']";  
    private entitytypecompany: string = "button[value='company']";
    private entitytypegeograpgy: string = "button[value='geography']";
    private entitytyperole: string = "button[value='role']";
    private searchentitytxt: string = ".css-18euh9p";
    private selectfromoption: string = "#react-select-2-option-0";
    private comanymenubtn: string = ".css-1myhmg2";
    private geographymenubtn: string = ".css-ijp080";
    private rolemenubtn: string = ".css-tqxi9i";
    private individualmenubtn: string = ".css-1ncwpwx";
    private companycompositionbtn: string = "a[data-testid='subnav-Company-Compositions']";
    private companytransitionbtn: string ="a[data-testid='subnav-Company-Transitions']";
    private companyjobpostingsbtn: string = "a[data-testid='subnav-Company-Job Postings']";
    private companypaybtn: string = "a[data-testid='subnav-Company-Pay']";
    private companysentimentbtn: string = "a[data-testid='subnav-Company-Sentiment']";
    private companyscreener: string = "a[data-testid='subnav-Company-Screener']";
    private talentdiscoverybtn: string = "a[data-testid='subnav-Talent Discovery']";
    private profilebtn: string =".css-18191l7";
    private logoutbtn: string = 'button[id="menu-list-:r1:-menuitem-:r3:"]';

    navigateTo( mainMenuOptions: string , subMenuOptions: string): void {
        
        const mainMenuOptionsMap = {
            'Company': this.comanymenubtn,
            'Geography': this.geographymenubtn,
            'Role': this.rolemenubtn,
            'Individual' :this.individualmenubtn,
        }
        
        const selectedMainMenuOptions = mainMenuOptionsMap[mainMenuOptions];
    
        if (selectedMainMenuOptions) {
            cy.wait(4000);
            cy.get(selectedMainMenuOptions).click();
        } else {
            throw new Error('Invalid Main menu option provided.');
        }
    
        const menuOptionsMap = {
            'Compositions': this.companycompositionbtn,
            'Transitions': this.companytransitionbtn,
            'Job Postings': this.companyjobpostingsbtn,
            'Pay': this.companypaybtn,
            'Sentiment': this.companysentimentbtn,
            'Screener': this.companyscreener,
            'Talent Discovery': this.talentdiscoverybtn
        };
    
        const selectedSubMenuOptions = menuOptionsMap[subMenuOptions];
    
        if (selectedSubMenuOptions) {
            cy.get(selectedSubMenuOptions).click();
            cy.wait(4000);
        } else {
            throw new Error('Invalid Sub menu option provided.');
        }
    }


    selectentities(entityname: string): void {
        cy.wait(5000);

        cy.get(this.entitybtn).click();
        if (entityname === 'Company') {
            cy.get(this.entitytypecompany).click();
        } else if (entityname === 'Geography') {
            cy.get(this.entitytypegeograpgy).click();
        } else if (entityname === 'Role') {
            cy.get(this.entitytyperole).click();
        }
    }
    
    setsearchinput(one: string, two: string, three: string): void {
        const typeOptions = { delay: 300 };
        cy.wait(2000);
        cy.get(this.searchentitytxt).click().type(one,typeOptions);
        cy.get(this.selectfromoption).click();
        cy.get(this.searchentitytxt).click().type(two, typeOptions);
        cy.get(this.selectfromoption).click();
        cy.get(this.searchentitytxt).click().type(three, typeOptions);
        cy.get(this.selectfromoption).click();
        cy.contains('Continue').click();

    }
   
    Logout(): void {
        cy.wait(10000);
        cy.get(this.profilebtn).click();
        cy.wait(2000);
        cy.get(this.logoutbtn).click();
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(6000);
    }

}
export default Dashboard;
