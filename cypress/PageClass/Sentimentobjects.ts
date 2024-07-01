import '../support/commands';
class Sentiment {
    
    private filterbtn: string = 'button[data-testid="filter-menu-btn"]';
    private addbtn: string = 'button[data-testid="filter-popover-submit"]';
    private sentimentfilteroptions = '.css-c1nl7p div[role="button"]';
    private k7optionscard = '.css-1azyyrj';
    private k150rolesoptions = 'div[data-testid="accordion-submenu-role_k150"]';
    private k1500rolesoptions = 'div[data-testid="accordion-submenu-role_k1500"]';
    private scrollselector = '.tree_fixedSizedTree__F6X6u';
    private textselector = 'p.css-1u9ov0a';
    private seniorityoptions: string = '.css-1azyyrj div[role="group"]';
    private region: string = 'div .css-1azyyrj';
    private country: string = 'div[data-testid="accordion-submenu-country"]';
    private area: string = 'div[data-testid="accordion-submenu-metro_area"]';
    private datetextbox = '.css-18euh9p';
    private dateoptions = '.css-1a0p5sj div[role="button"]';
    private startdate = 'input[data-testid="custom-range-start-date"]';
    private enddate = 'input[data-testid="custom-range-end-date"]'

    selectdate( options: string ): void {
        cy.get(this.datetextbox).eq(1).click();

        cy.get(this.dateoptions).each(($element, index, $list) => {
            const dateoptions = $element.text()
            if (dateoptions.includes(options))
                {
                    cy.wrap($element).click();
                    if (options === "Custom")
                        {
                            cy.get(this.startdate).clear().type('2023-02');
                            cy.get(this.enddate).clear().type('2023-06');
                        }
                }
        })

        
    }

    selectarea(text: string ): void {
        cy.ensureVisible(this.area, text, this.textselector, this.scrollselector );

    }

    clickarrowbesidecountryoptions(text:string): void {
        cy.get(this.country).contains(text).parent().parent().parent().parent().next('svg').click();
    }
    
    selectcountry(text: string ): void {
        cy.ensureVisible(this.country, text, this.textselector, this.scrollselector );

    }

    clickarrowbesideregionoptions(text:string): void {
        cy.get(this.region).contains(text).parent().parent().parent().parent().next('svg').click();
    }

    selectregion(text: string ): void{
        cy.ensureVisible(this.region, text, this.textselector, this.scrollselector );
    }

    selectseniority(seniority: string ): void {
        const seniorities= ['Entry Level', 'Junior', 'Associate', 'Manager', 'Director', 'Executive', 'Senior Executive'];
        const index = seniorities.indexOf(seniority);
        if (index !== -1) {
            cy.get(this.seniorityoptions).eq(index).click();
        }
    }

    selectroleK1500options (text: string): void {

        cy.ensureVisible(this.k1500rolesoptions, text, this.textselector, this.scrollselector);

    }

    selectroleK150options (text: string): void {

        cy.ensureVisible(this.k150rolesoptions, text, this.textselector, this.scrollselector);

    }

    selectroleK7options( text: string): void {

        cy.ensureVisible(this.k7optionscard, text, this.textselector, this.scrollselector);
         
    }
    clickarrowbesideK7options(text:string): void {
        cy.get(this.k7optionscard).contains(text).parent().parent().parent().parent().next('svg').click();
    }
    clickarrowbesidek150options(text:string): void {
        cy.get(this.k150rolesoptions).contains(text).parent().parent().parent().parent().next('svg').click();
    }

    selectsentimentfilteroption(filter: string): void {
        const filters = [
            'Role','Seniority', 'Geography', 'Date Range'
        ];
        const index = filters.indexOf(filter);
        if (index !== -1) {
            cy.get(this.sentimentfilteroptions).eq(index).click();
        }
    }

    clickfilter(): void{
        cy.get(this.filterbtn).click();
    }

    clickadd(): void {
        cy.get(this.addbtn).click({force: true});
    }
}
export default Sentiment;