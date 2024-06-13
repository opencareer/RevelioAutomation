class Company {

    private companyindusrtybtn: string = "button span.rl-add-entity-button";
    private workdaybtn: string  = "button[id='1116644'] span p" ;   
    private snowflake: string = "button[id='919809'] div svg";
    private mongoDB: string = "button[id='1005273'] span ";
    private filtersearchtxt: string = "input[placeholder='Search...']"; 
    private checkentity: string = ".css-7pf6at .css-2ndois";
    private updatebtn: string = "button[data-testid='filter-popover-submit']";
    private rightarrow: string = "div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(2";
    private checktechnology: string = '00NATION AS';
    private filterbtn: string = 'button[data-testid="filter-menu-btn"]';
    private genderbtn: string = ".css-c1nl7p div[role='button']";
    private selectgenderbtn: string = 'div[style="height: 48px; width: 100%;"] div[data-testid="selection-tree-data-node"]';
    private addfilterbtn: string= 'button[data-testid="filter-popover-submit"]';
    private overtimebtn: string= 'div[role="tablist"] button';
    private roledropdown: string ='[data-testid="plot-sub-filter-sub_role-trigger"]';
    private senioritydropdown: string = '[data-testid="plot-sub-filter-sub_seniority-trigger"]';
    private selectsale: string ='div[style="height: 168px; width: 100%;"] div[data-testid="selection-tree-data-node"]'
    private cardupdatebtn: string = '.chakra-button__group.css-krrfx7 button[data-testid="filter-popover-tree-submit"]'

    disableworkdaybtn(): void {
        cy.get(this.workdaybtn).click();
    }

    removesnowflake(): void {
        cy.get(this.snowflake).click();
    }

    clickcompanyindustrybtn(): void {
        cy.get(this.companyindusrtybtn).click();
    }

    setfiltersearchtxt( entity: string ): void {
        const typeOptions = { delay: 300 };
        cy.get(this.filtersearchtxt).type(entity, typeOptions);

    }

    checkwipro(): void {
        cy.wait(2000);
        cy.get(this.checkentity).click();
    }

    clickupdatebutton(): void {
        cy.get(this.updatebtn).click();
    }
    
    clickarrow(): void {
        cy.get(this.rightarrow).click();
    }

    check00NATION() : void {
        cy.wait(2000);
        cy.contains(this.checktechnology).click();
    }

    clickfilter(): void {
        cy.get(this.filterbtn).click();
    }

    clickgender(): void {
        cy.get(this.genderbtn).eq(3).click();
    }

    selectgender(): void{
        cy.get(this.selectgenderbtn).first().click();
    }

    clickaddfilter(): void {
        cy.get(this.addfilterbtn).click();
    }

    clickovertime(): void {
        
        cy.get(this.overtimebtn).eq(1).click();
        cy.wait(2000);
    }
    clickroledropdown(): void {
        cy.get(this.roledropdown).click();
    }

    selectsalefromdropdown(): void {
        cy.get(this.selectsale).eq(0).click();
        cy.get(this.selectsale).eq(1).click();
        cy.get(this.cardupdatebtn).click();
    }

    clicksenioritydropdown(): void {
        cy.get(this.senioritydropdown).click();
    }
    selectmanagerfromdropdown(): void {
        cy.get(this.selectsale).eq(1).click();
        cy.get(this.selectsale).eq(3).click();
        cy.get(this.cardupdatebtn).click();
    }

    clickmongoDB(): void {
        cy.get(this.mongoDB).click();
    }
}
export default Company;