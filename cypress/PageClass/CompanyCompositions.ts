class Companycomposition {

    private companyindusrtybtn: string = "button span.rl-add-entity-button";
    private workdaybtn: string  = "button[id='1116644'] span p" ;   
    private snowflake: string = "button[id='919809'] div svg";
    private filtersearchtxt: string = "input[placeholder='Search...']"; 
    private checkentity: string = "Wipro Ltd.";
    private updatebtn: string = "button[data-testid='filter-popover-submit']";
    private rightarrow: string = "div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(2";
    private checktechnology: string = '00NATION AS';
    private filterbtn: string = 'button[data-testid="filter-menu-btn"]';
    private genderbtn: string = ".css-c1nl7p div[role='button']";
    private selectgenderbtn: string = 'div[style="height: 48px; width: 100%;"] div[data-testid="selection-tree-data-node"]';
    private addfilterbtn: string= 'button[data-testid="filter-popover-submit"]';

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
        cy.contains(this.checkentity).click();
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
}
export default Companycomposition;