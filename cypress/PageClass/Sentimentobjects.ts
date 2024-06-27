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
    private seniorityoptions: string = 'div[style="height: 168px; width: 100%;"] div[role="group"]';

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
        cy.get(this.addbtn).click();
    }
}
export default Sentiment;