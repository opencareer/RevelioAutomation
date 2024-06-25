class Company {

    private companyindusrtybtn: string = "button span.rl-add-entity-button";
    private workdaybtn: string  = "button[id='1116644'] span p" ;   
    private snowflake: string = "button[id='919809'] div svg";
    private mongoDB: string = "button[id='1005273'] span ";
    private filtersearchtxt: string = "input[placeholder='Search...']"; 
    private checkentity: string = 'div[style="height: 48px; width: 100%;"] div[data-testid="selection-tree-data-node"]';
    private updatebtn: string = "button[data-testid='filter-popover-submit']";
    private rightarrow: string = "div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(2";
    private checktechnology: string = '00NATION AS';
    private filterbtn: string = 'button[data-testid="filter-menu-btn"]';
    private genderbtn: string = ".css-c1nl7p div[role='button']";
    private selectgenderbtn: string = 'div[style="height: 48px; width: 100%;"] div[data-testid="selection-tree-data-node"]';
    private selecteducations: string = 'div[style="height: 144px; width: 100%;"] div[data-testid="selection-tree-data-node"]';
    private addfilterbtn: string= 'button[data-testid="filter-popover-submit"]';
    private filterbtnjobpostings: string ='button[data-testid="filter-menu-btn"]';
    private overtimebtn: string= 'div[role="tablist"] button';
    private roledropdown: string ='[data-testid="plot-sub-filter-sub_role-trigger"]';
    private senioritydropdown: string = '[data-testid="plot-sub-filter-sub_seniority-trigger"]';
    private selectsale: string ='div[style="height: 168px; width: 100%;"] div[data-testid="selection-tree-data-node"]';
    private cardupdatebtn: string = '.chakra-button__group.css-krrfx7 button[data-testid="filter-popover-tree-submit"]';
    private transitionpaginationbtn: string = 'button[data-testid="plot-sub-filter-n_items_sankey-trigger"]';
    private selectpagination: string ='.css-1p4cgms div';
    private outflowbtn: string = 'div[role="tablist"] button';
    private jobpostingsfilteroptions: string = 'div[class=" css-c1nl7p"] div[style="opacity: 1; cursor: pointer;"]';
    private selectengineerrole: string ='.css-1e8tmsz';
    private entrylevelseniority: string = '.css-1u9ov0a';
    

    clickentrylevel(): void {
        cy.get(this.entrylevelseniority).eq(0).click();
    }
    clickfileter(): void {
        cy.get(this.filterbtnjobpostings).click();
    
    }

    clickengineering(): void {
        cy.get(this.selectengineerrole).eq(1).click();
    }

    clickrole(): void {
        cy.get(this.jobpostingsfilteroptions).eq(1).click();
    }
    
    clickseniority(): void {
        cy.get(this.jobpostingsfilteroptions).eq(3).click();
 
    }


    clickoutflowbtn(): void {
        cy.get(this.outflowbtn).eq(1).click();
    }

    selecttransitionpagination(): void{
        cy.get(this.selectpagination).eq(4).click();
    }


    clicktransitionpaginatio(): void{
        cy.get(this.transitionpaginationbtn).click();
    }


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
        cy.get(this.checkentity).eq(1).click();
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

    clickcompositiongender(): void {
        cy.get(this.genderbtn).eq(3).click();
    }

    clicktransitiongender(): void {
        cy.get(this.genderbtn).eq(2).click();
    }

    clicktransitioneducation(): void {
        cy.get(this.genderbtn).eq(0).click();
    }

    selectgender(): void{
        cy.get(this.selectgenderbtn).first().click();
    }

    selecteducation(): void{
        cy.get(this.selecteducations).first().click();
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