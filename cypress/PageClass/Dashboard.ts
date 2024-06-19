class Dashboard {
    private entitybtn: string = "button[id='menu-button-:r7:']";  
    private entitytypecompany: string = "button[value='company']";
    private entitytypegeograpgy: string = "button[value='geography']";
    private entitytyperole: string = "button[value='role']";
    private searchentitytxt: string = ".css-18euh9p";
    private selectfromoption: string = "#react-select-2-option-0";
    private comanymenubtn: string = ".css-1myhmg2";
    private companycompositionbtn: string = "a[data-testid='subnav-Company-Compositions']";
    private companytransitionbtn: string ="a[data-testid='subnav-Company-Transitions']";
    private companyjobpostingsbtn: string = "a[data-testid='subnav-Company-Job Postings']";
    private profilebtn: string =".css-18191l7";
    private logoutbtn: string = 'button[id="menu-list-:r1:-menuitem-:r3:"]';

    
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

    clickcompanymenubutton() : void {
        cy.wait(2000);
        cy.get(this.comanymenubtn).click();
    }

    clickcompositionmenubutton() : void {
        cy.get(this.companycompositionbtn).click();
        cy.wait(4000);
    }

    clicktransitionmenubutton(): void {
        cy.get(this.companytransitionbtn).click();
        cy.wait(4000);

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

    clickcompanyjobposting(): void {
        cy.get(this.companyjobpostingsbtn).click();
        cy.wait(4000);
    }



}
export default Dashboard;
